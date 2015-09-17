// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 //  var quote = function(value) {
 //    return "\"" + value + "\"";
	// };
	console.log(obj);
  if(typeof obj==='number'||typeof obj==='string'||typeof obj === 'boolean'){
  	return  typeof obj==='number'||typeof obj === 'boolean' ? obj.toString() : '"'+obj+'"'
  } else if (obj===null){
  	return 'null';
  } else if (Array.isArray(obj)){
  	var arr = [];
  	_.each(obj, function(el){
  		arr.push(stringifyJSON(el))
  	});
  	return '['+arr.toString()+']';
  } else { //when object
  	var keys = _.keys(obj);
  	var values = _.values(obj);
  	var objstr = "{";
  	var len = keys.length;
  	for(var i = 0; i < len; i++) {
  			objstr += stringifyJSON(keys[i]) + ":" + stringifyJSON(values[i]);
  			if(i < len-1) {
  				objstr +=','
  			}
  	}
  	return objstr + '}';
  }
};


