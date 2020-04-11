var germanQuestions = {};

germanQuestions.preamble_apply_situation = `<br><b>Bitte geben Sie an, was auf Ihre Situation zutrifft.</b><br><br>`;
germanQuestions.preamble_apply_you = `<br><b>Bitte geben Sie an, was auf Sie zutrifft.</b><br><br>`;
germanQuestions.preamble_agreement = `<br><b>Bitte geben Sie an, wie sehr Sie zustimmen.</b><br><br>`;
germanQuestions.preamble_apply_typical = `
  <br><b>Bitte geben Sie für die folgenden Aussagen an, 
  wie sehr diese auf Sie persönlich typischerweise zutreffen,
  <br><u>unabhängig</u> von der aktuellen Situation.</b><br><br>
`;

germanQuestions.item_1 = {
  prompt: `
    Die Regierung hat derzeit Vorschriften für meine Region erlassen, <br>
    die den direkten Kontakt zwischen Menschen einschränken<br> (sog. Soziale Distanzierungsvorschriften).<br /> 
  `,
  labels: ["<br>1<br>keine<br>Einschrän-<br>kungen", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>starke<br>Einschrän-<br>kungen"],
  required: true
};

germanQuestions.item_2 = {
  prompt: `
    Ich glaube, sozialer Kontakt sollte in meiner Region ...<br>
    (Wählen Sie 0, wenn Sie die aktuellen Regeln angemessen finden)<br />
  `,
  labels: ["<br>-3<br>weniger einge-<br>schränkt werden", "<br>-2", "<br>-1", "<br>0", "<br>1", "<br>2", "<br>3<br>stärker einge-<br>schränkt werden"],
  required: true                                                                                    
};

germanQuestions.item_3 = {
    prompt: `
    Derzeit ist für mich persönlich die Menge an direkten Kontakten mit anderen Menschen (d.h. von Angesicht zu Angesicht)  
    durch die geltenden sozialen Distanzierungsvorschriften eingeschränkt.<br />
    `,
    labels: ["<br>1<br>überhaupt nicht", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>sehr stark"],
    required: true  
  };

germanQuestions.item_4 = {
  prompt: "Derzeit halte ich Abstand zu anderen Menschen in der Öffentlichkeit.<br>",
  labels: ["<br>1<br> überhaupt nicht", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> vollkommen"],
  required: true
};

germanQuestions.item_5 = {
  prompt: `
    Wieviel direkten Kontakt haben Sie derzeit mit anderen Menschen?<br />
  `,
  labels: ["<br>1<br> sehr wenig", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> sehr viel"],
  required: true
};    
      
germanQuestions.item_6 = {
  prompt: `
    Wieviel Kontakt haben Sie derzeit mit anderen Menschen über (Video-) Telefonie, soziale Medien, Briefe oder Email?<br>
  `,
  labels: ["<br>1<br> sehr wenig", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> sehr viel"],
  required: true
};

germanQuestions.item_7 = {
  prompt: `Derzeit fühle ich mich sehr einsam.<br>`,
  labels: ["<br>1<br> überhaupt nicht", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>vollkommen"],
  required: true
};

germanQuestions.item_8 = {
  prompt: `
    Derzeit habe ich ein starkes Bedürfnis nach direktem Kontakt mit anderen Menschen.<br>
  `,
  labels: ["<br>1<br> überhaupt nicht", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>vollkommen"],
  required: true
};

germanQuestions.item_9 = {
  timeline: [{
    type: 'survey-html-form',
    html: `
        <div class='instructions' style='text-align:center'>
        <p>Bitte wählen Sie aus, was auf Sie zutrifft.</p>
        <p>Ich war/bin gerade mit dem Coronavirus infiziert.</p></div>
        <p>
            <label><input type='radio' name='item_9' value="1" required>&nbsp ja &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="2" required>&nbsp nein &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="3" required>&nbsp weiß nicht &nbsp&nbsp</label>
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

germanQuestions.item_10 = {
  prompt: `Ich habe große Angst, dass ich mich mit dem Coronavirus anstecken könnte.<br>`,
  labels: ["<br>1<br> stimme überhaupt nicht zu", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> stimme völlig zu"],
  required: true
};

germanQuestions.item_11 = {
  prompt: `Ich habe große Angst, dass ich eine Gefahr für andere Menschen sein könnte, weil ich mich angesteckt haben könnte, ohne es zu wissen.<br>`,
  labels: ["<br>1<br> stimme überhaupt nicht zu", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> stimme völlig zu"],
  required: true
};

germanQuestions.item_12 = {
    prompt: `Wie hoch schätzen Sie das Risiko ein, dass Sie sich unter Ihren aktuellen Lebensbedingungen mit dem Coronavirus anstecken könnten?<br>`,
    labels: ["<br>1<br> überhaupt kein Risiko", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> sehr hohes Risiko"],
    required: true
  };

germanQuestions.item_13 = {
prompt: `
  Wie hoch schätzen Sie das Risiko ein, dass Sie unter Ihren Voraussetzungen
  (Gesundheitszustand, Alter) einen schwerwiegenden Krankheitsverlauf entwickeln,
  sollten Sie sich mit dem Coronavirus infizieren?<br>
`,
labels: ["<br>1<br> überhaupt kein Risiko", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> sehr hohes Risiko"],
required: true
};

germanQuestions.item_14 = {
  prompt: `Ich habe große Angst, dass sich mir nahestehende Personen mit dem Coronavirus anstecken könnten.<br>`,
  labels: ["<br>1<br> stimme überhaupt nicht zu", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> stimme völlig zu"],
  required: true
};  

germanQuestions.item_15 = {
  prompt: `Ich habe große Angst, dass die Coronavirus Pandemie das Gesundheitssystem meines Landes überlasten könnte.<br>`,
  labels: ["<br>1<br> stimme überhaupt nicht zu", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> stimme völlig zu"],
  required: true
};

germanQuestions.item_16 = {
  prompt: `Normalerweise habe ich sehr viel direkten Kontakt mit anderen Menschen.<br>`,
  labels: ["<br>1<br> überhaupt nicht", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>vollkommen"],
  required: true
};   

germanQuestions.item_17 = {
  prompt: `Normalerweise habe ich ein starkes Bedürfnis nach sozialem Kontakt.<br>`,
  labels: ["<br>1<br> überhaupt nicht", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br>vollkommen"],
  required: true
};

germanQuestions.item_18 = {
  prompt: `Normalerweise bin ich gern allein.<br>`,
  labels: ["<br>1<br> überhaupt nicht", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> vollkommen"],
  required: true
};
