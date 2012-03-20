//비밀번호 체크, 영문 대문자 / 소문자 / 숫자 반드시 포함하여 8-20글자로 구성 
String.prototype.isPwdNew = function(){

	chk1 = /^[a-zA-Z0-9]{8,20}$/;　　//문자열 시작이 영대/영소/숫자로 구성되어 있고, 8-20자리
	chk2 = /[a-z]/;　　　　　　　　　//영어 소문자로 구성
	chk3 = /[A-Z]/;　　　　　　　　  //영어 대문자로 구성
	chk4 = /\d/;　　　　　　　　　   //숫자로 구성

	return chk1.test(this.remove(arguments[0])  //영대/영소/숫자이며, 글자수가 8-20 이내인것 지웠으면 true

			&& chk2.test(this.remove(arguments[0])) //영소문자 구성 지웠으면 true

			&& chk3.test(this.remove(arguments[0])) //영대문자 구성 지웠으면 true

			&& chk4.test(this.remove(arguments[0])) //숫자로 구성된것 지웠으면 true

			? true : false;

}

//숫자만 가져오기 (return string)
String.prototype.num = function() {
	return (this.trim().replace(/[^0-9]/g, ""));
}

//숫자로만 구성되었는지 확인 (return boolean)
String.prototype.isNum = function() {
	return (/^[0-9]+$/).test(this.remove(arguments[0])) ? true : false;
}

//숫자에 3자리마다 , 를 찍어서 반환
String.prototype.money = function() {
	var num = this.trim();
	while((/(-?[0-9]+)([0-9]{3})/).test(num)) {
		num = num.replace((/(-?[0-9]+)([0-9]{3})/), "$1,$2");
	}
	return num;
}

//파일 확장자만 가져오기 (return string)
String.prototype.ext = function() {
	return (this.indexOf(".") < 0) ? "" : this.substring(this.lastIndexOf(".") + 1, this.length);
}

//파라미터 제외한 순수한 URL 얻기(return string)
String.prototype.uri = function() {
	var arr = this.split("?");
	arr = arr[0].split("#");
	return arr[0];
}

//휴대폰번호 체크 (return boolean)
//- arguments[0] : 휴대폰 구분자
String.prototype.isMobile = function() {
    var arg = arguments[0] ? arguments[0] : "";
    return eval("(/01[016789]" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");
}
 
//전화번호 체크 (return boolean)
//   - arguments[0] : 전화번호구분자 
String.prototype.isPhone = function() {
    var arg = arguments[0] ? arguments[0] : "";
    return eval("(/(02|0[3-9]{1}[0-9]{1})" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(this)");
}

//이메일 유효성 체크 (return boolean)
String.prototype.isEmail = function() {
    return (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(this.trim());
}

//open pop
function openPop(ref,w,h,scrollbar){
	var window_left = (screen.width-w)/2;
	var window_top = (screen.height- (h*1.5))/2;

	var nn = Math.floor(Math.random()*1000000000);

	if( !scrollbar ) scrollbar = "yes";

	var pop = window.open(ref,("AA"+nn),'width='+w+',height='+h+',scrollbars='+scrollbar+',status=no,top=' +window_top+',left='+window_left+'');
	return pop;
}

function go(ref){
	location.replace(ref);
}

function textMaxLimit(obj,max){
	if(obj.value.length>=max+1){
		obj.value = obj.value.substr(0,max);
		alert(max+'자 이상 입력하실수 없습니다.');
		return false;
	}
}

// PHP print_r 과 같은효과
function print_r(arr){
	var str = '';
	var tab = '	';
	for(var i in arr){
		str += tab + i+':';
		if(typeof(arr[i])!='object' || (!arr[i])){
			if(arr[i] == 0){
				str+= '0\n'; 
			}else{
				str += (!arr[i]) ? 'null\n' : arr[i] + '\n'; 
			}
		}else{
			oldtab2 = tab;
			tab += '\t';
			str += 'array(\n'; 
			str += print_r(arr[i]); 
			str += tab + ')\n';
			tab = oldtab2;
		}				
	}
	return str;
}

//내용 비워주기
function trim(str){
	var i,j = 0;

	for(i=0; i< str.length; i++){
		if(str.charAt(i) == ' ')
			j=j + 1;
		else 
			break;
	}
	return str.substring(j, str.length - j + 1);
}

// 이메일 형식검사
function chk_email(str){
	var em=str;    //이메일의 값은 단순히 문자이다 이것을 객체화시켜서 비교한다..
	var epattern = new RegExp("^([a-zA-Z0-9\-\_]{3,40})" + "@" + "([a-zA-Z0-9\-\_]{3,40})" + "\." + "([a-zA-Z0-9\-\_\.]{2,5})$");
	if (!epattern.test(em))
	{
		return false;
	}
	return true;
}