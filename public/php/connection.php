<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods:POST,GET,PUT,DELETE');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
//Please create users database inside phpmysql admin and create registerusers tabel and create  `email`, `username`, `add1`, `add2`, `city`, `state`, `zip` fields
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "users";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//Add user
if(isset($_POST['myEmail']))
{
    $sql = "INSERT INTO `registerusers`( `email`, `username`, `phone`, `password`)
            VALUES ('".$_POST['myEmail']."', '".$_POST['myUsername']."', '".$_POST['myAdd1']."', '".$_POST['myAdd2']."', '".$_POST['myCity']."', '".$_POST['myState']."', '".$_POST['myZip']."')";
    if (mysqli_query($conn,$sql)) {
        $data = array("data" => "Your Data added successfully");
        echo json_encode($data);
    } else {
        $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($data);
        
    }
}
die();
?>