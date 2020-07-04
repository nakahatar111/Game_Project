<?php
include '../Admin/config.php';
include '../Admin/db.php';
?>
<?php
$bFormSubmitted = isset($_POST['email']) && strlen($_POST['email'])  > 0 ; 
$num1 = rand(1,10) ;
$num2 = rand(1,10) ;
$antiBotAnswer = $num1 + $num2;

function validateForm():string {
	global $debug, $antiBotAnswer ,$mysqli  ;
	$errorMsg ='';
	//$userName = 'Jane Doe';
	 if ($_POST['antibotq'] !== $_POST['botsolution'])
		$errorMsg .= 'You seem to be a robot!!';
	//if (isset($_POST['email'])  && strlen($_POST['email']) > 4)
		//$userName = trim($_POST['email']) ;
	//else 
		//$errorMsg .= 'Please enter a username that is at least  5 characters long <br />';
	if(strlen($_POST['email']) > 0 )
		{
		$email = trim($_POST['email']) ;
		if($debug)
			echo 'Your email is ' . $email  . ' <br />'; 	
		}
	if(strlen($_POST['password1']) > 4 )
		{
		$pWord = trim($_POST['password1']) ;
		if($debug)
			echo 'Your password is ' . $pWord  . ' <br />'; 	
		}
	$pWord = mobileMavenhash($pWord);
	
	if(strlen($errorMsg)===0){
							$sql = "SELECT `userId` FROM `hitman` WHERE `email` = '$email' and `password` = '$pWord';";
							$result = mysqli_query($mysqli , $sql);
							$row = mysqli_fetch_array($result);
							$id = $row['userId'];
							if($debug)
							echo 'id: '.$id. '<br />';
							if ($result){
								if(mysqli_num_rows($result) === 1){
									loginUser($id);
									echo 'Logged in successfully <br />';
									header('Location: http://localhost/Final_Project/a_site/index1.php');
								}
							
								else{
									$errorMsg .= 'Unable to login with the credentials you provided.';
								}
							}
							else{
								die("Error: ".$query."<br/>". mysqli_error($mysqli));
							}
	
							}

return  $errorMsg ;
}

?>
<!DOCTYPE html>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <!--jquery-->

       
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Login to GAMEWEB</title>
    </head>
    <body>
       <?php
      include '../site/nav.php';
      ?>
 <div class="container">      
<div class="row justify-content-center">
                <div class="text-center">
                        <img src="../visual/webpage/gameweb.png" style="width: 100%">
                </div>
              </div>
      </div>
        <div class="container">
        
			
            <h1>Login</h1>
            <div class="row">
			<div class="col-12">
				<?php
                $_SESSION['robosolution'] = $num1+$num2;
					if ($bFormSubmitted)
					{
						$msg = validateForm();
						if (strlen($msg) > 0) 
							{
							echo $msg ;
							}
					}
				?>

		</div>

				 <div class="col-12 col-md-6 order-2 order-md-1">
	
	 		<form method="post" action="R-Login.php">
				<div class="input-group mb-3">
				  <div class="input-group-prepend">
					<span class="input-group-text" >Email</span>
				  </div>
				  <input type="text" name='email'  class="form-control" type="text" id="email" placeholder="Email">
				</div>

			
			
				<div class="input-group mb-3  ">
				  <div class="input-group-prepend ">
					<span class="input-group-text" >Password </span>
				  </div>
					<input name="password1" class="form-control" type="password" name="pword" id="pword" placeholder="Password" />
				</div>

				<div class="input-group mb-3  ">
				  <div class="input-group-prepend ">
				  <span class="input-group-text" >What is <?=$num1;?> + <?=$num2;?> ? </span>
				  </div>
					<input class="form-control" type="number" name="antibotq"  />
				</div>

				<input type='hidden' name='botsolution' value="<?=$antiBotAnswer ;?>" >

				<div class='ml-5 mt-3'>
					<input type="submit" id="registerbttn" value="Login" class="btn btn-lg btn-primary">
			  </div>


			</form>
		 </div> <!-- end of right side .col-md-8 -->
                <div class="col-12 col-md-6 order-1 order-md-12">
                    <h2>Access Premium Content</h2>
                    <p> Subscribers can log in and access members only conetent</p>
                    <?php
					if ($debug){
						echo '<b/>Admin Login:<br/>
						Email: admin@admin.com<br/>
						Password: Admin123!<br/>';
					}
					?>
                </div>
            </div>
        </div>
    </body>
    
</html>