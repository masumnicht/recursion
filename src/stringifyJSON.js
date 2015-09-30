// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj==='number' || typeof obj === 'boolean'|| obj===null){
  	return ''+obj;
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)){
  	var arr = [];
  	_.each(obj, function(el){
  		arr.push(stringifyJSON(el))
  	});
  	return '[' + arr.toString() + ']';
  } else {
  	var keys = _.keys(obj);
  	var values = _.values(obj);
  	var objStr = "{";
  	for(var i = 0; i < keys.length; i++) {
  		if(typeof values[i] !== 'undefined' && typeof values[i] !== 'function') {
  			objStr += stringifyJSON(keys[i]) + ":" + stringifyJSON(values[i]);
  			if(i < keys.length-1) {
  				objStr += ',';
  			}
  		}
  	}
  	return objStr + '}';
  }
};


