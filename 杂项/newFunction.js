function fn(){
  let val = "阐释夜空";
  let func = function(){
    console.log("fn this",this);
    console.log(val);
  }
  return func();
}
let val = "林翔宇"
window.val = "lxy"
function fn1(){
  let val = "阐释夜空";
  let func1 =new Function('console.log("fn1 this",this); console.log(val);')
  return func1();
}
fn() // this指全局 val指定义的val 普通创建函数引用的是创建地点的词法环境
fn1() // this指全局 val未定义报错 new Function创建函数引用的是全局环境
// new Function里的val在浏览器运行时在全局定义可获得 this.val需要window.val定义 外部var val let val 不成立
// new Function不会创建闭包