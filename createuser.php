<?php
    include_once ("db.php");

    $name = $_POST["name"];
    $pass = $_POST["password"];

    $result = $mysqli->query("INSERT INTO benutzer (U_Username, U_Password) VALUES ('$name','$pass')");
    if($result){
        echo "User wurde angelegt";
    }
    else {
        echo "User wurde nicht angelegt bitte versuchen sie es erneut.";
    }   
        
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>asd</h1>
</body>
</html>