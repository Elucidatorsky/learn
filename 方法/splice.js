var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.splice(2,2,"Lemon","Kiwi");
console.log(Object.prototype.toString.call(a)," ",a);

var a = {
  1:2,
  a:1,
  b:2,
  c:3,
}
var b = a.filter(a=>console.log(a))
console.log(b);