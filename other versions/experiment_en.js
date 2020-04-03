/// LICENCE -----------------------------------------------------------------------------
//
// Copyright 2018 - Cédric Batailler
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify,
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be included in all copies
// or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
// OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// OVERVIEW -----------------------------------------------------------------------------
//
// TODO:
//
//
// address : https://marinerougier.github.io/SocVaast_Coro/index_en.html
// dirty hack to lock scrolling ---------------------------------------------------------
// note that jquery needs to be loaded.

//$('body').css({'overflow':'hidden'});
//  $(document).bind('scroll',function () { 
//       window.scrollTo(0,0); 
//  });

// safari & ie exclusion ----------------------------------------------------------------
var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var is_ie = /*@cc_on!@*/false || !!document.documentMode;

var is_compatible = !(is_safari || is_ie);


if(!is_compatible) {

    var safari_exclusion = {
        type: "html-keyboard-response",
        stimulus:
        "<p>Sorry, this study is not compatible with your browser.</p>" +
        "<p>Please try again with a compatible browser (e.g., Chrome or Firefox).</p>",
        choices: jsPsych.NO_KEYS
    };

    var timeline_safari = [];

    timeline_safari.push(safari_exclusion);
    jsPsych.init({timeline: timeline_safari});

}

// firebase initialization ---------------------------------------------------------------
  var firebase_config = {
    apiKey: "AIzaSyBwDr8n-RNCbBOk1lKIxw7AFgslXGcnQzM",
    databaseURL: "https://vaastcoro.firebaseio.com/"
  };

  firebase.initializeApp(firebase_config);
  var database = firebase.database();

  // id variables
  var jspsych_id = jsPsych.data.getURLVariable("jspsych_id");
  if (jspsych_id == null) { jspsych_id = jsPsych.randomization.randomID(15) };
 
  // Preload images
  var preloadimages = [];

  // connection status ---------------------------------------------------------------------
  // This section ensure that we don't lose data. Anytime the 
  // client is disconnected, an alert appears onscreen
  var connectedRef = firebase.database().ref(".info/connected");
  var connection   = firebase.database().ref("VAAST_corona_en/" + jspsych_id + "/")
  var dialog = undefined;
  var first_connection = true;

  connectedRef.on("value", function(snap) {
    if (snap.val() === true) {
      connection
        .push()
        .set({status: "connection",
              timestamp: firebase.database.ServerValue.TIMESTAMP})

      connection
        .push()
        .onDisconnect()
        .set({status: "disconnection",
              timestamp: firebase.database.ServerValue.TIMESTAMP})

    if(!first_connection) {
      dialog.modal('hide');
    }
    first_connection = false;
    } else {
      if(!first_connection) {
      dialog = bootbox.dialog({
          title: 'Connection lost',
          message: '<p><i class="fa fa-spin fa-spinner"></i> Please wait while we try to reconnect.</p>',
          closeButton: false
          });
    }
    }
  });

  // Preload images in the VAAST 
  var stim_vaast = [
      "stimuli/people_female1.png",
      "stimuli/people_female2.png",
      "stimuli/people_female3.png",
      "stimuli/people_female4.png",
      "stimuli/people_group1.png",
      "stimuli/people_group2.png",
      "stimuli/people_group3.png",
      "stimuli/people_group4.png",
      "stimuli/people_group7.png",
      "stimuli/people_group8.png",
      "stimuli/people_group1.png",
      "stimuli/people_group1.png",
      "stimuli/people_male1.png",
      "stimuli/people_male2.png",
      "stimuli/people_male3.png",
      "stimuli/people_male4.png",
      "stimuli/plant_group1.png",
      "stimuli/plant_group2.png",
      "stimuli/plant_group3.png",
      "stimuli/plant_group4.png",
      "stimuli/plant_group5.png",
      "stimuli/plant_group6.png",
      "stimuli/plant_group7.png",
      "stimuli/plant_group8.png",
      "stimuli/plant1.png",
      "stimuli/plant2.png",
      "stimuli/plant3.png",
      "stimuli/plant4.png",
      "stimuli/plant5.png",
      "stimuli/plant6.png",
      "stimuli/plant7.png",
      "stimuli/plant8.png"
  ];

 preloadimages.push(stim_vaast);
//jsPsych.pluginAPI.preloadImages(stim_vaast);

    // counter variables
  var vaast_trial_n    = 1;
  var browser_events_n = 1;

// Variable input -----------------------------------------------------------------------
// Variable used to define experimental condition.

var vaast_first_block = jsPsych.randomization.sampleWithoutReplacement(["approach_human", "approach_plant"], 1)[0];

 // cursor helper functions
var hide_cursor = function() {
	document.querySelector('head').insertAdjacentHTML('beforeend', '<style id="cursor-toggle"> html { cursor: none; } </style>');
}
var show_cursor = function() {
	document.querySelector('#cursor-toggle').remove();
}

var hiding_cursor = {
    type: 'call-function',
    func: hide_cursor
}

var showing_cursor = {
    type: 'call-function',
    func: show_cursor
}

// VAAST --------------------------------------------------------------------------------
// VAAST variables ----------------------------------------------------------------------
// On duplique chacune des variable pour correspondre au bloc 1 et au bloc 2 !

var movement_human_1    = undefined;
var movement_plant_1    = undefined;
var group_to_approach_1 = undefined;
var group_to_avoid_1    = undefined;
var movement_human_2    = undefined;
var movement_plant_2    = undefined;
var group_to_approach_2 = undefined;
var group_to_avoid_2    = undefined;
var movement_human_3    = undefined;
var movement_plant_3    = undefined;
var group_to_approach_3 = undefined;
var group_to_avoid_3    = undefined;
var movement_human_4    = undefined;
var movement_plant_4    = undefined;
var group_to_approach_4 = undefined;
var group_to_avoid_4    = undefined;

// Feedback variables - set after every trial, displayed in the feedback pages
var FeedbackMeanReactionTime = undefined;
var FeedbackNumberOfWrongResponses = undefined;
var FeedbackNumberOfCorrectResponses = undefined;

function updateFeedback(numberOfTrials) {
  // set numberOfTrials to negative values to get feedback over all trials
  // Update the global Feedback variables - call this function after every trial
  var responses = jsPsych.data.get().filter([{'key_press': 38}, {'key_press': 40}]);
  // due to the experiment setup, on_finish is also called when no key presses have happend yet.
  // naturally, we need to ignore these cases
  if (responses.values().length < numberOfTrials && numberOfTrials > 0) {
    return
  }
  if (numberOfTrials > 0) {
    respones = responses.last(numberOfTrials);
  }
  FeedbackMeanReactionTime = responses.select('rt').mean();
  FeedbackNumberOfWrongResponses = responses.filter({'correct': false}).count();
  FeedbackNumberOfCorrectResponses = responses.filter({'correct': true}).count();
}

switch(vaast_first_block) {
  case "approach_human":
    movement_human_1    = "approach";
    movement_plant_1    = "avoidance";
    group_to_approach_1 = "persons";
    group_to_avoid_1    = "plants";
    movement_human_2    = "avoidance";
    movement_plant_2    = "approach";
    group_to_approach_2 = "plants";
    group_to_avoid_2    = "persons";
    movement_human_3    = "approach";
    movement_plant_3    = "avoidance";
    group_to_approach_3 = "persons";
    group_to_avoid_3    = "plants";
    movement_human_4    = "avoidance";
    movement_plant_4    = "approach";
    group_to_approach_4 = "plants";
    group_to_avoid_4    = "persons";
    break;

  case "approach_plant":
    movement_human_1    = "avoidance";
    movement_plant_1    = "approach";
    group_to_approach_1 = "plants";
    group_to_avoid_1    = "persons";
    movement_human_2    = "approach";
    movement_plant_2    = "avoidance";
    group_to_approach_2 = "persons";
    group_to_avoid_2    = "plants";
    movement_human_3    = "avoidance";
    movement_plant_3    = "approach";
    group_to_approach_3 = "plants";
    group_to_avoid_3    = "persons";
    movement_human_4    = "approach";
    movement_plant_4    = "avoidance";
    group_to_approach_4 = "persons";
    group_to_avoid_4    = "plants";
    break;
}

// VAAST stimuli ------------------------------------------------------------------------
// vaast image stimuli ------------------------------------------------------------------
// Ici, on ajoute un nouveau mouvement, en fonction du bloc de la vaast on appellera soit
// movement_1 ou movement_2.
  var stim_vaast = [
      "stimuli/Gruppe1.png",
      "stimuli/Gruppe2.png",
      "stimuli/Gruppe3.png",
      "stimuli/Gruppe4.png",
      "stimuli/Gruppe5.png",
      "stimuli/Gruppe6.png",
      "stimuli/Gruppe7.png",
      "stimuli/Gruppe8.png",
      "stimuli/pair1_female.png",
      "stimuli/pair1_male.png",
      "stimuli/pair2_female.png",
      "stimuli/pair2_male.png",
      "stimuli/pair3_female.png",
      "stimuli/pair3_male.png",
      "stimuli/pair4_female.png",
      "stimuli/pair4_male.png",
      "stimuli/PGruppe1.png",
      "stimuli/PGruppe2.png",
      "stimuli/PGruppe3.png",
      "stimuli/PGruppe4.png",
      "stimuli/PGruppe5.png",
      "stimuli/PGruppe6.png",
      "stimuli/PGruppe7.png",
      "stimuli/PGruppe8.png",
      "stimuli/Pflanze1.png",
      "stimuli/Pflanze2.png",
      "stimuli/Pflanze3.png",
      "stimuli/Pflanze4.png",
      "stimuli/Pflanze5.png",
      "stimuli/Pflanze6.png",
      "stimuli/Pflanze7.png",
      "stimuli/Pflanze8.png"
  ];


var vaast_stim_training = [];

var vaast_stim = [
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_female1.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_female2.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_female3.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_female4.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group1.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group2.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group3.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group4.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group5.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group6.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group7.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_group8.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_male1.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_male2.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_male3.png"},
  {movement_1: movement_human_1, movement_2: movement_human_2,  movement_3: movement_human_3, movement_4: movement_human_4, group: "human",  stimulus: "stimuli/people_male4.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group1.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group2.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group3.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group4.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group5.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group6.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group7.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant_group8.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant1.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant2.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant3.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant4.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant5.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant6.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant7.png"},
  {movement_1: movement_plant_1, movement_2: movement_plant_2,  movement_3: movement_plant_3, movement_4: movement_plant_4, group: "plant",  stimulus: "stimuli/plant8.png"}
];

var vaast_stim_human = _.sampleSize(_.filter(vaast_stim, { 'group': 'human'}), 2); //here, put 4
var vaast_stim_plant = _.sampleSize(_.filter(vaast_stim, { 'group': 'plant'}), 2); // here, put 4

vaast_stim_training.push(vaast_stim_human);
vaast_stim_training.push(vaast_stim_plant);
vaast_stim_training = _.flattenDeep(vaast_stim_training);

// vaast background images --------------------------------------------------------------,

var background = [
    "background/3.jpg",
    "background/4.jpg",
    "background/5.jpg",
    "background/6.jpg"
];


// vaast stimuli sizes -------------------------------------------------------------------

var stim_sizes = [
    26,
    32,
    40,
    46,
    56,
    66,
    76
  ];

  var resize_factor = 12;
  var image_sizes = stim_sizes.map(function(x) { return x * resize_factor; });

// Helper functions ---------------------------------------------------------------------
// next_position():
// Compute next position as function of current position and correct movement. Because
// participant have to press the correct response key, it always shows the correct
// position.
var next_position_training = function(){
  var current_position = jsPsych.data.getLastTrialData().values()[0].position;
  var current_movement = jsPsych.data.getLastTrialData().values()[0].movement;
  var position = current_position;

  if(current_movement == "approach") {
    position = position + 1;
  }

  if(current_movement == "avoidance") {
    position = position -1;
  }

  return(position)
}

  // Sampling function ----------------------------------------------------------------
  var sample_n = function(list, n) {
    list = jsPsych.randomization.sampleWithReplacement(list, n);
    list = jsPsych.randomization.shuffleNoRepeats(list);

    return (list);
  }
  
// Saving blocks ------------------------------------------------------------------------
// Every function here send the data to keen.io. Because data sent is different according
// to trial type, there are differents function definition.

// init ---------------------------------------------------------------------------------
  var saving_id = function(){
     database
        .ref("participant_id_corona_en/")
        .push()
        .set({jspsych_id: jspsych_id,
               vaast_first_block: vaast_first_block,
               timestamp: firebase.database.ServerValue.TIMESTAMP})
  }

// vaast trial --------------------------------------------------------------------------
  var saving_vaast_trial = function(){
    database
      .ref("vaast_trial_corona_en/").
      push()
        .set({jspsych_id: jspsych_id,
          vaast_first_block: vaast_first_block,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          vaast_trial_data: jsPsych.data.get().last(3).json()})
  }


// demographic logging ------------------------------------------------------------------

  var saving_browser_events = function(completion) {
    database
     .ref("browser_event_corona_en/")
     .push()
     .set({jspsych_id: jspsych_id,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      vaast_first_block: vaast_first_block,
      completion: completion,
      event_data: jsPsych.data.getInteractionData().json()})
  }

  
  var saving_questions = function() {
    database
     .ref("questions_info_corona_en/")
     .push()
     .set({jspsych_id: jspsych_id,
         timestamp: firebase.database.ServerValue.TIMESTAMP,
          vaast_first_block: vaast_first_block,
         questions_data: jsPsych.data.get().last(6).json(),
        })
  }

  var saving_extra = function() {
    database
     .ref("extra_info_corona_en/")
     .push()
     .set({jspsych_id: jspsych_id,
         timestamp: firebase.database.ServerValue.TIMESTAMP,
          vaast_first_block: vaast_first_block,
         extra_data: jsPsych.data.get().last(8).json(),
        })
  }

// saving blocks ------------------------------------------------------------------------
var save_id = {
    type: 'call-function',
    func: saving_id
}

var save_vaast_trial = {
    type: 'call-function',
    func: saving_vaast_trial
}

var save_questions = {
    type: 'call-function',
    func: saving_questions
}

var save_extra = {
    type: 'call-function',
    func: saving_extra
}

// EXPERIMENT ---------------------------------------------------------------------------
var welcome = {
    type: "html-button-response",
    stimulus:
        "<p class='instructions'><center>" +
        "<img src = 'media/UHH.png'>" +
        "<img src = 'media/UCL.jpg'>" +
        "<img src = 'media/UR.png'>" +
        "<br><b>SCC-Project (Social Contact during the Corona Pandemic)</b>" + 
        "</center></p>" +
        "<p class='instructions'>Thank you for taking part in this study: <b>You make a valuable contribution to scientific research on social " +
        "consequences of the corona pandemic. </b></p>" +
        "<p class='instructions'>During this study, you will complete a simple video game task and answer some questions regarding your behavior and feelings. "+
        "Note that <b>you need a computer and a real (i.e., not a virtual) keyboard </b>to complete the task. </p>" +
        "<p class='instructions'>If you are interested, <b>you can receive an individual analysis of your responses </b>in relation to the average responses of previous participants.</p>" +
        "<p class='instructions'>Completion of the study will take approximately xx minutes. </p>" +
        "<p class='instructions'>By clicking below to start the study, you confirm that:</p>" +
        "<ul class='instructions'>" +
            "<li>You are at least 18 years old. </li>" +
            "<li>You know you can stop your participation at any time </li>" +
            "<li>You know you can contact our team for any questions or dissatisfaction " +
            "at scc-project@ur.de. </li>" + //The principle investigator is PD Dr. Regina Reichardt.
            "<li>You know that you participate anonymously. We do not record any data that allows to personally identify you. We do not record your IP address.</li>" +
            "<li>You know that the anonymous data collected will be shared with researchers via the Open Science Framework.</li>" +
        "</ul>" ,
    choices: ['I confirm that I give my free and informed consent to participate']
};

var fullscreen_trial = {
    type: 'fullscreen',
    message:  '<p><b>Before you start...</b></p>' + 
          '<li>Minimize any potential distractor (close other computer programs, silence your cell phone, etc.). </li>'+
          '<li>Disable your ad-blocking software, which may interfere with data collection. <br><br></li>'+
          '<p>To take part in this study, your browser needs to be set to fullscreen.<br></p>',
    button_label: 'Switch to fullscreen',
    fullscreen_mode: true
  }

var vaast_instructions_1 = {
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

var vaast_instructions_2 = {
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

var vaast_instructions_4 = {
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

var vaast_instructions_5 = {
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

var vaast_instructions_6 = {
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

var vaast_instructions_7 = {
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
    "<li><strong>Move away from <span id='GROUPTOAPPROACH'></span> by pressing the downward arrow key </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTREMELY IMPORTANT: respond as fast and as correctly as possible! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

var feedback = {
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
    "<p class='instructions'><center><b>Try your best to improve your performance in the next section.</b><br>" +
    "<p class='instructions'><center>If you are interested, you will later be able to compare your performance rates<br> with the average performance of previous participants.<br><br>" + 
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue</p>",
  choices: [32]
};

var feedback_lastblock = {
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
    "<p class='instructions'><center>If you are interested, you will later be able to compare your performance rates<br> with the average performance of previous participants.<br><br>" + 
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue</p>",
  choices: [32]
};

// VAAST --------------------------------------------------------------------------------

// Creating a trial ---------------------------------------------------------------------
// Note: vaast_start trial is a dirty hack which uses a regular vaast trial. The correct
// movement is approach and the key corresponding to approach is "h", thus making the
// participant press "h" to start the trial. 

// Ici encore tout est dupliqué pour correspondre aux deux blocs de la vaast, les trials
// et les procédures, training compris.

var vaast_start = {
  type: 'vaast-text',
  stimulus: "o",
  position: 2,
  background_images: background,
  font_sizes:  stim_sizes,
  approach_key: "uparrow",
  stim_movement: "approach",
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_fixation = {
  type: 'vaast-fixation',
  fixation: "+",
  font_size:  46,
  position: 2,
  background_images: background
}

var vaast_first_step_training_1 = {
  type: 'vaast-image',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  font_sizes:  image_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement_1'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step_training_1 = {
  type: 'vaast-image',
  position: next_position_training,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  font_sizes:  image_sizes,
  stim_movement: jsPsych.timelineVariable('movement_1'),
  response_ends_trial: false,
  trial_duration: 650
}

var vaast_first_step_training_2 = {
  type: 'vaast-image',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  font_sizes:  image_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement_2'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step_training_2 = {
  type: 'vaast-image',
  position: next_position_training,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  font_sizes:  image_sizes,
  stim_movement: jsPsych.timelineVariable('movement_2'),
  response_ends_trial: false,
  trial_duration: 650
}

var vaast_first_step_training_3 = {
  type: 'vaast-image',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  font_sizes:  image_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement_3'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step_training_3 = {
  type: 'vaast-image',
  position: next_position_training,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  font_sizes:  image_sizes,
  stim_movement: jsPsych.timelineVariable('movement_3'),
  response_ends_trial: false,
  trial_duration: 650
}

var vaast_first_step_training_4 = {
  type: 'vaast-image',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  font_sizes:  image_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement_4'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step_training_4 = {
  type: 'vaast-image',
  position: next_position_training,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  font_sizes:  image_sizes,
  stim_movement: jsPsych.timelineVariable('movement_4'),
  response_ends_trial: false,
  trial_duration: 650
}

// VAAST training block -----------------------------------------------------------------
var vaast_training_block_1 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_1,
    vaast_second_step_training_1,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim_training,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "training",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_1'),
    group:   jsPsych.timelineVariable('group'),
  },
};

var vaast_test_block_1 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_1,
    vaast_second_step_training_1,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_1'),
    group:   jsPsych.timelineVariable('group'),
  },
  on_finish: function(data) { updateFeedback(36); } // 32 test + 4 training
};

var vaast_training_block_2 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_2,
    vaast_second_step_training_2,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim_training,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "training",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_2'),
    group:    jsPsych.timelineVariable('group'),
  },
};

var vaast_test_block_2 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_2,
    vaast_second_step_training_2,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_2'),
    group:    jsPsych.timelineVariable('group'),
  },
  on_finish: function(data) { updateFeedback(36); }
};

var vaast_test_block_3 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_3,
    vaast_second_step_training_3,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_3'),
    group:    jsPsych.timelineVariable('group'),
  },
  on_finish: function(data) { updateFeedback(32); }
};

var vaast_test_block_4 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_4,
    vaast_second_step_training_4,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim,
  repetitions: 1,
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_4'),
    group:    jsPsych.timelineVariable('group'),
  },
  on_finish: function(data) { updateFeedback(32); }
};

// end fullscreen -----------------------------------------------------------------------

var fullscreen_trial_exit = {
  type: 'fullscreen',
  fullscreen_mode: false
}

  // demographics + questions -------------------------------------------------------------

  var extra_information = {
    type: 'html-keyboard-response',
    stimulus:
      "<p class='instructions'>You are almost done with the study. Please continue to answer some questions.</p>" +
      "<p class='instructions'>If you are interested, you will later be provided with an individual analysis of your answers and can compare your answers to the average answers from previous participants.</p>" +
      "<p class='continue-instructions'>Press <strong>space</strong> to continue.</p>",
    choices: [32]
  };

const questions = englishQuestions;

survey_slider_questions = function(items, preamble) {
  return {
    timeline: [{
      type: 'survey-likert',
      questions: _.map(
        _.pick(questions, items),
        function(question, item_name) {return Object.assign(question, {'name': item_name});}
      ),
      preamble: preamble,
      button_label: "OK",
    }],
    on_load: function () {
          $(".jspsych-survey-likert-statement").css("font-size", "17px");
          $("#jspsych-survey-likert-form").css("width", "800px");
          $("li").css("width", "9%");
        },
    on_finish: function(data) {
      var named_responses = {}
      for (var i = 0; i < items.length; i++) {
        var item_name = items[i];
        named_responses[item_name] = JSON.parse(data.responses)["Q" + i];
      }
      console.log(named_responses);
      jsPsych.data.addProperties(named_responses);
    }
  }
};

  var extra_information_1 = {
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

  var extra_information_2 = {
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

  var extra_information_3 = {
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

  var extra_information_4 = {
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

  var extra_information_5 = {
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
  
  var extra_information_6 = {
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

  var extra_information_7 = {
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


function questionnaire_feedback(feedback_order) {
  return {
    type: "html-keyboard-response",
    on_load: function() {
      updateFeedback(-1);
      document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
      document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
      document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  
      var html = "";
      // inject the css copied from the survey-likert library
      html += '<style id="jspsych-survey-likert-css">';
      html += ".jspsych-survey-likert-statement { display:block; font-size: 16px; padding-top: 40px; margin-bottom:10px; }"+
        ".jspsych-survey-likert-opts { list-style:none; width:100%; margin:0; padding:0 0 35px; display:block; font-size: 14px; line-height:1.1em; }"+
        ".jspsych-survey-likert-opt-label { line-height: 1.1em; color: #444; }"+
        ".jspsych-survey-likert-opts:before { content: ''; position:relative; top:11px; /*left:9.5%;*/ display:block; background-color:#efefef; height:4px; width:100%; }"+
        ".jspsych-survey-likert-opts:last-of-type { border-bottom: 0; }"+
        ".jspsych-survey-likert-opts li { display:inline-block; /*width:19%;*/ text-align:center; vertical-align: top; }"+
        ".jspsych-survey-likert-opts li input[type=radio] { display:block; position:relative; top:0; left:50%; margin-left:-6px; }"
      html += '</style>';

      for (var i=1; i <= feedback_order.length; i+=1) {
        var item = feedback_order[i - 1]
        var question = questions[item];
        //var scale_min_label = question.labels[0].split('<br>');
        //document.getElementById('prompt_' + i).innerHTML = question.prompt;
        //document.getElementById('response_' + i).innerHTML = jsPsych.data.get().select('item_' + i).values[0];
        var answer_given = jsPsych.data.get().select(item).values[0];
        // add question
        html += '<label class="jspsych-survey-likert-statement">' + question.prompt + '</label>';
        // add options
        var width = 100 / question.labels.length;
        var options_string = '<ul class="jspsych-survey-likert-opts" data-radio-group="Q' + i + '">';
        for (var j = 0; j < question.labels.length; j++) {
          options_string += '<li style="width:' + width + '%"><input type="radio" disabled ';
          if (answer_given == j) {
            options_string += 'checked="true"';
          }
          options_string += '><label class="jspsych-survey-likert-opt-label">' + question.labels[j] + '</label></li>';
        }
        options_string += '</ul>';
        html += options_string;
      }
      document.getElementById('RESPONSES').innerHTML = html;
    },
    stimulus:
      "<p class='instructions'><center>Thank You! Here is a summary of your responses.</center><p>" +
      "<div class='instructions' id=REACTIONS>" +
      "Your average Reaction Time has been: <b><span id='FeedbackMeanReactionTime'></span> milli seconds</b><br>" +
      "You reacted <b><span id='FeedbackNumberOfCorrectRespones'></span> of " +
      "<span id='FeedbackNumberOfTotalRespones'></span> times correctly.</b>" +
      "</div>" +
      "<div class='instructions' id='RESPONSES'></div>" +
      "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
    choices: [32]
  }
}

// procedure ----------------------------------------------------------------------------
// Initialize timeline ------------------------------------------------------------------

var timeline = [];

timeline.push(save_id);

timeline.push(
  welcome,
  fullscreen_trial,
  hiding_cursor,
  vaast_instructions_1,
  vaast_instructions_2,
  vaast_instructions_4,
  vaast_training_block_1,
  vaast_test_block_1,
  feedback,
  vaast_instructions_5,
  vaast_training_block_2,
  vaast_test_block_2,
  feedback,
  vaast_instructions_6,
  vaast_test_block_3,
  feedback,
  vaast_instructions_7,
  vaast_test_block_4,
  feedback_lastblock,
  showing_cursor,
  extra_information,
  survey_slider_questions(['item_1', 'item_2', 'item_3'], questions.preamble_situation), // items_contrat_restr_2
  survey_slider_questions(['item_4', 'item_5', 'item_6'], questions.preamble_situation), // items_contrat_restr_2
  survey_slider_questions(['item_7', 'item_8', 'item_9'], questions.preamble_agreement), // items_emotions_1
  survey_slider_questions(['item_10', 'item_11', 'item_12'], questions.preamble_agreement), // items_emotions_2,
  survey_slider_questions(['item_13', 'item_14'], questions.preamble_risk), // items_emotions_3
  survey_slider_questions(['item_15', 'item_16', 'item_17'], questions.preamble_typical_situation), // items_need_contact
  save_questions,
  fullscreen_trial_exit,
  extra_information_1,
  extra_information_2,
  extra_information_3,
  extra_information_4,
  extra_information_5,
  extra_information_6,
  extra_information_7,
  save_extra,
  questionnaire_feedback([
    "item_1", "item_2", "item_3", "item_4", "item_5", "item_6", "item_7", "item_8", "item_9",
    "item_10", "item_11", "item_12", "item_13", "item_14", "item_15", "item_16", "item_17"]
  ),
);

// Launch experiment --------------------------------------------------------------------
// preloading ---------------------------------------------------------------------------
// Preloading. For some reason, it appears auto-preloading fails, so using it manually.
// In principle, it should have ended when participants starts VAAST procedure (which)
// contains most of the image that have to be pre-loaded.
var loading_gif               = ["media/loading.gif"]
var vaast_instructions_images = ["media/UHH.png",
                                 "media/UCL.jpg",
                                 "media/UR.png",
                                 "media/vaast-background.png", 
                                 "media/keyboard-vaastt_en.png",
                                 "media/keyboard-vaastt_fr.png"];
var vaast_bg_filename         = background;

jsPsych.pluginAPI.preloadImages(loading_gif);
jsPsych.pluginAPI.preloadImages(vaast_instructions_images);
jsPsych.pluginAPI.preloadImages(vaast_bg_filename);

// timeline initiaization ---------------------------------------------------------------

if(is_compatible) {
  jsPsych.init({
    timeline: timeline,
    preload_images: preloadimages,
    max_load_time: 1000 * 500,
    exclusions: {
      min_width: 800,
      min_height: 600,
    },
    on_interaction_data_update: function () {
      saving_browser_events(completion = false);
    },
    on_finish: function() {
        saving_browser_events(completion = true);
        jsPsych.data.addProperties({
        vaast_first_block: vaast_first_block,
        });
        window.location.href = "https://www.google.com/";
    }
  });
}


