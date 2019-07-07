$(function(){
	$("[data-toggle='tooltip']").tooltip();
	$("#bs-example-navbar-collapse-1 ul li").on("click",function(){
		var nav_index = $(this).index();
		if(nav_index==0){
			$("html,body").animate({scrollTop:"300px"},1000);
		}
		if(nav_index==1){
			$("html,body").animate({scrollTop:"1200px"},1000);
		}
		if(nav_index==2){
			$("html,body").animate({scrollTop:"2250px"},1000);
		}
		if(nav_index==3){
			$("html,body").animate({scrollTop:"2910px"},1000);
		}
		if(nav_index==4){
			$("html,body").animate({scrollTop:"5000px"},2000);
			$("html,body").animate({scrollTop:"4050px"},1000);
		}
	});
});