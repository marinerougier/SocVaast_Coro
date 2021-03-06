
var englishInstructions = {};

englishInstructions.persons = "people";
englishInstructions.plants = "plants";
englishInstructions.finish = "Finish study";

englishInstructions.welcome = {
    type: "html-button-response",
    stimulus:
        "<p class='instructions'><center>" +
        "<img src = 'media/UHH.png'>" +
        "<img src = 'media/UCL.jpg'>" +
        "<img src = 'media/Bicocca_Bianco.png'>" +
        "<br>"+
        "<img src = 'media/UR.png'>" +
        "<br><b>SCC-Project (Social Contact during the Corona Pandemic)</b>" + 
        "</center></p>" +
        "<p class='instructions'>Thank you for taking part in this study: <b>You make a valuable contribution to scientific research on social " +
        "consequences of the corona pandemic. </b>For more information on this research project, please click <a href='https://www.psy.uni-hamburg.de/arbeitsbereiche/sozialpsychologie/scc.html' target='_blank'>here</a>.</p>" +
        "<p class='instructions'>During this study, you will answer some questions regarding your behavior and feelings and complete a simple video game task. "+
        "Note that <b>you need a computer and a real (i.e., not a virtual) keyboard </b>to complete the task. </p>" +
        "<p class='instructions'>If you are interested, <b>you can receive an individual analysis of your responses </b>in relation to the average responses of previous participants.</p>" +
        "<p class='instructions'>Completion of the study will take approximately 10-15 minutes. </p>" +
        "<p class='instructions'>By clicking below to start the study, you confirm that:</p>" +
        "<ul class='instructions'>" +
            "<li>You are at least 18 years old. </li>" +
            "<li>You know you can stop your participation at any time </li>" +
            "<li>You know you can contact our team for any questions or dissatisfaction " +
            "at <a href='mailto:scc-project@ur.de'>scc-project@ur.de</a>. </li>" + //The principle investigator is PD Dr. Regina Reichardt.
            "<li>You know that you participate anonymously. We do not record any data that allows to personally identify you. We do not record your IP address.</li>" +
            "<li>You know that the anonymous data collected will be shared with researchers via the Open Science Framework.</li>" +
        "</ul>" ,
    choices: ['I confirm that I give my free and informed consent to participate']
};

englishInstructions.fullscreen_trial = {
  type: 'fullscreen',
    message:  `
      <div class='instructions'>
      <p><b>Before you start...</b></p>
      <ul>
        <li>Minimize any potential distractor (close other computer programs, silence your cell phone, etc.). </li>
        <li>Disable your ad-blocking software, which may interfere with data collection.</li>
      </ul>
      <p>To take part in this study, your browser needs to be set to fullscreen.<br></p>
      </div>
      `,
    button_label: 'Switch to fullscreen',
  fullscreen_mode: true
}

englishInstructions.vaast_instructions_0 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Video Game task</h1>" +
    "<p class='instructions'>We now ask you to complete a task that assesses <b>spontaneous behavioral tendencies to approach or avoid other people.</b></p> " +
    "<p class='instructions'>Completion of this task can be a bit tedious because it requires many repetitions of the same reactions.</b> " +
    "Yet, for a reliable measurement of behavioral tendencies, it is very important to have all these repetitions. </p> " +
   "<p class='instructions'> Therefore, please <b>don’t give up and complete the entire task.</b> "+
   "By your participation you make a valuable contribution to better understanding the social consequences of the corona pandemic. </p>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

englishInstructions.vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Video Game task</h1>" +
    "<p class='instructions'>In this task, just like in a video game, you will find yourself within the corridor presented below.</p> " +
    "<p class='instructions'>Please <b>imagine that all circumstances of your current life apply to the situation in the corridor.</b> " +
    "Imagine walking down the corridor just like you may walk down a corridor these days in your real life. </p> " +
   "<p class='instructions'> At the end of this corridor, <b>you will see people or plants standing around.</b> "+
   "Imagine that these people and plants are real, just like people or plants you may be seeing standing around these days in your real life. </p>" +
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
      "<p class='instructions'> Your task is to move toward or away from people or plants " +
      "(more specific instructions following). To do so, use the upward and downward arrow keys on your keyboard: </p>" +
      "<p class='instructions'><center>" +
        "<img src = 'media/keyboard-vaastt_en.png'>" +
      "</center></p>" +
          "<br>" +
      "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
    choices: [32]
};

englishInstructions.vaast_instructions_4 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_1;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_1;
  },
  stimulus:
    "<h1 class ='custom-title'> Video Game task - Section 1/4</h1>" +
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

englishInstructions.vaast_instructions_5 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_2;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_2;
  },
  stimulus:
    "<h1 class ='custom-title'> Video Game task - Section 2/4</h1>" +
    "<p class='instructions'>Warning! Now the task instructions are reversed: " +
    "<ul class='instructions'>" +
    "<li><strong>Move toward <span id='GROUPTOAPPROACH'></span> by pressing the upward arrow key </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Move away from <span id='GROUPTOAVOID'></span> by pressing the downward arrow key </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTREMELY IMPORTANT: respond as fast and as correctly as possible! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

englishInstructions.vaast_instructions_6 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_3;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_3;
  },
  stimulus:
    "<h1 class ='custom-title'> Video Game task - Section 3/4</h1>" +
    "<p class='instructions'>Warning! Now the task instructions are reversed: " +
    "<ul class='instructions'>" +
    "<li><strong>Move toward <span id='GROUPTOAPPROACH'></span> by pressing the upward arrow key </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Move away from <span id='GROUPTOAVOID'></span> by pressing the downward arrow key </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTREMELY IMPORTANT: respond as fast and as correctly as possible! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

englishInstructions.vaast_instructions_7 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_4;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_4;
  },
  stimulus:
    "<h1 class ='custom-title'> Video Game task - Section 4/4</h1>" +
    "<p class='instructions'>Warning! Now the task instructions are reversed: " +
    "<ul class='instructions'>" +
    "<li><strong>Move toward <span id='GROUPTOAPPROACH'></span> by pressing the upward arrow key </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Move away from <span id='GROUPTOAVOID'></span> by pressing the downward arrow key </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTREMELY IMPORTANT: respond as fast and as correctly as possible! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

englishInstructions.feedback_firstblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Good job!<br><br>" + 
    "Here is your average Reaction Time: <b><span id='FeedbackMeanReactionTime'></span> milliseconds</b><br>" +
    "You reacted <b><span id='FeedbackNumberOfCorrectRespones'></span> of " +
    "<span id='FeedbackNumberOfTotalRespones'></span> times correctly.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Try your best to improve your performance in the next section.</b>" +
    "<p class='instructions'><center>Even if the task may appear a little tedious, please, don’t give up. Completion of this task helps science <br>to better understand "+
    "how the corona pandemic affects spontaneous behavioral tendencies towards other people.</b><br>" +
    "<p class='instructions'><center>If you are interested, you will later be able to compare your performance rates<br> with the average performance of previous participants.<br><br>" + 
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue</p>",
  choices: [32]
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
    "Here is your average Reaction Time: <b><span id='FeedbackMeanReactionTime'></span> milliseconds</b><br>" +
    "You reacted <b><span id='FeedbackNumberOfCorrectRespones'></span> of " +
    "<span id='FeedbackNumberOfTotalRespones'></span> times correctly.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Try your best to improve your performance in the next section.</b>" +
    "<p class='instructions'><center>Even if the task may appear a little tedious, please, don’t give up. Completion of this task helps science <br>to better understand "+
    "how the corona pandemic affects spontaneous behavioral tendencies towards other people.</b><br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue</p>",
  choices: [32]
};

englishInstructions.feedback_lastblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Good job!<br><br>" + 
    "Here is your average Reaction Time: <b><span id='FeedbackMeanReactionTime'></span> milli seconds</b><br>" +
    "You reacted <b><span id='FeedbackNumberOfCorrectRespones'></span> of " +
    "<span id='FeedbackNumberOfTotalRespones'></span> times correctly.</b>" +
    "</p></center>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue</p>",
  choices: [32]
};


englishInstructions.extra_information = {
  type: 'html-keyboard-response',
  stimulus:
    "<p class='instructions'>You will start by answering some questions.</p>" +
    "<p class='instructions'>If you are interested, you will later be provided with an individual analysis of your answers and can compare your answers to the average answers from previous participants.</p>" +
    "<p class='continue-instructions'>Press <strong>space</strong> to continue.</p>",
  choices: [32]
};

englishInstructions.feedback_summary = `
  <div class='instructions' id=FEEDBACK>
      <div>
      <p>
      Note, that we have not yet collected a sufficient amount of data to show average responses from previous participants.
      If you are interested in this summary, please enter your Email address in the field below.
      </p><p>
        Email-address:&nbsp <input type='text' name='EMAIL' id='EMAIL' size=60 onchange='window.email = this.value'>
      </p><p>
        Your email-address will be stored separately from your responses in the study. It is not possible to connect your email-address with any of your responses.
      </p><p>
        <h3><center>Here is a summary of your responses</center></h3>
        <p>Please save this page for your future reference.</p>
      </div>
      <div id=REACTIONS >
        Your average reaction time has been: <b><span id='FeedbackMeanReactionTime'></span> milliseconds</b><br>
        You reacted <b><span id='FeedbackNumberOfCorrectRespones'></span> of <span id='FeedbackNumberOfTotalRespones'></span> times correctly.</b>
      </div>
      <div id='RESPONSES'></div>
    </div>
    <!--
    <div class='instructions'><button id="downloadPDF" style="float: right;">Download PDF</button></div>
    -->
`;
