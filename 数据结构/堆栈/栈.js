/*=====栈结构========*/
var node=function(data){
  this.data=data
  this.next=null
}
var stack=function(){
  this.top=new node("top")

  this.push=push
  this.pop=pop

  this.clear=clear
  this.length=length
}

/*=======入栈=======*/
var push=function(data){
  let newNode=new node(data)
  newNode.next=this.top
  this.top=newNode
}
/*=======出栈=======*/
var pop=function(){
  let curr=this.top
  this.top=this.top.next
  curr.next=null
}
/*=======清空栈=======*/
var clear=function(){
  this.top=new node('top')
}
/*=======栈长度=======*/
var length=function(){
  let cnt=0
  while(this.top.data!=='top'){
      this.top=this.top.next
      cnt++
  }
  return cnt

}
/*=======测试=======*/
var s=new stack()
s.push('first')
s.push('second')
console.log(s)
s.pop()
console.log(s)
// s.clear()
console.log(s.length())