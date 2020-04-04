var frenchQuestions = {};

frenchQuestions.preamble_situation = "<br><b>Merci d'indiquer ce qui s'applique à votre situation <br>en utilisant les échelles de réponse relatives à chaque question.</b><br><br>";
frenchQuestions.preamble_agreement = "<br><b>Pour chacune des questions suivantes, merci d'indiquer votre degré d'accord.</b><br><br>";
frenchQuestions.preamble_risk = "<br><b>Pour chacune des questions suivantes, merci d'indiquer le degré de risque que vous estimez.</b><br><br>";
frenchQuestions.preamble_typical_situation = "<br><b>Pour chacune des affirmations suivantes, merci d'indiquer ce qui s'applique typiquement à vous, <br>indépendamment de la situation actuelle. </b><br><br>";


frenchQuestions.item_1 = {
  prompt: "L'administration a actuellement mis en place des politiques dans ma région qui restreignent les contacts sociaux directs en face à face (politiques de distanciation sociale).<br>",
  labels: ["<br>1<br> pas de restrictions du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> restrictions extrêmes"],
  required: true
};

frenchQuestions.item_2 = {
  prompt: "Je pense que dans ma région le contact social devrait... (sélectionnez 0 si vous trouvez que les régulations actuelles sont appropriées)<br>",
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
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_8 = {
  prompt: "Actuellement, j'ai un fort besoin de contact social direct (c'est-à-dire en face à face).<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_9 = {
  prompt: "J'ai très peur d'être infecté par le coronavirus.<br>",
  name: 'item_9', labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_10 = {
  prompt: "J'ai très peur que mes proches soient infectés par le coronavirus.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};          

frenchQuestions.item_11 = {
  prompt: "J'ai très peur de représenter un danger pour les autres parce que je pourrais être infecté.e sans le savoir.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_12 = {
  prompt: "J'ai très peur que la pandémie de coronavirus ne surcharge le système de santé de mon pays.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_13 = {
  prompt: "Compte tenu de votre situation actuelle, à quel point jugez-vous probable le risque d'être infecté par le coronavirus?<br>",
  labels: ["<br>1<br> pas de risque du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> risque très élevé"],
  required: true
};

frenchQuestions.item_14 = {
  prompt: "Compte tenu de vos conditions de santé préalables (antécédents, âge), à quel point jugez-vous probable le risque de développer une forme sévère du coronavirus, en cas d'infection ?<br>",
  labels: ["<br>1<br> pas de risque du tout", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> risque très élevé"],
  required: true
};

frenchQuestions.item_15 = {
  prompt: "En règle générale, j'ai beaucoup de contacts sociaux directs (face à face).<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};   

frenchQuestions.item_16 = {
  prompt: "Typiquement, j'ai un fort besoin de contact social.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};

frenchQuestions.item_17 = {
  prompt: "En général, j'aime être seul.<br>",
  labels: ["<br>1<br> pas du tout d'accord", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> complètement d'accord"],
  required: true
};
