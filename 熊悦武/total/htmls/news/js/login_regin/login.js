$(function(){
	//jquery
	$("#submitLogin").on("click",function(){
		var params = $("#loginForm").serializeArray();
		//解析参数
		var vp = ParamParams(params);
		
		if(isEmpty(vp.username.value)){
			vp.username.obj.focus();
			Common.message("请输入用户名");
			return false;
		}
		if(isEmpty(vp.password.value)){
			vp.password.obj.focus();
			Common.message("请输入密码");
			return false;
		}	
	});
	function ParamParams(params){
		var json = {};
		for(var i=0;i<params.length;i++){
			json[params[i].name] = {
				value:params[i].value,
				obj:$("input[name='"+params[i].name+"']")
			}; 
		}
		return json;
	};


	var Common =  {
		message:function(message){
			$("#tipbox").remove();
			$("body").append("<div id='tipbox' '>"+message+"</div>");	
			$("#tipbox").fadeOut(3000);
		}
	};
	
	/**
	 * 判断非空
	 * 
	 * @param val
	 * @returns {Boolean}
	 */
	function isEmpty(val) {
		val = $.trim(val);
		if (val == null)
			return true;
		if (val == undefined || val == 'undefined')
			return true;
		if (val == "")
			return true;
		if (val.length == 0)
			return true;
		if (!/[^(^\s*)|(\s*$)]/.test(val))
			return true;
		return false;
	}
});