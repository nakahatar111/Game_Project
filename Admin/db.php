<?php
// Connecting to and selecting a MySQL database named firstDb
//
                    //host  ,   username , password , database name
$mysqli = new mysqli('localhost', 'root', 'password', 'game_scores');
function dbConnect(){
    global $mysqli;
     
if ($mysqli->connect_errno) {
    // The connection failed. What do you want to do? 
    echo "Error: Failed to make a MySQL connection, here is why: \n";
    echo "Errno: " . $mysqli->connect_errno . "\n";
    echo "Error: " . $mysqli->connect_error . "\n";
    exit; //end all processing and code
    }
else // we 
    {
    // we connected to DB

    }
}
dbConnect();
?>