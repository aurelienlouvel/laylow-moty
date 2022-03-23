<?php
header('content-type:application/json');
header("Access-Control-Allow-Origin: *");

if(isset($_GET["id"])){
    $db = new PDO('mysql:host=rp702.myd.infomaniak.com;dbname=rp702_laylow;port=3306;charset=utf8', 'rp702_neomiannay', 'Laylow77');
    $sql = $db->prepare("SELECT * FROM albums WHERE id=:id");
    $sql->bindValue(':id',$_GET["id"]);
    $sql->execute();
    $result = $sql->fetch(PDO::FETCH_ASSOC);
    $sql = $db->prepare("SELECT * FROM musiques WHERE id_album=:id");
    $sql->bindValue(':id',$_GET["id"]);
    $sql->execute();
    $result["musiques"] = $sql->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}