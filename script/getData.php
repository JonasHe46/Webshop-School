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

$sql = "SELECT * FROM artikel";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
  //   echo "id: " . $row["A_ID"]. " - Name: " . $row["A_Name"]. " " . "<br>";
  echo $row["A_ID"];
  }

  $rows = $result->fetch_all(MYSQLI_ASSOC);

  // print json_encode($rows);
  
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