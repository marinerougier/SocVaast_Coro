var englishQuestions = {};

englishQuestions.preamble_apply_situation = "<br><b>Please indicate what applies to your situation.</b><br><br>";
englishQuestions.preamble_apply_you = "<br><b>Please indicate what applies to you.</b><br><br>";
englishQuestions.preamble_agreement = "<br><b>Please indicate the extent to which you agree.</b><br><br>";
englishQuestions.preamble_apply_typical = "<br><b>Please indicate the extent to which the statements typically apply to you, <br><u>independent</u> of the current situation. </b><br><br>";


englishQuestions.item_1 = {
  prompt: "The political administration has currently mandated policies in my region that restrict direct (i.e., face-to-face) social contact (i.e., social distancing policies).<br>",
  labels: ["<br>1<br> no restrictions at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> extreme restrictions"],
  required: true
};

englishQuestions.item_2= {
  prompt: "I believe that in my region social contact should be ... <br>(Select 0 if you find the current regulations appropriate)",
  labels: ["<br>-3<br> restricted less", "<br>-2", "<br>-1", "<br>0", "<br>1", "<br>2", "<br>3<br> restricted more"],
  required: true                                                                                    
};

englishQuestions.item_3 = {
    prompt: "For me personally, the amount of my direct (i.e., face-to-face) social contact is currently restricted due to the social distancing policies in my region.<br>",
    labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> extremely"],
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
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completely"],
  required: true
};

englishQuestions.item_8 = {
  prompt: "Currently, I have a strong need for direct (i.e. face-to-face) social contact.<br>",
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completely"],
  required: true
};

englishQuestions.item_9 = {
  timeline: [{
    type: 'survey-multi-choice',
    questions: [{
      prompt: "<div class='instructions' style='width:100%'><p>Please select what applies to you</p><p>I was/am currently infected with the corona virus</p></div>",
      options: ["yes&nbsp&nbsp", "don't know&nbsp&nbsp", "no&nbsp&nbsp"],
      required: true, horizontal: true
    }],
    button_label: "OK"
  }],
  on_finish: function(data) {
    console.log(data.responses);
    jsPsych.data.addProperties({item_9: JSON.parse(data.responses)["Q0"]});
    jsPsych.data.get().addToLast({tag: "extra_data"});
  }
}

englishQuestions.item_10 = {
  prompt: "I am very afraid of becoming infected with the coronavirus.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_11 = {
  prompt: " I am very afraid that I might pose a danger to other people because I could be infected without knowing.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_12 = {
    prompt: "Given your current circumstances, how high do you judge the risk of becoming infected with the coronavirus?<br>",
    labels: ["<br>1<br> no risk at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> very high risk"],
    required: true
  };

englishQuestions.item_13 = {
prompt: "Given your preconditions (health status, age), how high do you judge the risk of developing a severe coronavirus disease, in case of becoming infected with the coronavirus?<br>",
labels: ["<br>1<br> no risk at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> very high risk"],
required: true
};

englishQuestions.item_14 = {
  prompt: "I am very afraid that my loved ones become infected with the coronavirus.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};  

englishQuestions.item_15 = {
  prompt: "I am very afraid that the coronavirus pandemic will overburden the health system of my country.<br>",
  labels: ["<br>1<br> not agree at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> agree completely"],
  required: true
};

englishQuestions.item_16 = {
  prompt: "Typically, I have a lot of direct (face-to-face) social contact.<br>",
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completely"],
  required: true
};   

englishQuestions.item_17 = {
  prompt: "Typically, I have a strong need for social contact.<br>",
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completely"],
  required: true
};

englishQuestions.item_18 = {
  prompt: "Typically, I like being alone.<br>",
  labels: ["<br>1<br> not at all", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completely"],
  required: true
};
