$(function(){
	/*start ���ɾ����ť�¼�*/
	$(".a_del").on("click",function(){
		//��ʾ���ֲ�ͶԻ���
		showdialog($("#zhezhao"),$("#dialog"));
		
		//����Ի����е�ȷ����ťִ�е��¼�
		$("#dialog #yes").on("click",function(){
			$("input[name='yes']:checked").each(function(){ 
				
				// ����ѡ�е�checkbox
				n = $(this).parents("tr").index();
				// ��ȡcheckbox�����е�˳��
				$("#t_body").find("tr:eq("+n+")").remove();
				
				
				hidedialog($("#zhezhao"),$("#dialog"));
			});
		});
	});

	$("#dialog .cuo").on("click",function(){
		hidedialog($("#zhezhao"),$("#dialog"));
	});
	/*end ���ɾ����ť�¼�*/

	/*��������ʵ������*/
	function showdialog(data,dialog){
		dialog.addClass("animated rollIn").show();
		data.fadeIn();
	}
	function hidedialog(data,dialog){
		dialog.slideUp(500);
		data.fadeOut();
	}

});