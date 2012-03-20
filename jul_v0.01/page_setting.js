
//Jquery 필요 기능
$(document).ready(function(){

	//숫자만 입력
	$(".onlynum").keyup(function(){
		var out = $(this).val().replace(/[^0-9]/g,"");
		$(this).val(out);
	});

	// 날짜 수동입력 오류용
	$(".text_cal").change( function () {
		var data = $(this).val();
		data = data.replace(/[^0-9]/g, "");

		if(data.length == 0) return;
		if(data.length < 8){
			for(var i=data.length ;i< 8;i++) data = data +"0";
		}

		var YY = data.substring(0,4);
		var MM = data.substring(4,6);
		var DD = data.substring(6,8);

		var newDate = YY + "-" + MM + "-" + DD ;

		if( MM >= 13 || MM <= -1  || // 월 검사
				DD >= 32 || DD <= -1   //일 검사
		){
			$(this).val("");
			alert("잘못된 형식의 날짜입니다.\n입력하신 날짜 : "+newDate);
			return;
		}
		$(this).val(newDate);
	});
	// 숫자입력폼용 , 추가
	$(".num_format").keyup(function (){
		var str = $(this).val().replace(/[^0-9]/g,"");
		var out = "";
		for(var i=0; i < str.length ;i++){
			var key = str.length - i -1;
			if(i%3 === 0 && i >= 3) out =  "," + out;
			out = str.substr(key,1)+out;
		}
		$(this).val(out);
	});


});