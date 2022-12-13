<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$mysqli=new mysqli('localhost','root','','crudapi');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if($request->division_name){
	$division_id=$request->division_id;
	$division_name=$request->division_name;
	$district_name=$request->district_name;
	$sql="INSERT INTO students(id,division_id,division_name,district_name) VALUES ('','$division_id','$division_name','$district_name')";
	$query=$mysqli->query($sql);
	echo $mysqli->insert_id;
}
?>