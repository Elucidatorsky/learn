var currying = function(x){
  return function(y){
      return x + y;
  }
}
console.log(currying(1))    //ƒ (y){eturn x + y;}
console.log(currying(1)(1))    //2
var cc = currying(1)
console.log(cc(1))    //2
console.log(cc(11))    //12  
