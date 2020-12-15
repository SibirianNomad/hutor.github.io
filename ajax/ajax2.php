<?php
if(!empty($_POST['bisnes-ticket'])){
	$ticket=$_POST['bisnes-ticket'];
}else{$ticket='no';}

$name=trim($_POST['name']);
$phone=trim($_POST['phone']);
$date=trim($_POST['date']);
$city=trim($_POST['city']);
$number=trim($_POST['number']);
$dt=date('Y:m:d H:i:s');

if(fopen("../fly.txt", 'a+')){
	$fd = fopen("../fly.txt", 'a+') or die("не удалось создать файл");
	$str = "\n$name - $phone - date of fly  $date \ndeparture city - $city\nbisness class-$ticket\nnumber of passegers $number - $dt";
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
