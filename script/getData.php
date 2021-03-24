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

$arr = [];
$arr["Artikel"] = [];
$arr["Artikel"]["A_IDS"] = [];
$arr["Artikel"]["A_Name"] = [];
$arr["Artikel"]["A_Beschreibung"] = [];
$arr["Artikel"]["A_Preis"] = [];
$arr["Artikel"]["A_Bild"] = [];
$arr["Artikel"]["A_KategorieID"] = [];
$sql = "SELECT * FROM artikel";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
  array_push($arr["Artikel"]["A_IDS"], $row["A_ID"]);
  array_push($arr["Artikel"]["A_Name"], $row["A_Name"]);
  array_push($arr["Artikel"]["A_Beschreibung"], $row["A_Beschreibung"]);
  array_push($arr["Artikel"]["A_Preis"], $row["A_Preis"]);
  // array_push($arr["Artikel"]["A_Bild"], $row["A_Bild"]);
  array_push($arr["Artikel"]["A_KategorieID"], $row["kategorie_ID"]);
  }

  echo(json_encode($arr));
  $rows = $result->fetch_all(MYSQLI_ASSOC);
  
} else {
  echo "0 results";
}

$conn->close();



// $host    = 'localhost';
// $db      = 'webshop';
// $user    = 'root';
// $pass    = '';


// $dsn = "mysql:host=$host;dbname=$db";
// $opt = [
//     PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
//     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
//     PDO::ATTR_EMULATE_PREPARES   => false,
// ];

// $dbh = new PDO($dsn, $user, $pass, $opt);

// $result = $dbh->query("SELECT * FROM artikel");
// $rows = $result->fetchAll();
// // echo json_encode($rows);



?>