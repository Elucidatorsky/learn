var ori = [99,44,55,77,33]
for(let i = 0; i<ori.length;i++){
  for (let i = 0; i < ori.length; i++) {
    for(let j = i +1;j<ori.length;j++){
      console.log(i+": ",ori[i],j+": ",ori[j]);
      if(ori[j]<ori[i]){
        [ori[i],ori[j]]=[ori[j],ori[i]]
      }
    }
      console.log(ori);
    
  }
}
console.log();