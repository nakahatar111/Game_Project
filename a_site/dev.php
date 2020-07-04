<?php
include '../Admin/config.php';
include '../Admin/db.php';
$query = "INSERT INTO `hitman` (`email`, `password`, `username`, `ages`, `gender`) VALUES ('$email1', '$password1', '$username', '$age', '$gender');";
    
    if(mysqli_query($mysqli , $query)){
        echo 'New Record created successfully created';
    }
else{
    echo "Error: ".$query."<br/>".mysqli_error($mysqli);
}
?> 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Dev</title>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <!--jquery-->

       
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <!--Bootstrap-->
      
      
  </head>
  <body>
 

 <div class="container">      
  <?php
      include '../site/nav.php';
      ?>
      <h1>Dev</h1>
      </div>
  </body>
</html>