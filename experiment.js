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
  FeedbackMeanReactionTime = responses.select('rt').mean().toFixed(0);
  FeedbackNumberOfWrongResponses = responses.filter({'correct': false}).count();
  FeedbackNumberOfCorrectResponses = responses.filter({'correct': true}).count();
}

switch(vaast_first_block) {
  case "approach_human":
    movement_human_1    = "approach";
    movement_plant_1    = "avoidance";
    movement_human_2    = "avoidance";
    movement_plant_2    = "approach";
    movement_human_3    = "approach";
    movement_plant_3    = "avoidance";
    movement_human_4    = "avoidance";
    movement_plant_4    = "approach";
    break;

  case "approach_plant":
    movement_human_1    = "avoidance";
    movement_plant_1    = "approach";
    movement_human_2    = "approach";
    movement_plant_2    = "avoidance";
    movement_human_3    = "avoidance";
    movement_plant_3    = "approach";
    movement_human_4    = "approach";
    movement_plant_4    = "avoidance";
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
    // with the tag here, its always just one item that has them all, the last one is the complete one
    var questions_data = jsPsych.data.get().filter({tag: "questions_data"}).last(1).values()[0];
    console.log("saving questions: ", questions_data);
    database
     .ref("questions_info_corona_en/")
     .push()
     .set({jspsych_id: jspsych_id,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        vaast_first_block: vaast_first_block,
        // here, too, we should not use a number but rather a tag
        //questions_data: jsPsych.data.get().last(6).json(),
        questions_data: questions_data,
      })
  }

  var saving_extra = function() {
    // with the tag, its always just one item that has them all
    var extra_data = jsPsych.data.get().filter({tag: "extra_data"}).last(1).values()[0];
    console.log("saving extra: ", extra_data);
    database
     .ref("extra_info_corona_en/")
     .push()
     .set({jspsych_id: jspsych_id,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        vaast_first_block: vaast_first_block,
        // having this number hardcoded here is a recipe for desaster ....
        // better tag your data
        // extra_data: jsPsych.data.get().last(8).json(),
        extra_data: extra_data
      })
  }

  var saving_email = function(data) {
    // with the tag here, its always just one item that has them all
    if (data.email) {
      console.log("saving email: ", data);
      database
      .ref("email_contacts/")
      .push()
      .set({
          email: data.email,
          info_requested: data.info_requested,
          language: selected_language, // we save the language with the email se we can address people
        });
      } else {
        console.log('no email was saved');
      }
  }

// I suggest adding the language to all datapoints using add_properties
// Plus, we also have a global variable: selected language
/*
var saving_language = function() {
  database
    .ref("language_info_corona_en/")
    .push()
    .set({jspsych_id: jspsych_id,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        vaast_first_block: vaast_first_block,
        language_data: jsPsych.data.get().last(1).json(),
      })
}
*/

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

// I suggest adding the language to all datapoints using add_properties
// Plus, we also have a global variable: selected language
/*
var save_language = {
    type: 'call-function',
    func: saving_language
}
*/

// EXPERIMENT ---------------------------------------------------------------------------
const LANGUAGECHOICES = ['English', 'Français'];
var selected_language = LANGUAGECHOICES[0];

// english as default
var instructions = englishInstructions;
var questions = englishInstructions;
var demo = englishDemo;

function set_language(language) {
  console.log(language + ' selected');
  // french
  switch (language) {
    case LANGUAGECHOICES[1]:  
      instructions = frenchInstructions;
      questions = frenchQuestions;
      demo = frenchDemo;
      break;
    default:
      instructions = englishInstructions;
      questions = englishQuestions;
      demo = englishDemo;
  }
  // update the description variables with the right names
  // this is not pretty, but works - I'd much rather put the entire experiment setup in an object
  for (var i=1; i <= 4; i += 1) {
    window['group_to_approach_' + i] = window['movement_human_' + i] == 'approach' ? instructions.persons : instructions.plants;
    window['group_to_avoid_' + i] = window['movement_human_' + i] == 'approach' ? instructions.plants : instructions.persons;
  }
}

var languageSelection = {
  type: "html-button-response",
  stimulus: "<p class='instructions'><center>Please choose a language:</p></center>",
  choices: LANGUAGECHOICES,
  on_finish: function(data) {
    selected_language = LANGUAGECHOICES[parseInt(data.button_pressed)]
    set_language(selected_language);
    // add language to all data points
    jsPsych.data.addProperties({selected_language: selected_language});
  }
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
var items_to_give_feedback_on = [];
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
      // we only give feedback on the items that were actually shown
      _.forEach(items, function(item) {items_to_give_feedback_on.push(item);})
    },
    on_finish: function(data) {
      console.log(data.responses);
      // in case you want to add these responses to all data entries, do this:
      jsPsych.data.addProperties(JSON.parse(data.responses));
      // add the tag only to the last
      jsPsych.data.get().addToLast({tag: "questions_data"});
    }
  }
};

function questionnaire_feedback(feedback_order) {
  return {
    type: "html-button-response",
    on_load: function() {
      // make the download possible - this only puts the visible part of the page into the image...
      /*
      $('#downloadPDF').click(function () {
        domtoimage.toPng(document.getElementById('FEEDBACK'))
            .then(function (blob) {
                var pdf = new jsPDF('l', 'pt', [$('#FEEDBACK').width() + 40, $('#FEEDBACK').height()]);
                // the 40 / 20 is needed to center the image in the pdf
                pdf.addImage(blob, 'PNG', 20, 0, $('#FEEDBACK').width(), $('#FEEDBACK').height());
                pdf.save("feedback.pdf");
    
                that.options.api.optionsChanged();
            });
      });
      */
      //undefine email, otherwise we take the old one
      window.email = undefined;
      // populate reaction feedback
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
      `<div class='instructions' id=FEEDBACK>
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
      `,
    choices: ['Finish Study'],
    on_finish: function(data) {
      // this would add the email to every data point collected,
      // exactly what you promise not to do....
      //jsPsych.data.addProperties({
      var data_to_save =  {
        email: window.email,
        info_requested: 'feedback'
      };
      saving_email(data_to_save);
    }
  }
}

var conditional_questions = {
    timeline: [survey_slider_questions(['item_2', 'item_3'], questions.preamble_situation)]
}

// procedure ----------------------------------------------------------------------------
// Initialize timeline ------------------------------------------------------------------

var timeline = [];

var setup_experiment = {
  type: 'call-function',
  func: function(){
    jsPsych.pauseExperiment();
    jsPsych.addNodeToEndOfTimeline(
      {
        timeline: [

          instructions.welcome,
          instructions.fullscreen_trial,
          hiding_cursor,
          instructions.vaast_instructions_1,
          instructions.vaast_instructions_2,
          instructions.vaast_instructions_4,
          vaast_training_block_1,
          vaast_test_block_1,
          instructions.feedback,
          instructions.vaast_instructions_5,
          vaast_training_block_2,
          vaast_test_block_2,
          instructions.feedback,
          instructions.vaast_instructions_6,
          vaast_test_block_3,
          instructions.feedback,
          instructions.vaast_instructions_7,
          vaast_test_block_4,
          instructions.feedback_lastblock,
          showing_cursor,
          instructions.extra_information,
          
          survey_slider_questions(['item_1', 'item_2'], questions.preamble_apply_situation),
          { //ask item_3 only if item_1 was not zero
            timeline: [survey_slider_questions(['item_3'], "")],
            conditional_function: function(){ return jsPsych.data.getLastTrialData().values()[0].item_1 != 0;}
          },
          survey_slider_questions(['item_4', 'item_5', 'item_6'], questions.preamble_apply_you),
          survey_slider_questions(['item_7', 'item_8'], questions.preamble_apply_you),
          questions.item_9,
          {
            //ask item_10 - item 13 only if item 9 was not Yes
            timeline: [survey_slider_questions(['item_10', 'item_11', 'item_12', 'item_13'], questions.preamble_agreement)],
            conditional_function: function() { return !jsPsych.data.getLastTrialData().values()[0].item_9.includes("Yes");}
          },
          survey_slider_questions(['item_14', 'item_15'], questions.preamble_agreement),
          survey_slider_questions(['item_16', 'item_17', 'item_18'], questions.preamble_apply_typical),
          save_questions,
          
          englishDemo.extra_information_1,
          englishDemo.extra_information_2,
          save_extra,
  
          demo.extra_information_3,
          { // show feedback only if desired
            timeline: [questionnaire_feedback(items_to_give_feedback_on)],
            conditional_function: function() { return jsPsych.data.getLastTrialData().values()[0].button_pressed == 1; }
          },
          fullscreen_trial_exit
        ]
      },
      jsPsych.resumeExperiment
    );
  }
}

// prolific verification
timeline.push(save_id);

timeline.push(
  languageSelection,
  //save_language, // I suggest saving the language directly to the datapoints and in the global variable selected_language
  setup_experiment
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
        //window.location.href = "https://www.google.com/";
    }
  });
}


