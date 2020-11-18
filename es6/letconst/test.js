x = 1;
function foo(
  x,
  y = function() { 
    console.log(x);
    x = 2; 
    console.log(x);
    // console.log('y',this)
  }) 
{
  var x = 3;
  y();
  // x=2
  console.log(x);
  // console.log('foo',this);
  // function inner() {
  //   console.log('inner',this);
  // }
  // inner()
  // !function innerSelf() {
  //   console.log('innerSelf',this);
  // }()
}
foo(222) // 3
console.log(x); // 1


let f = 1
function a(){
  console.log('a outside');
}
!function () {
  if(false){
    f = 2
    function a() {
      console.log('a inside');
    }
  }
  console.log(f);
  a()
}();