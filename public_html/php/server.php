<?php
header('Content-Type: plain/text; charset=utf-8');
$action = $_POST['action'];
if(isset($_POST['con'])){$con = $_POST['con'];}else{$con="";} 
switch($action){
    case 'select':
        select($con);
        break;
    case 'insert':
        break;
    case 'update':
        break;
    case 'remove':
        break;
}
function connect(){
     $connection = mysql_connect("localhost","root","WAqwerty123");
     mysql_select_db("llibreria",$connection);
     return $connection;
}
function select($con){
    $connection = connect();
    $condition = "";
    if($con != ""){
        $con = explode(";",$con);
        $condition = "WHERE";
        foreach ($con as $value) {
            $condition .= " name LIKE '%".$value."%' OR";            
        }
        $condition = trim($condition," OR");
    }
    $query = "SELECT * FROM llibres ".$condition;
    $res = mysql_query($query);
    $result = mysql_fetch_array($res);
    $json = json_encode($result);
    echo $json;
}
?>