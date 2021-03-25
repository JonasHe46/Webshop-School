<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webshop";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

//empty Array
$arr = [];
// array categories
// $arr["Kategorien"] = [];
// $arr["Artikel"] = [];
//kategorien
$arr["Kategorie"]["KategorieID"] = [];
$arr["Kategorie"]["KategorieName"] = [];
//artikel
$img["Artikel"]["A_Bild"] = [];
$arr["Artikel"]["A_IDS"] = [];
$arr["Artikel"]["A_Name"] = [];
$arr["Artikel"]["A_Beschreibung"] = [];
$arr["Artikel"]["A_Preis"] = [];
$arr["Artikel"]["A_Bild"] = [];
$arr["Artikel"]["A_KategorieID"] = [];
$sql = "SELECT * FROM artikel
     LEFT JOIN kategorie ON artikel.kategorie_ID = kategorie.kategorie_ID";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
  //push into array
  array_push($arr["Artikel"]["A_IDS"], $row["A_ID"]);
  array_push($arr["Artikel"]["A_Name"], $row["A_Name"]);
  array_push($arr["Artikel"]["A_Beschreibung"], $row["A_Beschreibung"]);
  array_push($arr["Artikel"]["A_Preis"], $row["A_Preis"]);
  array_push($arr["Artikel"]["A_KategorieID"], $row["kategorie_ID"]);


  }

  
  



  
  
} 

else {
  echo "0 results";
}

$resultKat = $conn->query("SELECT * FROM kategorie");

if($resultKat->num_rows > 0) {
  while($row = $resultKat->fetch_assoc()) {
    //push into array
    array_push($arr["Kategorie"]["KategorieName"], $row["kategorie_name"]);
    array_push($arr["Kategorie"]["KategorieID"], $row["kategorie_ID"]);

    
  }

  //array in json
  echo(json_encode($arr));
  $rows = $result->fetch_all(MYSQLI_ASSOC);
  $rows = $resultKat->fetch_all(MYSQLI_ASSOC);
}
  

$conn->close();
?>