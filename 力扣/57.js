
var insert = function(intervals, newInterval) {
  var realintervals= []
  if(intervals.length==0) return newInterval
  var intervalsNew = intervals.reduce(function (a, b) { return a.concat(b)} )
  var m=-1
  var n=intervalsNew.length
  for(let i=intervalsNew.length-1;newInterval[0]<intervalsNew[i];i-=2){
    console.log(i);
          m = i
  }
  for(let j=0;newInterval[1]>intervalsNew[j];j+=2){
    console.log(j);
          n = j
  }
  console.log(m,n);
  // if(m%2==0){ // x中
  //   if(n%2==0){ // y中
  //     console.log("中 中");
  //     intervalsNew.splice(m+1,n-m)
  //   }else{
  //     console.log("中 外");
  //     intervalsNew.splice(m+1,n-m,newInterval[1])
  //   }
  // }else{ // x外
  //   if(n%2==0){ // y中
  //     console.log("外 中");
  //     intervalsNew.splice(m+1,n-m,newInterval[0])
  //   }else{
  //     console.log("外 外");
  //     intervalsNew.splice(m+1,n-m,newInterval[0],newInterval[1])
  //   }
  // }
  // // intervalsNew = Array.from(new Set(intervalsNew))
  // console.log(intervalsNew);
  // for (let i = 0; i < intervalsNew.length; i+=2) {
  //   realintervals.push([intervalsNew[i],intervalsNew[i+1]])
    
  // }
  // return realintervals
}
var a = [[1,4],[7,10]]
var b = [2,5]
var c = []

// console.log(c.push([b[0],b[1]]));
var arr = insert(a,b)
console.log(arr);