// 判断该对象是否为Array
Array.isArray([]) //true
// instanceof和isArray
// Array.isArray 优于 instanceof,因为Array.isArray能检测iframes
var iframe = document.createElement('iframe');
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr);  // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false

// 假如不存在 Array.isArray()，则在其他代码之前运行下面的代码将创建该方法。
if (!Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    };
  }