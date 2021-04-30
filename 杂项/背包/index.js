var bag = (m,n) => {
  var v= [2,4,3,7]
  var w= [2,3,5,5]
  // for (let i = 0; i <= m; i++){
  //     results[i][0] = 0;
  // }
  // for (let i = 0; i <= n; i++){
  //     results[0][i] = 0;
  // }
  var k = new Array(11)
  k[0]=0
  for(let i=1;i<=m;i++){
    for(let j=1;j<=10;j++){
      console.log(i,j,n)
      if(w[i-1]>j){
        k[i]=k[i-1]
      }else {
        k[i]=Math.max(k[i-1],k[i-1]+v[i-1])
        n-=w[i-1]
      }
      console.log(k)
    }
  }
  return k
}
console.log(bag(4,10))