beautyJson = (function(){
	var space = '    ';
	function addSpace(buffer,level){
		for( var i=1;i<level;i++){
			buffer.push(space);
		}
	}
	
	function formatDate(date,level){
		 return ['"',date.getFullYear(),'-',
								(date.getMonth()+1),'-',
								date.getDate(),' ',date.getHours(),
								":",date.getMinutes(),":",date.getSeconds(),'"'].join('');
	}
	
	function formatObj(obj,level){
		var buffer = [],val;
		if(obj == null){
			buffer.push('null');
		}else if(typeof obj == 'string'){
			buffer.push('"',obj,'"');
		}else if(typeof obj == 'number' || typeof obj == 'boolean'){
			 buffer.push(obj);
		}else if(obj instanceof Array){
			 buffer.push(formatArray(obj,level));
		}else if(obj instanceof Date){
			buffer.push(formatDate(obj,level));
		}else{
			buffer.push('{');
			var hasProperty = false;
			for(var key in obj){
				hasProperty = true;
				buffer.push(' \n');
				addSpace(buffer,level+1);
				val = obj[key];
				buffer.push('"',key,'" : ',formatObj(val,level+1));
				buffer.push(',');
			}
			if(hasProperty){
				buffer.pop();
			}
			buffer.push('\n');
			addSpace(buffer,level);
			buffer.push('}');
		}
		return buffer.join('');
	}
	function formatArray(arr,level){
		var buffer = [];
		buffer.push('[');
		for(var i=0;i<arr.length;i++){
			buffer.push(formatObj(arr[i],level));
			buffer.push(',');
		}
		if(arr.length>0){
			buffer.pop();
		}
		buffer.push(']');
		return buffer.join('');
	}
	return function(obj,level){
		var space = '  ',buffer = [] ;
		level = (typeof level == 'undefined' ? 1 : level);
		if(obj instanceof Array){
			buffer.push(formatArray(obj,level));
		}else{
			buffer.push(formatObj(obj,level));
		}
		return buffer.join('');
	}
})();