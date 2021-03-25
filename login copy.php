

<!DOCTYPE html>
<html lang="en">
<head>
<title>FreshTek - Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php
        include_once ("db.php");
        session_start();
        

        if(isset($_POST["name"]) && isset($_POST["password"])){
            $user = $_POST["name"];
            $pass = $_POST["password"];
            $request = $mysqli->query("SELECT * FROM benutzer WHERE Username LIKE '$user'");

            while($row = $request->fetch_array()){
                $passsql = $row["Password"];
                if(password_verify($pass, $passsql)) {
                    $_SESSION["name"] = $user;
                    header("Location: index.php");
                }else {
                    exit("Wrong username or password. Please try again -> <a href='login.html'>Login</a>");
                }    
            }
            
        }else {
            echo 'Something went wrong please try again --> <a href="login.html"> Login </a>';
        }
        
    ?>
</body>
</html>