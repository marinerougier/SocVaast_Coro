
var italianInstructions = {};

italianInstructions.persons = "persone";
italianInstructions.plants = "piante";
italianInstructions.finish = "Fine dello studio";

italianInstructions.welcome = {
    type: "html-button-response",
    stimulus:
        "<p class='instructions'><center>" +
        "<img src = 'media/UHH.png'>" +
        "<img src = 'media/UCL.jpg'>" +
        "<img src = 'media/Bicocca_Bianco.png'>" +
        "<br>"+
        "<img src = 'media/UR.png'>" +
        "<br><b>Progetto SCC (Contatto Sociale durante la Pandemia Coronavirus)</b>" + 
        "</center></p>" +
        "<p class='instructions'>Grazie per aver preso parte a questo studio: <b>sta offrendo un contributo notevole alla ricerca scientifica " +
        "sulle conseguenze sociali della pandemia da coronavirus. </b>Per più informazioni sul progetto di ricerca, la preghiamo di cliccare <a href='https://www.psy.uni-hamburg.de/arbeitsbereiche/sozialpsychologie/scc.html' target='_blank'>qui</a>.</p>" +
        "<p class='instructions'>Durante questo studio, risponderà ad alcune domande riguardanti il suo comportamento e i suoi sentimenti, e completerà un semplice compito tramite un videogioco. "+
        "Noti che <b>le serviranno un computer e una tastiera reale (i.e., non virtuale)</b> per completare il compito. </p>" +
        "<p class='instructions'>Se interessato/a, <b>potrà inoltre ricevere un’analisi individuale delle sue risposte </b>in relazione alle risposte medie dei partecipanti precedenti.</p>" +
        "<p class='instructions'>Il completamento dello studio richiederà approssimativamente 10-15 minuti. </p>" +
        "<p class='instructions'>Cliccando qua sotto per iniziare lo studio, conferma che:</p>" +
        "<ul class='instructions'>" +
            "<li>Ha almeno 18 anni. </li>" +
            "<li>Sa di poter interrompere la sua partecipazione in ogni momento. </li>" +
            "<li>Sa di poter contattare il nostro team per qualsiasi domanda " +
            "a <a href='mailto:scc-project@ur.de'>scc-project@ur.de</a>. </li>" + //The principle investigator is PD Dr. Regina Reichardt.
            "<li>Sa che partecipa in forma anonima. Non registreremo alcun dato che permetta di identificarla personalmente. Non registreremo il suo indirizzo IP.</li>" +
            "<li>Sa che i dati anonimi raccolti saranno condivisi con altri ricercatori tramite la piattaforma Open Science Framework.</li>" +
        "</ul>" ,
    choices: ['Confermo che fornisco il mio consenso libero e informato per partecipare']
};

italianInstructions.fullscreen_trial = {
  type: 'fullscreen',
    message:  `
      <div class='instructions'>
      <p><b>Prima di iniziare...</b></p>
      <ul>
        <li>Minimizzi qualsiasi potenziale distrazione (chiuda altri programmi aperti sul computer, silenzi il cellulare, ecc.). </li>
        <li>Disattivi il suo software per bloccare le pubblicità, il quale potrebbe interferire con la raccolta dati.</li>
      </ul>
      <p>Per prendere parte a questo studio, il suo browser deve essere posto in modalità schermo intero.<br></p>
      </div>
      `,
    button_label: 'Passi alla modalità schermo intero',
  fullscreen_mode: true
}

italianInstructions.vaast_instructions_0 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Compito del videogioco</h1>" +
    "<p class='instructions'>Ora le chiediamo di completare un compito che valuta <b>tendenze comportamentali spontanee ad approcciare o evitare altre persone.</b></p> " +
    "<p class='instructions'>Il completamento di questo compito può rivelarsi un po’ noioso perché richiede molte ripetizioni delle stesse reazioni.</b> " +
    "Tuttavia, per una misurazione affidabile delle tendenze comportamentali, è molto importante avere tutte queste ripetizioni. </p> " +
   "<p class='instructions'> Perciò, per favore <b>non abbandoni e completi l’intero compito.</b> "+
   "Con la sua partecipazione, sta contribuendo in maniera sensibile a una migliore comprensione delle conseguenze sociali della pandemia da coronavirus. </p>" +
    "<br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Compito del videogioco</h1>" +
    "<p class='instructions'>In questo compito, proprio come in un videogioco, si troverà all’interno di un corridoio, presentato qui sotto.</p> " +
    "<p class='instructions'>Per favore <b>immagini che tutte le circostanze della sua vita attuale siano applicate alla situazione nel corridoio.</b> " +
    "Immagini di camminare lungo il corridoio proprio come se percorresse un corridoio in questi giorni nella sua vita reale. </p> " +
   "<p class='instructions'> Alla fine di questo corridoio, <b>vedrà delle persone o delle piante che stanno li.</b> "+
   "Immagini che queste persone e piante siano reali, come persone o piante che potrebbe vedere in giro in questi giorni nella sua vita reale. </p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.vaast_instructions_2 = {
    type: "html-keyboard-response",
    stimulus:
      "<h1 class ='custom-title'> Compito del videogioco</h1>" +
      "<p class='instructions'> Il suo compito è di avvicinarsi o di allontanarsi dalle persone o dalle piante " +
      "(seguiranno istruzioni più specifiche). Per fare ciò, usi i tasti freccia su e freccia giù sulla sua tastiera: </p>" +
      "<p class='instructions'><center>" +
        "<img src = 'media/keyboard-vaastt_it.png'>" +
      "</center></p>" +
          "<br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
    choices: [32]
};

italianInstructions.vaast_instructions_4 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_1;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_1;
  },
  stimulus:
    "<h1 class ='custom-title'> Compito del videogioco - Parte 1/4</h1>" +
    "<p class='instructions'>In questa parte deve: " +
    "<ul class='instructions'>" +
    "<li><strong>Avvicinarsi alle <span id='GROUPTOAPPROACH'></span> premendo il tasto freccia su </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Allontanarsi dalle <span id='GROUPTOAVOID'></span> premendo il tasto freccia giù </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ESTREMAMENTE IMPORTANTE: risponda il più velocemente e il più correttamente possibile! <br><br></strong>" +
    "<p class ='instructions'>Se commette un errore, comparirà una x rossa (corregga la sua risposta con l’altro tasto). Usi l’indice della sua mano dominante per rispondere. " +
    "<br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.vaast_instructions_5 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_2;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_2;
  },
  stimulus:
    "<h1 class ='custom-title'> Compito del videogioco - Parte 2/4</h1>" +
    "<p class='instructions'>Attenzione! Ora le istruzioni del compito sono invertite: " +
    "<ul class='instructions'>" +
    "<li><strong>Avvicinarsi alle <span id='GROUPTOAPPROACH'></span> premendo il tasto freccia su </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Allontanarsi dalle <span id='GROUPTOAVOID'></span> premendo il tasto freccia giù </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ESTREMAMENTE IMPORTANTE: risponda il più velocemente e il più correttamente possibile! <br><br></strong>" +
    "<br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.vaast_instructions_6 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_3;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_3;
  },
  stimulus:
    "<h1 class ='custom-title'> Compito del videogioco - Parte 3/4</h1>" +
    "<p class='instructions'>Attenzione! Ora le istruzioni del compito sono invertite: " +
    "<ul class='instructions'>" +
     "<li><strong>Avvicinarsi alle <span id='GROUPTOAPPROACH'></span> premendo il tasto freccia su </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Allontanarsi dalle <span id='GROUPTOAVOID'></span> premendo il tasto freccia giù </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ESTREMAMENTE IMPORTANTE: risponda il più velocemente e il più correttamente possibile! <br><br></strong>" +
    "<br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.vaast_instructions_7 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_4;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_4;
  },
  stimulus:
    "<h1 class ='custom-title'> Compito del videogioco - Parte 4/4</h1>" +
    "<p class='instructions'>Attenzione! Ora le istruzioni del compito sono invertite: " +
    "<ul class='instructions'>" +
    "<li><strong>Avvicinarsi alle <span id='GROUPTOAPPROACH'></span> premendo il tasto freccia su </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Allontanarsi dalle <span id='GROUPTOAVOID'></span> premendo il tasto freccia giù </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ESTREMAMENTE IMPORTANTE: risponda il più velocemente e il più correttamente possibile! <br><br></strong>" +
    "<br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.feedback_firstblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Buon lavoro!<br><br>" + 
    "Qui c’è il suo tempo medio di reazione: <b><span id='FeedbackMeanReactionTime'></span> millisecondi</b><br>" +
    "Ha reagito correttamente <b><span id='FeedbackNumberOfCorrectRespones'></span> volte su " +
    "<span id='FeedbackNumberOfTotalRespones'></span>.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Faccia del suo meglio per migliorare la performance nella prossima parte.</b>" +
    "<p class='instructions'><center>Anche se il compito le può sembrare noioso, per favore non si arrenda. Il completamento di questo compito aiuterà la scienza a <br>comprendere meglio "+
    "come la pandemia da coronavirus influenzi spontaneamente le tendenze comportamentali nei confronti di altre persone.</b><br>" +
    "<p class='instructions'><center>Se interessato/a, più avanti potrà comparare i dati della sua performance <br>con i dati della performance media dei partecipanti precedenti.<br><br>" + 
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.feedback = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Buon lavoro!<br><br>" + 
    "Qui c’è il suo tempo medio di reazione: <b><span id='FeedbackMeanReactionTime'></span> millisecondi</b><br>" +
    "Ha reagito correttamente <b><span id='FeedbackNumberOfCorrectRespones'></span> volte su " +
    "<span id='FeedbackNumberOfTotalRespones'></span>.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Faccia del suo meglio per migliorare la performance nella prossima parte.</b>" +
    "<p class='instructions'><center>Anche se il compito le può sembrare noioso, per favore non si arrenda. Il completamento di questo compito aiuterà la scienza a <br>comprendere meglio "+
    "come la pandemia da coronavirus influenzi spontaneamente le tendenze comportamentali nei confronti di altre persone.</b><br>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.feedback_lastblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>Buon lavoro!<br><br>" + 
    "Qui c’è il suo tempo medio di reazione: <b><span id='FeedbackMeanReactionTime'></span> millisecondi</b><br>" +
    "Ha reagito correttamente <b><span id='FeedbackNumberOfCorrectRespones'></span> volte su " +
    "<span id='FeedbackNumberOfTotalRespones'></span>.</b>" +
    "</p></center>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};


italianInstructions.extra_information = {
  type: 'html-keyboard-response',
  stimulus:
    "<p class='instructions'>Inizierà rispondendo ad alcune domande.</p>" +
    "<p class='instructions'>Se interessato/a, più avanti le forniremo un’analisi individuale delle sue risposte, che potrà comparare con le risposte medie dei partecipanti precedenti.</p>" +
    "<p class='continue-instructions'>Prema la barra <strong>spaziatrice</strong> per continuare.</p>",
  choices: [32]
};

italianInstructions.feedback_summary = `
  <div class='instructions' id=FEEDBACK>
      <div>
      <p>
      Noti che non abbiamo ancora raccolto abbastanza dati per mostrare la risposta media dei partecipanti precedenti.
      Se è interessato a questo sommario, per favore inserisca il suo indirizzo email nel campo qui sotto.
      </p><p>
        Indirizzo email:&nbsp <input type='text' name='EMAIL' id='EMAIL' size=60 onchange='window.email = this.value'>
      </p><p>
        Il suo indirizzo email verrà conservato separatamente dalle sue risposte allo studio. Non è possibile collegare il suo indirizzo email ad alcuna sua risposta.
      </p><p>
        <h3><center>Qui c’è il riepilogo delle sue risposte</center></h3>
        <p>Per favore salvi il riepilogo per suoi futuri riferimenti.</p>
      </div>
      <div id=REACTIONS >
        Qui c’è il suo tempo medio di reazione: <b><span id='FeedbackMeanReactionTime'></span> millisecondi</b><br>
        Ha reagito correttamente <b><span id='FeedbackNumberOfCorrectRespones'></span> volte su <span id='FeedbackNumberOfTotalRespones'></span>.</b>
      </div>
      <div id='RESPONSES'></div>
    </div>
    <!--
    <div class='instructions'><button id="downloadPDF" style="float: right;">Download PDF</button></div>
    -->
`;
