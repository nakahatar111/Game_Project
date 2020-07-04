<?php
ob_start();
include '../Admin/config.php';
include '../Admin/db.php';
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>GAMEWEB</title>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <!--jquery-->

       
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <!--Bootstrap-->
<style>
	 body {
  font-family: "Lato", sans-serif;
  transition: background-color .5s;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
	  </style>

      
      
  </head>
  <body>
 <div id="main">
  
  <span style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776; open</span>

</div>
  <?php
      include 'nav.php';
      ?>
 <div class="container">      
<div class="row justify-content-center">
                <div class="text-center">
                        <img id = 'logo' src="../visual/webpage/gameweb.png" style="width: 100%">
                </div>
              </div>
      </div>
      
      <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">Home</a>
  <?php
		  if(bIsLoggedIn() === false){
			  echo '<a class="nav-link" href="/Final_Project/a_site/R-Login.php">Login</a>';
		  }
		  else{
			  echo '<a class="nav-link" href="/Final_Project/a_site/index1.php?lgout=1">Logout</a>';
		  }
		  ?>
  <?php
		  if(bIsLoggedIn() === false){
			  echo '<a class="nav-link" href="/Final_Project/a_site/Ryumaregistration.php">Sign Up</a>';
		  }
		  ?>
          
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Member Content
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
         <?php
		  if(bIsLoggedIn() === true){
		?>
		  <a class="dropdown-item" href="/Final_Project/a_site/paywalled/GCF.php">GCF Calculator</a>
          <a class="dropdown-item" href="/Final_Project/a_site/paywalled/TipCalc.php">Tip Calculator</a>
          <a class="dropdown-item" href="/Final_Project/a_site/paywalled/TempCalc.php">Temp Calculator</a>
          <a class="dropdown-item" href="/Final_Project/a_site/paywalled/RyumaN.Seconds-Alive.php">Seconds Alive</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/Final_Project/a_site/dashboard.php">Account</a>
          <?php
          
		  }
		  else{
			  ?>
			  <a class="dropdown-item" href="/Final_Project/a_site/Ryumaregistration.php">Register to access</a>
			  <?php
		  }
		  ?>
            <?php
		  if(bIsLoggedIn() === true){
			  echo '<a class="nav-link" href="/Final_Project/index.php">HITMAN</a>';
		  }
		  ?>
</div>


<script>
	  function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
	  </script>
  </body>
  
</html>