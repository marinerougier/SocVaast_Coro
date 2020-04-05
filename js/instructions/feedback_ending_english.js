
var englishFeedback = {};

englishFeedback.instr = {
    stimulus:
      `<div class='instructions' id=FEEDBACK>
        <div>
        <p>
        Note, that we have not yet collected a sufficient amount of data to show average responses from previous participants.
        If you are interested in this summary, please enter your Email address in the field below.
        </p><p>
          Email-address:&nbsp <input type='text' name='EMAIL' id='EMAIL' size=60 onchange='window.email = this.value'>
        </p><p>
          Your email-address will be stored separately from your responses in the study. It is not possible to connect your email-address with any of your responses.
        </p><p>
          <h3><center>Here is a summary of your responses</center></h3>
          <p>Please save this page for your future reference.</p>
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
      `,
};