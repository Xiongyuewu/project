$(function(){
	var k = 0;
	var yes = $(".yes");
	var ach = $(".ccyes");
	yes.on("click",function(){
			var t_name = true;
			if(k==0){
				showchecked(t_name);
				k=1;
			}else{
				t_name = false;
				showchecked(t_name);
				k=0;
			}
	});
	function showchecked(name){
		for(var i = 0;i<ach.length;i++){
			ach[i].checked=name;
		}	
	}
});