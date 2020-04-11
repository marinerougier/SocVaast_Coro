var spanishQuestions = {};

spanishQuestions.preamble_apply_situation = "<br><b>Indique que es lo que se aplica a su situación.</b><br><br>";
spanishQuestions.preamble_apply_you = "<br><b>Indique que es lo que se aplica a usted.</b><br><br>";
spanishQuestions.preamble_agreement = "<br><b>Indice que tanto está usted de acuerdo.</b><br><br>";
spanishQuestions.preamble_apply_typical = "<br><b>Indice para las siguientes afirmaciones, que tanto se aplicen a usted, <br><u>independientemente</u> de la situación actual.</b><br><br>";


spanishQuestions.item_1 = {
  prompt: "El gobierno ha aprobado restricciones para mi región, que reduzcan el contacto directo entre la gente (distancia social).<br>",
  labels: ["<br>1<br> ningunas restricciones", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> restricciones fuertes"],
  required: true
};

spanishQuestions.item_2= {
  prompt: "Yo creo, que el contacto social en mí región debería de ser... (Elige 0, sí usted opina que las restricciones son adecuadas.)",
  labels: ["<br>-3<br> menos restringido", "<br>-2", "<br>-1", "<br>0", "<br>1", "<br>2", "<br>3<br> más restringido"],
  required: true                                                                                    
};

spanishQuestions.item_3 = {
    prompt: "Por las medidas de distanciamiento social la cantidad de mis contactos sociales directos (cara a cara), está restringido de momento.<br>",
    labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
    required: true  
  };

spanishQuestions.item_4 = {
  prompt: "De momento guardo distancia a otra gente al mi alrededor.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};

spanishQuestions.item_5 = {
  prompt: "¿Cuánto contacto social tiene usted al momento?<br>",
  labels: ["<br>1<br> muy poco", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> mucho"],
  required: true
};    
      
spanishQuestions.item_6 = {
  prompt: "¿Cuánto contacto social tiene usted a través de las redes sociales, correo, teléfono o correo eléctronico?<br>",
  labels: ["<br>1<br> muy poco", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> mucho"],
  required: true
};

spanishQuestions.item_7 = {
  prompt: "De momento me siento muy solo.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};

spanishQuestions.item_8 = {
  prompt: "De momento tengo una necesidad mayor de contacto directo con otras personas.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};

spanishQuestions.item_9 = {
  timeline: [{
    type: 'survey-html-form',
    html: `
        <div class='instructions' style='text-align:center'>
        <p>Please select what applies to you.</p>
        <p>Estoy/Estuve infectado con el coronavirus.</p></div>
        <p>
            <label><input type='radio' name='item_9' value="1" required>&nbsp sí &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="2" required>&nbsp no &nbsp&nbsp</label>
            <label><input type='radio' name='item_9' value="3" required>&nbsp no sé &nbsp&nbsp</label>
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

spanishQuestions.item_10 = {
  prompt: "Tengo mucho miedo, de infectarme con el coronavirus.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};

spanishQuestions.item_11 = {
  prompt: "Tengo mucho miedo de contagiar a otras personas, por el hecho de estar infectado sín yo saberlo.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};

spanishQuestions.item_12 = {
    prompt: "¿En cuánto calcula usted su riesgo de poder estar infectado con el coronavirus bajo su forma de vida actual?<br>",
    labels: ["<br>1<br> ningún riesgo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> vriesgo muy alto"],
    required: true
  };

spanishQuestions.item_13 = {
prompt: "¿En cuánto calcula usted su riesgo, de acuerdo a su estado de salud actual o su edad, de tener consecuencias graves en caso de estar infectado con el coronavirus?<br>",
labels: ["<br>1<br> ningún riesgo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> riesgo muy alto"],
required: true
};

spanishQuestions.item_14 = {
  prompt: "Tengo mucho miedo, de que personas cercanos a mí círculo se infecten con el coronavirus.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};  

spanishQuestions.item_15 = {
  prompt: "Tengo mucho miedo de que la pandemia del coronavirus sobrecargue la capacidad del sistema de salud de mí país.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};

spanishQuestions.item_16 = {
  prompt: "Normalmente tengo mucho contacto directo con otra gente.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};   

spanishQuestions.item_17 = {
  prompt: "Normalmente tengo una necesidad muy grande de tener contacto social.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};

spanishQuestions.item_18 = {
  prompt: "Normalmente disfruto de estar solo.<br>",
  labels: ["<br>1<br> totalmente en desacuerdo", "<br>2", "<br>3", "<br>4", "<br>5", "<br>6", "<br>7<br> totalmente de acuerdo"],
  required: true
};
