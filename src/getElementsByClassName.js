// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var classArray = [];
  var childCheck = function(element){
  	var children = element.childNodes;
  	if(_.contains(element.classList, className)) {
  		classArray.push(element);
  	}
  	for(var i=0;i<children.length;i++){
  		if(children[i].childNodes){
  			childCheck(children[i]);
  		}
  	}
	};
  childCheck(document.body);
  return classArray;
};
