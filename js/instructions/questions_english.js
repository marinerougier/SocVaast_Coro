var englishQuestions = {};

englishQuestions.preamble_situation = "<br><b>For each of the following items, please indicate what applies to your situation, <br>using the respective scale provided for each item.</b><br><br>";
englishQuestions.preamble_agreement = "<br><b>For each of the following items, please indicate the degree to which you agree.</b><br><br>";
englishQuestions.preamble_risk = "<br><b>For each of the following items, please indicate the degree of risk you estimate.</b><br><br>";
englishQuestions.preamble_typical_situation = "<br><b>For each of the following statements, please indicate what typically applies to you, <br>independent of the current situation. </b><br><br>";


englishQuestions.item_1 = {
  prompt: "The political administration has currently mandated policies in my region that restrict direct (i.e., face-to-face) social contact (i.e., social distancing policies).<br>",
  labels: ["<br>1<br> no restrictions at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> extreme restrictions"],
  required: true
};

englishQuestions.item_2 = {
  prompt: "Currently, the amount of my direct (i.e., face-to-face) social contact is restricted due to the social distancing policies in my region.<br>",
  labels: ["<br>No social distancing policies", "<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> extremely"],
  required: true  
};

englishQuestions.item_3 = {
  prompt: "I believe that the current social distancing policies in my region are...<br>",
  labels: ["<br>No social distancing policies", "<br>-3<br> too loose", "<br>-2", "<br>-1", "<br>0 appropriate", "<br>1", "<br>2", "<br>3<br> too harsh"],
  required: true                                                                                    
};

englishQuestions.item_4 = {
  prompt: "I currently keep distance from other people in the public space.<br>",
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completely"],
  required: true
};

englishQuestions.item_5 = {
  prompt: "How much direct (i.e., face-to-face) social contact do you currently have?<br>",
  labels: ["<br>1<br> very little", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> a lot"],
  required: true
};    
      
englishQuestions.item_6 = {
  prompt: "How much social contact do you currently have through phone / video calls, social media, or mail / email?<br>",
  labels: ["<br>1<br> very little", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> a lot"],
  required: true
};

englishQuestions.item_7 = {
  prompt: "Currently, I feel very lonely.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_8 = {
  prompt: "Currently, I have a strong need for direct (i.e. face-to-face) social contact.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_9 = {
  prompt: "I am very afraid of becoming infected with the coronavirus.<br>",
  name: 'item_9', labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_10 = {
  prompt: "I am very afraid that my loved ones become infected with the coronavirus.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};          

englishQuestions.item_11 = {
  prompt: " I am very afraid that I might pose a danger to other people because I could be infected without knowing.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_12 = {
  prompt: "I am very afraid that the coronavirus pandemic will overburden the health system of my country.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_13 = {
  prompt: "Given your current circumstances, how high do you judge the risk of becoming infected with the coronavirus?<br>",
  labels: ["<br>1<br> no risk at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> very high risk"],
  required: true
};

englishQuestions.item_14 = {
  prompt: "Given your preconditions (health status, age), how high do you judge the risk of developing a severe coronavirus disease, in case of becoming infected with the coronavirus?<br>",
  labels: ["<br>1<br> no risk at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> very high risk"],
  required: true
};

englishQuestions.item_15 = {
  prompt: "Typically, I have a lot of direct (face-to-face) social contact.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};   

englishQuestions.item_16 = {
  prompt: "Typically, I have a strong need for social contact.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_17 = {
  prompt: "Typically, I like being alone.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};
