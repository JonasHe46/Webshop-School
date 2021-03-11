<?php
    include 'db.php';

    $name = $_POST['name'];
    $pass = $_POST['password'];

    if($conn->query("INSERT INTO webshop (U_Username, U_Password) VALUES ('$name','$pass')";))
        echo "User wurde angelegt";
    else   
        echo "User wurde nicht angelegt bitte versuchen sie es erneut.";
?>