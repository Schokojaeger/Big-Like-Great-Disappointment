<?php
 session_start();
 session_destroy(); // login session will end 
 
 header("Location: start.php"); // redirects to start page again 
 exit; 
?>