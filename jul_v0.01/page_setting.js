
//Jquery �ʿ� ���
$(document).ready(function(){

	//���ڸ� �Է�
	$(".onlynum").keyup(function(){
		var out = $(this).val().replace(/[^0-9]/g,"");
		$(this).val(out);
	});

	// ��¥ �����Է� ������
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

		if( MM >= 13 || MM <= -1  || // �� �˻�
				DD >= 32 || DD <= -1   //�� �˻�
		){
			$(this).val("");
			alert("�߸��� ������ ��¥�Դϴ�.\n�Է��Ͻ� ��¥ : "+newDate);
			return;
		}
		$(this).val(newDate);
	});
	// �����Է����� , �߰�
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