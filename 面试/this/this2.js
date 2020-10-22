var objName = {name:'JS2016'};
var obj = {
　　name:'0 _ 0',
　　sayHello:function(){
　　　objName.bind(this);
      console.log(this.name);
　　}
};
var a =obj.sayHello;//JS2016
a()