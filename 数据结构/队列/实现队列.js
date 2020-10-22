/*=====队列结构========*/
var node=function(data){
  this.data=data
  this.next=null
}
var queue=function(){
  this.top=new node("top")

  this.enQueue=enQueue
  this.deQueue=deQueue
}

/*=======入队=======*/
var enQueue=function(data){
  let newNode=new node(data)
  newNode.next=this.top
  this.top=newNode
}
/*=======出队=======*/
var deQueue=function(){
  let curr=this.top
  while(curr.next!==null && curr.next.data!=='top'){
      curr=curr.next
  }
  if(curr.next.data==='top'){
      curr=curr.next
  }
}

/*=======测试=======*/
var q=new queue()
q.enQueue('first')
q.enQueue('second')
console.log(q)
q.deQueue()
console.log(q)