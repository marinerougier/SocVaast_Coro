
var englishInstructions = {};

englishInstructions.persons = "persons";
englishInstructions.plants = "plants";

englishInstructions.fullscreen_trial = {
  type: 'fullscreen',
  message:  '<p><b>Before you start...</b></p>' + 
        '<li>Minimize any potential distractor (close other computer programs, silence your cell phone, etc.). </li>'+
        '<li>Disable your ad-blocking software, because ad-blocking softwares interfere with data collection. <br><br></li>'+
        '<p>To take part in this study, your browser needs to be set to fullscreen.<br></p>',
  button_label: 'Switch to fullscreen',
  fullscreen_mode: true
}

englishInstructions.welcome = {
    type: "html-button-response",
    stimulus:
        "<p class='instructions'><center>" +
        "<img src = 'media/UHH.png'>" +
        "<img src = 'media/UCL.jpg'>" +
        "<img src = 'media/UR.png'>" +
        "<br><b>SCC-Project (Social Contact during the Corona-crisis)</b>" + 
        "</center></p>" +
        "<p class='instructions'>Thank you for taking part in this study: <b>You make a valuable contribution to scientific research on social " +
        "consequences of the corona crisis. </b></p>" +
        "<p class='instructions'>During this study, you will be asked to complete a simple video game task. By clicking below to start the study, you recognize that you know:</p>" +
        "<ul class='instructions'>" +
            "<li>You can stop your participation at any time </li>" +
            "<li>You can contact our team for any questions or dissatisfaction related to your " +
            "participation: EMAIL ADDRESS.</li>" +
            "<li>The data collected will be strictly confidential and will only be accessible to researchers.</li>" +
            "<li>We do not record any data that allows to personally identify you. We do not record your IP address.</li>" +
        "</ul>" ,
    choices: ['I confirm that I give my free and informed consent to participate']
};

englishInstructions.vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Video Game task</h1>" +
    "<p class='instructions'>In this task, just like in a video game, you will find yourself within the corridor presented below.</p> " +
   "<p class='instructions'> Drawings of items (representing a person or a plant) will appear in the corridor. </p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

englishInstructions.vaast_instructions_2 = {
    type: "html-keyboard-response",
    stimulus:
      "<h1 class ='custom-title'>Video Game task </h1>" +
      "<p class='instructions'> Your task is to move toward or away from the items as a function of their category " +
      "(more specific instructions following). To do so, use the upward and downward arrow keys on your keyboard: </p>" +
      "<p class='instructions'><center>" +
        "<img src = 'media/keyboard-vaastt_en.png'>" +
      "</center></p>" +
          "<br>" +
      "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
    choices: [32]
};

englishInstructions.vaast_task_instructions = function(task_number, total_tasks) {
  return {
    type: "html-keyboard-response",
    on_load: function() {
      // this is a bit hacky, but works well with your nameing of variables
      document.getElementById('GROUPTOAPPROACH').innerHTML = window['group_to_approach_' + task_number];
      document.getElementById('GROUPTOAVOID').innerHTML = window['group_to_avoid_' + task_number];
      document.getElementById('TASKNUMBER').innerHTML = task_number;
      document.getElementById('TOTALTASKS').innerHTML = total_tasks;
    },
    stimulus:
      "<h1 class ='custom-title'> Video Game task - Section <span id='TASKNUMBER'></span>/<span id='TOTALTASKS'></span></h1>" +
      "<p class='instructions'>In this section, you have to: " +
      "<ul class='instructions'>" +
      "<li><strong>Move toward <span id='GROUPTOAPPROACH'></span> by pressing the upward arrow key </strong></li>" +
      "<strong>  </strong>" +
      "<li><strong>Move away from <span id='GROUPTOAVOID'></span> by pressing the downward arrow key </strong></li>" +
      "<strong> </strong>" +
      "</ul>" +
      "<strong> EXTREMELY IMPORTANT: respond as fast and as correctly as possible! <br><br></strong>" +
      "<p class ='instructions'>If you make an error, a red x appears (correct you answer with the other key). Use the index finger of your preferred hand to respond. " +
      "<br>" +
      "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
      " continue.</p>",
    choices: [32]
  };
};

englishInstructions.feedback = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Good job!<br><br>" + 
    "Here is your average Reaction Time: <span id='FeedbackMeanReactionTime'></span> milli seconds<br>" +
    "You reacted <span id='FeedbackNumberOfCorrectRespones'></span> of " +
    "<span id='FeedbackNumberOfTotalRespones'></span> times correctly." +
    "</p></center>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue</p>",
  choices: [32]
};


