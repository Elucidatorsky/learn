
var res = "";
var n = [33,66,99]
var m = [3,633,92,30,60,90]
function fn(n,m){
    for(let c = 0;c < n.length;c++){
        for(let d = m.length-1;d >= 0;d--){
            if(n[c]<m[d]){
                res = res + (d+1) + " "
                break
            }else if(n[c]>m[d]&&d==0){
                res = res + "-1 "
            }
        }
    }
    console.log(res)
}
fn(n ,m)