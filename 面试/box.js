function calRedBall(box, num) {
  var res = 0
  if(num==box.length){
      res = 1
      for(let i=0;i<box.length;i++){
          res*=box[i]
          console.log(res)
      }
      console.log("t",Math.round(res*10000))
  }else if(num==0){
      res = 1
      for(let i=0;i<box.length;i++){
          res*=(1-box[i])
          console.log(res)
      }
      console.log("t",Math.round(res*10000))
  }
  var boxP = new Array(box.length).fill(1)
  for(let i=0;i<box.length;i++){
    for(let j=0;j<box.length;j++){
            if(j<num){
              console.log("j<num",j,num)
                boxP[i] = boxP[i]*box[j]
            }else{
              console.log("j>num",j,num)
                boxP[i] = boxP[i]*(1-box[j])
            }
            // console.log(boxP)
        }
    box.push(box.shift())
    console.log(box)
  }
  console.log(boxP)
  for(let i=0;i<boxP.length;i++){
      res+=boxP[i]
  }
  // return res*10000
  console.log(res)
}
var box = [0.4,0.6,0.7]
var sum = 3
calRedBall(box,sum)