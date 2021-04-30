// var a = "rabbit"
// var b = "rabbbitrabbbit"
// 不重复可以用哈希值
var a = "bag"
var b = "babgbagg"
var meth = function (A,B) {
  var item = Array.from(A)
  var storage = new Array(3).fill(0)
  var map = new Map()
  item.forEach(
    (key, value) => map.set(key, value)
  );
  for(let i=0;i<B.length;i++){
    if(map.get(B[i])>0&&i!=0){
      storage[map.get(B[i])]+=storage[map.get(B[i])-1]
    }else{
      storage[map.get(B[i])]++
    }
    console.log(storage);
  }
  return storage[storage.length-1]
}
console.log(meth(a,b))