$(function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("cishu"));
    // 指定图表的配置项和数据
    option = {
			title: {
				text: '看世界新闻网月访问记录对比图',
				subtext: '权威认证'
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				data:['最高访问数','最低访问数']
			},
			toolbox: {
				show: true,
				feature: {
					dataZoom: {
						yAxisIndex: 'none'
					},
					dataView: {readOnly: false},
					magicType: {type: ['line', 'bar']},
					restore: {},
					saveAsImage: {}
				}
			},
			xAxis:  {
				type: 'category',
				boundaryGap: false,
				data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
			},
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: '{value} 人'
				}
			},
			series: [
				{
					name:'最高访问数',
					type:'line',
					data:[1000, 2000, 6000, 4000, 3000, 5000, 3000, 7000, 5300, 2400, 3500, 3800],
					markPoint: {
						data: [
							{type: 'max', name: '最大值'},
							{type: 'min', name: '最小值'}
						]
					},
					markLine: {
						data: [
							{type: 'average', name: '平均值'}
						]
					}
				},
				{
					name:'最低访问数',
					type:'line',
					data:[500, 300, 2500, 2000, 2000, 200, 1000,5005, 3000, 2005, 2050, 2000],
					markPoint: {
						data: [
							{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
						]
					},
					markLine: {
						data: [
							{type: 'average', name: '平均值'},
							[{
								symbol: 'none',
								x: '90%',
								yAxis: 'max'
							}, {
								symbol: 'circle',
								label: {
									normal: {
										position: 'start',
										formatter: '最大值'
									}
								},
								type: 'max',
								name: '最高点'
							}]
						]
					}
				}
			]
		};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  });