<?php
$mysqli = new mysqli("localhost", "root","","webshop");

$name = $_POST["data"]["name"];
$pass = $_POST["data"]["pass"];
$passrep = $_POST["data"]["passre"];
$street = $_POST["data"]["street"];
$number = $_POST["data"]["number"];
$plz = $_POST["data"]["plz"];
$city = $_POST["data"]["city"];


if($pass == $passrep){
    $available = $mysqli->query("SELECT ID FROM benutzer WHERE Username LIKE '$name'");
    if($available->num_rows == 0) {
        $hashedPass = password_hash($pass, PASSWORD_DEFAULT);
        $insert = "INSERT INTO benutzer (Username, Password, Strasse, Hausnummer, Ort, Plz) VALUES ('$name','$hashedPass', '$street', '$number', '$city', '$plz')";
        $query = $mysqli->query($insert);
    
        if($query == true){
            echo 'true';
        }
        else {
            echo 'false';
        }
    } else {
        echo 'user';
    }
       
} else {
    exit('pass');
}

?>