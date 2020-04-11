
var spanishInstructions = {};

spanishInstructions.persons = "personas";
spanishInstructions.plants = "plantas ";
spanishInstructions.finish = "Finalizar el studio";

spanishInstructions.welcome = {
    type: "html-button-response",
    stimulus:
        "<p class='instructions'><center>" +
        "<img src = 'media/UHH.png'>" +
        "<img src = 'media/UCL.jpg'>" +
        "<img src = 'media/Bicocca_Bianco.png'>" +
        "<br>"+
        "<img src = 'media/UR.png'>" +
        "<br><b>SCC Proyecto (Contacto social durante la pandemia de coronavirus)</b>" + 
        "</center></p>" +
        "<p class='instructions'>Muchas gracias por ser parte de este estudio: <b>Usted está contribuyendo de forma muy valiosa para la investigación cíentifica " +
        "sobre las consecuencias sociales de la pandemia de coronavirus. </b>Para obtener más información sobre este proyecto de investigación, haga clic <a href='https://www.psy.uni-hamburg.de/arbeitsbereiche/sozialpsychologie/scc.html' target='_blank'>en</a>.</p>" +
        "<p class='instructions'>En este estudio usted va a elaborar un videojuego simple y contester algunas preguntas sobre su comportamiento y sus emociones. "+
        "Tenga en cuenta que <b>para participar en este estudio tenga un ordenador y un teclado físico, no virtual</b>. </p>" +
        "<p class='instructions'>Si usted tiene interés, <b>podrá recibir una retroalimentación individual de sus respuestas </b>en comparación a las respuestas en promedio de los otros participantes.</p>" +
        "<p class='instructions'>El estudio tiene una duración de aproximadamente 10-15 minutos. </p>" +
        "<p class='instructions'>Si usted oprime el botón abajo para comenzar con el estudio, confirma que:</p>" +
        "<ul class='instructions'>" +
            "<li>Usted es mayor de 18 años. </li>" +
            "<li>Usted sabe, que puede suspender su participación en cualquier momento. </li>" +
            "<li>Usted sabe, que puede contactar a nuestro equipo para aclaraciones o preguntas " +
            "<a href='mailto:scc-project@ur.de'>scc-project@ur.de</a>. </li>" + //The principle investigator is PD Dr. Regina Reichardt.
            "<li>Usted sabe, que su participación será completamente anónima. No guardaeremos datos que permitiran una identificación personal. Su dirección de IP no la vamos a guardar.</li>" +
            "<li>Usted sabe, que sus datos se les va a poner a disposición a otros scientíficos por el Open Science Framework bajo absoluto anonimato.</li>" +
        "</ul>" ,
    choices: ['Estoy de acuerdo con las condiciones aquí acordadas y participo en este studio de manera voluntaria']
};

spanishInstructions.fullscreen_trial = {
  type: 'fullscreen',
    message:  `
      <div class='instructions'>
      <p><b>Antes de comenzar...</b></p>
      <ul>
        <li>Reduzca al mínimo cualquier distracción (cierre otras applicaciones, ponga su celular en modo silencioso, etc.). </li>
        <li>Desactive el bloqueador de ads, ya que esto podría provocar alteraciones en el almacenamiento de datos en nuestro sistema.</li>
      </ul>
      <p>Para participar en este estudio, el navegador tiene que estar en el modo de pantalla completa.<br></p>
      </div>
      `,
    button_label: 'Activar pantalla completa',
  fullscreen_mode: true
}

spanishInstructions.vaast_instructions_0 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tarea de videojuego</h1>" +
    "<p class='instructions'>Le pedimos de procesar la siguiente tarea, la cual registra la <b>tendencia espontánea de acercamiento o alejamiento a otras personas.</b></p> " +
    "<p class='instructions'>El tratamiento de las siguientes tareas puede ser fatigante, porque hay muchas reacciones repetitivas, pero necesarias.</b> " +
    "Para adquirir una medición confiable de tales tendencias de comportamiento es necesario de hacer estas repiticiones. </p> " +
   "<p class='instructions'> Por esta razón le pedimos <b>no suspender el estudio en esta parte y cumplir complementar la tarea.</b> "+
   "Con su participación contribuye al entendimineto de las consecuencias sociales de esta pandemia del coronavirus. </p>" +
    "<br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Tarea de videojuego</h1>" +
    "<p class='instructions'>En esta tarea se ubica, similar a un videojuego, en el pasillo mostrado en la parte inferior.</p> " +
    "<p class='instructions'><b>Imagínese que todas sus condiciones de vida también se aplican en esta situación en el pasillo.</b> " +
    "Imagínese que camina a lo largo de su pasillo, igualmente como lo ha hecho en la vida real. </p> " +
   "<p class='instructions'> Al final del pasillo, <b>se encuentran personas o plantas.</b> "+
   "Imagínese que estas personas o plantas son reales, igual que personas o plantas que pueden estar en cualquier lado en su vida real en estos dias. </p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.vaast_instructions_2 = {
    type: "html-keyboard-response",
    stimulus:
      "<h1 class ='custom-title'> Tarea de videojuego</h1>" +
      "<p class='instructions'> Su tarea es acercarse o alejarse de estas personas o plantas. " +
      "Instrucciones precisas siguen a continuación. Para esto ultilize los botones de flecha en su teclado: </p>" +
      "<p class='instructions'><center>" +
        "<img src = 'media/keyboard-vaastt_es.png'>" +
      "</center></p>" +
          "<br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
    choices: [32]
};

spanishInstructions.vaast_instructions_4 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_1;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_1;
  },
  stimulus:
    "<h1 class ='custom-title'> Tarea de videojuego - Parte 1/4</h1>" +
    "<p class='instructions'>En esta parte debe de: " +
    "<ul class='instructions'>" +
    "<li><strong>Acercarse a las <span id='GROUPTOAPPROACH'></span> apretando el botón de flecha hacia arriba </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Alejarse de las <span id='GROUPTOAVOID'></span> apretando el botón de flecha hacia abajo </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ¡Es muy importante que reaccione lo más rápido y exacto que le sea posible! <br><br></strong>" +
    "<p class ='instructions'>Si comete un error, aparece una equis roja. Corriga su selección con los otros botones de flecha. Utilice el dedo índice de su mano preferida. " +
    "<br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.vaast_instructions_5 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_2;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_2;
  },
  stimulus:
    "<h1 class ='custom-title'> Tarea de videojuego - Parte 2/4</h1>" +
    "<p class='instructions'>¡Atención! Las reglas de reacción se han invertido: " +
    "<ul class='instructions'>" +
    "<li><strong>Acercarse a las <span id='GROUPTOAPPROACH'></span> apretando el botón de flecha hacia arriba </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Alejarse de las <span id='GROUPTOAVOID'></span> apretando el botón de flecha hacia abajo </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ¡Es muy importante que reaccione lo más rápido y exacto que le sea posible! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.vaast_instructions_6 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_3;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_3;
  },
  stimulus:
    "<h1 class ='custom-title'> Tarea de videojuego - Parte 3/4</h1>" +
    "<p class='instructions'>¡Atención! Las reglas de reacción se han invertido: " +
    "<ul class='instructions'>" +
    "<li><strong>Acercarse a las <span id='GROUPTOAPPROACH'></span> apretando el botón de flecha hacia arriba </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Alejarse de las <span id='GROUPTOAVOID'></span> apretando el botón de flecha hacia abajo </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ¡Es muy importante que reaccione lo más rápido y exacto que le sea posible! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.vaast_instructions_7 = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('GROUPTOAPPROACH').innerHTML = group_to_approach_4;
    document.getElementById('GROUPTOAVOID').innerHTML = group_to_avoid_4;
  },
  stimulus:
    "<h1 class ='custom-title'> Tarea de videojuego - Parte 4/4</h1>" +
    "<p class='instructions'>¡Atención! Las reglas de reacción se han invertido: " +
    "<ul class='instructions'>" +
    "<li><strong>Acercarse a las <span id='GROUPTOAPPROACH'></span> apretando el botón de flecha hacia arriba </strong></li>" +
    "<strong>  </strong>" +
    "<li><strong>Alejarse de las <span id='GROUPTOAVOID'></span> apretando el botón de flecha hacia abajo </strong></li>" +
    "<strong> </strong>" +
    "</ul>" +
    "<strong> ¡Es muy importante que reaccione lo más rápido y exacto que le sea posible! <br><br></strong>" +
    "<br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.feedback_firstblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>¡Bien hecho!<br><br>" + 
    "Su promedio de tiempo de reacción: <b><span id='FeedbackMeanReactionTime'></span> milisegundos</b><br>" +
    "Usted reaccionó en <b><span id='FeedbackNumberOfCorrectRespones'></span> de " +
    "<span id='FeedbackNumberOfTotalRespones'></span> casos correctamente.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Intente en la siguiente parte de mejorar su promedio.</b>" +
    "<p class='instructions'><center>Aunque la tarea puede ser fatigosa, no suspenda. Su participación contribuye al <br>al entendimiento científico de como "+
    "la pandemia del coronavirus influye la tendencia espontánea <br>en el comportamiento hacia otras personas.</b><br>" +
    "<p class='instructions'><center>Si usted tiene interés, podrá comparer sus resultados<br> con el promedio los de otros participantes.<br><br>" + 
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.feedback = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>¡Bien hecho!<br><br>" + 
    "Su promedio de tiempo de reacción: <b><span id='FeedbackMeanReactionTime'></span> milisegundos</b><br>" +
    "Usted reaccionó en <b><span id='FeedbackNumberOfCorrectRespones'></span> de " +
    "<span id='FeedbackNumberOfTotalRespones'></span> casos correctamente.</b>" +
    "</p></center>" +
    "<p class='instructions'><center><b>Intente en la siguiente parte de mejorar su promedio.</b>" +
    "<p class='instructions'><center>Aunque la tarea puede ser fatigosa, no suspenda. Su participación contribuye al <br>al entendimiento científico de como "+
    "la pandemia del coronavirus influye la tendencia espontánea <br>en el comportamiento hacia otras personas.</b><br>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.feedback_lastblock = {
  type: "html-keyboard-response",
  on_load: function() {
    document.getElementById('FeedbackMeanReactionTime').innerHTML = FeedbackMeanReactionTime;
    document.getElementById('FeedbackNumberOfCorrectRespones').innerHTML = FeedbackNumberOfCorrectResponses;
    document.getElementById('FeedbackNumberOfTotalRespones').innerHTML = FeedbackNumberOfCorrectResponses + FeedbackNumberOfWrongResponses;
  },
  stimulus:
    "<p class='instructions'><center>¡Bien hecho!<br><br>" + 
    "Su promedio de tiempo de reacción: <b><span id='FeedbackMeanReactionTime'></span> milisegundos</b><br>" +
    "Usted reaccionó en <b><span id='FeedbackNumberOfCorrectRespones'></span> de " +
    "<span id='FeedbackNumberOfTotalRespones'></span> casos correctamente.</b>" +
    "</p></center>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};


spanishInstructions.extra_information = {
  type: 'html-keyboard-response',
  stimulus:
    "<p class='instructions'>Inicialmente le pedimos contester las siguientes preguntas.</p>" +
    "<p class='instructions'>Si usted tiene interés, podrá recibir una retroalimentación individual de sus respuestas en comparación a las respuestas en promedio de los otros participantes.</p>" +
    "<p class = 'continue-instructions'>Para continuar oprima la barra <strong>espaciadora</strong></p>",
  choices: [32]
};

spanishInstructions.feedback_summary = `
  <div class='instructions' id=FEEDBACK>
      <div>
      <p>
      De momento no hemos recibido suficientes datos, para ofrecer resultados promedios.
      Si usted está interesado en recibir esta información, puede dejarnos su correo electrónico.
      </p><p>
        Correo electrónico:&nbsp <input type='text' name='EMAIL' id='EMAIL' size=60 onchange='window.email = this.value'>
      </p><p>
        Su correo electrónico será guardado de forma separada de sus respuestas en el estudio. No nos será posible establecer o relacionar sus respuestas con su correo electrónico.
      </p><p>
        <h3><center>Aquí ve usted un resumen de sus respuestas</center></h3>
        <p>Por favor no olvide de guardar este resumen.</p>
      </div>
      <div id=REACTIONS >
        Su promedio de tiempo de reacción: <b><span id='FeedbackMeanReactionTime'></span> milisegundos</b><br>
        Usted reaccionó en <b><span id='FeedbackNumberOfCorrectRespones'></span> de <span id='FeedbackNumberOfTotalRespones'></span> casos correctamente.</b>
      </div>
      <div id='RESPONSES'></div>
    </div>
    <!--
    <div class='instructions'><button id="downloadPDF" style="float: right;">Download PDF</button></div>
    -->
`;
