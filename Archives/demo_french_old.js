
var frenchDemo = {};

frenchDemo.extra_information_1 = {
    timeline: [{
      type: 'survey-text',
      questions: [{prompt: "Quel est le pays de votre résidence actuelle ?", name: 'country', required: true},
                  {prompt: "Merci d'indiquer le code postal de votre résidence actuelle :", name: 'zip', required: true},
                  {prompt: "Quel est votre âge ?", name: 'age', required: true}],
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

frenchDemo.extra_information_2 = {
    timeline: [{
    type: 'survey-multi-choice',
    questions: [{prompt: "Quel est votre genre ?", options: ["&nbspHomme", "&nbspFemme", "&nbspAutre"], required: true, horizontal: true}],
    button_label: "OK"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        sex: JSON.parse(data.responses)["Q0"],
      });
    }
  }

frenchDemo.extra_information_3 = {
    timeline: [{
      type: 'survey-text',
      questions: [{prompt: "En dehors de vous, combien de membres de votre famille ou de proches (excepté les amis et les colocataires) habitent dans votre logement ?<br> Merci d'indiquer le nombre exact ci-dessous. Si vous vivez seul.e, indiquez 0.", name: 'nb_family', required: true},
                  {prompt: "En dehors de vous, combien d'amis ou colocataires (excepté les membres de votre famille ou les proches) habitent dans votre logement ?<br> Merci d'indiquer le nombre exact ci-dessous. Si vous vivez seul.e, indiquez 0.", name: 'nb_friends', required: true}],
      button_label: "OK",
    }],
    on_finish: function(data) {
      jsPsych.data.addProperties({
        nb_family: JSON.parse(data.responses)["nb_family"],
        nb_friends: JSON.parse(data.responses)["nb_friends"],
      });
    }
  }

frenchDemo.extra_information_4 = {
    timeline: [{
    type: 'survey-multi-choice',
    questions: [{prompt: "Avez-vous un contact professionnel avec des patients du coronavirus (par ex. en tant qu'infirmier.ère, médecin, etc.) ?", options: ["&nbspOui", "&nbspNon"], required: true, horizontal: false}],
    button_label: "OK",
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        occupation: JSON.parse(data.responses)["Q0"],
      });
    }
  }

frenchDemo.extra_information_5 = {
    timeline: [{
    type: 'survey-multi-choice',
    questions: [{prompt: "Cela vous intéresse-t-il de recevoir un feedback individuel de vos réponses <br>en comparaison aux réponses moyennes de tous les participant.es ?", 
    options: ["&nbspOui", "&nbspNon"], required: true, horizontal: false}],
    button_label: "OK"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        feedback: JSON.parse(data.responses)["Q0"],
      });
    }
  }
  
frenchDemo.extra_information_6 = {
    timeline: [{
    type: 'survey-text',
    questions: [{prompt: "Veuillez décrire vos difficultés techniques (le cas échéant) :"}],
    button_label: "Continuer"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        tech_diff: JSON.parse(data.responses)["Q0"],
      });
    }
  }

frenchDemo.extra_information_7 = {
    timeline: [{
    type: 'survey-text',
    questions: [{prompt: "Email:"}],
    preamble: "<br><b>L'étude est terminée. Merci beaucoup pour votre participation ! <br>" + 
    "Aidez-nous à recruter autant de personnes que possible pour participer à cette étude <br>en partageant le lien sur les réseaux sociaux ou en l'envoyant par e-mail à vos amis !!!!! METTEZ LE LIEN ICI !!!!!. Un grand merci ! </b><br><br>Si vous souhaitez recevoir des invitations à de futures études ou recevoir <br>plus d'informations sur le projet CSC, veuillez indiquer votre adresse e-mail ci-dessous. <br>Votre adresse e-mail sera stockée séparément de vos réponses à l'étude. <br> Il n'est pas possible de connecter votre adresse e-mail à vos réponses. <br> <br> Si vous n'êtes pas intéressé, veuillez continuer.<br><br>",
    button_label: "Continuer"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        email: JSON.parse(data.responses)["Q0"],
      });
    }
  }


