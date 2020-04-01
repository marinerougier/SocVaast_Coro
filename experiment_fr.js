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
// address : https://marinerougier.github.io/SocVaast_Coro/index.html
// dirty hack to lock scrolling ---------------------------------------------------------
// note that jquery needs to be loaded.
$('body').css({'overflow':'hidden'});
  $(document).bind('scroll',function () { 
       window.scrollTo(0,0); 
  });

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
    databaseURL: "https://marineexpe.firebaseio.com/"
  };

  firebase.initializeApp(firebase_config);
  var database = firebase.database();

  // prolific variables
  var jspsych_id  = jsPsych.data.getURLVariable("jspsych_id");
   if(jspsych_id == null) {jspsych_id = "999";}
  
  // Preload images
  var preloadimages = [];

  // connection status ---------------------------------------------------------------------
  // This section ensure that we don't lose data. Anytime the 
  // client is disconnected, an alert appears onscreen
  var connectedRef = firebase.database().ref(".info/connected");
  var connection   = firebase.database().ref("VAAST_corona/" + jspsych_id + "/")
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
var group_to_approach_1_en = undefined;
var group_to_avoid_1_en    = undefined;
var movement_human_2    = undefined;
var movement_plant_2    = undefined;
var group_to_approach_2_en = undefined;
var group_to_avoid_2_en    = undefined;
var movement_human_3    = undefined;
var movement_plant_3    = undefined;
var group_to_approach_3_en = undefined;
var group_to_avoid_3_en    = undefined;
var movement_human_4    = undefined;
var movement_plant_4    = undefined;
var group_to_approach_4_en = undefined;
var group_to_avoid_4_en    = undefined;

// Feedback variables - set after every trial, displayed in the feedback pages
var FeedbackMeanReactionTime = undefined;
var FeedbackNumberOfWrongResponses = undefined;
var FeedbackNumberOfCorrectResponses = undefined;

function updateFeedback(numberOfTrials) {
  // Update the global Feedback variables - call this function after every trial
  var responses = jsPsych.data.get().filter([{'key_press': 38}, {'key_press': 40}]);
  // due to the experiment setup, on_finish is also called when no key presses have happend yet.
  // naturally, we need to ignore these cases
  if (responses.values().length < numberOfTrials) {
    return
  }
  FeedbackMeanReactionTime = responses.last(numberOfTrials).select('rt').mean();
  FeedbackNumberOfWrongResponses = responses.last(numberOfTrials).filter({'correct': false}).count();
  FeedbackNumberOfCorrectResponses = responses.last(numberOfTrials).filter({'correct': true}).count();
}

switch(vaast_first_block) {
  case "approach_human":
    movement_human_1    = "approach";
    movement_plant_1    = "avoidance";
    group_to_approach_1_en = "persons";
    group_to_avoid_1_en    = "plants";
    movement_human_2    = "avoidance";
    movement_plant_2    = "approach";
    group_to_approach_2_en = "plants";
    group_to_avoid_2_en    = "persons";
    movement_human_3    = "approach";
    movement_plant_3    = "avoidance";
    group_to_approach_3_en = "persons";
    group_to_avoid_3_en    = "plants";
    movement_human_4    = "avoidance";
    movement_plant_4    = "approach";
    group_to_approach_4_en = "plants";
    group_to_avoid_4_en    = "persons";
    break;

  case "approach_plant":
    movement_human_1    = "avoidance";
    movement_plant_1    = "approach";
    group_to_approach_1_en = "plants";
    group_to_avoid_1_en    = "persons";
    movement_human_2    = "approach";
    movement_plant_2    = "avoidance";
    group_to_approach_2_en = "persons";
    group_to_avoid_2_en    = "plants";
    movement_human_3    = "avoidance";
    movement_plant_3    = "approach";
    group_to_approach_3_en = "plants";
    group_to_avoid_3_en    = "persons";
    movement_human_4    = "approach";
    movement_plant_4    = "avoidance";
    group_to_approach_4_en = "persons";
    group_to_avoid_4_en    = "plants";
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

var vaast_stim_human = _.sampleSize(_.filter(vaast_stim, { 'group': 'human'}), 1); //here, put 4
var vaast_stim_plant = _.sampleSize(_.filter(vaast_stim, { 'group': 'plant'}), 1); // here, put 4

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
        .ref("participant_id_corona/")
        .push()
        .set({jspsych_id: jspsych_id,
               vaast_first_block: vaast_first_block,
               timestamp: firebase.database.ServerValue.TIMESTAMP})
  }

// vaast trial --------------------------------------------------------------------------
  var saving_vaast_trial = function(){
    database
      .ref("vaast_trial_corona/").
      push()
        .set({jspsych_id: jspsych_id,
          vaast_first_block: vaast_first_block,
          timestamp: firebase.database.ServerValue.TIMESTAMP,
          vaast_trial_data: jsPsych.data.get().last(3).json()})
  }


// demographic logging ------------------------------------------------------------------

  var saving_browser_events = function(completion) {
    database
     .ref("browser_event_corona/")
     .push()
     .set({jspsych_id: jspsych_id,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      vaast_first_block: vaast_first_block,
      completion: completion,
      event_data: jsPsych.data.getInteractionData().json()})
  }

  
  var saving_extra = function() {
    database
     .ref("extra_info_corona/")
     .push()
     .set({jspsych_id: jspsych_id,
         timestamp: firebase.database.ServerValue.TIMESTAMP,
          vaast_first_block: vaast_first_block,
         extra_data: jsPsych.data.get().last(7).json(),
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

var save_extra = {
    type: 'call-function',
    func: saving_extra
}


// EXPERIMENT ---------------------------------------------------------------------------
var welcome_fr = {
    type: "html-button-response",
    stimulus:
      "<p class='instructions'><center>" +
      "<img src = 'media/UHH.png'>" +
      "<img src = 'media/UCL.jpg'>" +
      "<img src = 'media/UR.png'>" +
      "<br><b>Projet CSC (Contact Social durant la crise du Coronavirus)</b>" + 
      "</center></p>" +
      "<p class='instructions'>Merci de prendre part à cette étude : <b>Vous apportez une précieuse contribution à la recherche " +
      "sur les conséquences sociales de la crise du coronavirus. </b></p>" +
      "<p class='instructions'>Dans cette étude, vous devrez compléter une tâche simple de jeu vidéo. En cliquant ci-dessous, vous reconnaissez avoir connaissance que :</p>" +
        "<ul class='instructions'>" +
          "<li>Vous pouvez stopper votre participation à tout moment. </li>" +
          "<li>Vous pouvez contacter notre équipe pour n'importe quelle question ou insatisfaction reliée à votre participation" +
          ": EMAIL ADRESS.</li>" +
          "<li>Les données collectées seront strictement confidentielles et uniquement accessibles par des chercheurs.</li>" +
          "<li>Nous n'enregistrerons aucune données permettant de vous identifier personnellement. Nous n'enregistrerons pas votre adresse IP.</li>" +
        "</ul>" ,
    choices: ['Je confirme que je donne mon consentement éclairé pour participer']
};

var fullscreen_trial_fr = {
    type: 'fullscreen',
    message:  '<p><b>Avant de commencer...</b></p>' + 
          '<li>Minimisez toute distraction potentielle (fermez les autres programmes informatiques, mettez votre téléphone en silencieux, etc.) </li>'+
          '<li>Désactivez votre logiciel de blocage des publicités : ce genre de logiciel peut interférer avec la récolte des données. <br><br></li>'+
          '<p>Pour participer à cette étude, votre navigateur doit être mis en mode plein écran.<br></p>',
    button_label: 'Passer au mode plein écran',
    fullscreen_mode: true
  }

var vaast_instructions_1_fr = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo</h1>" +
    "<p class='instructions'>Dans cette tâche, un peu comme dans un jeu vidéo, vous vous trouverez dans le couloir présenté ci-dessous. </p> " +
   "<p class='instructions'> Des dessins représentant soit une personne soit une plante apparaîtront dans ce couloir. </p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};

var vaast_instructions_2_fr = {
    type: "html-keyboard-response",
    stimulus:
      "<h1 class ='custom-title'> Tâche du Jeu Vidéo </h1>" +
      "<p class='instructions'> Votre tâche sera d'aller vers ces dessins ou de vous en éloigner en fonction de leur catégorie " +
      "(des instructions plus spécifiques vont suivre). Pour cela, utiliser les flèches haut/bas de votre clavier : </p>" +
      "<p class='instructions'><center>" +
        "<img src = 'media/keyboard-vaastt_fr.png'>" +
      "</center></p>" +
          "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
    choices: [32]
};

var vaast_instructions_4_fr = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_1_fr;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_1_fr;
  },
  stimulus:
   "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 1/4</h1>" +
    "<p class='instructions'>Dans cette section, vous devez : " +
    "<ul class='instructions'>" +
    "<li><strong>Aller vers les <span id='GROUPTOAPPROACH'></span> en appuyant sur la flèche du haut </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Vous éloigner des <span id='GROUPTOAVOID'></span> en appuyant sur la flèche du bas </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTRÊMEMENT IMPORTANT : répondez aussi rapidement et correctement que possible ! <br><br></strong>" +
    "<p class ='instructions'>Si vous faites une erreur, un X rouge apparaîtra (corrigez votre réponse avec l'autre touche). Utilisez l'index de votre main préférée pour répondre. " +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};

var vaast_instructions_5_fr = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_2_fr;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_2_fr;
  },
  stimulus:
   "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 2/4</h1>" +
    "<p class='instructions'>Attention ! Les instructions changent. Maintenant, vous devez : " +
    "<ul class='instructions'>" +
    "<li><strong>Aller vers les <span id='GROUPTOAPPROACH'></span> en appuyant sur la flèche du haut </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Vous éloigner des <span id='GROUPTOAVOID'></span> en appuyant sur la flèche du bas </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTRÊMEMENT IMPORTANT : répondez aussi rapidement et correctement que possible ! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};

var vaast_instructions_6_fr = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_3_fr;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_3_fr;
  },
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 3/4</h1>" +
    "<p class='instructions'>Attention ! Les instructions changent. Maintenant, vous devez : " +
    "<ul class='instructions'>" +
    "<li><strong>Aller vers les <span id='GROUPTOAPPROACH'></span> en appuyant sur la flèche du haut </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Vous éloigner des <span id='GROUPTOAVOID'></span> en appuyant sur la flèche du bas </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTRÊMEMENT IMPORTANT : répondez aussi rapidement et correctement que possible ! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};

var vaast_instructions_7_fr = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_4_fr;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_4_fr;
  },
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 4/4</h1>" +
    "<p class='instructions'>Attention ! Les instructions changent. Maintenant, vous devez : " +
    "<ul class='instructions'>" +
    "<li><strong>Aller vers les <span id='GROUPTOAPPROACH'></span> en appuyant sur la flèche du haut </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Vous éloigner des <span id='GROUPTOAVOID'></span> en appuyant sur la flèche du bas </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> EXTRÊMEMENT IMPORTANT : répondez aussi rapidement et correctement que possible ! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};

var feedback_fr = {
    type: "html-keyboard-response",
    on_load: function() {
      document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
      document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
      document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
    },
    stimulus:
      "<p class='instructions'><center>Bien joué !<br><br>" + 
      "Voici votre temps moyen de réaction : <span id='FeedbackMeanReactionTime'></span> millisecondes<br>" +
      "Vous avez réagi <span id='FeedbackNumberOfCorrectRespones'></span> sur " +
      "<span id='FeedbackNumberOfTotalRespones'></span> fois correctement." +
      "</p></center>" +
      "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer</p>",
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
const NUMBEROFREPETITIONS_TRAINING_BLOCK_1 = 1;
var vaast_training_block_1 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_1,
    vaast_second_step_training_1,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim_training,
  repetitions: NUMBEROFREPETITIONS_TRAINING_BLOCK_1, //here, put 2
  randomize_order: true,
  data: {
    phase:    "training",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_1'),
    group:   jsPsych.timelineVariable('group'),
  },
  // Note: you need to multiply by 2, because there are two examples for every repetition
  on_finish: function(data) { updateFeedback(2 * NUMBEROFREPETITIONS_TRAINING_BLOCK_1); }
};

const NUMBEROFREPETITIONS_TEST_BLOCK_1 = 1;
var vaast_test_block_1 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_1,
    vaast_second_step_training_1,
    save_vaast_trial
  ],
  timeline_variables: sample_n(vaast_stim, 2),
  //repetitions: NUMBEROFREPETITIONS_TEST_BLOCK_1,  //here, put 2
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_1'),
    group:   jsPsych.timelineVariable('group'),
  },
  // I'm not sure, I'm using NUMBEROFREPETITIONS_TEST_BLOCK_1 correctly here, but I'm sure you can verify.
  on_finish: function(data) { updateFeedback(2 * (NUMBEROFREPETITIONS_TRAINING_BLOCK_1 + NUMBEROFREPETITIONS_TEST_BLOCK_1)); }
};

const NUMBEROFREPETITIONS_TRAINING_BLOCK_2 = 1;
var vaast_training_block_2 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_2,
    vaast_second_step_training_2,
    save_vaast_trial
  ],
  timeline_variables: vaast_stim_training,
  repetitions: NUMBEROFREPETITIONS_TRAINING_BLOCK_2,  //here, put 2
  randomize_order: true,
  data: {
    phase:    "training",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_2'),
    group:    jsPsych.timelineVariable('group'),
  },
  on_finish: function(data) { updateFeedback(2 * NUMBEROFREPETITIONS_TRAINING_BLOCK_2); }
};

const NUMBEROFREPETITIONS_TEST_BLOCK_2 = 1;
var vaast_test_block_2 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_2,
    vaast_second_step_training_2,
    save_vaast_trial
  ],
  timeline_variables: sample_n(vaast_stim, 2),
  //repetitions: NUMBEROFREPETITIONS_TEST_BLOCK_2,  //here, put 2
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_2'),
    group:    jsPsych.timelineVariable('group'),
  },
  on_finish: function(data) { updateFeedback(2 * (NUMBEROFREPETITIONS_TRAINING_BLOCK_2 + NUMBEROFREPETITIONS_TEST_BLOCK_2)); }
};

const NUMBEROFREPETITIONS_TEST_BLOCK_3 = 1;
var vaast_test_block_3 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_3,
    vaast_second_step_training_3,
    save_vaast_trial
  ],
  timeline_variables: sample_n(vaast_stim, 2),
  //repetitions: NUMBEROFREPETITIONS_TEST_BLOCK_3,  //here, put 2
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_3'),
    group:    jsPsych.timelineVariable('group'),
  },
  // we had no training here, so only the test repetitions
  on_finish: function(data) { updateFeedback(2 * NUMBEROFREPETITIONS_TEST_BLOCK_3); }
};

const NUMBEROFREPETITIONS_TEST_BLOCK_4 = 1;
var vaast_test_block_4 = {
  timeline: [
    //vaast_start,
    vaast_fixation,
    vaast_first_step_training_4,
    vaast_second_step_training_4,
    save_vaast_trial
  ],
  timeline_variables: sample_n(vaast_stim, 2),
  //repetitions: NUMBEROFREPETITIONS_TEST_BLOCK_3,  //here, put 2
  randomize_order: true,
  data: {
    phase:    "test",
    stimulus: jsPsych.timelineVariable('stimulus'),
    movement: jsPsych.timelineVariable('movement_4'),
    group:    jsPsych.timelineVariable('group'),
  },
  // no training here
  on_finish: function(data) { updateFeedback(2 * NUMBEROFREPETITIONS_TEST_BLOCK_4); }
};

// end fullscreen -----------------------------------------------------------------------

var fullscreen_trial_exit = {
  type: 'fullscreen',
  fullscreen_mode: false
}

  // demographics + questions -------------------------------------------------------------
var extra_information_fr = {
    type: 'html-keyboard-response',
    stimulus:
      "<p class='instructions'>Cette étude est presque terminée. Vous allez maintenant devoir répondre à quelques questions.</p>" +
      "<p class='continue-instructions'>Appuyez sur <strong>espace</strong> pour continuer.</p>",
    choices: [32]
  };

var extra_information_2_fr = {
    timeline: [{
      type: 'survey-text',
      questions: [{prompt: "Quel est votre âge ?"}],
      button_label: "OK",
    }],
    loop_function: function(data) {
      var extra_information_2 = data.values()[0].responses;
      var extra_information_2 = JSON.parse(extra_information_2).Q0;
      if (extra_information_2 == "") {
        alert("Veuillez indiquer votre âge !");
        return true;
      }
    },
    on_finish: function(data) {
      jsPsych.data.addProperties({
        extra_information_2: JSON.parse(data.responses)["Q0"],
      });
    }
  }


var extra_information_3_fr = {
    type: 'survey-multi-choice',
    questions: [{prompt: "Quel est votre genre ?", options: ["&nbspHomme", "&nbspFemme", "&nbspAutre"], required: true, horizontal: true}],
    button_label: "OK"
  }

var extra_information_4_fr = {
    type: 'survey-multi-choice',
    questions: [{prompt: "Dans quelle mesure parlez-vous bien français ?",
                 options: ["&nbspLangue maternelle", "&nbspTrès bien", "&nbspBien", "&nbspMoyennement", "&nbspMal", "&nbspTrès mal"],
                 required: true, horizontal: false}],
    button_label: "OK"
  }

var extra_information_5_fr = {
    type: 'survey-multi-choice',
    questions: [{prompt: "Quel est votre statut socio-économique ?",
                 options: ["&nbspTrès bas", "&nbspBas", "&nbspMoyen", "&nbspHaut", "&nbspTrès haut"],
                 required: true, horizontal: false}],
    button_label: "OK"
  }

var extra_information_6_fr = {
    type: 'survey-multi-choice',
    questions: [{prompt: "Quel est votre niveau d'études ?",
                 options: ["&nbspEn dessous du baccalauréat", "&nbspBaccalauréat (obtenu)", "&nbspEn dessous de la licence universitaire", "&nbspLicence universitaire (obtenue)", "&nbspMaster (obtenu)", "&nbspDoctorat (obtenu)"],
                 required: true, horizontal: false}],
    button_label: "OK"
  }

var extra_information_7_fr = {
    type: 'survey-text',
    questions: [{prompt: "Avez-vous des remarques concernant cette étude ? [Optionnel]"}],
    button_label: "OK"
  }


  // end insctruction ---------------------------------------------------------------------
var ending_fr = {
    type: "html-keyboard-response",
    stimulus:
      "<p class='instructions'>Vous avez terminé cette étude.<p>" +
      "<p class='instructions'>Dans cette étude, notre but était de mesurer les " +
      "tendances comportementales d'approche et d'évitement. Spécifiquement, nous voulons tester si le confinement dû au coronavirus " +
      "influence les tendances comportementales d'approche envers autrui (en comparaison aux plantes). Effectivement, on pourrait s'attendre à ce que l'habitude que nous prenons à éviter autrui </p>" +
      "<p class='instructions'>devienne automatique et s'ancre dans nos tendances comportementales. Au contraire, une autre possibilité est que les personnes deviennent très motivées " +
      "à approcher autrui parce qu'elles se sentent seules. </p>" +
      "<p class='instructions'>Pour plus d'informations à ce sujet, envoyez-nous un email : " +
      "marine.rougier@uclouvain.be</p>" +
      "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour VALIDER votre participation.</p>",
    choices: [32]
  };

// procedure ----------------------------------------------------------------------------
// Initialize timeline ------------------------------------------------------------------

var timeline = [];

timeline.push(save_id);

timeline.push(
  welcome_fr,
  fullscreen_trial_fr,
  hiding_cursor,
  vaast_instructions_1_fr,
  vaast_instructions_2_fr,
  vaast_instructions_4_fr,
  vaast_training_block_1,
  vaast_test_block_1,
  feedback_fr,
  vaast_instructions_5_fr,
  vaast_training_block_2,
  vaast_test_block_2,
  feedback_fr,
  vaast_instructions_6_fr,
  vaast_test_block_3,
  feedback_fr,
  vaast_instructions_7_fr,
  vaast_test_block_4,
  feedback_fr,
  showing_cursor,
  fullscreen_trial_exit,
  extra_information_fr,
  extra_information_2_fr,
  extra_information_3_fr,
  extra_information_4_fr,
  extra_information_5_fr,
  extra_information_6_fr,
  extra_information_7_fr,
  save_extra,
  ending_fr
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
        //window.location.href = "https://google.com";
    }
  });
}

