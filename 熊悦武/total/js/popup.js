/**
 * @description 邹智敏写的弹窗插件
 * @data : 2017-7-31
 **/
//弹框提示的标签
$.zzmbox = function(obj){
//插件存在就删除
$("#popup").remove();
var $box = $("<div id='popup' class='popup "+animateIn()+"'>"+
"			<div class='header'>"+
"				<div class='ts'>"+obj.title+"</div>"+
"				<div class='gb' onclick='wincolse()'>✖</div>"+
"			</div>"+
"			<div class='context'>"+
"				<div class='c-ts'>你确定要删除....</div>"+	
"				<a href='javascript:winajax();' class='qd'>"+obj.btn1+"</a>"+
"				<a href='javascript:wincolse();' class='qx'>"+obj.btn2+"</a>"+
"			</div>"+
"		</div>");

//追加模板
$("body").append($box);
// 居中定位插件
center_loading($box);
//浏览器窗口改变时居中显示
initEvents($box);
//可移动的框
windowmove($box);
}

//居中定位的算法
function center_loading ($loading){
var width = $loading.width();//计算loading的宽度
var height = $loading.height();//计算loading的高度
var ww = $(window).width();//计算浏览器的可见宽度
var wh = $(window).height();//计算浏览器的可见高度
var left = (ww - width) / 2;
var top = (wh - height) / 2;
$loading.css({left:left,top:top});//设置坐标位置
};

//浏览器的缩小而居中
function initEvents(){
	$(window).resize(function(){
		center_loading ($loading);
	});
};

//关闭弹窗
function wincolse(){
	$(".popup").removeClass().addClass("popup");
	$(".popup").toggleClass(animateOut());
}

//弹框的移动
function windowmove($box){
var dragMark = false;
$box.mousedown(function(e){
//获取鼠标点在弹框上距离浏览器左边的距离和上边的距离
var x = e.clientX;
var y = e.clientY;

//获取弹框距离浏览器左边的距离和上边的距离
var left = $box.offset().left;
var top = $box.offset().top;

//获取弹框的高度和宽度
var boxw = $box.width();
var boxh = $box.height();

dragMark = true; 
$(document).mousemove(function(ev){
if(dragMark){
//获取鼠标点在弹框上距离浏览器左边的距离
var x1 = ev.clientX;
var y1 = ev.clientY;
var nw = x1 - x + left;
var nh = y1 - y + top;
if(nw<0) {
nw=0;
}else if(nw>$(window).width()-boxw) {
nw=$(window).width()-boxw;
}
if(nh<0){
nh=0;
}else if(nh>$(window).height()-boxh) {
nh=$(window).height()-boxh;
}
$box.css({left:nw,top:nh,cursor:"move"});
}
}).mouseup(function(){
dragMark = false;
});
});
};

// 动画出场秀（随机出现）
function animateIn(index){
var animateIn = [];
animateIn.push("animated bounce");//0
animateIn.push("animated tada");//1
animateIn.push("animated swing");//2
animateIn.push("animated wobble");//3
animateIn.push("animated flip");//4
animateIn.push("animated flipInX");//5
animateIn.push("animated flipInY");//6
animateIn.push("animated fadeIn");//7
animateIn.push("animated fadeInUp");//8
animateIn.push("animated fadeInDown");//9
animateIn.push("animated fadeInLeft");//10
animateIn.push("animated fadeInRight");//11
animateIn.push("animated fadeInUpBig");//12
animateIn.push("animated fadeInDownBig");//13
animateIn.push("animated fadeInLeftBig");//14
animateIn.push("animated fadeInRightBig");//15
animateIn.push("animated bounceIn");//16
animateIn.push("animated bounceInUp");//17
animateIn.push("animated bounceInDown");//18
animateIn.push("animated bounceInLeft");//19
animateIn.push("animated bounceInRight");//20
animateIn.push("animated rotateIn");//21
animateIn.push("animated rotateInUpLeft");//22
animateIn.push("animated rotateInDownLeft");//23
animateIn.push("animated rotateInUpRight");//24
animateIn.push("animated rotateInDownRight");//25
animateIn.push("animated rollIn");//26
if(!index){
	var len = animateIn.length;
	var random = Math.floor(Math.random()*(len-1)+1);
	return animateIn[random];
} else {
	return animateIn[index];
}
}

//动画消失的效果
function animateOut(index){
var animateOut = [];
animateOut.push("animated fadeOut");//2
animateOut.push("animated fadeOutUp");//3
animateOut.push("animated fadeOutDown");//4
animateOut.push("animated fadeOutLeft");//5
animateOut.push("animated fadeOutRight");//6
animateOut.push("animated fadeOutUpBig");//7
animateOut.push("animated fadeOutDownBig");//8
animateOut.push("animated fadeOutLeftBig");//9
animateOut.push("animated fadeOutRightBig");//10
animateOut.push("animated bounceOut");//11
animateOut.push("animated bounceOutUp");//12
animateOut.push("animated bounceOutDown");//13
animateOut.push("animated bounceOutLeft");//14
animateOut.push("animated bounceOutRight");//15
animateOut.push("animated rotateOut");//16
animateOut.push("animated rotateOutUpLeft");//17
animateOut.push("animated rotateOutDownLeft");//18
animateOut.push("animated rotateOutDownRight");//19
animateOut.push("animated rollOut");//21
if(!index){
	var len = animateOut.length;
	var r = Math.floor(Math.random()*(len-1)+1);
	return animateOut[r];
}else{
	return animateOut[index];
}
};