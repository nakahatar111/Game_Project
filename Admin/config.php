<?php
declare(strict_types=1);
session_start();
$bLocal = false !== strpos($_SERVER['SERVER_NAME'], 'localhost');
$debug = false;
function mobileMavenhash($str):string{
    $salt = "Ka204k$)@nvio)5.d*";
    $str .= $salt;
    return hash("sha512", $str);
}
function loginUser(int $userid){
	$_SESSION['userId'] = $userid;
}
function bIsLoggedIn():bool{
	return isset($_SESSION['userId']);
}
function deleteLogin(){
	unset($_SESSION['userId']);
}
if(isset($_GET['lgout']) && $_GET['lgout'] == '1'){
	deleteLogin();
}
?>