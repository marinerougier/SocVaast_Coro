var jspsych_id = jsPsych.data.getURLVariable("jspsych_id");
  if (jspsych_id == null) { jspsych_id = jsPsych.randomization.randomID(15) };

  var timeline = [];

  var question = {
    type: "html-button-response",
    stimulus: "Please choose a language:",
    choices: ['English', 'Français', 'Deutsch'],
  };

  timeline.push(question);

  jsPsych.init({
    timeline: timeline,
    on_finish: function (data) {

      jsPsych.data.addProperties({
        jspsych_id: jspsych_id
      });

      // Process response
      var res = data.filter({ stimulus: "Please choose a language:" }).json();
      res = JSON.parse(res)[0].button_pressed;
      console.log(res);

      // Redirect to second part
      switch (res) {
        case "0": // English
          window.location.href = "https://marinerougier.github.io/SocVaast_Coro/index_en.html?jspsych_id=" + jspsych_id;
          break;
        case "1": // Français
          window.location.href = "https://marinerougier.github.io/SocVaast_Coro/index_fr.html?jspsych_id=" + jspsych_id;
          break;
        case "2": // Deutsch
          window.location.href = "https://google.com?jspsych_id=" + jspsych_id;
          break;
      };
    }
  });