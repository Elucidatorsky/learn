// function fn(){
//     var a = 10
// }

// fn()
// // 函数的作用域问题 无法输出
// console.log(a)
////////////////////////////////////

// // 解决办法 新建变量赋值
// var temp = null
// function fn(){
//     var a = 10
//     temp = a;
// }
// fn()
// console.log(temp)


// // 若函数内为异步操作
// var temp = null;
// function fn(){
//     setTimeout(() =>{
//         var a = 10;
//         temp = a;
//     })
// }
// fn()
// // 输出null 异步操作在console.log后执行
// console.log(temp)

// // 获取a数据方法1 callback回调
// function fn(callback){
//     setTimeout(() =>{
//         var a = 10;
//         callback(a)
//     })
// }
// fn(function(a){ // 闭包
//     console.log(a);
// })

// 方法2
function fn(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            var a =10;
            resolve(a);
        })
    })
}

// fn().then(res=>{
    // console.log(res);
// })

// 想在.then外部输出.then里面的res使用async

// function fn1(){
//     fn().then(res=>{

//     })
//     // 输出res
// }
// fn1();

async function fn1(){
    // await作用：对象为promise时返回该对象promise处理后的值
    //           对象不为promise时返回该对象的返回值
    try{
        const res = await fn()
        // 输出res
        console.log(res);
    }catch(err){
        console.log(err); // res
    }
}
fn1();

// 总结：代码需要封装的时候用Promise
//       接收数据需要处理错误时
        