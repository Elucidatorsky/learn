var ori = [99,44,55,77,33]
for(let i = 0;i<ori.length-1;i++){
  for(let j = i+1;j>0;j--){
    if(ori[j-1]<ori[j]){
      [ori[j],ori[j-1]]=[ori[j-1],ori[j]]
    }else{
      break
    }
  }
}
console.log(ori);
    for(let c = 0;c < n.length;c++){
        for(let d = m.length-1;d >= 0;d--){
            if(n[c]<m[d]){
                res = res + d + " "
                break
            }else if(n[c]>m[d]&&d==0){
                res = res + "-1 "
            }
        }
    }