 var i = 0;
 var timer;
 $(function(){
		/*轮播图js开始*/
		//页面打开之后，让第一张图片显示
		$(".ig").eq(0).show().siblings().hide();
		ShowTime()
		$(".tab").hover(function(){
			i = $(this).index();
			Show();
			clearInterval(timer);//清除轮播
		},function(){
			ShowTime();
		});
		$(".btn1").click(function(){
			clearInterval(timer);//暂停轮播
			if(i == 0){
				i = 5;
			}
			i--;
			Show();
			ShowTime()
		});
		$(".btn2").click(function(){
			clearInterval(timer);//暂停轮播
			if(i == 4){
				i = -1;
			}
			i++;
			Show()
			ShowTime()
			});
		/*轮播图结束*/
	});
function Show(){
		$(".ig").eq(i).stop(true).fadeIn(700).siblings().stop(true).fadeOut(700);
		$(".tab").eq(i).stop(true).addClass("bg").siblings().stop(true).removeClass("bg");
}
//轮播方法
function ShowTime(){
	//让它轮播，间隔4秒轮播一次
	timer = setInterval(function(){
		i++;
		if(i == 5){
			i = 0;
		}
		Show();
	},4000);
}