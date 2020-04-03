
var englishDemo = {};

englishDemo.extra_information_1 = {
    timeline: [{
      type: 'survey-text',
      questions: [{prompt: "What is your current country of residence?", name: 'country', required: true},
                  {prompt: "Please indicate the ZIP code of your current residence:", name: 'zip', required: true},
                  {prompt: "What is your age?", name: 'age', required: true}],
      button_label: "OK",
    }],
    on_finish: function(data) {
      jsPsych.data.addProperties({
        country: JSON.parse(data.responses)["country"],
        zip: JSON.parse(data.responses)["zip"],
        age: JSON.parse(data.responses)["age"],
      });
    }
  }

englishDemo.extra_information_2 = {
    timeline: [{
    type: 'survey-multi-choice',
    questions: [{prompt: "What is your gender?", options: ["&nbspMale", "&nbspFemale", "&nbspOther"], required: true, horizontal: true}],
    button_label: "OK"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        sex: JSON.parse(data.responses)["Q0"],
      });
    }
  }

englishDemo.extra_information_3 = {
    timeline: [{
      type: 'survey-text',
      questions: [{prompt: "Besides yourself, how many family members or loved ones (except friends and flat mates) live in your household?<br> Please enter the correct numbers in the fields below. If you live alone, enter 0.", name: 'nb_family', required: true},
                  {prompt: "Besides yourself, how many friends or flat mates (except family members and loved ones) live in your household?<br> Please enter the correct numbers in the fields below. If you live alone, enter 0.", name: 'nb_friends', required: true}],
      button_label: "OK",
    }],
    on_finish: function(data) {
      jsPsych.data.addProperties({
        nb_family: JSON.parse(data.responses)["nb_family"],
        nb_friends: JSON.parse(data.responses)["nb_friends"],
      });
    }
  }

englishDemo.extra_information_4 = {
    timeline: [{
    type: 'survey-multi-choice',
    questions: [{prompt: "Do you have professional contact with corona patients (e.g. as nursing staff, physician, etc.)?", options: ["&nbspYes", "&nbspNo"], required: true, horizontal: false}],
    button_label: "OK",
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        occupation: JSON.parse(data.responses)["Q0"],
      });
    }
  }

englishDemo.extra_information_5 = {
    timeline: [{
    type: 'survey-multi-choice',
    questions: [{prompt: "Are you interested in receiving an individual feedback of your <br>responses in comparison to the average responses?", 
    options: ["&nbspYes", "&nbspNo"], required: true, horizontal: false}],
    button_label: "OK"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        feedback: JSON.parse(data.responses)["Q0"],
      });
    }
  }
  
englishDemo.extra_information_6 = {
    timeline: [{
    type: 'survey-text',
    questions: [{prompt: "Please describe your technical difficulties (if any):"}],
    button_label: "Continue"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        tech_diff: JSON.parse(data.responses)["Q0"],
      });
    }
  }

englishDemo.extra_information_7 = {
    timeline: [{
    type: 'survey-text',
    questions: [{prompt: "Email:"}],
    preamble: "<br><b>The study is complete. Thank you very much for your participation! <br>" + 
    "Please help us invite as many people as possible to participate in this study <br>by sharing the link on social media or emailing it to your friends !!!!!PUT LINK HERE!!!!!. Thank you!</b> <br><br>If you are interested in receiving invitations to future studies of the SCC-project or receiving <br> more information about the SCC-project, please enter your email-address in the field below. <br>Your email-address will be stored separately from your responses in the study. <br>It is not possible to connect your email-address with any of your responses. <br><br> If you are not interested, please continue.<br><br>",
    button_label: "Continue"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        email: JSON.parse(data.responses)["Q0"],
      });
    }
  }


