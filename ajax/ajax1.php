<?php
if(!empty($_POST['ticket'])){
	$ticket=$_POST['ticket'];
}else{$ticket='no';}

$name=trim($_POST['name']);
$phone=trim($_POST['phone']);
$date=trim($_POST['date']);
$dt=date('Y:m:d H:i:s');

if(fopen("../clients.txt", 'a+')){
	$fd = fopen("../clients.txt", 'a+') or die("не удалось создать файл");
	$str = "\n$name - $phone - date of trip  $date \nticket-$ticket - $dt";
	if(fwrite($fd, $str)){
		if(fclose($fd)){
			echo 1;
		}else{
	echo 0;
}
	}else{
	echo 0;
}
}else{
	echo 0;}

?>
