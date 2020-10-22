var module = (function(){
  var N = 5;
  function print(x){
    console.log("The result is "+x);
  }
  function add(a){
    var x = a+N;
    print(x)
  }
  return{
    description: "This is description",
    add: add
  }
})()
console.log(module.description);
module.add(6);