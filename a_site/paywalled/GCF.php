<?php
include '../../Admin/config.php';
?> 
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>GCF Calculator</title>
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
          .text-danger{
              color: red;
              font-weight: bold;   
              } 
          .text-success{
              color:#28a745;
              font-weight: bold;
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
      <div class="container">      
<div class="row justify-content-center">
                <div class="text-center">
      <h3>GCF</h3>
      <select id="choice" class="form-control">
          <option value="unchosen">Chose an Option</option>
          <option value="one">One Number</option>
          <option value="two">Two Number</option>
          <option value="three">Three Number</option>
          <option value="four">Four Number</option>
      </select>
      <br/>
  <input type="number" class="form-control" id="numbera" placeholder="Enter a Number"/>
      <br/>
  <input type="number" class="form-control" id="numberb" placeholder="Enter a Number"/>
      <br/>
  <input type="number" class="form-control" id="numberc" placeholder="Enter a Number"/>
      <br/>
  <input type="number" class="form-control" id="numberd" placeholder="Enter a Number"/>
      <br/>
  <input type="button" class="form-control" id="bttn" value="calc" />
      <br/>
      
      <div class="text" id="factora"></div>
      <div class="text" id="factorb"></div>
      <div class="text" id="factorc"></div>
      <div class="text" id="factord"></div>
      <p></p>
      <div class="text" id="Same"></div>
      <p></p>
      <div class="text" id="GCF"></div>
      <div id="error"></div>
<!--
      <select id="regtester">
          <option value="unchosen">Unchosen</option>
          <option value="correct">All Correct</option>
          <option value="no_inputs">No Inputs</option>
          <option value="zero">Zero Inputs</option>
          <option value="neg_input">Negative Inputs</option>
          <option value="dec_input">Decimal Inputs</option>
          <option value="big_input">Big Inputs</option>
      </select>
      -->
                   </div>
              </div>
      </div>
      <script>
          $(document).ready(function(){
              
              $('#bttn').click(gcfcalc);
              changeslot();
              $('#choice').change(changeslot);
              $('#choice').change(gcfcalc);
              $('#regtester').change(test);
              
    
              var option = '0'
                function changeslot(){
                var Case = $('#choice').val();
                     
                    
                        $('#numbera').hide();
                        $('#numberb').hide();
                        $('#numberc').hide();
                        $('#numberd').hide();
                        
                        $("#factora").hide();
                        $("#factorb").hide();
                        $("#factorc").hide();
                        $("#factord").hide();
                        $('#bttn').hide();
                        $('#Same').hide();
                        $('#GCF').hide();
    
                    
                    if (Case === 'one'){
                        $('#numbera').toggle();
                        
                        $("#factora").toggle();
                        $('#bttn').toggle();
                        $('#GCF').toggle();
                        option = '1';
              
                    }
                    if (Case === 'two'){
                        $('#numbera').toggle();
                        $('#numberb').toggle();

                        $("#factora").toggle();
                        $("#factorb").toggle();
                        $('#bttn').toggle();
                        $('#Same').toggle();
                        $('#GCF').toggle();
                        option = '2';
                       
                    }
                    if (Case === 'three'){
                        $('#numbera').toggle();
                        $('#numberb').toggle();
                        $('#numberc').toggle();
                
                        
                        $("#factora").toggle();
                        $("#factorb").toggle();
                        $("#factorc").toggle();
                        $('#bttn').toggle();
                        $('#Same').toggle();
                        $('#GCF').toggle();
                        option = '3';
                        
                    }
                    if (Case === 'four'){
                        $('#numbera').toggle();
                        $('#numberb').toggle();
                        $('#numberc').toggle();
                        $('#numberd').toggle();
                        
                        $("#factora").toggle();
                        $("#factorb").toggle();
                        $("#factorc").toggle();
                        $("#factord").toggle();
                        $('#bttn').toggle();
                        $('#Same').toggle();
                        $('#GCF').toggle();
                        option = '4';
                        }
                }
                
      function gcfcalc(num){
          changeslot();
          console.log('----------------------')
          console.log("bttn clicked fxn");
          console.log("Option: " + option);
          var numbera = $('#numbera').val();  
          var numberb = $('#numberb').val();
          var numberc = $('#numberc').val();  
          var numberd = $('#numberd').val();
          var gcfa = [];
          var gcfb = [];
          var gcfc = [];
          var gcfd = [];
          
          function getSame(a, b) {
            var matching = [];

            for ( var i = 0; i < a.length; i++ ) {
                for ( var e = 0; e < b.length; e++ ) {
                if ( a[i] === b[e] ) matching.push( a[i] );
                } 
            }
              return matching
            }
          
          if (option === '1'){
              console.log("Input1:"+$('#numbera').val());
              for (var i = 1; i <= numbera; i++) {
            if (numbera % i == 0) {
                gcfa.push(i); 
            }
            $("#factora").html("Factors of 1st number: " + gcfa);
            
           }
            $("#GCF").html("Greatest Factor: " + gcfa[gcfa.length -1]).addClass('text-success');
              console.log("GCF: " + gcfa[gcfa.length -1]);
          }
          
          
          if (option === '2'){
             console.log("Input1:"+$('#numbera').val());
             console.log("Input2:"+$('#numberb').val());
            for (var i = 1; i <= numbera; i++) {
            if (numbera % i == 0) {
                gcfa.push(i); 
            }
            $("#factora").html("Factors of 1st number: " + gcfa);
           }
              
             for (var i = 1; i <= numberb; i++) {
            if (numberb % i == 0) {
                gcfb.push(i);
            }   
            $("#factorb").html("Factors of 2nd number: " + gcfb);
            
           }

            var matching2 = getSame(gcfa,gcfb);
            $("#Same").html("Common Factors: "+ matching2);
              console.log("Common Factors: " + matching2);
              
              $("#GCF").html("GCF: " + matching2[matching2.length-1]).addClass('text-success');
              console.log("GCF: " + matching2[matching2.length-1]);
          }
          
          
          if (option === '3'){
            console.log("Input1:"+$('#numbera').val());
            console.log("Input2:"+$('#numberb').val());
            console.log("Input3:"+$('#numberc').val());
            for (var i = 1; i <= numbera; i++) {
            if (numbera % i == 0) {
                gcfa.push(i); 
            }
            $("#factora").html("Factors of 1st number: " + gcfa);
           }
              
             for (var i = 1; i <= numberb; i++) {
            if (numberb % i == 0) {
                gcfb.push(i);
            }   
            $("#factorb").html("Factors of 2nd number: " + gcfb); 
           } 
             for (var i = 1; i <= numberc; i++) {
            if (numberc % i == 0) {
                gcfc.push(i);
            }   
            $("#factorc").html("Factors of 3rd number: " + gcfc);
            
           }
            var matching3 = getSame(getSame(gcfa,gcfb), gcfc);
            $("#Same").html("Common Factors: "+ matching3);
              console.log("Common Factors: " + matching3);
              
              $("#GCF").html("GCF: " + matching3[matching3.length-1]).addClass('text-success');
              console.log("GCF: " + matching3[matching3.length-1]);
          }
          
          
          if (option === '4'){
            console.log("Input1:"+$('#numbera').val());
            console.log("Input2:"+$('#numberb').val());
            console.log("Input3:"+$('#numberc').val());
            console.log("Input4:"+$('#numberd').val());
            for (var i = 1; i <= numbera; i++) {
            if (numbera % i == 0) {
                gcfa.push(i); 
            }
            $("#factora").html("Factors of 1st number: " + gcfa);
           }
              
             for (var i = 1; i <= numberb; i++) {
            if (numberb % i == 0) {
                gcfb.push(i);
            }   
            $("#factorb").html("Factors of 2nd number: " + gcfb); 
           } 
             for (var i = 1; i <= numberc; i++) {
            if (numberc % i == 0) {
                gcfc.push(i);
            }   
            $("#factorc").html("Factors of 3rd number: " + gcfc); 
           } 
             for (var i = 1; i <= numberd; i++) {
            if (numberd % i == 0) {
                gcfd.push(i);
            }   
            $("#factord").html("Factors of 4th number: " + gcfd); 
           }
            var matching4 = getSame(getSame(getSame(gcfa,gcfb), gcfc), gcfd);
            $("#Same").html("Common Factors: "+ matching4);
              console.log("Common Factors: " + matching4);
              
              $("#GCF").html("GCF: " + matching4[matching4.length-1]).addClass('text-success');
              console.log("GCF: " + matching4[matching4.length-1]);
          }
    
              
          
          
        console.log("FACTOR A: "+ gcfa);
        console.log("FACTOR B: "+ gcfb);
        console.log("FACTOR C: "+ gcfc);
        console.log("FACTOR D: "+ gcfd);
          
          var validated = true;
          var invalid = false;          
          $('#error').html('')
          if(option === '1'){
              if(numbera === ''){
                  $('#error').append('<br/>input a valid value').addClass('text-danger');
                  validated = false;
                  invalid = true
              }
              if(numbera < '0'){
                  if(invalid === false){
                  $('#error').append('<br/>Cannot take GCF of negative numbers').addClass('text-danger');
                  validated = false;
                  invalid = false
                  }
              }
              if(numbera === '0'){
                  $('#error').append('<br/>Cannot take GCF of zero').addClass('text-danger');
                  validated = false;
                  
              }
          }
          
          if(option === '2'){
              if(numbera === ''|| numberb ===''){
                  $('#error').append('<br/>input a valid value').addClass('text-danger');
                  validated = false;
                  invalid = true
              }
              if(numbera < '0'|| numberb < '0'){
                  if(invalid === false){
                  $('#error').append('<br/>Cannot take GCF of negative numbers').addClass('text-danger');
                  validated = false;
                  invalid = false
                  }
              }
              if(numbera === '0'||numberb === '0'){
                  $('#error').append('<br/>Cannot take GCF of zero').addClass('text-danger');
                  validated = false;
                  
              }
          }
          
          if(option === '3'){
              if(numbera === ''|| numberb ===''|| numberc ===''){
                  $('#error').append('<br/>input a valid value').addClass('text-danger');
                  validated = false;
                  invalid = true
              }
              if(numbera < '0'|| numberb < '0'|| numberc < '0'){
                  if(invalid === false){
                  $('#error').append('<br/>Cannot take GCF of negative numbers').addClass('text-danger');
                  validated = false;
                  invalid = false
                  }
              }
              if(numbera === '0'||numberb === '0'||numberc === '0'){
                  $('#error').append('<br/>Cannot take GCF of zero').addClass('text-danger');
                  validated = false;
                  
              }
          }
          
          if(option === '4'){
              if(numbera === ''|| numberb ===''|| numberc ===''|| numberd ===''){
                  $('#error').append('<br/>input a valid value').addClass('text-danger');
                  validated = false;
                  invalid = true
              }
              if(numbera < '0'|| numberb < '0'|| numberc < '0'|| numberd < '0'){
                  if(invalid === false){
                  $('#error').append('<br/>Cannot take GCF of negative numbers').addClass('text-danger');
                  validated = false;
                  invalid = false
                  }
              }
              if(numbera === '0'||numberb === '0'||numberc === '0'||numberd === '0'){
                  $('#error').append('<br/>Cannot take GCF of zero').addClass('text-danger');
                  validated = false;
                  
              }
          }

              
              if(numbera > 5000||numberb > 5000||numberc > 5000||numberd > 5000){
                  $('#error').append('<br/>The input value is too big').addClass('text-danger');
                  validated = false;
              }
          
              if(numbera.indexOf('.')!=-1||numberb.indexOf('.')!=-1||numberc.indexOf('.')!=-1||numberd.indexOf('.')!=-1){
                  $('#error').append('<br/>Do not input a decimal').addClass('text-danger');
                  validated = false;
              }
          
              if(numbera === 'e'||numberb === 'e'||numberc === 'e'||numberd === 'e'){
                  $('#error').append('<br/>Cannot take GCF of e').addClass('text-danger');
                  validated = false;
              }
          
          if( validated === false)
              {
                $('.text').hide();
                console.log("FAILED TO CALCULATE");
              }
                  
              
          option = '0';
      }
            
          
          function test(){
          var testcase = $('#regtester').val();
              
              if (testcase === 'correct'){
                  $("#numbera").val("110");
                  $("#numberb").val("70");
                  $("#numberc").val("55");
                  $("#numberd").val("35");
              }
              else if(testcase === 'no_inputs'){
                  $("#numbera").val("");
                  $("#numberb").val("");
                  $("#numberc").val("");
                  $("#numberd").val("");
              }
              else if(testcase === 'zero'){
                  $("#numbera").val("0");
                  $("#numberb").val("1");
                  $("#numberc").val("0");
                  $("#numberd").val("3");
              }
              else if(testcase === 'neg_input'){
                  $("#numbera").val("-110");
                  $("#numberb").val("-70");
                  $("#numberc").val("-55");
                  $("#numberd").val("-35");
              }
              else if(testcase === 'dec_input'){
                  $("#numbera").val("1.10");
                  $("#numberb").val("7.1");
                  $("#numberc").val("5.5");
                  $("#numberd").val("3.5");
              }
              else if(testcase === 'big_input'){
                  $("#numbera").val("1100");
                  $("#numberb").val("7000");
                  $("#numberc").val("5500");
                  $("#numberd").val("350");
              }
              
              console.log('----------------------')
              console.log('TestCase: '+ testcase);
              gcfcalc();
          }
          
              
    })
      </script>
  </head>
    
  <body>
   
  </body>

</html>