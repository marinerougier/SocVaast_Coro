
var frenchInstructions = {};

frenchInstructions.persons = "personnes";
frenchInstructions.plants = "plantes";

frenchInstructions.welcome = {
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

frenchInstructions.fullscreen_trial = {
    type: 'fullscreen',
    message:  '<p><b>Avant de commencer...</b></p>' + 
          '<li>Minimisez toute distraction potentielle (fermez les autres programmes informatiques, mettez votre téléphone en silencieux, etc.) </li>'+
          '<li>Désactivez votre logiciel de blocage des publicités : ce genre de logiciel peut interférer avec la récolte des données. <br><br></li>'+
          '<p>Pour participer à cette étude, votre navigateur doit être mis en mode plein écran.<br></p>',
    button_label: 'Passer au mode plein écran',
    fullscreen_mode: true
  }

frenchInstructions.vaast_instructions_1 = {
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

frenchInstructions.vaast_instructions_2 = {
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

frenchInstructions.vaast_task_instructions = function(task_number, total_tasks) {
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
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section <span id='TASKNUMBER'></span>/<span id='TOTALTASKS'></span></h1>" +
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
};

frenchInstructions.feedback = {
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

