
$(function(){
	var i = 0; 
	$("#huanfu").on("click",function(){
		if(i==0){
			$("#imgs").css({"width":"250px"});
			$("#imgs .bgimgs").slideDown();
			i = 1;
		}else{
			$("#imgs").css({"width":"50px"});
			$("#imgs .bgimgs").slideUp();
			i = 0;
		}
	});
	
	if($.cookie("bg-pic") == null || $.cookie("bg-pic")=="" ){
		$(".bg").css({"background-image":"url(images/1.jpg)","background-size":"cover","left":"0","top":"0"});
	}else{
		$(".bg").css({"background-image":"url('"+ $.cookie("bg-pic") +"')","background-size":"cover","left":"0","top":"0"});
	}
	$("#imgs .bgimgs li img").click(function(){
		var src = $(this).attr("src");	
		$(".bg").css({"background-image":"url('"+ src +"')","background-size":"cover","left":"0","top":"0"}).fadeIn(500);
		$.cookie("bg-pic",src,{expires:7});
	});
	
});
