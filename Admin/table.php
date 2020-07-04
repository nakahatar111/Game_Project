<?php
include 'config.php';
include 'db.php';

$query1 = "SELECT `lvl1Score`, `username` FROM `hitman` ORDER BY `lvl1Score` DESC";
$query2 = "SELECT `lvl2Score` , `username` FROM `hitman` ORDER BY `lvl2Score` DESC";
$query3 = "SELECT `lvl3Score`, `username` FROM `hitman` ORDER BY `lvl3Score` DESC";
$query4 = "SELECT `lvl4Score` , `username` FROM `hitman` ORDER BY `lvl4Score` DESC";//LIMIT3
$result1= mysqli_query($mysqli ,$query1 );
$result2= mysqli_query($mysqli ,$query2 );
$result3= mysqli_query($mysqli ,$query3 );
$result4= mysqli_query($mysqli ,$query4 );
if($_GET['lvl'] == '1'){
while($row = mysqli_fetch_assoc($result1)){
    echo $row['username'] .'	' . $row['lvl1Score'] . ',';
}}
if($_GET['lvl'] == '2'){
while($row = mysqli_fetch_assoc($result2)){
    echo $row['username'] . '	' .$row['lvl2Score']  .',';
}}
if($_GET['lvl'] == '3'){
while($row = mysqli_fetch_assoc($result3)){
    echo $row['username'] . '	' . $row['lvl3Score']  .',';
}}
if($_GET['lvl'] == '4'){
while($row = mysqli_fetch_assoc($result4)){
    echo $row['username'] . '	' . $row['lvl4Score']  .',';
}}
?>