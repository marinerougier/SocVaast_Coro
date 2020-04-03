
# To reset the workspace
rm(list=ls())

# package import ----------------------------------------------------------
library(tidyverse)
library(jsonlite)
library(glue)
library(data.table)
library(magrittr)

# database import ---------------------------------------------------------
 database <-
  fireData::download("https://vaastcoro.firebaseio.com", "/") 

# vaast dataset -----------------------------------------------------------
dataset_vaast_trial <-
  database %>% 
  pluck("vaast_trial_corona_en") %>% 
  map_dfr(~data_frame(epoch = .x$timestamp,
                      jspsych_id = .x$jspsych_id,
                      vaast_first_block = .x$vaast_first_block,
                      temp_data = .x$vaast_trial_data)) %>% 
  mutate(timestamp = lubridate::as_datetime(epoch / 1000 ),
         temp_data = map(temp_data, ~ fromJSON(.x))) %>% 
  unnest()

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
dataset_extra <-
  database %>%
  pluck("extra_info_corona_en") %>%
  map_dfr(~data_frame(epoch = .x$timestamp,
                      jspsych_id = .x$jspsych_id,
                      vaast_first_block = .x$vaast_first_block,
                      temp_data = .x$extra_data),
          .id = "id") %>%
  mutate(timestamp = lubridate::as_datetime(epoch / 1000),
         temp_data = map(temp_data, ~ fromJSON(.x))) %>%
  unnest() %>%
  subset(jspsych_id != "999")%>%
  drop_na(responses) %>%
  mutate(temp_data = map(responses, ~ fromJSON(.x))) %>%
  group_by(jspsych_id) %>%
  mutate(item_1 = item_1,
         item_2 = item_2,
         item_3 = item_3,
         item_4 = item_4,
         item_5 = item_5,
         item_6 = item_6,
         item_7 = item_7,
         item_8 = item_8,
         item_9 = item_9,
         item_10 = item_10,
         item_11 = item_11,
         item_12 = item_12,
         item_13 = item_13,
         item_14 = item_14,
         item_15 = item_15,
         item_16 = item_16,
         item_17 = item_17,
         country = country,
         zip = zip,
         age = age,
         nb_family = nb_family,
         nb_friends = nb_friends,
         sex = sex,
         occupation = occupation,
         feedback = feedback,
         tech_diff = temp_data[internal_node_id %like%  "0.0-4.0-28.0-0.0"],
         email = temp_data[internal_node_id %like%  "0.0-4.0-29.0-0.0"]) %>%
  select(jspsych_id, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11, item_12, item_13, item_14, item_15, item_16, item_17,
         country, zip, age, nb_family, nb_friends, sex, occupation, feedback, tech_diff, email) %>%
  rowwise() %>%
  mutate(item_1 = pluck(item_1, 1),
         item_2 = pluck(item_2, 1),
         item_3 = pluck(item_2, 1),
         item_4 = pluck(item_4, 1),
         item_5 = pluck(item_5, 1),
         item_6 = pluck(item_6, 1),
         item_7 = pluck(item_7, 1),
         item_8 = pluck(item_8, 1),
         item_9 = pluck(item_9, 1),
         item_10 = pluck(item_10, 1),
         item_11 = pluck(item_11, 1),
         item_12 = pluck(item_12, 1),
         item_13 = pluck(item_13, 1),
         item_14 = pluck(item_14, 1),
         item_15 = pluck(item_15, 1),
         item_16 = pluck(item_16, 1),
         item_17 = pluck(item_17, 1),
         country = pluck(country, 1),
         zip = pluck(zip, 1),
         age = pluck(age, 1),
         nb_family = pluck(nb_family, 1),
         nb_friends = pluck(nb_friends, 1),
         nb_family = pluck(nb_family, 1),
         sex = pluck(sex, 1),
         occupation = pluck(occupation, 1),
         feedback = pluck(feedback, 1),
         tech_diff = pluck(tech_diff, 1),
         email = pluck(email, 1)) %>%
  ungroup() %>%
  distinct()

# Questions info -------------------------------------------------------------

dataset_questions <-
  database %>%
  pluck("questions_info_corona_en") %>%
  map_dfr(~data_frame(epoch = .x$timestamp,
                      jspsych_id = .x$jspsych_id,
                      vaast_first_block = .x$vaast_first_block,
                      temp_data = .x$questions_data),
          .id = "id") %>%
  mutate(timestamp = lubridate::as_datetime(epoch / 1000),
         temp_data = map(temp_data, ~ fromJSON(.x))) %>%
  unnest() %>%
  subset(jspsych_id != "999")%>%
  drop_na(responses) %>%
  mutate(temp_data = map(responses, ~ fromJSON(.x))) %>%
  group_by(jspsych_id) %>%
  mutate(item_1 = item_1,
         item_2 = item_2,
         item_3 = item_3,
         item_4 = item_4,
         item_5 = item_5,
         item_6 = item_6,
         item_7 = item_7,
         item_8 = item_8,
         item_9 = item_9,
         item_10 = item_10,
         item_11 = item_11,
         item_12 = item_12,
         item_13 = item_13,
         item_14 = item_14,
         item_15 = item_15,
         item_16 = item_16,
         item_17 = item_17) %>%
  select(jspsych_id, item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8, item_9, item_10, item_11, item_12, item_13, item_14, item_15, item_16, item_17) %>%
  rowwise() %>%
  mutate(item_1 = pluck(item_1, 1),
         item_2 = pluck(item_2, 1),
         item_3 = pluck(item_2, 1),
         item_4 = pluck(item_4, 1),
         item_5 = pluck(item_5, 1),
         item_6 = pluck(item_6, 1),
         item_7 = pluck(item_7, 1),
         item_8 = pluck(item_8, 1),
         item_9 = pluck(item_9, 1),
         item_10 = pluck(item_10, 1),
         item_11 = pluck(item_11, 1),
         item_12 = pluck(item_12, 1),
         item_13 = pluck(item_13, 1),
         item_14 = pluck(item_14, 1),
         item_15 = pluck(item_15, 1),
         item_16 = pluck(item_16, 1),
         item_17 = pluck(item_17, 1)) %>%
  ungroup() %>%
  distinct()

# Saving as more regular files -----------------------------------------------

save(dataset_vaast_trial, file = "data_VAAST/data_VAAST.RData")
save(dataset_vaast_browser_event, file = "data_VAAST/data_vaast_browser.RData")
save(dataset_vaast_connection, file = "data_VAAST/data_vaast_connection.RData")
save(dataset_extra, file = "data_VAAST/data_extra.RData")
#save(dataset_questions, file = "data_VAAST/data_vaast_questions.RData")


