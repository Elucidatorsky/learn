// entries() keys() values() 用于遍历数组
var a0 = ['a','b','c']
for(let index of a.keys()){
  console.log(index);
}
for(let value of a.values()){
  console.log(values);
}
for(let [index,value] of a.entries()){
  console.log(index, value);
}