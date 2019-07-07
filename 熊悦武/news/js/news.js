$(function(){
	
	//nav1 快速滚动到相应盒子位置事件
	$("#nav1 .caijin").on("click",function(){
		$("html,body").animate({scrollTop:"590px"},1000);
	});

	$("#nav1 .tiyu").on("click",function(){
		$("html,body").animate({scrollTop:"1400px"},1000);
	});

	$("#nav1 .yule").on("click",function(){
		$("html,body").animate({scrollTop:"2200px"},1000);
	});

	$("#nav1 .keji").on("click",function(){
		$("html,body").animate({scrollTop:"2870px"},2000);
	});
	
	$("#nav_right .dingbu").on("click",function(){
		$("html,body").animate({scrollTop:"0px"},1000);
	});

	//nav1导航条的-->”更多“按钮-->出现与隐藏
	$(".gd").hover(function(){
		$("#c-content").addClass("animated bounceInLeft").show();
	},function(){
		$("#c-content").hide();
	});


	//nav4窗口拖动事件
	$(window).resize(function(){
		var s_width = $(document.body).outerWidth(); //判断浏览器窗口的宽度
		if(s_width<600){
			$("#nav4").hide();
		}else{
			if(s_width<=1100){
				$("#nav4").css({margin:"30px 0px 10px 96%",transition:"1.5s ease all"});
			}else{
				$("#nav4").css({margin:"30px 0px 10px 93%",transition:"1.5s ease all"});
			}
		}
	});
	
	//nav4在窗口中滚动条事件
	$(window).scroll(function(){
		var s_height = $(window).scrollTop();//滚动条的高度
		if(s_height>20){
			$("#caijing").show(1000);
		}
		if(s_height>=800){
			$("#tiyu").show(1000);
		}
		if(s_height>=1600){
			$("#yule").show(1000);
		}
		if(s_height>=2300){
			$("#keji").show(1000);
		}
		
		if(s_height>=500){
			$("#nav4").addClass("animated fadeInLeft").show();
		}else{
			$("#nav4").hide();
		}
	});
	
	//nav4在右边侧边栏的点击事件
	$("#nav4 li").on("click",function(){
		var u_li = 	$(this).index();
		var u_num ;
		if(u_li==0){
			u_num=0;
			$("html,body").animate({scrollTop:u_num+"px"},500);
		}
		if(u_li==1){
			u_num=590*u_li;
			$("html,body").animate({scrollTop:u_num+"px"},500);
		}
		if(u_li==2){
			u_num=700*u_li;
			$("html,body").animate({scrollTop:u_num+"px"},500);
		}
		if(u_li==3){
			u_num=730*u_li;
			$("html,body").animate({scrollTop:u_num+"px"},500);
		}
		if(u_li==4){
			u_num=718*u_li;
			$("html,body").animate({scrollTop:u_num+"px"},500);
		}
		if(u_li==7){
			$("html,body").animate({scrollTop:0+"px"},500);
		}
	});

	//第一个轮播图的按钮的出现与消失
	$("#xinwen .n-right").hover(function(){
		$(".tab").addClass("animated bounceInLeft").show();
	},function(){
		$(".tab").hide();
	});
	
	//新闻右边按钮的出现与隐藏
	$("#xinwen .n-right #lunbotu #tabs .tab").hover(function(){
		var index_of = $(this).index();
		$("#xinwen .n-right #lunbotu #igs .ig img").eq(index_of).addClass("animated bounceInRight");
		$("#xinwen .n-right #lunbotu #igs .ig h3").eq(index_of).addClass("animated bounceInLeft");
	});

});