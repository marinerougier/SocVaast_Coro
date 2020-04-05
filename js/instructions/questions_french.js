var frenchQuestions = {};

frenchQuestions.preamble_apply_situation = "<br><b>Merci d'indiquer ce qui s'applique à votre situation.</b><br><br>";
frenchQuestions.preamble_apply_you = "<br><b>Merci d'indiquer ce qui s'applique à vous.</b><br><br>";
frenchQuestions.preamble_agreement = "<br><b>Merci d'indiquer votre degré d'accord.</b><br><br>";
frenchQuestions.preamble_apply_typical = "<br><b>Merci d'indiquer dans quelle mesure chacune de ces informations s'applique typiquement à vous, <br><u>indépendamment</u> de la situation actuelle. </b><br><br>";


frenchQuestions.item_1 = {
  prompt: "L'administration a actuellement mis en place des politiques dans ma région qui restreignent les contacts sociaux directs en face à face (politiques de distanciation sociale).<br>",
  labels: ["<br>1<br> pas de restrictions du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> restrictions extrêmes"],
  required: true
};

frenchQuestions.item_2= {
  prompt: "Je pense que dans ma région le contact social devrait... <br>(sélectionnez 0 si vous trouvez que les régulations actuelles sont appropriées)",
  labels: ["<br>-3<br> être moins restreint", "<br>-2", "<br>-1", "<br>0", "<br>1", "<br>2", "<br>3<br> être plus restreint"],
  required: true                                                                                    
};

frenchQuestions.item_3 = {
    prompt: "A titre personnel, le niveau de mes contacts sociaux directs (c'est-à-dire en face à face) est actuellement limité en raison des politiques de distanciation sociale mises en place dans ma région.<br>",
    labels: ["<br>1<br> pas du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> extrêmement"],
    required: true  
  };

frenchQuestions.item_4 = {
  prompt: "Je garde actuellement mes distances avec les autres personnes dans l'espace public.<br>",
  labels: ["<br>1<br> pas du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement"],
  required: true
};

frenchQuestions.item_5 = {
  prompt: "Quelle quantité de contacts sociaux directs (c'est-à-dire en face à face) avez-vous actuellement?<br>",
  labels: ["<br>1<br> très peu", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> beaucoup"],
  required: true
};  
      
frenchQuestions.item_6 = {
  prompt: "Quelle quantité de contacts sociaux avez-vous actuellement via des appels téléphoniques/vidéo, les réseaux sociaux ou par mail?<br>",
  labels: ["<br>1<br> très peu", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> beaucoup"],
  required: true
};

frenchQuestions.item_7 = {
  prompt: "Actuellement, je me sens seule.e.<br>",
  labels: ["<br>1<br> pas du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement"],
  required: true
};

frenchQuestions.item_8 = {
  prompt: "Actuellement, j'ai un fort besoin de contact social direct (c'est-à-dire en face à face).<br>",
  labels: ["<br>1<br> pas du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement"],
  required: true
};


frenchQuestions.item_9 = {
  timeline: [{
    type: 'survey-html-form',
    html: `
        <div class='instructions' style='text-align:center'>
        <p>Merci de sélectionner ce qui s'applique à vous.</p>
        <p>J'étais/je suis actuellement infecté.e par le coronavirus.</p></div>
        <p>
            <label><input type='radio' name='item_9' value="1" required>&nbsp oui &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="2" required>&nbsp non &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="3" required>&nbsp je ne sais pas &nbsp&nbsp</label>
        </p>
        </div>
    `,
    button_label: "OK"
  }],
  on_finish: function(data) {
    console.log(data.responses);
    jsPsych.data.addProperties(JSON.parse(data.responses));
    jsPsych.data.get().addToLast({tag: "questions_data"});
  }
}


frenchQuestions.item_10 = {
  prompt: "J'ai très peur d'être infecté par le coronavirus.<br>",
  name: 'item_9', labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_11 = {
  prompt: "J'ai très peur de représenter un danger pour les autres parce que je pourrais être infecté.e sans le savoir.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_12 = {
    prompt: "Compte tenu de votre situation actuelle, à quel point jugez-vous probable le risque d'être infecté par le coronavirus?<br>",
    labels: ["<br>1<br> pas de risque du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> risque très élevé"],
    required: true
  };

frenchQuestions.item_13 = {
  prompt: "Compte tenu de vos conditions de santé préalables (antécédents, âge, etc.), à quel point jugez-vous probable le risque de développer une forme sévère du coronavirus, en cas d'infection ?<br>",
  labels: ["<br>1<br> pas de risque du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> risque très élevé"],
  required: true
};

frenchQuestions.item_14 = {
  prompt: "J'ai très peur que mes proches deviennent infectés par le coronavirus.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_15 = {
  prompt: "J'ai très peur que la pandémie du coronavirus ne surcharge le système de santé de mon pays.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_16 = {
  prompt: "En règle générale, j'ai beaucoup de contacts sociaux directs (en face à face).<br>",
  labels: ["<br>1<br> pas du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement"],
  required: true
};   

frenchQuestions.item_17 = {
  prompt: "En règle générale, j'ai un fort besoin de contact social.<br>",
  labels: ["<br>1<br> pas du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement"],
  required: true
};

frenchQuestions.item_18 = {
  prompt: "En règle générale, j'aime être seul.e.<br>",
  labels: ["<br>1<br> pas du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement"],
  required: true
};
