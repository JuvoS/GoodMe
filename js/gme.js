function changeInfo(obj){
	//console.log($obj.id+","+$obj.value);
	localStorage.setItem(obj.id,obj.value);
}
function getInfo(id){
	return localStorage.getItem(id);
}

/**
 * 改变头像
 */
function changeHead($obj){
	location.href="http://www.qimuren.com/show/index.php";
//	$obj.src = "http://b.hiphotos.baidu.com/baike/w%3D268/sign=88bc4e91d42a60595210e61c1035342d/d1a20cf431adcbefafbadc5eafaf2edda2cc9fd8.jpg";
}
function visibeAction(){
	$(".back").hide();
}
function headShow(){
	console.log(localStorage.getItem("head"));
	
	if(localStorage.getItem("head")){
		return localStorage.getItem("head");
	}else{
		return "../img/nd.jpg";
	}
}