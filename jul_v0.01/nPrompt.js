
var nPrompt = function(){};

(function($){

	nPrompt = function(prop){

		var op = $.extend({
			height : 300,
			width : 500,
			title:"nPrompt - ",
			type:"text",
			success:function(){},
			top:"auto",
			left:"auto",
			text:""
		},prop);

		if(op.left == "auto") op.left = ($(document).width()/2) - (op.width/2);
		if(op.top == "auto") op.top = ($(document).height()/2) - (op.height/2);

		if(op.top <= 0) op.top = 0;

		var modalBox = $("<div>").attr("id","nModalBox").css("background-color","#000000").css("background-color","rgba(0,0,0,0.5)").css("position","absolute").css("filter","alpha(opacity=50)").css("top","0px").css("left","0px").css("height",$(document).height()+"px").css("width",$(document).width()+"px");
		var msgBox = $("<div>").attr("id","nMessageBox").css("font-size","12px").css("background-color","#FFF").css("position","absolute").css("top",op.top+"px").css("left",op.left+"px").css("width",op.width+"px").css("border","2px solid #CCC");
		var titleBox = $("<div>").attr("id","nTitleBox").text(op.title).css("padding","10px").css("background-color","#eeeeee");
		var buttonBox = $("<div>").attr("id","nButtonBox").css("padding","0 10px 10px 10px").css("text-align","right");
		var inputBox = $("<div>").css("padding","10px").css("text-align","center");

		if(op.type == "password"){
			inputBox.html("<input type='password' id='nInputBox' style='width:"+(op.width*0.9)+"px;padding:5px;border:1px solid gray;'/>");
		}else if(op.type == "textarea"){
			inputBox.html("<textarea id='nInputBox' style='width:"+(op.width*0.9)+"px;height:"+(op.height*0.7)+"px;padding:5px;border:1px solid gray;'></textarea>");
		}else{
			inputBox.html("<input type='text' id='nInputBox' style='width:"+(op.width*0.9)+"px;padding:5px;border:1px solid gray;'/>");
		}

		var okButton = $("<button>").text("OK").css("padding","5px");
		var cancelButton = $("<button>").text("Cancel").css("padding","5px");

		cancelButton.click(function(){
			op.success(  null );
			$("#nModalBox").remove();
			$("#nMessageBox").remove();
		});

		okButton.click(function(){
			op.success(  $("#nInputBox").val() );
			$("#nModalBox").remove();
			$("#nMessageBox").remove();
		});

		buttonBox.append(okButton);
		buttonBox.append(cancelButton);

		msgBox.append(titleBox);
		msgBox.append(inputBox);
		msgBox.append(buttonBox);

		$("body").append(modalBox);
		$("body").append(msgBox);

		$("#nInputBox").val(op.text);



		this.close = function(){
			$("#nModalBox").remove();
			$("#nMessageBox").remove();
		}

		this.removeButton = function(){
			$("#nButtonBox").html('');
			return this;
		}

		this.setButton = function(prop){

			var buttion = $.extend({
				text : "OK",
				click : function(){}
			},prop);

			$("#nModalBox").remove();
			$("#nMessageBox").remove();
			return this;
		}

		this.addCloseButton = function(){

			var closeBtn = $("<div>").text("×").css("float","right").css("padding","3px").css("border","1px solid gray").css("margin","-5px").css("cursor","pointer");

			closeBtn.click( this.close );

			$("#nTitleBox").prepend(closeBtn);
			return this;
		}



		return this;
	};


})(jQuery);

