// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var quote = function(value) {
    return "\"" + value + "\"";
	};
  if(typeof obj==='number'||typeof obj==='string'||typeof obj === 'boolean'){
  	return  typeof obj==='number'||typeof obj === 'boolean' ? obj.toString() : '"'+obj+'"'
  } else if (obj===null){
  	return 'null';
  } else if (Array.isArray(obj)){
  	var arr = [];
  	obj.forEach(function(el){
  		arr.push(stringifyJSON(el))
  	});
  	return '['+arr.toString()+']';
  }
};


