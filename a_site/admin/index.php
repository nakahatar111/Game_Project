<?php
include '../../Admin/config.php';
include '../../Admin/dp.php';

function printUsersTable()  {
global $mysqli;
    
    $query = 'SELECT * from `hitman` ; ';
    $results = mysqli_query($mysqli, $query);
    $row_count = mysqli_num_rows($results);
    echo "<table class='table table-striped'>";
    
    while ($row_users = mysqli_fetch_array($results)){
        //output a row here
    echo '<tr>';
    echo "<td>".($row_users['email'])."</td>";
    echo "<td>".($row_users['username'])."</td>";
    echo "<td>".($row_users['age'])."</td>";
    echo "<td>".($row_users['gender'])."</td>";
    echo "<td>".($row_users['password'])."</td>";
    echo '<tr>';
    }
echo "</table>";

}
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Standard web page</title>
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
      include '../../site/nav.php';
      echo '</br></br>';
      ?>
       <div class="container">      
<div class="row justify-content-center">
                <div class="text-center">
                        <img src="../visual/webpage/gameweb.png" style="width: 100%">
                </div>
              </div>
      </div>
      <?php
      printUsersTable();
      ?>
      
  </body>
</html>
