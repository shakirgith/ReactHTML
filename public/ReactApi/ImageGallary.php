<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST');
	header('Access-Control-Allow-Headers: X-Requested-With');



// Create connection
$conn = mysqli_connect('localhost', 'root', '', 'react_api');
	
	$sql = "SELECT * from data";
	$mysqli = mysqli_query($conn,$sql);
	$json_data = array();

	while($row = mysqli_fetch_assoc($mysqli))

	{
	  $json_data[] = $row;
	}

echo json_encode(['phpresult'=>$json_data]);



?>

