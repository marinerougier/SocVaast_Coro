var frenchQuestions = {};

frenchQuestions.preamble_situation = "<br><b>For each of the following items, please indicate what applies to your situation, <br>using the respective scale provided for each item.</b><br><br>";
frenchQuestions.preamble_agreement = "<br><b>For each of the following items, please indicate the degree to which you agree.</b><br><br>";
frenchQuestions.preamble_risk = "<br><b>For each of the following items, please indicate the degree of risk you estimate.</b><br><br>";
frenchQuestions.preamble_typical_situation = "<br><b>For each of the following statements, please indicate what typically applies to you, <br>independent of the current situation. </b><br><br>";


frenchQuestions.item_1 = {
  prompt: "FR! The political administration has currently mandated policies in my region that restrict direct (i.e., face-to-face) social contact (i.e., social distancing policies).<br>",
  labels: ["<br>1<br> no restrictions at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> extreme restrictions"],
  required: true
};

frenchQuestions.item_2 = {
  prompt: "For me personally, the amount of my direct (i.e., face-to-face) social contact is currently restricted due to the social distancing policies in my region.<br>",
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> extremely", "<br><b>No social distancing policies</b>"],
  required: true  
};

frenchQuestions.item_3 = {
  prompt: "I believe that the current social distancing policies in my region are...<br>",
  labels: ["<br>-3<br> too loose", "<br>-2", "<br>-1", "<br>0 appropriate", "<br>1", "<br>2", "<br>3<br> too harsh", "<br><b>No social distancing policies</b>"],
  required: true                                                                                    
};

frenchQuestions.item_4 = {
  prompt: "I currently keep distance from other people in the public space.<br>",
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completely"],
  required: true
};

frenchQuestions.item_5 = {
  prompt: "How much direct (i.e., face-to-face) social contact do you currently have?<br>",
  labels: ["<br>1<br> very little", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> a lot"],
  required: true
};    
      
frenchQuestions.item_6 = {
  prompt: "How much social contact do you currently have through phone / video calls, social media, or mail / email?<br>",
  labels: ["<br>1<br> very little", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> a lot"],
  required: true
};

frenchQuestions.item_7 = {
  prompt: "Currently, I feel very lonely.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

frenchQuestions.item_8 = {
  prompt: "Currently, I have a strong need for direct (i.e. face-to-face) social contact.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

frenchQuestions.item_9 = {
  prompt: "I am very afraid of becoming infected with the coronavirus.<br>",
  name: 'item_9', labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely", "<br><b>I am/was infected</b>"],
  required: true
};

frenchQuestions.item_10 = {
  prompt: "I am very afraid that my loved ones become infected with the coronavirus.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};          

frenchQuestions.item_11 = {
  prompt: " I am very afraid that I might pose a danger to other people because I could be infected without knowing.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

frenchQuestions.item_12 = {
  prompt: "I am very afraid that the coronavirus pandemic will overburden the health system of my country.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

frenchQuestions.item_13 = {
  prompt: "Given your current circumstances, how high do you judge the risk of becoming infected with the coronavirus?<br>",
  labels: ["<br>1<br> no risk at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> very high risk", "<br><b>I am/was infected</b>"],
  required: true
};

frenchQuestions.item_14 = {
  prompt: "Given your preconditions (health status, age), how high do you judge the risk of developing a severe coronavirus disease, in case of becoming infected with the coronavirus?<br>",
  labels: ["<br>1<br> no risk at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> very high risk", "<br><b>I am/was infected</b>"],
  required: true
};

frenchQuestions.item_15 = {
  prompt: "Typically, I have a lot of direct (face-to-face) social contact.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};   

frenchQuestions.item_16 = {
  prompt: "Typically, I have a strong need for social contact.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

frenchQuestions.item_17 = {
  prompt: "Typically, I like being alone.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};
