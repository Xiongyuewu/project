 var zzmpbl = function(opts){
	//图片的名字
	var imgName = opts.imgName;
	//每个盒子的高度
	var arrHeight = opts.arrHeight;
	//每一个盒子的宽度
	var width = opts.width;
	//每一个盒子之间的间距
	var space = opts.space;
	//图片的外边距
	var margin = opts.margin;
	//图片距离容器两边的间距和
	var sum = margin * 2;
	//容器对象
	var $container  = $(opts.id);
	//设置时间
	var timer;
	
	//设置容器的样式
	$container.css({
		"position":"absolute",
		"margin":"50px auto"
	});

	//列数
	var column = 0;
	//真实宽度
	var swidth = width + space;
	//获取总列数
	function getcolumn(){
			column = Math.floor($(window).width() / swidth);
			$container.width(column * swidth );
	};

	//初始化总列数的函数
	getcolumn();

	//开始拿取每个div的坐标
	var arrTop = [];
	var arrLeft = [];
	for(var i = 0 ; i < column ; i++){
		arrLeft.push( i * swidth + space);
		arrTop.push( space);
	}

	//添加图片容器
	function loadData(){
		
		//高度的随机取值
		var num = randomRange(0,arrHeight.length-1);
		var height = arrHeight[num];

		//得到最小高度
		var min = getMin();

		//图片的随机取值
		var imgnum = randomRange(0,imgName.length-1);
		var imgindex = imgName[imgnum];

		//创建一个对象
		var $div = $("<div><a href='#' id='showview'><img alt='杨幂' src='img/"+imgindex+".jpg' width='"+(width - sum)+"' height='"+(height - sum)+"' style='margin:"+margin+"px'></a></div>");

		$div.addClass("itembox").animate(
			{
					width : width,
					height : height,
					left : arrLeft[min],
					top : arrTop[min]

			},"slow");//给每个图片容器添加样式
		
		$div.css(
			{
					background : opts.background || "#fff",
					"position":"absolute",
					"box-shadow":"0 0 10px #000",
					"border-radius":5 + "px"
			});//随机产生背景颜色
		
		$container.append($div);//在父级div中添加图片容器
		
		//决定下一个元素的起点坐标
		arrTop[min] +=  height + space;

	};
	
	timer = setInterval(function(){
		loadData();
	},100);

	//自适应图片的排序
	$(window).on("resize",function(){
		//获取原先的总列数
		var oldCells = column;
		//重新获得总列数
		getcolumn();
		//原来的列和现在的列一样就返回，不执行
		if(oldCells==column) return;
		//否则，重新计算每个容器在左边和头部的距离
		arrLeft=[];
		arrTop=[];
		for (var i=0;i<column;i++) {
			arrTop.push(space);
			arrLeft.push( i * swidth + space);
		}
		//获取现有的元素进行交换位置
		var $items =  $container.find(".itembox");
		//开始遍历每一个容器
		$items.each(function(){
			//获取最小的头部距离
			var min = getMin();
			//开始重新设定每一个容器的位置
			$(this).stop(true,true).animate({
				left:arrLeft[min],
				top:arrTop[min]
			},"slow");
			//开始替换数组中的高度
			arrTop[min] += $(this).height()+space;
		});
	});

	//获取top中最短的元素在数组中的下标位置
	function  getMin(){
		var val = arrTop[0];
		var index = 0;
		for(var i = 1 ; i < arrTop.length ; i++){
			if(val > arrTop[i]){
				val = arrTop[i];
				index = i;//拿到当前元素
			}
		}
		return index;
	};

	//获取随机数
	function randomRange(start , end){
		return Math.floor(Math.random() * (end-start + 1)) + start;
	};

	document.getElementById(opts.ID).onclick = function(){
		clearInterval(timer);
	};
};
