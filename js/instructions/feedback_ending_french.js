
var frenchFeedback = {};

frenchFeedback.instr = {
    stimulus:
      `<div class='instructions' id=FEEDBACK>
        <div>
        <p>
        Malheureusement, nous n'avons pas collecté suffisamment de données pour vous montrer un résumé des réponses moyennes des autres participants.
        Si vous êtes intéressé par ce résumé, veuillez entrer votre adresse e-mail dans le champ ci-dessous.
        </p><p>
          Adresse email :&nbsp <input type='text' name='EMAIL' id='EMAIL' size=60 onchange='window.email = this.value'>
        </p><p>
          Votre adresse e-mail sera stockée séparément de vos réponses dans l'étude. Il n'est possible de connecter votre adresse e-mail à aucune de vos réponses.
        </p><p>
          <h3><center>Voici un résumé de vos réponses</center></h3>
          <p>Veuillez enregistrer cette page pour plus tard.</p>
        </div>
        <div id=REACTIONS >
          Votre temps de réaction moyen a été : <b><span id='FeedbackMeanReactionTime'></span> millisecondes</b><br>
          Vous avez réagi <b><span id='FeedbackNumberOfCorrectRespones'></span> sur <span id='FeedbackNumberOfTotalRespones'></span> fois correctement.</b>
        </div>
        <div id='RESPONSES'></div>
      </div>
      <!--
      <div class='instructions'><button id="downloadPDF" style="float: right;">Télécharger en PDF</button></div>
      -->
      `,
};
