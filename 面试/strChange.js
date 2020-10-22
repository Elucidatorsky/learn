function strReplace(A,len,C,index){
  var firstStr = A.slice(0, index)
  var lastStr = A.slice(index+len)
  return firstStr + C + lastStr
}
var strChange = function(A, B, C){
  if(B.length>A.length) return A
  for(let i = 0; A.length-i>=B.length; i++){
    m = i
    for(let j = 0; j<B.length; j++ ){
      if(A[m] == B[j]){
        if((m-i+1)==B.length){
          console.log(A,B.length,C,i);
          A = strReplace(A,B.length,C,i)
          console.log(A);
          i--;
          break;
        }
        m++
      }else{
        break;
      }
    }
  }
  return A
}
console.log(strChange('abbbb','','ba'));
// console.log(strReplace('abbbb',2,'ba',0));
// console.log(strReplace('babbb',2,'ba',1));
