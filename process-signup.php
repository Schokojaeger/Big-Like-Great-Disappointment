<?php
// if name is empty, show this message
if(empty($_POST["name"])){
    die ("Name is required"); 
}
// filter_var (function) returns false if the email is not valid
// if the email is not valid, show this message
if(! filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
    die("Valid email is required"); // vlt als pop up fenster machen falls möglich 
}

// validate password
// password have to be at least 8 characters long
if(strlen($_POST["password"]) < 8){
 die("Password must be at least 8 characters");     
}

// should contain at least one letter
if ( ! preg_match("/[a-z]/i", $_POST["password"])) {
    die("Password must contain at least one letter");
}

// should contain at least one number
if ( ! preg_match("/[0-9]/", $_POST["password"])) {
    die("Password must contain at least one number");
}

//password_confirmation field
//password must match the password_confirmation field
if($_POST["password"] !== $_POST["password_confirmation"]){
    die("Password must match");
}

// password safety >> create a hash of the password so hackers can't see the password
//returns the hash of the password 
 $password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT); 

 //returns the database.php file 
 // connection with database
 $mysqli = require __DIR__ . "/database.php"; 

 //sql code (insert a new record into the user table)
 $sql = "INSERT INTO user (name, email, password_hash)
 VALUES (?, ?, ?)"; 

//creates a statement object,  calling the mysqli connection object
$stmt = $mysqli->stmt_init();

// prepare sql statement for execution
if ( ! $stmt->prepare($sql)) {
    die("SQL error: " . $mysqli->error);
}

// call the statement object (stmt) and bind values to the placeholders
$stmt->bind_param("sss",  // first argument is a string that contains characters that specify the types of the variables
                  $_POST["name"], 
                  $_POST["email"], 
                  $password_hash);

// execute the statement and if the email already exist, show error msg
if ($stmt->execute()) {
    header("Location: index.html"); //redirect to this page and display it after sign up is successful
     exit; // exit ones the header is send
    
} else {
    if ($mysqli->errno === 1062) { 
        die("email already taken");
    } else {
        die($mysqli->error . " " . $mysqli->errno);
    }
}
/** notes: call in the url: location/school-project/start.html to check if php is working or not */
?>