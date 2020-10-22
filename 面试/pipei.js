var pipei = function(a,b){
  if(a.length==0||b.length==0)    return 0
  var m = new Set();
  var p = []
  for(var i = 0;i<=a.length-b.length;i++){
      var k = i
      for(var j = 0;j<b.length;j++){
          if(a[k]!=b[j]&&b[j]!='?'){
              p = [];
              break
          }else{
              p.push(a[k]);
              k ++
          }
      }
      if(p.length==b.length){
          m.add(p.toString())
      }
      p = []
  }
  console.log(m);
  return m.size
}
console.log(pipei('00010001','??'))