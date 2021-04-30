var findway = function(x,y){
  var sum = 0
  if(x==2||y==2) return 1
  for(let i=0;i<x-1;i++){
    for(let j=0;j<y-1;j++){
      sum+=findway(x-i,y-j)
    }
  }
  return sum
}
console.log(findway(2,3))