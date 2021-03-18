<?php
    include_once ("db.php");

    $name = $_POST["name"];
    $pass = $_POST["password"];
    $passrep = $_POST["passwordrep"];
    $street = $_POST["street"];
    $number = $_POST["number"];
    $plz = $_POST["plz"];
    $city = $_POST["city"];
    

    if($pass == $passrep){
        $result = $mysqli->query("INSERT INTO benutzer (Username, Password, Strasse, Hausnummer, Ort, Plz) VALUES ('$name','$pass',$street, $number, $city, $plz)");
        if($result){
            echo "User created successfully.";
        }
        else {
            echo "User could not be created. Please try again later -> <a href="register.html">register</a>";
        }   
    } else {
        exit("The entered passwords do not match. Please try again -> <a href="register.html">register</a>");
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