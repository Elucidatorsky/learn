const a0 = function a(){
  var user = "追梦子";
  this.getuser = function(){
    return user
  }
  this.setuser = function(val){
    user = val
  }
}
let a1 = new a0()
console.log("a1",a1); // Function
// console.log(a); // a a() 未定义 报错
console.log("a0",a0); // function a(){XXX}
// console.log("a0.get",a0());
console.log(a1.setuser(2));
console.log(a1.getuser); // undefind
console.log(a1.getuser());