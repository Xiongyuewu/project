$(function(){

	/*拖拽图片找到目标元素
	 * 1.触发元素有什么行为 dragenter
	 * 2.进入区域离开之前行为 dragover
	 * 3.离开区域行为 dragleave
	 * 4.在目标元素释放鼠标 drop
	*/
	var Div = $(".Img").get(0);
	var txt = $(".Img .text");

	/*在目标区域中移动，无论哪里都能释放*/
	Div.ondragover = function(e){
		/*去掉浏览器的默认事件*/
		e.preventDefault();
	}

	/*释放*/
	Div.ondrop = function(e){
		e.preventDefault();
		/*获取拖过来的文件*/
		var fs = e.dataTransfer.files;
		/*判断拖拽过来的是不是图片*/
		var _type = fs[0].type;
		if(_type.indexOf("image")!=-1){
			var fd = new FileReader();
			fd.readAsDataURL(fs[0]);//读取文件url地址
			fd.onload = function(){
				var oImg = 	$("<img src='' width='90'/>");
				oImg.attr("src",this.result);
				$(".Img").append(oImg);
				$(".text").hide();
			}
		}else{
			console.log("请上传图片！！");
		}
	}
	
	/*读取存储信息*/
	var message = sessionStorage.getItem("message");
	/*把读取到的存储信息放到div中*/
	$(".shuoshuo").html(message);
	/*点击发送按钮*/
	var i = 1; 
	$("#btn2").click(function(){
		var text = $("#btn1").val();
		//判断文本中的信息是不是空的，如果是空的就锁定输入框
		if(text == ""){
			$("#btn1").focus();
		}else{
			$(".shuoshuo").show();
			var html = $(".shuoshuo").html();
			$(".text").hide();
			$(".shuoshuo").html(html+"<div class='box'><span>"+text+"</span><br>"+$(".Img").html()+"<i>"+i+"楼</i></div>");
			$(".Img").html("");
			$("#btn1").val("");//输入框开始置空
			i=i+1;
		}
		sessionStorage.setItem("message",$(".shuoshuo").html());
	});

});