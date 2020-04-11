
var spanishDemo = {};

spanishDemo.extra_information_1 = {
  timeline: [{
    type: 'survey-html-form',
    html: `
      <div class='instructions' style='width:700px text-align:left; font-size:medium vertical-align:top; line-height: 1.0'>
      <table style='width:100%; border-collapse: separate; border-spacing: 1em'; vertical-align:top> 
      <tr><td>¿En qué país se encuentra usted en este momento?</td>
      <td style='font-size: smaller'><select name='COUNTRY' type='select' width='100%' required>
      <option value="" disabled selected hidden>Please select</option>
      <option value="Afganistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="American Samoa">American Samoa</option>
      <option value="Andorra">Andorra</option>
      <option value="Angola">Angola</option>
      <option value="Anguilla">Anguilla</option>
      <option value="Antigua & Barbuda">Antigua & Barbuda</option>
      <option value="Argentina">Argentina</option>
      <option value="Armenia">Armenia</option>
      <option value="Aruba">Aruba</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Barbados">Barbados</option>
      <option value="Belarus">Belarus</option>
      <option value="Belgium">Belgium</option>
      <option value="Belize">Belize</option>
      <option value="Benin">Benin</option>
      <option value="Bermuda">Bermuda</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Bonaire">Bonaire</option>
      <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
      <option value="Botswana">Botswana</option>
      <option value="Brazil">Brazil</option>
      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
      <option value="Brunei">Brunei</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Burkina Faso">Burkina Faso</option>
      <option value="Burundi">Burundi</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Canada">Canada</option>
      <option value="Canary Islands">Canary Islands</option>
      <option value="Cape Verde">Cape Verde</option>
      <option value="Cayman Islands">Cayman Islands</option>
      <option value="Central African Republic">Central African Republic</option>
      <option value="Chad">Chad</option>
      <option value="Channel Islands">Channel Islands</option>
      <option value="Chile">Chile</option>
      <option value="China">China</option>
      <option value="Christmas Island">Christmas Island</option>
      <option value="Cocos Island">Cocos Island</option>
      <option value="Colombia">Colombia</option>
      <option value="Comoros">Comoros</option>
      <option value="Congo">Congo</option>
      <option value="Cook Islands">Cook Islands</option>
      <option value="Costa Rica">Costa Rica</option>
      <option value="Cote DIvoire">Cote DIvoire</option>
      <option value="Croatia">Croatia</option>
      <option value="Cuba">Cuba</option>
      <option value="Curaco">Curacao</option>
      <option value="Cyprus">Cyprus</option>
      <option value="Czech Republic">Czech Republic</option>
      <option value="Denmark">Denmark</option>
      <option value="Djibouti">Djibouti</option>
      <option value="Dominica">Dominica</option>
      <option value="Dominican Republic">Dominican Republic</option>
      <option value="East Timor">East Timor</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="El Salvador">El Salvador</option>
      <option value="Equatorial Guinea">Equatorial Guinea</option>
      <option value="Eritrea">Eritrea</option>
      <option value="Estonia">Estonia</option>
      <option value="Ethiopia">Ethiopia</option>
      <option value="Falkland Islands">Falkland Islands</option>
      <option value="Faroe Islands">Faroe Islands</option>
      <option value="Fiji">Fiji</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="French Guiana">French Guiana</option>
      <option value="French Polynesia">French Polynesia</option>
      <option value="French Southern Ter">French Southern Ter</option>
      <option value="Gabon">Gabon</option>
      <option value="Gambia">Gambia</option>
      <option value="Georgia">Georgia</option>
      <option value="Germany">Germany</option>
      <option value="Ghana">Ghana</option>
      <option value="Gibraltar">Gibraltar</option>
      <option value="Great Britain">Great Britain</option>
      <option value="Greece">Greece</option>
      <option value="Greenland">Greenland</option>
      <option value="Grenada">Grenada</option>
      <option value="Guadeloupe">Guadeloupe</option>
      <option value="Guam">Guam</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Guinea">Guinea</option>
      <option value="Guyana">Guyana</option>
      <option value="Haiti">Haiti</option>
      <option value="Hawaii">Hawaii</option>
      <option value="Honduras">Honduras</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="Hungary">Hungary</option>
      <option value="Iceland">Iceland</option>
      <option value="Indonesia">Indonesia</option>
      <option value="India">India</option>
      <option value="Iran">Iran</option>
      <option value="Iraq">Iraq</option>
      <option value="Ireland">Ireland</option>
      <option value="Isle of Man">Isle of Man</option>
      <option value="Israel">Israel</option>
      <option value="Italy">Italy</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Japan">Japan</option>
      <option value="Jordan">Jordan</option>
      <option value="Kazakhstan">Kazakhstan</option>
      <option value="Kenya">Kenya</option>
      <option value="Kiribati">Kiribati</option>
      <option value="Korea North">Korea North</option>
      <option value="Korea Sout">Korea South</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Kyrgyzstan">Kyrgyzstan</option>
      <option value="Laos">Laos</option>
      <option value="Latvia">Latvia</option>
      <option value="Lebanon">Lebanon</option>
      <option value="Lesotho">Lesotho</option>
      <option value="Liberia">Liberia</option>
      <option value="Libya">Libya</option>
      <option value="Liechtenstein">Liechtenstein</option>
      <option value="Lithuania">Lithuania</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Macau">Macau</option>
      <option value="Macedonia">Macedonia</option>
      <option value="Madagascar">Madagascar</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Malawi">Malawi</option>
      <option value="Maldives">Maldives</option>
      <option value="Mali">Mali</option>
      <option value="Malta">Malta</option>
      <option value="Marshall Islands">Marshall Islands</option>
      <option value="Martinique">Martinique</option>
      <option value="Mauritania">Mauritania</option>
      <option value="Mauritius">Mauritius</option>
      <option value="Mayotte">Mayotte</option>
      <option value="Mexico">Mexico</option>
      <option value="Midway Islands">Midway Islands</option>
      <option value="Moldova">Moldova</option>
      <option value="Monaco">Monaco</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Montserrat">Montserrat</option>
      <option value="Morocco">Morocco</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Myanmar">Myanmar</option>
      <option value="Nambia">Nambia</option>
      <option value="Nauru">Nauru</option>
      <option value="Nepal">Nepal</option>
      <option value="Netherland Antilles">Netherland Antilles</option>
      <option value="Netherlands">Netherlands (Holland, Europe)</option>
      <option value="Nevis">Nevis</option>
      <option value="New Caledonia">New Caledonia</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Niger">Niger</option>
      <option value="Nigeria">Nigeria</option>
      <option value="Niue">Niue</option>
      <option value="Norfolk Island">Norfolk Island</option>
      <option value="Norway">Norway</option>
      <option value="Oman">Oman</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Palau Island">Palau Island</option>
      <option value="Palestine">Palestine</option>
      <option value="Panama">Panama</option>
      <option value="Papua New Guinea">Papua New Guinea</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Peru">Peru</option>
      <option value="Phillipines">Philippines</option>
      <option value="Pitcairn Island">Pitcairn Island</option>
      <option value="Poland">Poland</option>
      <option value="Portugal">Portugal</option>
      <option value="Puerto Rico">Puerto Rico</option>
      <option value="Qatar">Qatar</option>
      <option value="Republic of Montenegro">Republic of Montenegro</option>
      <option value="Republic of Serbia">Republic of Serbia</option>
      <option value="Reunion">Reunion</option>
      <option value="Romania">Romania</option>
      <option value="Russia">Russia</option>
      <option value="Rwanda">Rwanda</option>
      <option value="St Barthelemy">St Barthelemy</option>
      <option value="St Eustatius">St Eustatius</option>
      <option value="St Helena">St Helena</option>
      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
      <option value="St Lucia">St Lucia</option>
      <option value="St Maarten">St Maarten</option>
      <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
      <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
      <option value="Saipan">Saipan</option>
      <option value="Samoa">Samoa</option>
      <option value="Samoa American">Samoa American</option>
      <option value="San Marino">San Marino</option>
      <option value="Sao Tome & Principe">Sao Tome & Principe</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Senegal">Senegal</option>
      <option value="Seychelles">Seychelles</option>
      <option value="Sierra Leone">Sierra Leone</option>
      <option value="Singapore">Singapore</option>
      <option value="Slovakia">Slovakia</option>
      <option value="Slovenia">Slovenia</option>
      <option value="Solomon Islands">Solomon Islands</option>
      <option value="Somalia">Somalia</option>
      <option value="South Africa">South Africa</option>
      <option value="Spain">Spain</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Sudan">Sudan</option>
      <option value="Suriname">Suriname</option>
      <option value="Swaziland">Swaziland</option>
      <option value="Sweden">Sweden</option>
      <option value="Switzerland">Switzerland</option>
      <option value="Syria">Syria</option>
      <option value="Tahiti">Tahiti</option>
      <option value="Taiwan">Taiwan</option>
      <option value="Tajikistan">Tajikistan</option>
      <option value="Tanzania">Tanzania</option>
      <option value="Thailand">Thailand</option>
      <option value="Togo">Togo</option>
      <option value="Tokelau">Tokelau</option>
      <option value="Tonga">Tonga</option>
      <option value="Trinidad & Tobago">Trinidad & Tobago</option>
      <option value="Tunisia">Tunisia</option>
      <option value="Turkey">Turkey</option>
      <option value="Turkmenistan">Turkmenistan</option>
      <option value="Turks & Caicos Is">Turks & Caicos Is</option>
      <option value="Tuvalu">Tuvalu</option>
      <option value="Uganda">Uganda</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United Arab Erimates">United Arab Emirates</option>
      <option value="United States of America">United States of America</option>
      <option value="Uraguay">Uruguay</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="Vatican City State">Vatican City State</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
      <option value="Wake Island">Wake Island</option>
      <option value="Wallis & Futana Is">Wallis & Futana Is</option>
      <option value="Yemen">Yemen</option>
      <option value="Zaire">Zaire</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
   </select>
      </td></tr> 
      <tr><td>Código postal del lugar donde usted está del momento:</td>
      <td style="vertical-align:top"><input name='ZIP' type='number' width='100%' required></td></tr>

      <tr><td>¿Cuáles son sus raíces culturales o étnicas?</td>
      <td style="vertical-align:top; font-size:medium"><input name='ETHNICITY' type='text' required></td></tr>
      
      <tr><td>¿Además de usted, cuantas personas (familiares o personas cercanas) viven en su hogar?</td>
      <td style="vertical-align:top"><input name='NB_FAMILY' type='number' width='100%' required></td></tr>
      
      <tr><td>¿Además de usted, cuantos amigos o compañeros de apartamento viven en su hogar?</td>
      <td style="vertical-align:top"><input name='NB_FRIENDS' type='number' width='100%' required></td></tr>

      </table></div>`,
    button_label: "OK",
  }],
  on_finish: function(data) {
    console.log(data.responses);
    // Add these properties to all data entries if desired
    jsPsych.data.addProperties(JSON.parse(data.responses));
    // add the tag only the last data item so we can save that separately
    // we're already adding to all, so we just add that tag in the extra_information_2
    // jsPsych.data.get().addToLast({tag: "extra_data"});
  }
}

spanishDemo.extra_information_2 = {
  timeline: [{
    type: 'survey-html-form',
    html: `
      <div class='instructions' style='width:700px text-align:left; font-size:medium vertical-align:top; line-height: 1.0'>
      <table style='width:100%; border-collapse: separate; border-spacing: 1em'; vertical-align:top> 
      <tr><td>Su edad</td>
      <td style="vertical-align:top"><input name='AGE' type='number' width='100%' required='true'></td></tr>
      
      <tr><td>Su género</td>
      <td style="vertical-align:top; font-size:smaller">
        <label><input type='radio' name='SEX' value="1" required>&nbspfemenino&nbsp&nbsp</label>
        <label><input type='radio' name='SEX' value="2" required>&nbspmasculino&nbsp&nbsp</label>
        <label><input type='radio' name='SEX' value="3" required>&nbspdiverso&nbsp&nbsp</label>
      </td></tr>

      <tr><td>¿Tiene usted contactos con pacientes contagios con Covid-19 (como enfermero/enfermera, medico, etc.)?</td>
      <td><label><input type='radio' name='OCCUPATION' value='1' required> sí </label>&nbsp&nbsp<label><input type='radio' name='OCCUPATION' value='2'>&nbsp no</label></td></tr>
      
      <!--
      <tr><td>Are you interested in receiving an individual feedback of your responses in comparison to the average responses?</td>
      <td style="vertical-align:top"><label><input type='radio' name='FEEDBACK' value='Yes' required> Yes </label>&nbsp&nbsp<label><input type='radio' name='FEEDBACK' value='No'>&nbsp No</label></td></tr>
      -->

      </table></div>`,
    button_label: "OK",
  }],
  on_finish: function(data) {
    console.log(data.responses);
    // Add these properties to all data entries if desired
    jsPsych.data.addProperties(JSON.parse(data.responses));
    // add the tag only the last data item so we can save that separately
    jsPsych.data.get().addToLast({tag: "extra_data"});
  }
}

spanishDemo.extra_information_techdiff = {
  timeline: [{
    type: 'survey-html-form',
    html: `
      <div class='instructions' style='width:700px text-align:left; font-size:medium vertical-align:top; line-height: 1.0'>
      <table style='width:100%; border-collapse: separate; border-spacing: 1em'; vertical-align:top> 

      <tr><td style="vertical-align:top">¿Apareció algún problema técnico durante la elaboración de las tareas de videojuego? ¿En caso de ser así, cuáles?</td>
      <td><textarea rows='3' cols='20' maxlength='256' wrap='soft' name='TECH_DIFF'></textarea></td></tr>

      </table></div>`,
    button_label: "OK",
  }],
  on_finish: function(data) {
    console.log(data.responses);
    // Add these properties to all data entries if desired
    jsPsych.data.addProperties(JSON.parse(data.responses));
    // add the tag only the last data item so we can save that separately
    jsPsych.data.get().addToLast({tag: "extra_data"});
  }
}

spanishDemo.extra_information_3 = {
  timeline: [{
    type: 'html-button-response',
    // the way I'm extractin the email here is a but hacky, but document.getElementById('EMAIL') returns null in on_finish
    stimulus: `
      <div class='instructions' style='text-align:left;' >
      <p><b><center>El estudio ha sido finalizado. ¡Muchas gracias por su participación!</center></b></p>
      <p>
      Si usted desea participar en otros estudios del SCC-projecto en el futuro, puede dejarnos su correo electrónico:<br />
      </p><p>
      Correo electrónico:&nbsp <input type='text' name='EMAIL' id='EMAIL' size=60 onchange='window.email = this.value'>
      </p><p>
      Su correo electrónico será guardado de forma separada de sus respuestas en el estudio. No nos será posible establecer o relacionar sus respuestas con su correo electrónico.
      </p><p>
      En caso de tener algunas preguntas al respeto, no dude en contactornos a nuestro correo electrónico <a href="mailto:scc-project@ur.de?subject=SCC Study">scc-project@ur.de</a>
      </p><p>
      Ayudenos a aumentar el número de participantes, compartiendo el link con sus conocidos o amigos: 
      </p>
      <div style='text-align:center'>
      <!-- Sharingbutton Facebook -->
        <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsccpandemicproject.github.io%2FSCCPandemicProject%2Findex.html" target="_blank" rel="noopener" aria-label="">
          <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
            </div>
          </div>
        </a>

        <!-- Sharingbutton Twitter -->
        <a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Participate%20in%20study%20on%20social%20contact%20during%20the%20corona%20pandemic&amp;url=https%3A%2F%2Fsccpandemicproject.github.io%2FSCCPandemicProject%2Findex.html" target="_blank" rel="noopener" aria-label="">
          <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
            </div>
          </div>
        </a>

        <!-- Sharingbutton E-Mail -->
        <a class="resp-sharing-button__link" href="mailto:?subject=Participate%20in%20study%20on%20social%20contact%20during%20the%20corona%20pandemic&amp;body=https%3A%2F%2Fsccpandemicproject.github.io%2FSCCPandemicProject%2Findex.html" target="_self" rel="noopener" aria-label="">
          <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z"/></svg>
            </div>
          </div>
        </a>
      </div>
      <p style='text-align:center'>
      ¡Muchas gracias por su ayuda!
      </p>
      </div>
    `,
    choices: ["Finalizar el studio", "Mostrar el resumen de sus respuestas"]
  }],
  on_finish: function(data) {
    // this would add the email to every data point collected,
    // exactly what you promise not do....
    //jsPsych.data.addProperties({
    var data_to_save =  {
      email: window.email,
      info_requested: 'info'
    };
    saving_email(data_to_save);
  }
}

/*
englishDemo.extra_information_7 = {
    timeline: [{
    type: 'survey-text',
    questions: [{prompt: "Email:"}],
    preamble: "<br><b>The study is complete. Thank you very much for your participation! <br>" + 
    "Please help us invite as many people as possible to participate in this study <br>by sharing the link on social media or emailing it to your friends !!!!!PUT LINK HERE!!!!!. Thank you!</b> <br><br>If you are interested in receiving invitations to future studies of the SCC-project or receiving <br> more information about the SCC-project, please enter your email-address in the field below. <br>Your email-address will be stored separately from your responses in the study. <br>It is not possible to connect your email-address with any of your responses. <br><br> If you are not interested, please continue.<br><br>",
    button_label: "Continue"
    }],
      on_finish: function(data) {
      jsPsych.data.addProperties({
        email: JSON.parse(data.responses)["Q0"],
      });
    }
  }
*/

