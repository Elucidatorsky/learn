// 作用域
// for(let i=0;i<10;i++){}
// console.log(i); // 错误 let变量只能在其所在的块级作用域内输出
// for(var j=0;j<10;j++){} // 相当于在{}内var
// console.log(j); // var全局变量能输出 i循环到10后判断跳出 输出10
// for(let m=0;m<10;m++){var n = m}
// console.log(n); // n=9 for循环内算块级作用域
// function fn() {var h=1}
// console.log(h); // 无法输出 h无法跳出函数作用域
// for(var a=0;a<10;a++){
//   // setTimeout异步 for循环同步
//   setTimeout(()=>{
//     // 所有异步任务是一起同步执行的
//     // var全局变量 setTimeout异步方式 同步先循环完后才进入setTimeout 输出10个10
//     // console.log(a);
//   },1000)
// }
// for(let b=0;b<10;b++){
//   // setTimeout异步 for循环同步
//   setTimeout(()=>{
//     // let变量无法跳出块级作用域 输出0-9
//     // console.log(b);
//   },1000)
// }
// var变量输出0-9 解决方法1
// for(var c=0;c<10;c++){
//   setTimeout(()=>{
//     var d = c
//     // 在异步方法内声明变量输出
//     // console.log(d);
//   })
// }
// 解决方法2 自执行函数传参 自执行函数内部
// for(var c=0;c<10;c++){
//   !function(d) {
//     setTimeout((c)=>{
//       console.log(d);
//     })
//   }(c)
// }
// 方法2.5 相当于方法2
// for(var c=0;c<10;c++){
//   !function() {
//     let d = c
//     setTimeout(()=>{
//       console.log(d);
//     },1000)
//   }()
// }

// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，
// 而循环体内部是一个单独的子作用域。
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}