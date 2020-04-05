
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
        "<br><b>Projet CSC (Contact Social durant la pandémie du Coronavirus)</b>" + 
        "</center></p>" +
        "<p class='instructions'>Merci de prendre part à cette étude : <b>Vous apportez une précieuse contribution à la recherche scientifique sur les " +
        "conséquences sociales de la pandémie du coronavirus. </b></p>" +
        "<p class='instructions'>Durant cette étude, vous devrez répondre à quelques questions sur vos comportements et ressentis et compléter une tâche simple de jeu vidéo. "+
        "Notez que <b>vous avez besoin d'un ordinateur et d'un vrai clavier (c'est-à-dire non virtuel) </b>pour effectuer la tâche. </p>" +
        "<p class='instructions'>Si vous êtes intéressé.e, <b>vous recevrez une analyse individuelle de vos réponses </b>en relation avec les réponses moyennes des participants précédents.</p>" +
        "<p class='instructions'>L'étude prendra environ 10-15 minutes. </p>" +
        "<p class='instructions'>En cliquant ci-dessous pour commencer l'étude, vous confirmez que :</p>" +
        "<ul class='instructions'>" +
            "<li>Vous avez au moins 18 ans. </li>" +
            "<li>Vous savez que vous pouvez interrompre votre participation à tout moment. </li>" +
            "<li>Vous savez que vous pouvez contacter notre équipe pour toute question ou insatisfaction " +
            "à l'adresse : scc-project@ur.de. </li>" + //The principle investigator is PD Dr. Regina Reichardt.
            "<li>Vous savez que vous participez de manière anonyme. Nous n'enregistrons aucune donnée permettant de vous identifier personnellement. Nous n'enregistrons pas votre adresse IP.</li>" +
            "<li>Vous savez que les données anonymes collectées seront partagées avec les chercheurs via le site Open Science Framework.</li>" +
        "</ul>" ,
    choices: ['Je confirme que je donne mon consentement libre et éclairé pour participer']
};

frenchInstructions.fullscreen_trial = {
  type: 'fullscreen',
    message:  '<p><b>Avant de commencer...</b></p>' + 
          '<li>Minimisez tout distracteur potentiel (fermez les autres programmes informatiques, mettez votre téléphone portable en mode silencieux, etc.). </li>'+
          '<li>Désactivez votre logiciel de blocage des publicités car il peut interférer avec la collecte de données. <br><br></li>'+
          '<p>Pour participer à cette étude, votre navigateur doit être configuré en mode plein écran.<br></p>',
    button_label: 'Passer au mode plein écran',
  fullscreen_mode: true
}

frenchInstructions.vaast_instructions_0 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo </h1>" +
    "<p class='instructions'>Nous allons maintenant vous demander d'effectuer une tâche qui mesure <b>les tendances spontannées d'approche et d'évitement envers les individus.</b></p> " +
    "<p class='instructions'>La réalisation de cette tâche peut être un peu fastidieuse car elle nécessite de nombreuses répétitions des mêmes réactions.</b> " +
    "Cependant, pour une mesure fiable des tendances comportementales, il est très important d'avoir toutes ces répétitions. </p> " +
   "<p class='instructions'> Par conséquent, <b>merci de ne pas abandonner.</b> "+
   "Par votre participation, vous apportez une précieuse contribution à une meilleure compréhension des conséquences sociales de la pandémie du coronavirus. </p>" +
    "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};

frenchInstructions.vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo </h1>" +
    "<p class='instructions'>Dans cette tâche, un peu comme dans un jeu vidéo, vous vous trouverez dans le couloir présenté ci-dessous.</p> " +
    "<p class='instructions'>Merci <b>d'imaginer que toutes les circonstances de votre vie actuelle s'appliquent à la situation dans le couloir.</b> " +
    "Imaginez-vous en train de marcher dans le couloir comme vous pouvez le faire dans votre vie quotidienne. </p> " +
   "<p class='instructions'> Au bout de ce couloir, <b>des dessins de personnes ou de plantes vous seront présentés.</b> "+
   "Imaginez que ces personnes et ces plantes sont réelles, tout comme les personnes ou les plantes que vous voyez peut-être dans votre vie quotidienne, en ce moment. </p>" +
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
      "<p class='instructions'> Votre tâche sera d'aller vers les personnes ou les plantes ou de vous en éloigner " +
      "(des instructions plus spécifiques vont suivre). Pour cela, utiliser les flèches haut/bas de votre clavier : </p>" +
      "<p class='instructions'><center>" +
        "<img src = 'media/keyboard-vaastt_fr.png'>" +
      "</center></p>" +
          "<br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
    choices: [32]
};

frenchInstructions.vaast_instructions_4 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_1;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_1;
  },
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 1/4</h1>" +
    "<p class='instructions'>Dans cette section vous devez : " +
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

frenchInstructions.vaast_instructions_5 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_2;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_2;
  },
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 2/4</h1>" +
    "<p class='instructions'>Attention ! Maintenant les instructions s'inversent. Vous devez : " +
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

frenchInstructions.vaast_instructions_6 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_3;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_3;
  },
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 3/4</h1>" +
    "<p class='instructions'>Attention ! Maintenant les instructions s'inversent. Vous devez : " +
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

frenchInstructions.vaast_instructions_7 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_4;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_4;
  },
  stimulus:
    "<h1 class ='custom-title'> Tâche du Jeu Vidéo - Section 4/4</h1>" +
    "<p class='instructions'>Attention ! Maintenant les instructions s'inversent. Vous devez : " +
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

frenchInstructions.feedback_firstblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Bien joué !<br><br>" + 
    "Voici votre temps moyen de réaction : <b><span id='FeedbackMeanReactionTime'></span> millisecondes</b><br>" +
    "Vous avez réagi <b><span id='FeedbackNumberOfCorrectRespones'></span> sur " +
    "<span id='FeedbackNumberOfTotalRespones'></span> fois correctement.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Faites de votre mieux pour améliorer votre performance à la prochaine section.<br>" +
    "<p class='instructions'><center>Même si la tâche peut sembler un peu fastidieuse, n’abandonnez pas. La réalisation de cette tâche aide la science <br> à mieux comprendre "+
    "comment la pandémie du coronavirus affecte les tendances comportementales spontanées envers autrui.</b><br>" +
    "<p class='instructions'><center>Si vous êtes intéressé.e, vous pourrez par la suite comparer votre performance <br> avec la performance moyenne des participants précédents.<br><br>" + 
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
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
    "Voici votre temps moyen de réaction : <b><span id='FeedbackMeanReactionTime'></span> millisecondes</b><br>" +
    "Vous avez réagi <b><span id='FeedbackNumberOfCorrectRespones'></span> sur " +
    "<span id='FeedbackNumberOfTotalRespones'></span> fois correctement.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Faites de votre mieux pour améliorer votre performance à la prochaine section.<br>" +
    "<p class='instructions'><center>Même si la tâche peut sembler un peu fastidieuse, n’abandonnez pas. La réalisation de cette tâche aide la science <br> à mieux comprendre "+
    "comment la pandémie du coronavirus affecte les tendances comportementales spontanées envers autrui.</b><br>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};

frenchInstructions.feedback_lastblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Bien joué !<br><br>" + 
    "Voici votre temps moyen de réaction : <b><span id='FeedbackMeanReactionTime'></span> millisecondes</b><br>" +
    "Vous avez réagi <b><span id='FeedbackNumberOfCorrectRespones'></span> sur " +
    "<span id='FeedbackNumberOfTotalRespones'></span> fois correctement.</b>" +
    "</p></center>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
  choices: [32]
};


  frenchInstructions.extra_information = {
    type: 'html-keyboard-response',
    stimulus:
      "<p class='instructions'>Vous allez commencer par répondre à quelques questions.</p>" +
      "<p class='instructions'>Si vous êtes intéressé.e, vous pourrez par la suite avoir une analyse individuelle de vos réponses et ainsi les comparer avec les réponses moyennes des participants précédents.</p>" +
    "<p class = 'continue-instructions'>Appuyez sur <strong>espace</strong> pour" +
    " continuer.</p>",
    choices: [32]
  };

