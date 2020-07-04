<?php
 include '../includes/config.php';
?> 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Tip Calc</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      
      <script>$(document).ready(function(){
            var tip = '0'
              $('#billandtip').hide();
              $('#percent').hide();
              $('#bttn').click(TipCalc);
              $('[name=choice]').change(splitbill);
              $('#regtester').change(test);
              $('#Tip_percent').change(changepercent);
            
            
            function changepercent(){
                if ($('#Tip_percent').val() === 'unique'){
                    $('#percent').show();
                }
                else{
                    $('#percent').hide();
                }
            }
              
            
            function splitbill(){
                    var yesRadio = $('input[name=choice]:checked').val();
                    console.log('-------')
                    var total = '0'
                     
                    if(yesRadio === 'Yes'){
                        console.log('yes');
                        console.log("Tip: "+tip);
                        billandtip = parseInt($('#bill').val()) + parseInt(tip);
                        total = billandtip / parseInt($('#people').val());
                        console.log("Tip+Bill: "+ total.toFixed(2));
                        $('#total').html("$"+total.toFixed(2)+" each person").addClass('text-success');  
                    }
                    
                    if(yesRadio === 'No'){
                        $('#total').html("Okay...").addClass('text-success');
                        console.log('no');       
                    }
                }
            
            function TipCalc(){
                
                console.log("----------------");
                var billprice = $('#bill').val();
                var numberppl = $('#people').val();
                console.log("Bill price: " + billprice);
                console.log(numberppl + ' people');
                percent();
                
                function percent(){
                    var TipPercent = $('#Tip_percent').val();
                    console.log(TipPercent);
                    

                    
                    if (TipPercent === 'outstanding'){
                        tip = billprice * 0.3
                        console.log("Tip: $" + tip.toFixed(2));
                        $('#tip_result').html("Total Tip: $"+tip.toFixed(2)).addClass('text-success');
                        
                        console.log("Split Tip: $" + (tip/numberppl).toFixed(2));
                        $('#SplitTip').html("Split Tip: $" + (tip/numberppl).toFixed(2)).addClass('text-success');
                        $('#billandtip').show();
                        
                    }
                    
                    if (TipPercent === 'good'){
                        tip = billprice * 0.2
                        console.log("Tip: $" + tip.toFixed(2));
                        $('#tip_result').html("Total Tip: $"+tip.toFixed(2)).addClass('text-success');
                        
                        console.log("Split Tip: $" + (tip/numberppl).toFixed(2));
                        $('#SplitTip').html("Split Tip: $" + (tip/numberppl).toFixed(2)).addClass('text-success');
                        $('#billandtip').show();
                    }
                    
                    if (TipPercent === 'okay'){
                        tip = billprice * 0.15
                        console.log("Tip: $" + tip.toFixed(2));
                        $('#tip_result').html("Total Tip: $"+tip.toFixed(2)).addClass('text-success');
                        
                        console.log("Split Tip: $" + (tip/numberppl).toFixed(2));
                        $('#SplitTip').html("Split Tip: $" + (tip/numberppl).toFixed(2)).addClass('text-success');
                        $('#billandtip').show();
                    }
                    
                    if (TipPercent === 'bad'){
                        tip = billprice * 0.1
                        console.log("Tip: $" + tip.toFixed(2));
                        $('#tip_result').html("Total Tip: $"+tip.toFixed(2)).addClass('text-success');
                        
                        console.log("Split Tip: $" + (tip/numberppl).toFixed(2));
                        $('#SplitTip').html("Split Tip: $" + (tip/numberppl).toFixed(2)).addClass('text-success');
                        $('#billandtip').show();
                    }
                    
                    if (TipPercent === 'terrible'){
                        tip = billprice * 0.05
                        console.log("Tip: $" + tip.toFixed(2));
                        $('#tip_result').html("Total Tip: $"+tip.toFixed(2)).addClass('text-success');
                        
                        console.log("Split Tip: $" + (tip/numberppl).toFixed(2));
                        $('#SplitTip').html("Split Tip: $" + (tip/numberppl).toFixed(2)).addClass('text-success');
                        $('#billandtip').show();
                        return tip
                    }
                    if (TipPercent === 'unique'){
                        tip = billprice * ($('#percent').val()/100)
                        console.log("Tip: $" + tip.toFixed(2));
                        $('#tip_result').html("Total Tip: $"+tip.toFixed(2)).addClass('text-success');
                        
                        console.log("Split Tip: $" + (tip/numberppl).toFixed(2));
                        $('#SplitTip').html("Split Tip: $" + (tip/numberppl).toFixed(2)).addClass('text-success');
                        $('#billandtip').show();
                    }
                    
                    
                    
                }
                var validated = true;
                var invalid = false;
                $('#error').html('');
                if(numberppl.indexOf('.')!=-1){
                    $('#error').append('<br/>input a valid number of people').addClass('text-danger');
                  validated = false;
                }
                if($('#Tip_percent').val() === 'unchosen'){
                    $('#error').append('<br/>Choose a tip percent').addClass('text-danger');
                  validated = false;
                }
                    if(billprice === '0'||numberppl === '0'){
                        $('#error').append('<br/>input a valid value').addClass('text-danger');
                  validated = false;
                  invalid = true
                    }
                
                if(billprice ===''|| numberppl ===''){
                    $('#error').append('<br/>input a valid value').addClass('text-danger');
                  validated = false;
                  invalid = true
                }
                
                if(billprice < '0'|| numberppl < '0'){
                  if(invalid === false){
                  $('#error').append('<br/>Cannot calculate with negative numbers').addClass('text-danger');
                  validated = false;
                  invalid = false
                  }
                
              }
                if($('#Tip_percent').val() === 'unique'){
                    if($('#percent').val() === '0'){
                        $('#error').append('<br/>input a valid percent').addClass('text-danger');
                        validated = false;
                        invalid = true
                    }
                    if($('#percent').val() === ''){
                        $('#error').append('<br/>input a valid percent').addClass('text-danger');
                        validated = false;
                        invalid = true
                    }
                    if($('#percent').val()<'0'){
                  if(invalid === false){
                  $('#error').append('<br/>Cannot calculate with negative percent').addClass('text-danger');
                  validated = false;
                  invalid = false
                  }
                
                 }
                }

                
                if( validated === false){
                $('.text').hide();
                $('#billandtip').hide();
                console.log("FAILED TO CALCULATE");
              }
                else{
                $('.text').show();
            }
           }
            
           
            
            function test(){
                 var testcase = $('#regtester').val();
                
                if (testcase === 'correct'){
                    $('#bill').val('100');
                    $('#people').val('4');
                    $('#Tip_percent').val('outstanding');
                    TipCalc();
                }
                else if(testcase === 'no_inputs'){
                    $('#bill').val('');
                    $('#people').val('');
                    $('#Tip_percent').val('unchosen');
                    TipCalc();
                }
                else if(testcase === 'zero'){
                    $('#bill').val('0');
                    $('#people').val('0');
                    $('#Tip_percent').val('unchosen');
                    TipCalc();
                }
                else if(testcase === 'neg_input'){
                    $('#bill').val('-100');
                    $('#people').val('-3');
                    $('#Tip_percent').val('outstanding');
                    TipCalc();
                }
                else if(testcase === 'dec_input'){
                    $('#bill').val('100');
                    $('#people').val('3.3');
                    $('#Tip_percent').val('outstanding');
                    TipCalc();
                }
                else if(testcase === 'correct%'){
                    $('#bill').val('100');
                    $('#people').val('4');
                    $('#Tip_percent').val('unique');
                    $('#percent').val('21')
                    changepercent();
                    TipCalc(); 
                }
                else if(testcase === 'no%_inputs'){
                    $('#bill').val('100');
                    $('#people').val('4');
                    $('#Tip_percent').val('unique');
                    $('#percent').val('')
                    changepercent();
                    TipCalc(); 
                }
                else if(testcase === 'zero%'){
                    $('#bill').val('100');
                    $('#people').val('4');
                    $('#Tip_percent').val('unique');
                    $('#percent').val('0')
                    changepercent();
                    TipCalc();
                }
                else if(testcase === 'neg%_input'){
                    $('#bill').val('100');
                    $('#people').val('4');
                    $('#Tip_percent').val('unique');
                    $('#percent').val('-12')
                    changepercent();
                    TipCalc();
                }
                
                else{
                  console.log('no valid test case, testCase :' + testcase);
                  
              }
              console.log(testcase);
              
                
            } 
        })</script>
  </head>
  <body>
      <style>
          .text-danger{
              color: red;
              font-weight: bold;
              font-size: 20px;
              } 
          .text-success{
              color:#0099FF;
              font-weight: bold;
              font-size: 20px;
          }
      </style>
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
       <div style="text-align:center; height: 750px">
      <h2>How much was your bill?</h2>
      $<input type="number" id="bill" placeholder="Bill Amount"/>
             
      <h2>How was your service?</h2>
      <select id="Tip_percent">
          <option value="unchosen">--Choose an Option--</option>
          <option value="outstanding">30% - Outstanding</option>
          <option value="good">20% - Good</option>
          <option value="okay">15% - It was OK</option>
          <option value="bad">10% - Bad</option>
          <option value="terrible">5% - Terrible</option>
          <option value="unique">Unique</option>
          
      </select>
      <input type="number" id="percent" placeholder ="Enter a percent"/>
      
      <h2>How many people are sharing the bill?</h2>
      <input type="number" id="people" placeholder ="Number of People"/>people
      <p></p>
      <input style="font-size: 20px" type="button" id="bttn" value="calc" />
      
      <div class="text" id="tip_result"></div>
      <div class="text" id="SplitTip"></div>
      <div id="error"></div>
      <div id = "billandtip">
          <h2>Do you want to slipt the bill and tip together?</h2>
          <br/>
          <input id="yes" type="radio" name="choice" value="Yes"> Yes<br>
          <input id="no" type="radio" name="choice" value="No"> No<br>
          <p></p>
          <div id="total"></div>
      </div>
      <p></p>
      <!--
      <select id="regtester">
          <option value="unchosen">Unchosen</option>
          <option value="correct">All Correct</option>
          <option value="no_inputs">No Inputs</option>
          <option value="zero">Zero Inputs</option>
          <option value="neg_input">Negative Inputs</option>
          <option value="dec_input">Decimal Inputs</option>
          <option value="correct%">All Correct % Inputs</option>
          <option value="no%_inputs">No % Inputs</option>
          <option value="zero%">Zero % Inputs</option>
          <option value="neg%_input">Negative % Inputs</option>
      </select
           -->
      </div>
  </body>
</html>