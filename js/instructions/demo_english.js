
var englishDemo = {};

/*
englishDemo.extra_information_1 = {
  timeline: [{
    type: 'survey-text',
    questions: [{prompt: "What is your current country of residence?", name: 'country', required: true},
                {prompt: "Please indicate the ZIP code of your current residence:", name: 'zip', required: true},
                {prompt: "What is your age?", name: 'age', required: true}],
    button_label: "OK",
  }],
  on_finish: function(data) {
    jsPsych.data.addProperties({
      country: JSON.parse(data.responses)["country"],
      zip: JSON.parse(data.responses)["zip"],
      age: JSON.parse(data.responses)["age"],
    });
  }
}
*/

englishDemo.extra_information = {
  timeline: [{
    type: 'survey-html-form',
    html: `
      <div class='instructions' style='text-align:left'><table> 
      <tr><td>Where are you currently located?</td>
      <td><select name='COUNTRY' type='select' width='100%' required='true'>
      <option value="Sweden" selected="selected">Sweden</option>
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
      <tr><td>Please indicate the ZIP code of your current location:</td>
      <td style="vertical-align:top"><input name='ZIP' type='number' width='100%' required='true'></td></tr>
      
      <tr><td>Besides yourself, how many family members or loved ones live in your current household?</td>
      <td style="vertical-align:top"><input name='NB_FAMILY' type='number' width='100%' required='true'></td></tr>
      
      <tr><td>Besides yourself, how many friends or flat mates live in your current household?</td>
      <td style="vertical-align:top"><input name='NB_FRIENDS' type='number' width='100%' required='true'></td></tr>

      <tr><td>What is your age? </td>
      <td style="vertical-align:top"><input name='AGE' type='number' width='100%' required='true'></td></tr>
      
      <tr><td>What is your gender? </td>
      <td style="vertical-align:top">
        <label><input type='radio' name='SEX' required>&nbspfemale</label>
        <label><input type='radio' name='SEX' required>&nbspmale</label>
        <label><input type='radio' name='SEX' required>&nbspother</label>
      </td></tr>
      
      <tr><td>Do you have professional contact with COVID-19 patients (e.g. as nursing staff, physician, etc.)?</td>
      <td><label><input type='radio' name='OCCUPATION' value='yes' required> Yes </label>&nbsp&nbsp<label><input type='radio' name='OCCUPATION' value='no'>&nbsp No</label></td></tr>
      
      <!--
      <tr><td>Are you interested in receiving an individual feedback of your responses in comparison to the average responses?</td>
      <td style="vertical-align:top"><label><input type='radio' name='FEEDBACK' value='Yes' required> Yes </label>&nbsp&nbsp<label><input type='radio' name='FEEDBACK' value='No'>&nbsp No</label></td></tr>
      -->

      <tr><td style="vertical-align:top">Did you experience technical difficulties during completion of the video game task? If so, please describe.</td>
      <td><input type='text' name='TECH_DIFF'></td></tr>

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


