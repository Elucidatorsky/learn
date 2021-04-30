var user = {
  name : 'qinhuansky',
  dao: 'ddd',
  say : function(yaya){
      console.log(this.name +'-'+ yaya)
  }
}
user.say()    //qinhuansky-undefined
var user2 = {
  name: "qin"
}
Function.prototype.myCallTwo = function (ctx) {
  ctx = ctx || window;
  var fn = Symbol();       //  Symbol属性来确定fn唯一。
  var args = [...arguments].slice(1);
  ctx[fn] = this;
  console.log(this,args,ctx,arguments)
  var result = ctx[fn](...args);
  delete ctx[fn];
  return result;
}
Function.prototype.myApply = function (ctx, array) {
  ctx = ctx || window;
  var fn = Symbol(); 
  var result;
  ctx[fn] = this;
  if (!array) {    // 判断array是否存在        
      result = ctx[fn]();    
  }    
  else {        
      result = ctx[fn](...array);    
  }    
  delete ctx[fn];    
  return result;
};
user.say.myCallTwo(user2, 'haha')    //qin-haha
user.say.myApply(user2,['haha']) //qin-haha