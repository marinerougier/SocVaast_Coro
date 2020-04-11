var italianQuestions = {};

italianQuestions.preamble_apply_situation = "<br><b>Per favore indichi quale situazione si addice meglio alla sua.</b><br><br>";
italianQuestions.preamble_apply_you = "<br><b>Per favore indichi quale situazione la rappresenta.</b><br><br>";
italianQuestions.preamble_agreement = "<br><b>Per favore esprima il suo grado di accordo.</b><br><br>";
italianQuestions.preamble_apply_typical = "<br><b>Per favore indichi quanto le seguenti affermazioni le si addicono, indipendentemente dalla situazione corrente.</b><br><br>";


italianQuestions.item_1 = {
  prompt: "L’amministrazione politica attualmente ha emesso decreti nella mia regione che limitano il contatto sociale (i.e., politiche di distanziamento sociale) diretto (i.e., faccia-a-faccia).<br>",
  labels: ["<br>1<br> nessuna limitazione", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> limitazioni estreme"],
  required: true
};

italianQuestions.item_2= {
  prompt: "Credo che nella mia regione il contatto sociale debba essere... (Selezioni 0 se ritiene che le attuali regolamentazioni siano appropriate)",
  labels: ["<br>-3<br> meno limitato", "<br>-2", "<br>-1", "<br>0", "<br>1", "<br>2", "<br>3<br> più limitato"],
  required: true                                                                                    
};

italianQuestions.item_3 = {
    prompt: "Per quanto mi riguarda, attualmente la quantità dei miei contatti sociali diretti (i.e., faccia-a-faccia) si è ristretta a causa delle politiche di distanziamento sociale nella mia regione.<br>",
    labels: ["<br>1<br> per nulla", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> moltissimo"],
    required: true  
  };

italianQuestions.item_4 = {
  prompt: "Allo stato attuale mi tengo distante dalle altre persone negli spazi pubblici.<br>",
  labels: ["<br>1<br> per nulla", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completamente"],
  required: true
};

italianQuestions.item_5 = {
  prompt: "Quanti contatti sociali diretti (i.e., faccia-a-faccia) ha attualmente?<br>",
  labels: ["<br>1<br> pochissimi", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> moltissimi"],
  required: true
};    
      
italianQuestions.item_6 = {
  prompt: "Quanti contatti sociali ha attualmente tramite chiamate telefoniche/video, social media, o posta/email?<br>",
  labels: ["<br>1<br> pochissimi", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> moltissimi"],
  required: true
};

italianQuestions.item_7 = {
  prompt: "Attualmente mi sento molto solo/a.<br>",
  labels: ["<br>1<br> per nulla", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completamente"],
  required: true
};

italianQuestions.item_8 = {
  prompt: "Attualmente ho un forte bisogno di avere contatti sociali diretti (i.e., faccia-a-faccia).<br>",
  labels: ["<br>1<br> per nulla", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completamente"],
  required: true
};

italianQuestions.item_9 = {
  timeline: [{
    type: 'survey-html-form',
    html: `
        <div class='instructions' style='text-align:center'>
        <p>Per favore indichi quale situazione la rappresenta.</p>
        <p>Ero/sono attualmente infettato/a dal coronavirus.</p></div>
        <p>
            <label><input type='radio' name='item_9' value="1" required>&nbsp Sì &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="2" required>&nbsp No &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="3" required>&nbsp Non so &nbsp&nbsp</label>
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

italianQuestions.item_10 = {
  prompt: "Ho molta paura di essere infettato/a dal coronavirus.<br>",
  labels: ["<br>1<br> per nulla d’accordo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completamente d’accordo"],
  required: true
};

italianQuestions.item_11 = {
  prompt: "Ho molta paura di poter rappresentare un pericolo per le altre persone perché potrei essere infettato/a senza saperlo.<br>",
  labels: ["<br>1<br> per nulla d’accordo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completamente d’accordo"],
  required: true
};

italianQuestions.item_12 = {
    prompt: "Date le sue attuali circostanze, quanto elevato giudica il rischio di essere infettato/a dal coronavirus?<br>",
    labels: ["<br>1<br> rischio assente", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> rischio altissimo"],
    required: true
  };

italianQuestions.item_13 = {
prompt: "Date le sue precondizioni (stato di salute, età), quanto alto giudica il rischio di sviluppare una grave malattia da coronavirus, nel caso in cui fosse infettato/a da esso?<br>",
labels: ["<br>1<br> rischio assente", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> rischio altissimo"],
required: true
};

italianQuestions.item_14 = {
  prompt: "Ho molta paura che le persone a me care vengano infettate dal coronavirus.<br>",
  labels: ["<br>1<br> per nulla d’accordo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completamente d’accordo"],
  required: true
};  

italianQuestions.item_15 = {
  prompt: "Temo fortemente che la pandemia da coronavirus sovraccaricherà il sistema sanitario del mio Paese.<br>",
  labels: ["<br>1<br> per nulla d’accordo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completamente d’accordo"],
  required: true
};

italianQuestions.item_16 = {
  prompt: "Normalmente ho molti contatti sociali diretti (i.e., faccia-a-faccia).<br>",
  labels: ["<br>1<br> per nulla", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completamente"],
  required: true
};   

italianQuestions.item_17 = {
  prompt: "Normalmente ho un forte bisogno di contatti sociali.<br>",
  labels: ["<br>1<br> per nulla", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>completamente"],
  required: true
};

italianQuestions.item_18 = {
  prompt: "Normalmente mi piace essere da solo/a.<br>",
  labels: ["<br>1<br> per nulla", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> completamente"],
  required: true
};
