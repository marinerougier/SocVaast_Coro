
### Workspace -------------------------------------------------------------------
# To reset the workspace
rm(list=ls())

### Loading packages ------------------------------------------------------------
library(plyr)
library(dplyr)
library(gdata)
library(reshape)
library(car)
#library(tidyverse)
library(tidyr)
library(magrittr)
library(data.table)
library(ggplot2) # for the graphics
library(readr)
library(stringr)
library(psych)
library(GPArotation)
library(tidyverse)

# for the confidence intervals
ci.fun <- function (x) {
  
  moe<-qt(0.975, length(x)-1) * sd(x,na.rm=TRUE) / sqrt(length(x))
  
  LI <- mean(x,na.rm=TRUE) - moe
  HI <- mean(x,na.rm=TRUE) + moe
  Mean <- mean(x,na.rm=TRUE)
  
  CI<-cbind(LI,Mean,HI)
  colnames(CI)<-c("2.5%","Mean","97.5%")
  row.names(CI)<-deparse(substitute(x))
  CI
}

# Left Outter Join
LOT <- function(X = NULL, Y = NULL, onCol = NULL) {
  giveExemple <- is.null(X) & is.null(Y) & is.null(onCol)
  if (giveExemple) {
    cat("\nExemple:")
    cat("\n>X\n")
    X <- data.table(id = 1:5, L = letters[1:5]) %T>% print
    cat("\n>Y\n")
    Y <- data.table(id = 3:5, L = c(NA, "g", "h"), N = c(10, NA, 12)) %T>% print
    onCol <- "id"
    cat('\nLOT(X, Y, "id")\n')
  }
  
  n <- names(Y)
  X[Y, (n) := mget(paste0("i.", n)), on = onCol]
  
  if (giveExemple) {cat(">X\n"); print(X)}
}


# Ensure that relative paths start from the same directory as this script
rstudioapi::getActiveDocumentContext()$path %>% dirname %>% setwd

#-----------------------------------------------------------
#                     VAAST
#-----------------------------------------------------------

### Data files import and dataset formating -----------------------------------------------------------

load("Data_VAAST/data_VAAST.RData")
DF <- data.table(dataset_vaast_trial)

# # Loading the browser info to remove pp who did not complete the whole expe
load("Data_VAAST/data_extra.RData")
data_extra <- data.table(dataset_extra)

# Merging VAAST with other infos
LOT(DF, data_extra, "jspsych_id")

# Defining some variabls as factors.
DF$jspsych_id  <- factor(DF$jspsych_id)
DF$Stimuli  <- factor(DF$stimulus)
DF$Movement <- factor(DF$movement)
DF$Group  <- factor(DF$group)

### Cleaning dataset and Data exclusion ------------------------------------------------------------

# we remove the other positions having no meaning
DF <- subset (DF, key_press != "NA")

xtabs(~Stimuli + jspsych_id, DF)

#DF[, trialNum := rep(1:400), jspsych_id]

# DF_1 <- DF[(trialNum < 51)]
# xtabs(~Stimuli + jspsych_id, DF_1)

# # in the control condition, duplicated trials or supplementary key presses for one trial 
# # when participants press several times for one face
# # to remove duplicated row (if any)
# DF <- DF[!duplicated(DF)]
# 
# # to remove the supplementary key presses for one trial
# DF[, numNode := strsplit(internal_node_id, "-")[[1]] %>% length(), 1:nrow(DF)]
# DF <- subset (DF, numNode == 3)

# xtabs(~Stimuli + jspsych_id, DF)
# xtabs(~Stimuli + group, DF)
# table(DF$group)

# removing pp who did not complete the whole expe
Complete <- data.frame(table(DF$jspsych_id))
Complete <- rename.vars (Complete, c("Var1","Freq"), c("jspsych_id","Num_trial"))
LOT(DF, Complete, "jspsych_id")
DF <- subset (DF, Num_trial >= 400) # should be 400

# Computing error rate by pp
DF1 <- subset (DF, correct == FALSE)
Nb_trials_error <- data.frame((table(DF1$jspsych_id))/400)
Nb_trials_error <- rename.vars (Nb_trials_error, c("Var1","Freq"), c("jspsych_id","Nb_erros"))
arrange(Nb_trials_error,Nb_erros)

# 1 person has to be excluded (VAAST data)
# DF <- subset (DF, jspsych_id != "b87gl0gpyg9p770" & jspsych_id != "o702ft548hdeubg")


