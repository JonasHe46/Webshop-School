<?php
    //create connection to Database
    $mysqli = new mysqli("localhost", "root","","webshop");
   if($mysqli->connect_error) {
       echo "didnt work  ";
   }
?>