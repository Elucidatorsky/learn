function Stack(params) {
  let item=[]
  this.push = function(val){
    item.push(val)
  }
  this.pop = function(val){
    item.pop(val)
  }
  this.peek = function(){
    return item[length-1]
  }
  this.isEmpty = function(){
    return item.length
  }
  this.clear = function(){
    item = []
  }
  this.size = function(){
    return item.length
  }
}
