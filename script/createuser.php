<?php
    include_once('db.php');

    $name = $_POST['name'];
    $name = $_POST['password'];

    if(mysql_query("INSERT INTO webshop VALUES('$Username','$Password')";))
        echo "User wurde angelegt";
    else   
        echo "User wurde nicht angelegt bitte versuchen sie es erneut.";
?>