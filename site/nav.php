<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/Final_Project/a_site/index1.php">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
       <?php
		  if(bIsLoggedIn() === false){
			  echo '<a class="nav-link" href="/Final_Project/a_site/R-Login.php">Login</a>';
		  }
		  else{
			  echo '<a class="nav-link" href="/Final_Project/a_site/index1.php?lgout=1">Logout</a>';
		  }
		  ?>
      </li>
      <li class="nav-item">
        <?php
		  if(bIsLoggedIn() === false){
			  echo '<a class="nav-link" href="/Final_Project/a_site/Ryumaregistration.php">Sign Up</a>';
		  }
		  ?>
      </li>
      <li class="nav-item dropdown">
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
        </div>
      </li>
        <li class="nav-item">
        <?php
		  if(bIsLoggedIn() === true){
			  echo '<a class="nav-link" href="/Final_Project/index.php">HITMAN</a>';
		  }
		  ?>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
