// 宏任务微任务 都是异步
// async方法的执行 方法内碰到await方法会立即执行
// async函数 表示函数里面可能是异步方法 async内先同步执行
// async function test(){
//   console.log(123);
//   await test2()
//   console.log(234);
// }
// function test2(){
//   console.log(456);
//   setTimeout(() => {
//     console.log(678);
//   }, 1000);
// }
// test()
function test0(){
  console.log(0);
}
async function test1(){
  console.log(1);
  await test2()
  // await函数后面是微任务
  test3()
  console.log(2);
}
// async function test2() 一样
function test2(){
  console.log(3);
}
async function test3(){
  console.log('test3');
  await console.log('test3 await');
  console.log('t3 a 后');
}
console.log(4);
test1()
test0()
console.log(5);