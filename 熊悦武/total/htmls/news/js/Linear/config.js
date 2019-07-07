window.onload = function(){
	//配置
	var config = {
		vx: 4,//点x轴速度,正为右，负为左
		vy: 4,//点y轴速度
		height: 2,//点高宽，其实为正方形，所以不宜太大
		width: 2,
		count: 500,//点个数
		color: "255,255,255",//点颜色
		stroke: "255,255,255",//线条颜色
		dist: 2000,//点吸附距离
		e_dist: 20000,//鼠标吸附加速距离
		max_conn: 2//点到点最大连接数
	}
	//调用
	CanvasParticle(config);
}