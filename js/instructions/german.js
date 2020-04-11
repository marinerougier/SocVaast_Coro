var germanInstructions = {};

germanInstructions.persons = "Menschen";
germanInstructions.plants = "Pflanzen";
germanInstructions.finish = "Studie beenden";

germanInstructions.welcome = {
    type: "html-button-response",
    stimulus:`
      <div class='instructions'>
      <p style='text-align:center'>
        <img src = 'media/UHH.png'>
        <img src = 'media/UCL.jpg'>
        <img src = 'media/Bicocca_Bianco.png'>
        <img src = 'media/UR.png'>
      <br>
      <br>
        <b>SCC Projekt (Sozialer Kontakt während der Corona Pandemie)</b> 
      </p>
      <p>
        Vielen Dank, dass Sie an dieser Studie teilnehmen: 
        <b>Sie leisten damit einen wertvollen Beitrag zur wissenschaftlichen Forschung über soziale Folgen der Corona Pandemie.</b>
        Mehr Informationen zum Forschungsprojekt finden Sie <a href="https://www.psy.uni-hamburg.de/arbeitsbereiche/sozialpsychologie/scc.html" target="_blank">hier</a>.
      </p>
      <p>
        In dieser Studie werden Sie ein einfaches Videospiel bearbeiten 
        und einige Fragen zu Ihrem Verhalten und Ihren Gefühlen beantworten.
        Beachten Sie, dass <b>Sie für diese Studie einen Computer und eine richtige Tastatur (keine virtuelle) </b>benötigen.
      </p>
      <p>
        Wenn Sie Interesse haben, <b>können Sie eine individuelle Rückmeldung Ihrer Antworten</b>
        im Vergleich zu den durchschnittlichen Antworten der bisherigen Teilnehmenden erhalten.
      </p>
      <p>Die Studie dauert ca. 10-15 Minuten.</p>
      <p>Wenn Sie auf den Button unten klicken, um die Studie zu starten, bestätigen Sie, dass:</p>
      <ul>
          <li>Sie mindestens 18 Jahre alt sind.</li>
          <li>Sie wissen, dass Sie Ihre Teilnahme jederzeit abbrechen können.</li>
          <li>Sie wissen, dass Sie unser Team für Fragen unter <a href="mailto:scc-project@ur.de">scc-project@ur.de</a> kontaktieren können.
          </li>
          <li>
          Sie wissen, dass Ihre Teilnahme anonym erfolgt. 
          Wir speichern keine Daten, die eine persönliche Identifizierung ermöglichen. 
          Ihre IP-Adresse wird nicht gespeichert.
          </li>
          <li>
            Sie wissen, dass die anonym gespeicherten Daten anderen Wissenschaftlern 
            über das Open Science Framework zur Verfügung gestellt werden.
          </li>
      </ul>
      </div>
    `,
    choices: ['Ich bin mit den Bedingungen einverstanden und nehme freiwillig an der Studie teil.']
};

germanInstructions.fullscreen_trial = {
  type: 'fullscreen',
    message:  `
      <div class='instructions'>
      <p><b>Bevor Sie beginnen ...</b></p>
      <ul>
        <li>Minimieren Sie mögliche Ablenkung (Schließen Sie andere Computerprogramme, schalten Sie Ihr Mobiltelefon auf lautlos, etc.)</li>
        <li>Deaktivieren Sie ad-blocking Software, denn diese kann die Datenspeicherung stören.</li>
      </ul>
      <p>Um die Studie zu bearbeiten, muss der Browser auf Vollbildanzeige gestellt sein.<br></p>
      </div>
    `,
    button_label: 'Auf Vollbildanzeige schalten',
  fullscreen_mode: true
}

germanInstructions.vaast_instructions_0 = {
  type: "html-keyboard-response",
  stimulus:`
    <div class='instructions'>
    <h1 class='custom-title' style='text-align:center'>Videospiel-Aufgabe</h1>
    <p>
      Wir bitten Sie nun eine Aufgabe zu bearbeiten, die 
      <b>spontane Verhaltenstendenzen der Annäherung oder Vermeidung gegenüber anderen Menschen</b>
      erfasst.
    </p>
    <p>
      Die Bearbeitung dieser Aufgabe kann etwas anstrengend sein, 
      denn es sind viele Wiederholungen derselben Reaktion erforderlich. 
      Für eine zuverlässige Messung der Verhaltenstendenzen ist es jedoch sehr wichtig, 
      so viele Wiederholungen zu haben.
    </p>
    <p>
      Daher bitten wir Sie, <b>nicht aufzugeben und die gesamte Aufgabe zu bearbeiten.</b>
      Mit Ihrer Teilnahme leisten Sie einen wertvollen Beitrag zum besseren Verständnis der sozialen Konsequenzen der Corona Pandemie.
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:`
    <div class='instructions'>
    <h1 class ='custom-title' style='text-align:center'>Videospiel-Aufgabe</h1>
    <p>
      In dieser Aufgabe befinden Sie sich, ähnlich wie bei einem Videospiel, in dem unten angezeigten Flur.
    </p>
    <p>
      Bitte <b>stellen Sie sich vor, dass alle Umstände Ihres aktuellen Lebens auch auf die Situation in dem Flur zutreffen.</b>
      Stellen Sie sich vor, Sie laufen den Flur entlang, so wie Sie vielleicht in diesen Tagen in Ihrem wirklichen Leben einen Flur entlanglaufen.
    </p>
    <p>
      Am Ende dieses Flurs sehen Sie <b>Menschen oder Pflanzen</b> stehen.
      Stellen Sie sich vor, dass diese Menschen und Pflanzen real sind, 
      ähnlich wie Menschen oder Pflanzen, die in diesen Tagen in Ihrem wirklichen Leben irgendwo stehen.
    </p>
    <br>
    <center><img src='media/vaast-background.png'></center>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.vaast_instructions_2 = {
    type: "html-keyboard-response",
    stimulus: `
      <div class='instructions'>
      <h1 class='custom-title' style='text-align:center'>Videospiel-Aufgabe</h1>
      <p>
        Ihre Aufgabe besteht darin, zu den Menschen oder Pflanzen hinzulaufen 
        oder von ihnen wegzulaufen (genauere Anweisungen folgen). 
        Dafür benutzen Sie die Pfeiltasten auf Ihrer Tastatur.
      </p>
      <p><center>
          <img src = 'media/keyboard-vaastt_gr.png'>
      </center></p>
      </div>
      <br>
      <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
    `,
    choices: [32]
};

germanInstructions.vaast_instructions_4 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_1;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_1;
  },
  stimulus: `
    <div class='instructions'>
    <h1 class='custom-title' style='text-align:center'> Videospiel-Aufgabe - Teil 1 von 4</h1>
    <p>
      In diesem Teil sollen Sie:
      <ul>
        <li><strong>zu <span id='GROUPTOAPPROACH'></span> hinlaufen, indem Sie die Pfeiltaste nach oben drücken.</strong></li>
        <li><strong>von <span id='GROUPTOAVOID'></span> weglaufen, indem Sie die Pfeiltaste nach unten drücken.</strong></li>
      </ul>
      <strong><center> SEHR WICHTIG: Reagieren Sie so schnell und so genau wie möglich!<center></strong>
    </p>
    <p>
      Wenn Sie einen Fehler machen, erscheint ein rotes x (korrigieren Sie Ihre Reaktion mit der anderen Pfeiltaste).
      Benutzen Sie den Zeigefinger Ihrer bevorzugten Hand zum Reagieren.
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.vaast_instructions_5 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_2;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_2;
  },
  stimulus:`
    <div class='instructions'>
    <h1 class='custom-title' style='text-align:center'> Videospiel-Aufgabe - Teil 2 von 4</h1>
    <p><center><strong>Achtung! Die Reaktionsregeln sind nun vertauscht:</strong></center></p>
    <p>
      In diesem Teil sollen Sie:
      <ul>
        <li><strong>zu <span id='GROUPTOAPPROACH'></span> hinlaufen, indem Sie die Pfeiltaste nach oben drücken.</strong></li>
        <li><strong>von <span id='GROUPTOAVOID'></span> weglaufen, indem Sie die Pfeiltaste nach unten drücken.</strong></li>
      </ul>
      <strong><center> SEHR WICHTIG: Reagieren Sie so schnell und so genau wie möglich!</center></strong>
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.vaast_instructions_6 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_3;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_3;
  },
  stimulus: `
    <div class='instructions'>
    <h1 class='custom-title' style='text-align:center'> Videospiel-Aufgabe - Teil 3 von 4</h1>
    <p><center><strong>Achtung! Die Reaktionsregeln sind vertauscht:</strong></center></p>
    <p>
      In diesem Teil sollen Sie:
      <ul>
        <li><strong>zu <span id='GROUPTOAPPROACH'></span> hinlaufen, indem Sie die Pfeiltaste nach oben drücken.</strong></li>
        <li><strong>von <span id='GROUPTOAVOID'></span> weglaufen, indem Sie die Pfeiltaste nach unten drücken.</strong></li>
      </ul>
      <strong><center>SEHR WICHTIG: Reagieren Sie so schnell und so genau wie möglich!<center></strong>
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.vaast_instructions_7 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_4;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_4;
  },
  stimulus:`
    <div class='instructions'>
    <h1 class='custom-title' style='text-align:center'> Videospiel-Aufgabe - Teil 4 von 4</h1>
    <p><strong><center>Achtung! Die Reaktionsregeln sind vertauscht:</center></strong></p>
    <p>
      In diesem Teil sollen Sie:
      <ul>
        <li><strong>zu <span id='GROUPTOAPPROACH'></span> hinlaufen, indem Sie die Pfeiltaste nach oben drücken.</strong></li>
        <li><strong>von <span id='GROUPTOAVOID'></span> weglaufen, indem Sie die Pfeiltaste nach unten drücken.</strong></li>
      </ul>
      <strong><center>SEHR WICHTIG: Reagieren Sie so schnell und so genau wie möglich!</center></strong>
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.feedback_firstblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:`
    <div class='instructions'>
    <p><center>
      Gut gemacht!
      <br><br>
    </center></p>
    <p> 
      Ihre durchschnittliche Reaktionszeit:  <b><span id='FeedbackMeanReactionTime'></span> Millisekunden</b><br>
      Sie haben in <b>
        <span id='FeedbackNumberOfCorrectRespones'></span>
        von 
        <span id='FeedbackNumberOfTotalRespones'></span>
        Fällen richtig reagiert.</b>
    </p>
    <p><center><b>Versuchen Sie, im nächsten Teil noch besser zu sein.</b></center></p>
    <p>
      Auch wenn die Aufgabe vielleicht etwas anstrengend ist, bitte geben Sie nicht auf.
      <br>
      Die Bearbeitung dieser Aufgabe hilft der Wissenschaft besser zu verstehen,
      wie die Corona Pandemie spontane Verhaltenstendenzen gegenüber anderen Menschen beeinflusst.
    </p>
    <p>
      Wenn Sie Interesse haben, können Sie später Ihre Leistung mit der
      durchschnittlichen Leistung der bisherigen Teilnehmenden vergleichen.
      <br><br>
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.feedback = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus: `
    <div class='instructions'>
    <p><center>
      Gut gemacht!
      <br><br>
    </center></p>
    </p> 
      Ihre durchschnittliche Reaktionszeit: <b><span id='FeedbackMeanReactionTime'></span> Millisekunden</b><br>
      Sie haben in <b>
        <span id='FeedbackNumberOfCorrectRespones'></span>
        von 
        <span id='FeedbackNumberOfTotalRespones'></span>
        Fällen richtig reagiert.
      </b>
    </p>
    <p><center><b>Versuchen Sie, im nächsten Teil noch besser zu sein.</b></center></p>
    <p>
      Auch wenn die Aufgabe vielleicht etwas anstrengend ist, bitte geben Sie nicht auf.
      <br>
        Die Bearbeitung dieser Aufgabe hilft der Wissenschaft besser zu verstehen,
        wie die Corona Pandemie spontane Verhaltenstendenzen gegenüber anderen Menschen beeinflusst.
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.feedback_lastblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:`
   <div class='instructions' >
      <p><center>
        Gut gemacht!
        <br><br>
      </center></p>
      <p> 
        Ihre durchschnittliche Reaktionszeit:  <b><span id='FeedbackMeanReactionTime'></span> Millisekunden</b><br>
        Sie haben in <b>
        <span id='FeedbackNumberOfCorrectRespones'></span>
        von 
        <span id='FeedbackNumberOfTotalRespones'></span>
        Fällen richtig reagiert.
        </b>
    </p>
    </div>
    <br>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
    `,
  choices: [32]
};


germanInstructions.extra_information = {
  type: 'html-keyboard-response',
  stimulus:`
    <div class='instructions'>
    <p>Zunächst bitten wir Sie, einige Fragen zu beantworten.</p>
    <p>
      Wenn Sie Interesse haben, können Sie später eine individuelle Analyse Ihrer Antworten 
      im Vergleich zu den durchschnittlichen
      Antworten der bisherigen Teilnehmenden erhalten.
    </p>
    </div>
    <p class = 'continue-instructions'>Weiter geht es mit der <strong>Leertaste</strong>.</p>
  `,
  choices: [32]
};

germanInstructions.feedback_summary = `
  <div class='instructions' id=FEEDBACK>
      <div>
      <p>
        Zurzeit haben wir noch nicht genügend Daten gesammelt,
        um die durchschnittlichen Antworten der bisherigen Teilnehmenden anzeigen zu können.
        Wenn Sie daran Interesse haben, können Sie hier Ihre Email-Adresse eintragen.
      </p><p>
        E-Mail-Adresse:&nbsp <input type='text' name='EMAIL' id='EMAIL' size=60 onchange='window.email = this.value'>
      </p><p>
        Ihre Email-Adresse wird getrennt von Ihren Antworten in der Studie gespeichert.
        Es ist nicht möglich, Ihre Email-Adresse mit Ihren Antworten in der Studie in Verbindung zu bringen.
      </p><p>
        <h4><center>Hier sehen Sie eine Zusammenfassung Ihrer Antworten</center></h4>
        <p>Bitte speichern Sie diese Zusammenfassung.</p>
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
