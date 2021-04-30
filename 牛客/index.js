function findMaxButtons( buttons ) {
  // write code here
  var sum = 0
  for(let i=0;i<buttons.length;i++){
      sum=sum+(buttons[i]-1)*(i+1)
      if(i==buttons.length-1){
          sum=sum+(i+1)
      }
      console.log((buttons[i]-1)*(i+1))
  }
  return sum
}
var arr = [1,1,4,5,1,4]
console.log(findMaxButtons(arr))