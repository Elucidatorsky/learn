# 函数提升规则 链式作用域 闭包 块作用域 函数作用域 词法作用域
# 闭包
作用： 间接访问变量 隐藏变量

<script type="text/javascript">
	{
		var a = 1;
		console.log(a); // 1
	}
	console.log(a); // 1
	// 可见，通过var定义的变量可以跨块作用域访问到。

	(function A() {
		var b = 2;
		console.log(b); // 2
	})();
	// console.log(b); // 报错，
	// 可见，通过var定义的变量不能跨函数作用域访问到

	if(true) {
		var c = 3;
	}
	console.log(c); // 3
	for(var i = 0; i < 4; i++) {
		var d = 5;
	};
	console.log(i);	// 4   (循环结束i已经是4，所以此处i为4)
	console.log(d); // 5
	// if语句和for语句中用var定义的变量可以在外面访问到，
	// 可见，if语句和for语句属于块作用域，不属于函数作用域。

	{
		var a = 1;
		let b = 2;
		const c = 3;	
		
		{
			console.log(a);		// 1	子作用域可以访问到父作用域的变量
			console.log(b);		// 2	子作用域可以访问到父作用域的变量
			console.log(c);		// 3	子作用域可以访问到父作用域的变量

			var aa = 11;
			let bb = 22;
			const cc = 33;
		}
		
		console.log(aa);	// 11	// 可以跨块访问到子 块作用域 的变量
		// console.log(bb);	// 报错	bb is not defined
		// console.log(cc);	// 报错	cc is not defined
	}
</script>

function b(){} 为函数声明

var a = function(){} 为函数表达式



function a(){}属于封装函数，这个可以写在调用之后

function a(){}

a()

或者

a()

function a(){}

都可以，因为存在函数提升规则

------------------------------------------------------------------------------------------

var a = function (){};

这个就必须写在调用a之前

只能是

var a = function(){}

a();