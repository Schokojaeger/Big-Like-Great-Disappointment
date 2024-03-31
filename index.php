<?php
//starts a session or resume an existing session
session_start(); 
if(isset($_SESSION["user_id"])){
    $mysqli = require __DIR__ . "/database.php"; 
    $sql = "SELECT * FROM user WHERE id = {$_SESSION["user_id"]}";

    $result = $mysqli->query($sql); 
    $user = $result->fetch_assoc(); 
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--meta http-equiv="X-UA-Compatible" content="ie=edge"-->
    <title>Crush Time</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button onclick="window.location.href = 'logout.php';">Logout</button>
   

    <?php
    if(isset($_SESSION["user_id"])): ?>  <!--delete this part afterwards-->
        <p>you are logged in </p>
        <?php else: ?>
            <a href="start.php">sign up</a>
        <?php endif?>
    <!--Game-->
    <div class="main_story">

        <!--create Function to change the photo, if pictures are added-->
        <div class="photo">bild</div>
        <div id="story"></div>
        <div class="continue-btn">
            <button class="btn btn-size" id="buttonContinue" onclick="buttonChangeContinue()">
                Filler
        </button>
        </div>
        
    </div>

    <div class="decisions">
        <button class="btn btn-fit" id="buttonOne" onclick="buttonChangeOne()"></button>
        <button class="btn btn-fit" id="buttonTwo" onclick="buttonChangeTwo()"></button>
        <button class="btn btn-fit" id="buttonThree" onclick="buttonChangeThree()"></button>
    </div>

    <script src="script.js"></script>
</body>
</html>

