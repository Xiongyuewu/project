var zzmcharts = {
	pie:function(opts){
			var myChart = echarts.init(document.getElementById(opts.id));
		  	option = {
				backgroundColor: '#fff',
				title : {
					text: opts.title,
					x:'center'
				},
				tooltip : {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					left: 'left',
					data: opts.dataArr
				},
				series : [
					{
						name: '访问数量',
						type: 'pie',
						radius : '55%',
						center: ['50%', '50%'],
						data:opts.data,
						roseType: 'angle',//显示成南丁格尔图
						itemStyle: {
							 normal: {
								// 阴影的大小
								shadowBlur: 200,
								// 阴影水平方向上的偏移
								shadowOffsetX: 0,
								// 阴影垂直方向上的偏移
								shadowOffsetY: 0,
								// 阴影颜色
								shadowColor: 'rgba(0, 0, 0, 0.5)',
									lineStyle: {
										color: 'rgba(255, 255, 255, 0.3)'
									}
							}
						}
					}
				]
			};
			myChart.setOption(option);
	},
	bar:function(opts){
		var myChart = echarts.init(document.getElementById(opts.id));
		option = {
			backgroundColor: '#fff',
		    title: {
		        text: opts.title,
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:opts.Xdata
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
		        data: opts.xAxisData
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value} °C'
		        }
		    },
		    series: [
		        {
		            name:opts.namemax,
		            type:'line',
		            data:opts.seriesdatamax,
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
		            name:opts.namemin,
		            type:'line',
		            data:opts.seriesdatamin,
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
		myChart.setOption(option);
	}
	
}