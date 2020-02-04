<?php
class MyClass{
	const a=13;
}
$classname='MyClass';

class OtherClass extends MyClass{
	const b=67;
	public static function opp(){
		echo self::b.'<br>';
		echo parent::a;
	}
}
?>
