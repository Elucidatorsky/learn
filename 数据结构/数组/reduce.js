var a = [1, 2, 3, 4, 5].reduce((prev, cur,index,item) =>{
  console.log('1',prev);
  console.log('2',cur);
  console.log('3',index);
  console.log('4',item);
  return prev + cur
}); // (数组元素的和)15
console.log(a);