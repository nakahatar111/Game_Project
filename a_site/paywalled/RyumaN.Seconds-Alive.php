<?php
include '../../Admin/config.php';
?> 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Javascript</title>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <style>
          .warning{
              color: red;
              font-weight: bold;
          }
      
      </style>
  </head>
  <body>
  <?php
      include '../includes/nav.php';
      ?>
 <div class="container">      
<div class="row justify-content-center">
                <div class="text-center">
                        <img src="../images/mobile-maven.jpg" style="width: 50%">
                </div>
              </div>
      </div>
      <div class="container">      
<div class="row justify-content-center">
                <div class="text-center">


  <h3>Seconds Alive Calculator</h3>
  <input type="number" class="form-control" id="year" placeholder="Birth Year"/>
  <input type="number" class="form-control" id="month" placeholder="Birth Month"/>
  <input type="number" class="form-control" id="day" placeholder="Birth Day"/>
  <input type="button" class="form-control" id="agebttn" value="calc" />
  
  <div id="answer">
                    </div>
    </div>
          </div>
  </div>
  </body>
    <script>
        document.getElementById("year").focus();
        document.getElementById("month").focus();
        document.getElementById("day").focus();
        var bttn = document.getElementById("agebttn");
        
        bttn.addEventListener("click", bttnClicked);
        
        function calculate(year, month, day){
            var dateObj = new Date()
            var currentYear = Math.abs(dateObj.getFullYear() - year)
            var currentMonth = Math.abs(dateObj.getMonth()+ 1 - month)
            var currentDay = Math.abs(dateObj.getDate() - day)
            return currentYear*3.154e+7 + currentMonth*2592000 + currentDay*86400;
            
        }
        
        
        function bttnClicked(){
            console.log("bttn clicked fxn");
            var year = parseInt(document.getElementById("year").value );
            var month = parseInt(document.getElementById("month").value);
            var day = parseInt(document.getElementById("day").value);
            
            var yearsAlive = calculate(year, month, day);
            var html = "You are live for " + yearsAlive + " seconds";
            document.getElementById('answer').innerHTML = html
            
            if (Number.isNaN(yearsAlive))
            {
                var errorMsg ="<b class='warning'> Enter a valid number </b>";
                document.getElementById('answer').innerHTML = errorMsg;
            }
            
            else{
            var yearsAlive = calculate(year, month, day);
            var html = "You are live for " + yearsAlive + " seconds";
            document.getElementById('answer').innerHTML = html }
   
            
     
                
        
            
        }
    </script>
</html>