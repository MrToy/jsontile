function recur(source,obj,prefix){
	for(var i in obj){
		var k=prefix?(prefix+'.'+i):i
		if(obj[i] instanceof Object){
			recur(source,obj[i],k)
		}else{
			source[k]=obj[i]
		}
	}
}

module.exports=function(obj){
	var data={}
	recur(data,obj)
	return data
}