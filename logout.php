<?php
 session_start();
 session_destroy(); // login session will end 
 
 header("Location: index.php"); 
 exit; 
?>