var zzmtransfter = {
    tm_transfter:function(obj){
    	var source = $.trim(obj.tag.val().replace(/(\n)*$/,""));
	        var result = "$('#xxxx').append(";
	        $("#tm-target").val(source.replace(/"/g,"'"));
	        var arr = $("#tm-target").val().match(/^(.*\n*)$/igm);
	        for(var i=0;i<arr.length;i++){
	            result += '"'+arr[i]+'"+\n';
       	 }
        $("#tm-target").val(result.substring(0,result.length-2)+");");
    }
}