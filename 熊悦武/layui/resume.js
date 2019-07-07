layui.use(['layer','carousel','flow','element'],function(){
	var layer = layui.layer;
	var flow = layui.flow;
	flow.lazyimg();
	var carousel = layui.carousel;
	carousel.render({
		elem:'#lunbotu',
		width:'100%',
		anim:'fade',
		interval:"8000"
		});
});