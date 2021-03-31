<?php

    // session_start();
    // Create connection
    $mysqli = new mysqli("localhost", "root","","webshop");
    if($mysqli->connect_error) {
        echo "didnt work  ";
    }
    // echo "test";
    // echo $_POST["data"]["usr"];
    
    //if user is logged in and we get our data from javascript
  if(isset($_POST["data"]["usr"]) && isset($_POST["data"]["sc"])){
    $name = $_POST["data"]["usr"];

    //first sql query
    $sqlGet = "SELECT * FROM benutzer WHERE Username LIKE '$name'";
    $data = $_POST["data"]["sc"];
    echo $data["data"]["sc"];
    // echo "if";

    $resultGet = $mysqli->query($sqlGet);
    while($row = $resultGet->fetch_array()){
        $U_ID = $row["ID"];
        $Empfänger = $name;
        $Straße = $row["Strasse"];
        $Hausnummer = $row["Hausnummer"];
        $Ort = $row["Ort"];
        $Plz = $row["Plz"];

        //send data to sql Database
        $sqlOrder = "INSERT INTO bestellungen (U_ID, Empfänger, Strasse, Hausnummer, Ort, Plz) VALUES ('$U_ID', '$Empfänger', '$Straße', '$Hausnummer', '$Ort', '$Plz')";
        $resultOrder = $mysqli->query($sqlOrder);

        //error handling
        if(!$resultOrder) {
            echo("Fehler: ". $mysqli->error);
        }
    }
    //second sql query
    $sqlOrderNumberGet = "SELECT Max(B_ID) AS OrderNumber FROM bestellungen";
    $resultOrderNumber = $mysqli->query($sqlOrderNumberGet);
    
    $OrderNumber = null;
    while($row = $resultOrderNumber->fetch_array()){ 
        $OrderNumber = $row["OrderNumber"];
    }

    //loop throug data (our shoppingCart) from js (Javascript)
    foreach ($data["Name"] as $value) {
        // third sql query to get the key Values
        $sqlIdGet = "SELECT * FROM artikel WHERE A_Name LIKE '$value'";
        $resultIdGet = $mysqli->query($sqlIdGet);
        while($row = $resultIdGet->fetch_array()) {
            $ID = $row["A_ID"];
            $Price = $row["A_Preis"];
            // echo $ID;
            // echo " $Price";
            //send data to the Database
             $sqlOrderDetails = "INSERT INTO bestelldetails (Bestell_Nr, A_ID, Einzelpreis) VALUES ('$OrderNumber', '$ID', '$Price')";
             $sendOrderDetails = $mysqli->query($sqlOrderDetails);
            //  returns true to Javascript. Sending the data was successful.
             echo "true";

            // Incorrect integer value: '' for column `webshop`.`bestelldetails`.`Bestell_Nr` at row 1"
            
            //error handling

            //hier fehler
             if(!$sendOrderDetails) {
                echo("Fehler: ". $mysqli->error);
            }  
        }

    }
    
  }else {
    // returns false to Javascript. Sending the data was not successful.
      echo "false";
  }


?>