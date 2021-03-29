<?php
    session_start();
    $mysqli = new mysqli("localhost", "root","","webshop");
    if($mysqli->connect_error) {
        echo "didnt work  ";
    }

  if(isset($_SESSION["name"]) && isset($_POST["data"])){
    $name = $_SESSION["name"];
    $sqlGet = "SELECT * FROM benutzer WHERE Username LIKE '$name'";
    $data = $_POST["data"];
    
    $resultGet = $mysqli->query($sqlGet);
    while($row = $resultGet->fetch_array()){
        $U_ID = $row["ID"];
        $Empfänger = $name;
        $Straße = $row["Strasse"];
        $Hausnummer = $row["Hausnummer"];
        $Ort = $row["Ort"];
        $Plz = $row["Plz"];
        $sqlOrder = "INSERT INTO bestellungen (U_ID, Empfänger, Strasse, Hausnummer, Ort, Plz) VALUES ('$U_ID', '$Empfänger', '$Straße', '$Hausnummer', '$Ort', '$Plz')";
        $resultOrder = $mysqli->query($sqlOrder);
        if(!$resultOrder) {
            echo("Fehler: ". $mysqli->error);
        }
    }
    $sqlOrderNumberGet = "SELECT Max(B_ID) AS OrderNumber FROM bestellungen";
    $resultOrderNumber = $mysqli->query($sqlOrderNumberGet);
    
    $OrderNumber = null;
    while($row = $resultOrderNumber->fetch_array()){ 
        $OrderNumber = $row["OrderNumber"];
    }

    foreach ($data["Name"] as $value) {
        $sqlIdGet = "SELECT * FROM artikel WHERE A_Name LIKE '$value'";
        $resultIdGet = $mysqli->query($sqlIdGet);
        while($row = $resultIdGet->fetch_array()) {
            $ID = $row["A_ID"];
            $Price = $row["A_Preis"];
            // echo $ID
             $sqlOrderDetails = "INSERT INTO bestelldetails (Bestell_Nr, A_ID, Einzelpreis) VALUES ('$OrderNumber', '$ID', '$Price')";
             $sendOrderDetails = $mysqli->query($sqlOrderDetails);
             echo "true";
             if(!$sendOrderDetails) {
                echo("Fehler: ". $mysqli->error);
            }
            
        }

    }
    
  }else {
      echo "false";
  }


?>