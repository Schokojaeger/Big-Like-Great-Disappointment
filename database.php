<?php
// variables to contain the connection details for db
$host = "localhost"; // Webserver
$dbname = "db_crushtime"; // database
$username = "root"; // connect it using the root account
$password = ""; // which by default has a blank password (recommended when developing locally)

// connect to the db 
// creates an sql object 
$mysqli = new mysqli(hostname: $host,
                     username: $username,
                     password: $password,
                     database: $dbname);
                     
// error if there is no connection 
if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

return $mysqli;

?>