var ori = [99,44,55,77,33]
for(let i = 0; i<ori.length-1;i++){
  for(let j = 0; j<ori.length-1-i;j++){
    if(ori[j]>ori[j+1]){
        [ori[j],ori[j+1]]=[ori[j+1],ori[j]]
    }
  }
}
console.log(ori);