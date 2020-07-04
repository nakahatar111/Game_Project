<?php
include 'config.php';
include 'db.php';

$ids = $_SESSION['userId'];

$sql = "SELECT `username` FROM `hitman` WHERE `userId` = '$ids';";
							$result = mysqli_query($mysqli , $sql);

							$row = mysqli_fetch_array($result);
		  					echo $row['username'];
?>