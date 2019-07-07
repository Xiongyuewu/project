/*
 * @author ： 邹智敏 
 * @data ：2017-10-22
 * @descript ：基于jquery封装的图形风格 :column2d,column3d,line,area2d,bar2d,pie2d,pie3d,doughnut2d,doughnut3d,pareto2d,pareto3d 
 * @注意 ：使用前请先导入JQuery
 * */
$.zzmChart = function(options){var opts = $.extend({},{target:"",width:"100%",height:"400",type:"column2d",dataType:"xml",data:"",callback:function(){}},options);FusionCharts.ready(function(){var revenueChart = new FusionCharts({"type":opts.type,"renderAt":opts.target,"width":opts.width,"height":opts.height,"dataFormat":opts.dataType,"dataSource":opts.data});revenueChart.render();});};