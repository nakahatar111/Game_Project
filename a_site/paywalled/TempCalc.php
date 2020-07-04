<?php
 include '../../Admin/config.php';
?> 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Temp Calc</title>
      <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
      
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
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
            
            <div class="row" >
                
                    
                <div class="col-xs-12 col-md-12 col-lg-12 text-center"><h1>Temperature Converter</h1></div>
                <div class="col-xs-12 col-md-8 mb-3 col-lg-6" >
      <select id="temp" class="form-control" style="font-size: 20px" class="form-control">
          <option value="input">Input</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Celsuis">Celsuis</option>
          <option value="Kelvin">Kelvin</option>
      </select>
                </div>

      <div class="col-xs-12 col-md-4 mb-3 col-lg-6"><input type="number" class="form-control" id="temperature" placeholder="Enter Temperature" style="font-size: 15px"/></div>            
      <div class="col-xs-6 col-md-8 mb-3 col-lg-6"><select id="convert_to" class="form-control" style="font-size: 20px">
          <option value="convert">Convert To</option>
          <option value="convert_Fahrenheit">Fahrenheit</option>
          <option value="convert_Celsuis">Celsuis</option>
          <option value="convert_Kelvin">Kelvin</option>
      </select>
                </div>
                <div class="col-xs-12 col-md-4 mb-3 col-lg-6"><input type="text" class="form-control" id="output" placeholder="Answer" style= "font-size: 20px" disabled></div>
    <div class="col-xs-12 col-md-8 mb-3 col-lg-6">
     <!--
      <select id="regtester" class="form-control" style="font-size: 20px">
          <option value="unchosen">Unchosen</option>
          <option value="correct">All Correct</option>
          <option value="no_inputs">No Inputs</option>
          <option value="sameF">Same F Selector</option>
          <option value="sameC">Same C Selector</option>
          <option value="sameK">Same K Selector</option>
          <option value="Over80">Over 80°F</option>
          <option value="Under40">Under 40°F</option>
          <option value="60">Between 40°F and 80°F</option>
          <option value="negative">Negative Kelvin</option>
          <option value="selector">No Selector</option>
      </select>
    </div>
               -->
                <div class="col-xs-12 col-md-6 col-lg-6 " id = 'error' style="font-size: 20px"></div>
                </div>
            
        <div class="row justify-content-center">
    
                <div class="col text-center"><div id = 'hot' class = 'image'><img src="../images/hot.jpeg" style="width: 40%; border-style: solid"></div></div>
            </div>
            <div class="row justify-content-center">
                <div class="col text-center"><div id = 'cold' class = 'image'><img src="../images/cold.jpeg" style="width: 30%; border-style: solid"></div></div></div>
            <div class="row justify-content-center">
                <div class="col text-center"><div id = 'norm' class = 'image'><img src="../images/Normal.JPG" style="width: 40%; border-style: solid"></div></div></div>
              <button id="bttn" style="position: absolute; bottom: 0px; right: 0px; background-color: antiquewhite;border-style: none; font-weight: bold;">See the weather forcast &#10148;</button>

            </div>

    

   <script>
      $(document).ready(function(){
          $('#bttn').click(function(){
              window.open('https://weather.com/weather/today/l/USNY0996:1:US', '_blank'); 
              console.log('click');
          });
          $('#hot').hide();
          $('#cold').hide();
          $('#norm').hide();
          $('#regtester').change(test);
          $('#convert_to').change(convert);
          $('#temp').change(function(){
              if($('#convert_to').val() != 'convert'){
              convert();
            }
          })
          $('#temperature').keyup(function(){
             convert();
          })
          
          function convert(){
              console.log('________________________')
              var result = '0';
              var temptype = $('#temp').val();
              var converttemp = $('#convert_to').val();
              var number = parseInt($('#temperature').val());
              console.log("Temperature value: "+number);
              console.log("Original Temp: "+ temptype);
              console.log("Convert to: "+converttemp);
              $('#error').html('');
              if(converttemp === 'convert_Fahrenheit'){
                  if(temptype ==='Fahrenheit'){
                      console.log('Same Converter error');
                      $('#error').append('Error (Do not select Fahrenheit twice)').addClass('text-danger');
                      $('#error').show();
                      $('#output').val(" ");
                      $('.image').hide();
                  }
                  else if(temptype ==='Celsuis'){
                      result = (number * 1.8) + 32;
                      console.log("Result: "+ result.toFixed(2));
                      $('#error').hide();
                      
                      if(result >= 80){
                          console.log('Hot');
                          $('#hot').show();
                          $('#cold').hide();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°F');
                      }
                      else if(result <= 40){
                          console.log('Cold');
                          $('#hot').hide();
                          $('#cold').show();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°F');
                          
                      }
                      else{
                          $('#hot').hide();
                          $('#cold').hide();
                          $('#norm').show();
                          $('#output').val(result.toFixed(2)+ '°F');
                      }
                  }
                  else if(temptype ==='Kelvin'){
                      result = ((number - 273.15) * 1.8) + 32;
                      console.log("Result: "+ result.toFixed(2));
                      $('#answer').show();
                      $('#error').hide();
                      
                      if(result >= 80){
                          console.log('Hot');
                          $('#hot').show();
                          $('#cold').hide();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°F');
                      }
                      else if(result <= 40){
                          console.log('Cold');
                          $('#hot').hide();
                          $('#cold').show();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°F');
                      }
                      else{
                          $('#hot').hide();
                          $('#cold').hide();
                          $('#norm').show();
                          $('#output').val(result.toFixed(2)+ '°F');
                      }
                  }
              }
              else if(converttemp === 'convert_Celsuis'){
                  if(temptype ==='Celsuis'){
                      console.log('Same Converter error');
                      $('#error').append('Error (Do not select Celsuis twice)').addClass('text-danger');
                      $('#output').val(" ");
                      $('#error').show();
                      $('.image').hide();
                  }
                  else if(temptype ==='Fahrenheit'){
                      result = (number - 32) * (5/9);
                      console.log("Result: "+ result.toFixed(2));
                      $('#answer').show();
                      $('#error').hide();
                      
                      if(result.toFixed(2) >= 26.66){
                          console.log('Hot');
                          $('#hot').show();
                          $('#cold').hide();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°C');
                      }
                      else if(result.toFixed(2) <= 4.44){
                          console.log('Cold');
                          $('#hot').hide();
                          $('#cold').show();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°C');
                      }
                      else{
                          $('#hot').hide();
                          $('#cold').hide();
                          $('#norm').show();
                          $('#output').val(result.toFixed(2)+ '°C');
                      }
                  }
                  else if(temptype ==='Kelvin'){
                      result = number - 273.15;
                      console.log("Result: "+ result.toFixed(2));
                      $('#error').hide();
                      
                      if(result.toFixed(2) >= 26.66){
                          console.log('Hot');
                          $('#hot').show();
                          $('#cold').hide();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°C');
                      }
                      else if(result.toFixed(2) <= 4.44){
                          console.log('Cold');
                          $('#hot').hide();
                          $('#cold').show();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ '°C');
                      }
                      else{
                          $('#hot').hide();
                          $('#cold').hide();
                          $('#norm').show();
                          $('#output').val(result.toFixed(2)+ '°C');
                      }
                  }   
              }
              else if(converttemp === 'convert_Kelvin'){
                  if(temptype ==='Kelvin'){
                      console.log('Same Converter error');
                      $('#error').append('Error (Do not select Kelvin twice)').addClass('text-danger');
                      $('#output').val(" ");
                      $('#error').show();
                      $('.image').hide();
                  }
                  else if(temptype ==='Fahrenheit'){
                      result = (number - 32) * (5/9) + 273.15;
                      console.log("Result: "+ result.toFixed(2));
                      $('#error').hide();
                      
                      if(result.toFixed(2) >= 299.81){
                          console.log('Hot');
                          $('#hot').show();
                          $('#cold').hide();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ 'K');
                      }
                      else if(result.toFixed(2) <= 277.59){
                          console.log('Cold');
                          $('#hot').hide();
                          $('#cold').show();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ 'K');
                      }
                      else{
                          $('#hot').hide();
                          $('#cold').hide();
                          $('#norm').show();
                          $('#output').val(result.toFixed(2)+ 'K');
                      }
                  }
                  else if(temptype ==='Celsuis'){
                      result = number + 273.15;
                      console.log("Result: "+ result.toFixed(2));
                      $('#answer').show();
                      $('#error').hide();
                      
                      if(result.toFixed(2) >= 299.81){
                          console.log('Hot');
                          $('#hot').show();
                          $('#cold').hide();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ 'K');
                      }
                      else if(result.toFixed(2) <= 277.59){
                          console.log('Cold');
                          $('#hot').hide();
                          $('#cold').show();
                          $('#norm').hide();
                          $('#output').val(result.toFixed(2)+ 'K');
                      }
                      else{
                          $('#hot').hide();
                          $('#cold').hide();
                          $('#norm').show();
                          $('#output').val(result.toFixed(2)+ 'K');
                      }
                  }
              }
                if($('#temperature').val() === ''){
                    console.log('No input Error');
                    $('#error').append('<br/>Input a value that is valid').addClass('text-danger');
                    $('#output').val(" ");
                    $('#error').show();
                    $('.image').hide();
              }
              if ($('#temp').val()==='Kelvin'){
                  if(parseInt($('#temperature').val()) < 0){
                    $('#error').append('<br/>Kelvin cannot be negative').addClass('text-danger');
                    $('#output').val(" ");
                    $('#error').show();
                    $('.image').hide();
                  }
              }
              if ($('#temp').val()==='input'){
                  console.log('Temp type not selected');
                    $('#error').append('<br/>Select the original Temperature Type').addClass('text-danger');
                    $('#output').val(" ");
                    $('#error').show();
                    $('.image').hide();
              }
              if ($('#convert_to').val()==='convert'){
                  console.log('Convert Temp not selected');
                    $('#error').append('<br/>Select the convert Temperature Type').addClass('text-danger');
                    $('#output').val(" ");
                    $('#error').show();
                    $('.image').hide();
              }
          }
          function test(){
                 var testcase = $('#regtester').val();
                
                if (testcase === 'correct'){
                    $('#temperature').val('100');
                    $('#temp').val('Fahrenheit');
                    $('#convert_to').val('convert_Celsuis');
                    convert();
                }
                else if(testcase === 'no_inputs'){
                    $('#temperature').val('');
                    $('#temp').val('Fahrenheit');
                    $('#convert_to').val('convert_Celsuis');
                    convert();
                }
              else if(testcase === 'sameF'){
                    $('#temperature').val('100');
                    $('#temp').val('Fahrenheit');
                    $('#convert_to').val('convert_Fahrenheit');
                    convert();
                }
              else if(testcase === 'sameC'){
                    $('#temperature').val('100');
                    $('#temp').val('Celsuis');
                    $('#convert_to').val('convert_Celsuis');
                    convert();
                }
              else if(testcase === 'sameK'){
                    $('#temperature').val('100');
                    $('#temp').val('Kelvin');
                    $('#convert_to').val('convert_Kelvin');
                    convert();
                }
              else if(testcase === 'Over80'){
                    $('#temperature').val('100');
                    $('#temp').val('Fahrenheit');
                    $('#convert_to').val('convert_Celsuis');
                    convert();
                }
              else if(testcase === 'Under40'){
                    $('#temperature').val('20');
                    $('#temp').val('Fahrenheit');
                    $('#convert_to').val('convert_Celsuis');
                    convert();
                }
              else if(testcase === '60'){
                    $('#temperature').val('60');
                    $('#temp').val('Fahrenheit');
                    $('#convert_to').val('convert_Celsuis');
                    convert();
                }
              else if(testcase === 'negative'){
                    $('#temperature').val('-100');
                    $('#temp').val('Kelvin');
                    $('#convert_to').val('convert_Celsuis');
                    convert();
                }
              else if(testcase === 'selector'){
                    $('#temperature').val('100');
                    $('#temp').val('input');
                    $('#convert_to').val('convert');
                    convert();
                }
                else{
                  console.log('no valid test case, testCase :' + testcase);
              }
              console.log("Testcase: "+ testcase);  
            } 
          
          
      })
   </script>
  </body>
</html>