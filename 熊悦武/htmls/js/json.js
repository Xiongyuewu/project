var zzmtransfter = {
    tm_transfter:function(obj){
    	var tag3 = obj.tag2;
    	var source = $.trim(obj.tag1.val().replace(/(\n)*$/,""));
	        var result = "$('#xxxx').append(";
	        tag3.val(source.replace(/"/g,"'"));
	        var arr = tag3.val().match(/^(.*\n*)$/igm);
	        for(var i=0;i<arr.length;i++){
	            result += '"'+arr[i]+'"+\n';
       	 }
        tag3.val(result.substring(0,result.length-2)+");");
    }
}