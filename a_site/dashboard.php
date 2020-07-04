<?php
include '../Admin/config.php';
include '../Admin/db.php';?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <!--jquery-->

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <!--Bootstrap-->
      
      
      
  </head>
  <body>
    
     <?php
      include '../site/nav.php';
      ?>
       <div class="container">      
<div class="row justify-content-center">
                <div class="text-center">
                        <img src="../visual/webpage/gameweb.png" style="width: 100%">
                        <?php
    if (isset($_GET['justregistered']) && $_GET['justregistered'] == '1'){
        echo '<h3>Thank you for registering for our site!';
		echo '</br></br>';
    }
    ?>
             <div class="row">
              	<div class="col-12 mt-4 col-md-6">
               	<form method="post">
				<div class="input-group mb-3">
				  <input type="password" name='npass1'  class="form-control" placeholder="New password">
				</div>		
				<div class="input-group mb-3  ">
					<input name="npass2" class="form-control" type="password" placeholder="Confirm new password" />
				</div>
				<div class='ml-5 mt-3 mb-3'>
					<input type="submit" value="update password" class="btn btn-lg btn-primary">
			  </div>
					<div id='feedback1'></div>
			</form>
              </div>
               
               <div class="col-12 mt-4 col-md-6">
               <form method="post">
				<div class="input-group mb-3">
				  <input type="email" name='nemail1'  class="form-control" type="text" placeholder="New email">
				</div>		
				<div class="input-group mb-3">
					<input class="form-control" type="email" name="nemail2" placeholder="Confirm new email" />
				</div>
				<div class='ml-5 mt-3 mb-3'>
					<input type="submit" value="update email" class="btn btn-lg btn-primary">
			  </div>
			  <div id='feedback2'></div>
			</form>
               </div>
                </div>
              </div>
		   </div>
      </div>

      
  </body>
</html>
<?php

function pWordsValid($str1, $str2){
	if ($str1 !== $str2)
		return 'Your passwords Do Not Match';
	else if(strlen($str2)<4)
		return 'Your password must be at least 4 characters long';
	else return '';
}
function emailValid($str1, $str2){
	if ($str1 !== $str2)
		return 'Your emails Do Not Match';
	else if(strlen($str2)<6)
		return 'Your email must be at least 4 characters long';
	else if(strpos($str1, "@") == false || strpos($str1, ".") == false)
		return 'Your email must have an @ and a dot';
	else if(strpos($str1, "@") < strpos($str1, "."))
		return 'Your email must have an @ before the a dot';
	else return '';
}
$formFeedback ='';
$str = '';
if (isset($_POST['npass1'])){
	$pword2 =trim($_POST['npass2']);
	$pword1 =trim($_POST['npass1']);
	$formFeedback = pWordsValid($pword1, $pword2);
	$uld = $_SESSION['userId'];
	$pword = mobileMavenhash($pword1);
	$sql = "UPDATE `hitman` SET `password` = '$pword' WHERE `hitman`.`userId` = $uld;";
                           if(mysqli_query($mysqli,$sql)){
                                if (mysqli_affected_rows($mysqli) === 1){
									?>
                              <script> $('#feedback1').html('Successfully Changed Password');</script>
                               <?php
                                }
                            }
                            else{
                                die("Error: " . $query . "<br/>" . mysqli_error($mysqli));
                            }
}
else if(isset($_POST['nemail1']))
{
	$mail1 =trim($_POST['nemail1']);
	$mail2 =trim($_POST['nemail2']);
	$formFeedbackback = emailValid($mail1, $mail2);
	$uld = $_SESSION['userId'];
	$mail = $mail1;
	$sql = "UPDATE `hitman` SET `email` = '$mail' WHERE `hitman`.`userId` = $uld;";
                           if(mysqli_query($mysqli,$sql)){
                                if (mysqli_affected_rows($mysqli) === 1){
									?>
                              <script> $('#feedback2').html('Successfully Changed email');</script>
                               <?php
                                }
                            }
                            else{
                                die("Error: " . $query . "<br/>" . mysqli_error($mysqli));
                            }
}
?>