var points = [40,100,1,5,25,10];
var a = points.sort(function(a,b){return a-b});

console.log(Object.prototype.toString.call(a) ," ",a, " ",points," ",a===points);