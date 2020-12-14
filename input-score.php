<?php
if(isset($_POST['name']) && isset($_POST['score']))
{
    include "credentials.php";
    $conn = new mysqli($servername, $username, $password, $dbname);
    
    // Check connection
    if ($conn->connect_error)
    {
      die("Unable to connect to database: " . $conn->connect_error);
    }

    $input_score = "INSERT INTO Scores (name,score) VALUES (\"".$_POST['name']."\",".$_POST['score'].");";
    $conn->query($input_score);
}
?>