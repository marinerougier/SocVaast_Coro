
# To reset the workspace
rm(list=ls())

# package import ----------------------------------------------------------
library(tidyverse)
library(jsonlite)
library(glue)
library(data.table)
library(magrittr)

# database import ---------------------------------------------------------
database <- fireData::download("https://vaastcoro.firebaseio.com", "/") 

# vaast dataset -----------------------------------------------------------
dataset_vaast_trial <-
    database %>% 
    pluck("vaast_trial_corona_en") %>% 
    map_dfr(~data_frame(
        epoch = .x$timestamp,
        jspsych_id = .x$jspsych_id,
        vaast_first_block = .x$vaast_first_block,
        temp_data = .x$vaast_trial_data)
    ) %>% 
    mutate(timestamp = lubridate::as_datetime(epoch / 1000 ), temp_data = map(temp_data, ~ fromJSON(.x))) %>% 
    unnest()

# email dataset ---------------------------------------------------
dataset_email <- database %>% pluck("email_contacts") %>% map_dfr(as_tibble)

# browser event dataset ---------------------------------------------------
dataset_vaast_browser_event <-
  database %>% 
  pluck("browser_event_corona_en") %>% 
  map_dfr(~data_frame(epoch = .x$timestamp,
                      jspsych_id = .x$jspsych_id,
                      temp_data = .x$event_data,
                      completion = .x$completion),
          .id = "id") %>%
  group_by(id) %>%
  arrange(desc(epoch)) %>% 
  filter(row_number() == 1) %>% 
  ungroup() %>% 
  mutate(timestamp = lubridate::as_datetime(epoch / 1000),
         temp_data = map(temp_data, ~ fromJSON(.x))) %>% 
  unnest()

# connections -------------------------------------------------------------
dataset_vaast_connection <-
  database %>% 
  pluck("VAAST_corona_en") %>%
  map_dfr(~data_frame(data = list(pluck(.x))),
          .id = "id")  %>% 
   unnest()   %>% 
   mutate(data = map(data, ~data_frame(epoch  = .x$timestamp,
                                      status = .x$status) %>% 
                      mutate(timestamp = lubridate::as_datetime(epoch / 1000))
                             )) %>% 
   unnest()

# extra info + questions -------------------------------------------------------------
dataset_extra <- database %>%
    pluck("extra_info_corona_en") %>%
    map_dfr(~ cbind(
        tibble(
            epoch = .x$timestamp,
            jspsych_id = .x$jspsych_id
        ),
        as_tibble(
            .x$extra_data
        )
    )) %>%
    mutate(timestamp = lubridate::as_datetime(epoch / 1000))


# questions info -------------------------------------------------------------
dataset_questions <- database %>%
    pluck("questions_info_corona_en") %>%
    map_dfr(~ cbind(
        tibble(
            epoch = .x$timestamp,
            jspsych_id = .x$jspsych_id
        ),
        as_tibble(
            .x$questions_data
        )
    )) %>%
    mutate(timestamp = lubridate::as_datetime(epoch / 1000))

# Saving as more regular files -----------------------------------------------

save(dataset_vaast_trial, file = "data_VAAST/data_VAAST.RData")
save(dataset_vaast_browser_event, file = "data_VAAST/data_vaast_browser.RData")
save(dataset_vaast_connection, file = "data_VAAST/data_vaast_connection.RData")
save(dataset_extra, file = "data_VAAST/data_extra.RData")
save(dataset_questions, file = "data_VAAST/data_questions.RData")
save(dataset_email, file = "data_VAAST/data_email.RData")


