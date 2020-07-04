<?php
ob_start();
include '../Admin/config.php';
include '../Admin/db.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Registration Page</title>
      <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
         <style>
          .wrong-box{
              color: #ff6961;
          }
            
      </style>
      <?php
      include '../site/nav.php';
      ?>
      <div class="container">
          <?php
            //debug when true, echos var_dump and list of all inputs from user
          if($debug)
          var_dump($_POST);
          ?>
          
              <div class="row justify-content-center">
                <div class="text-center">
                        <img src="../visual/webpage/gameweb.png" style="width: 100%">
                </div>
              </div>
          <div class="row">
              
              <div class="col-xs-12 col-md-6 order-12">
                  <form method="post" action="Ryumaregistration.php">
              <div class="input-group mb-2">
                  <div class="input-group-prepend">
                      <span class="input-group-text">User Name</span>
                  </div>
                  <input name="username" class="form-control" type="text" id="username" placeholder="Username"/></div>
              
          <div class="input-group mb-2">
                  <div class="input-group-prepend">
                      <span class="input-group-text">Current Age</span>
                  </div>
                  <input name="ages" class="form-control" type="number" id="ages" placeholder="Current Age"/></div>
              
          <div class="input-group mb-2">
                  <div class="input-group-prepend">
                      <span class="input-group-text">Password</span>
                  </div>
                  <input name="password1" class="form-control" type="password" id="psword1" placeholder="Password"/></div>

          <div class="input-group mb-2">
                  <div class="input-group-prepend">
                      <span class="input-group-text">Confirm Password</span>
                  </div>
                  <input name="password2" class="form-control" type="password" id="psword2" placeholder="confirm password"/></div>
              
          <div class="input-group mb-2">
                  <div class="input-group-prepend">
                      <span class="input-group-text">Email</span>
                  </div>
                  <input name="email1" class="form-control" type="email" id="emails1" placeholder="email"/></div>
          
          <div class="input-group mb-2">
                  <div class="input-group-prepend">
                      <span class="input-group-text">Confirm Email</span>
                  </div>
                  <input name="email2" class="form-control" type="email" id="emails2" placeholder="confirm email"/></div>

      <div class="row">
              <div class="col-xs-2 ml-4 mr-4"><input type="radio" name="gender" value="male"> Male</div>
              <div class="col-xs-3 mr-4"><input type="radio" name="gender" value="female"> Female</div>
              <div class="col-xs-2 mr-4"><input type="radio" name="gender" value="other"> Other</div>
        </div>
      
              <br>
          <input class="btn btn-primary ml-4 mb-4" type="submit" id="registerbttn" value="Register"/>
<?php
if($debug){
?>
                      
      <div id="feedback"></div> 
        <select id="regtester" class="form-control">
          <option value="unchosen">Choose an Option</option>
          <option value="correct">All Correct</option>
          <option value="pword_mismatch">Pword mismatch</option>
          <option value="pword_short">Pword too Short</option>
          <option value="no_at">Missing email @</option>
          <option value="no_dot">Missing email dot</option>
          <option value="email_mismatch">Email mismatch</option>
          <option value="too_young">Too young</option>
          <option value="too_old">Too old</option>
          <option value="no_gend">No Gender</option>
      </select>
                 <?php
            }
                      ?>
                      
              <div class="col-12">
                  
                  
                  
                   <?php
                  $bFormSubmitted = isset($_POST['username']) && isset($_POST['ages']) && isset($_POST['password1']) && isset($_POST['password2']) && isset($_POST['email1']) && isset($_POST['email2']) && isset($_POST['gender']);
                      $email1 ='';
                      $password1 ='';
                      $username= '';
                      $ages = '';
                      $gender = '';
                   if ($bFormSubmitted){
                       $msg = validateForm();
                       if(strlen($msg) > 0)
                       {    
                           echo $msg;
                           ?>
                           <script type='text/javascript'>alert('Error code: 130956\nRequired Fields Are Empty Or Invalid');</script>
                  
                            <?php
                           echo '____________________________________________<br/>';
                           echo '<br/><b style="color:red;">Your Registration failed</b><br/>';
                           echo '____________________________________________<br/>';
                           echo '<br/>Error code: 104323<br/>';
                           echo 'Please try again in 45 minutes<br/>';
                           echo '____________________________________________<br/>';
                       }
                       else
                       {
                           echo '<br/><b style="color:#66FF66;">Your Registration form was successful</b><br/>';
                           if($debug)
                           echo '____________________________________________<br/>';
                           
                       }
                   }      
                   ?>
                   
              </div>
              
          </form>
                  </div>
              <div class="col-xs-12 col-md-6 order-xs-first order-md-last">
                  <h2><b>About Registering</b></h2>
                  <p>Registration is completely free though we can't promise that we won;t sell all your data to Google and other companies that pay us for your information!</p>
                  <p>
                    Most of our apps are free. However, if you want to calculate your approximate age, you will have to pay.
                  </p>
              </div>
          </div>
    </div>
      
      
  </head>
  <body>
      <script>
          var bttnR = document.getElementById("registerbttn");
          bttnR.addEventListener("click", validate);
          
          addEventListener("keyup", function(event) {
              event.preventDefault();
              if (event.keyCode === 13) {
                  document.getElementById("registerbttn").click();
              }
          });
          
          
          function validate(){
              var uName = document.getElementById('username').value;
              var age = document.getElementById('ages').value;
              var pword1 = document.getElementById('psword1').value;
              var pword2 = document.getElementById('psword2').value;
              var email1 = document.getElementById('emails1').value;
              var email2 = document.getElementById('emails2').value;
              var genderVal, genderRadioObj = document.querySelector('input[name="gender"]:checked');
              console.log("uName " + uName);
              console.log("age " + age);
              console.log("pWord1 " + pword1);
              console.log("pWord2 " + pword2);
              console.log("email1 " + email1);
              console.log("email2 " + email2);
              console.log("genderRadioObj " + genderRadioObj);
              
              
              if(genderRadioObj === null)
                  {
                      console.log("No radio option was selected");
                  }
              else
                  {
                      genderVal = genderRadioObj.value
                      console.log("genderVal " + genderVal);
                  }
              
              var validated = true;
              var Ecolor = false;
              var Pcolor = false;
              var Acolor = false;
              console.log("bttn clicked fxn");
              var html ="";
              
              if(genderRadioObj === null)
                  {
                      html +="<span class='text-danger'> <br/>*Enter your gender</span>"
                      validated = false;
                  }
            
              
              if(email1.indexOf("@") ===-1)
              {
                  html +="<span class='text-danger'> <br/>*Enter a valid email ( missing @ )</span>"
                  emails1.style.backgroundColor ="#ff6961";
                  emails2.style.backgroundColor ="#ff6961";
                  document.getElementById("emails1").focus();
                  validated = false;
                  Ecolor = true;
              }
              else{
                  emails1.style.backgroundColor ="#fff";
                  emails2.style.backgroundColor ="#fff";
              }
              
              if(email1.indexOf(".")===-1)
              {
                  html +="<span class='text-danger'> <br/>*Enter a valid email ( missing a dot )</span>"
                  emails1.style.backgroundColor ="#ff6961";
                  emails2.style.backgroundColor ="#ff6961";
                  document.getElementById("emails1").focus();
                  validated = false;
                  Ecolor = true;
              }
              else{
                  emails1.style.backgroundColor ="#fff";
                  emails2.style.backgroundColor ="#fff";
              }
    
              
              if(email1 != email2)
              {
                  html +="<span class='text-danger'> <br/>*The email does not match</span>"
                  emails1.style.backgroundColor ="#ff6961";
                  emails2.style.backgroundColor ="#ff6961";
                  document.getElementById("emails1").focus();
                  validated = false;
              }
              else{
                  if(Ecolor === true){
                      emails1.style.backgroundColor ="#ff6961";
                      emails2.style.backgroundColor ="#ff6961";
                      
                  }
                  else{
                  emails1.style.backgroundColor ="#fff";
                  emails2.style.backgroundColor ="#fff";
                  }
              }
              
              
              if(pword1.length < 4)
              {
                  html += "<span class ='text-danger'> <br/>*Enter a password that is at least 4 character </span>";
                  psword1.style.backgroundColor ="#ff6961";
                  psword2.style.backgroundColor ="#ff6961";
                  document.getElementById("psword1").focus();
                  validated = false;
                  Pcolor = true;
              }
              else{
                  psword1.style.backgroundColor ="#fff";
                  psword2.style.backgroundColor ="#fff";
              }
              
              
              if(pword1 != pword2)
              {
                  html +="<span class='text-danger'> <br/>*The password does not match</span>";
                  psword1.style.backgroundColor ="#ff6961";
                  psword2.style.backgroundColor ="#ff6961";
                  document.getElementById("psword1").focus();
                  validated = false;
              }
              else{
                  if(Pcolor === true){
                      psword1.style.backgroundColor ="#ff6961";
                      psword2.style.backgroundColor ="#ff6961";
                  }
                  else{
                  psword1.style.backgroundColor ="#fff";
                  psword2.style.backgroundColor ="#fff";
                  }

              }
              
              
              if (age < 10)
              {
                  html += "<span class ='text-danger'> <br/>*Enter an age that is valid( Too young )</span>";
                  ages.style.backgroundColor ="#ff6961";
                  document.getElementById("ages").focus();
                  validated = false;
                  Acolor = true;
              }
              else{
                  ages.style.backgroundColor ="#fff";
              }
              
              if (age > 110)
              {
                  html += "<span class ='text-danger'> <br/>*Enter an age that is valid( Too old )</span>";
                  ages.style.backgroundColor ="#ff6961";
                  document.getElementById("ages").focus();
                  validated = false;
              }
              else{
                  if(Acolor === true){
                      ages.style.backgroundColor ="#ff6961";
                  }
                  else{
                  ages.style.backgroundColor ="#fff";
                  }
                  Acolor = false;
              }
              
              
              if (uName.length < 4)
              {
                  html += "<span class ='text-danger'> <br/>*Enter a username that is at least 4 character </span>";
                  username.style.backgroundColor ="#ff6961";
                  document.getElementById("username").focus();
                  validated = false;   
              }
              else{
                  username.style.backgroundColor ="#fff";
              }
              
              
              if( validated === false)
              {
                document.getElementById("feedback").innerHTML = html
                console.log("FAILED TO LOGIN")
              }
                  
              else
              {
              document.getElementById("feedback").innerHTML = "<span class='text-success'>Proceed to login<span/>";
              console.log("LOGIN SUCCEEDED")
              }
              
          }

          var regTestSelect= document.getElementById("regtester");
          
          regTestSelect.addEventListener('change', test)
          
          function test(){
              var CASE_ALL_CORRECT = 'correct';
              var CASE_PWORD_MISMATCH = 'pword_mismatch';
              var CASE_PWORD_TOO_SHORT = 'pword_short';
              var CASE_UNAME_TOO_SHORT = 'uname_short';
              var CASE_EMAIL_NO_AT ='no_at';
              var CASE_EMAIL_NO_DOT ='no_dot';
              var CASE_EMAIL_MISMATCH ='email_mismatch';
              var CASE_TOO_YOUNG = 'too_young';
              var CASE_TOO_OLD ='too_old';
              var CASE_NO_GENDER ='no_gend';
              
              testCase = document.getElementById("regtester").value;
              
              if (testCase ===CASE_ALL_CORRECT){
                  document.getElementsByName("gender")[0].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
				  $('#emails1').val('<?='abc@' . intval(time()). '.com'?>');
				  $('#emails2').val('<?='abc@' . intval(time()). '.com'?>');
              }
              else if(testCase === CASE_PWORD_MISMATCH){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdef";
                  document.getElementById('emails1').value = "foo@bar.com";
                  document.getElementById('emails2').value = "foo@bar.com";
              }
              else if(testCase === CASE_PWORD_TOO_SHORT){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "ab";
                  document.getElementById('psword2').value = "ab";
                  document.getElementById('emails1').value = "foo@bar.com";
                  document.getElementById('emails2').value = "foo@bar.com";
              }
              else if(testCase === CASE_UNAME_TOO_SHORT){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryu";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
                  document.getElementById('emails1').value = "foo@bar.com";
                  document.getElementById('emails2').value = "foo@bar.com";
              }
              else if(testCase === CASE_EMAIL_NO_AT){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
                  document.getElementById('emails1').value = "foobar.com";
                  document.getElementById('emails2').value = "foobar.com";
              }
              else if(testCase === CASE_EMAIL_NO_DOT){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
                  document.getElementById('emails1').value = "foo@barcom";
                  document.getElementById('emails2').value = "foo@barcom";
              }
              else if(testCase === CASE_EMAIL_MISMATCH){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
                  document.getElementById('emails1').value = "foooo@bar.com";
                  document.getElementById('emails2').value = "foo@bar.com";
              }
              else if(testCase === CASE_TOO_YOUNG){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "9";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
                  document.getElementById('emails1').value = "foo@bar.com";
                  document.getElementById('emails2').value = "foo@bar.com";
              }
              else if(testCase === CASE_TOO_OLD){
                  document.getElementsByName("gender")[1].checked = true;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "321";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
                  document.getElementById('emails1').value = "foo@bar.com";
                  document.getElementById('emails2').value = "foo@bar.com";
              }
              else if(testCase === CASE_NO_GENDER){
                  document.getElementsByName("gender")[1].checked = false;
                  document.getElementById('username').value = "Ryuma";
                  document.getElementById('ages').value = "16";
                  document.getElementById('psword1').value = "Abcdefg123!";
                  document.getElementById('psword2').value = "Abcdefg123!";
                  document.getElementById('emails1').value = "foo@bar.com";
                  document.getElementById('emails2').value = "foo@bar.com";
              }
            
              else{
                  console.log('no valid test case, testCase :' + testCase);
                  
              }
              console.log(testCase);
              validate();
          }
          </script>
          <?php
          function validateForm():string{
              global $debug , $email1 , $password1 , $username , $ages , $gendern , $mysqli;
              $errorMsg = '';
              
              if($debug){
              echo '____________________________________________<br/>';
                  echo 'Debug:<br/>';
              }
              //username
              if (isset($_POST['username']) && strlen($_POST['username'])> 4){
                    $username = trim($_POST['username']);
                    if($debug)
                        echo '<br/> Your Username is '.$username.' <br/>';   
              }
              else{
                  $username = '';
                  $errorMsg .= '<br/>Please enter a username that is at least 5 characters long<br/>';
              }
              
              //ages
              if (isset($_POST['ages']) && is_numeric($_POST['ages']) && intval($_POST['ages'])<110 && intval($_POST['ages'])>10 ){
                    $ages = trim($_POST['ages']);
                    if($debug)
                        echo '<br/> Your age is '.$ages.' <br/>';   
              }
              else{
                  $ages = '';
                  $errorMsg .= '<br/>Please enter a numerical age between 10 and 110 years old<br/>';
              }
              
              //password1
              preg_match( '/-|_|%|#|$|!|~/' ,$_POST['password1'],$matches);
              preg_match( '/[A-Z]/' ,$_POST['password1'],$match_cap);
              preg_match( '/[a-z]/' ,$_POST['password1'],$match_low);
              $a = $matches[0];
              $b = isset($match_cap[0]);
              $c = isset($match_low[0]);
              $e = strpbrk($username,$_POST['password1'] );
              if (count($e)<5)
                  $e = '';
              
              
              if (isset($_POST['password1']) && strlen($_POST['password1'])> 5 && $e === '' && $a !='' && $b===true && $c===true && $_POST['password1'] === $_POST['password2']){
                  
                  $password1 = trim($_POST['password1']);
                  $password2 = trim($_POST['password2']);
                    if($debug)
                        echo '<br/> Your password is '.$password1.' <br/>';
                  
              }
              else{
                  $password1 = '';
                  $password2 = '';
                  $errormatch = "";
                  if ($_POST['password1'] !== $_POST['password2'])
                      $errormatch = '<br/>Password does not match<br/>';
                  
                  
                  $errorMsg .= '<br/>Please enter a password that<br/>a) has at least 6 characters<br/>b) has at least one number<br/>c) has at least one lower case letter<br/>d) has at least one upper case letter<br/>e) has at least one of the following special characters [  - _ %  # $ ! ~ ]<br/>f) does not contain username<br/>'.$errormatch;
 
              }

              //email
              if (isset($_POST['email1']) && strpos($_POST['email1'], "@") !== false && strpos($_POST['email1'], ".") !== false && strpos($_POST['email1'], "@") < strpos($_POST['email1'], ".") && $_POST['email1'] === $_POST['email2']){
                    $email1 = trim($_POST['email1']);
                    $email2 = trim($_POST['email2']);
                    if($debug)
                        echo '<br/> Your email is '.$email1.' <br/>';   
              }
              else{
                  $email1 = '';
                  $email2 = '';
                  $erroremail = "";
                  if ($_POST['email1'] !== $_POST['email2'])
                      $erroremail = '<br/>Email does not match<br/>';
                  
                  $errorMsg .= '<br/>Please enter a valid email<br/>'.$erroremail;
              }
              
              //gender
              if (isset($_POST['gender'])){
                    $gender = trim($_POST['gender']);
                    if($debug){
                        echo '<br/> Your gender is '.$gender.' <br/>';
                        
                    }
                  
                  if($gender === 'male'){
                      $gendernum = 0;
                      $gendern= 'm';
                  }
                  if($gender === 'female'){
                      $gendernum = 1;
                      $gendern= 'f';
                  }
                  if($gender === 'other'){
                      $gendernum = 2;
                      $gendern= 'o';
                  }
              }
              else{
                  $errorMsg .= '<br/>Please choose your gender<br/>';
              }
              if($debug)
              echo '____________________________________________<br/>';
              ?>
          <script>
              
          if (<?=isset($username)?>){
              $('#username').val('<?=$username?>');
          }
          if (<?=isset($ages)?>){
              $('#ages').val('<?=$ages?>');
          }
          if (<?=isset($password1)?>){
              $('#psword1').val('<?=$password1?>');
          }
          if (<?=isset($password2)?>){
              $('#psword2').val('<?=$password2?>');
          }
          if (<?=isset($email1)?>){
              $('#emails1').val('<?=$email1?>');
          }
          if (<?=isset($email2)?>){
              $('#emails2').val('<?=$email2?>');
          }
          if (<?=isset($gender)?>){
              document.getElementsByName("gender")[<?=$gendernum?>].checked = true;
          }
          </script>
          <?php 
                  var_dump($mysqli);
              $query = "INSERT INTO `hitman` (`username`, `userId`, `lvl1Score`, `lvl2Score`, `lvl3Score`, `lvl4Score`, `email`, `password`, `ages`, `gender`) VALUES ('$username', '', 0.00, 0.00, 0.00, 0.00, '$email1', '". mobileMavenhash($password1) ."', '$ages', '$gendern');";
                        $results = mysqli_query($mysqli,$query);
                           if($results){
                                if (mysqli_affected_rows($mysqli) === 1){
									$id = mysqli_insert_id($mysqli);
									loginUser($id);
                                    header('Location: http://localhost/Final_Project/a_site/dashboard.php?justregistered=1');
                                }
                                else{
                                    $errorMsg .= 'Unable to register you with our database';
                                }
                            }
                            else{
                                die("Error: " . $query . "<br/>" . mysqli_error($mysqli));
                            }
              
              return $errorMsg;
          }      
      
      ?>
          
  </body>
</html>