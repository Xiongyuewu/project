$(function(){
	/*start 点击删除按钮事件*/
	$(".a_del").on("click",function(){
		//显示遮罩层和对话框
		showdialog($("#zhezhao"),$("#dialog"));
		
		//点击对话框中的确定按钮执行的事件
		$("#dialog #yes").on("click",function(){
			$("input[name='yes']:checked").each(function(){ 
				
				// 遍历选中的checkbox
				n = $(this).parents("tr").index();
				// 获取checkbox所在行的顺序
				$("#t_body").find("tr:eq("+n+")").remove();
				
				
				hidedialog($("#zhezhao"),$("#dialog"));
			});
		});
	});

	$("#dialog .cuo").on("click",function(){
		hidedialog($("#zhezhao"),$("#dialog"));
	});
	/*end 点击删除按钮事件*/

	/*警告框的现实或隐藏*/
	function showdialog(data,dialog){
		dialog.addClass("animated rollIn").show();
		data.fadeIn();
	}
	function hidedialog(data,dialog){
		dialog.slideUp(500);
		data.fadeOut();
	}

});