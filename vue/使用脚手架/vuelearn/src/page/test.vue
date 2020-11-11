<template>
  <div>
    <div class="container">
   <div class="item" v-for="(item,index) in items" :key="index" :style="{background:item.color,width:'80px',height:'80px'}"
        draggable="true"
        @dragstart="handleDragStart($event, item)"
        @dragenter="handleDragEnter($event, item)"
        @dragleave="handleDragLeave($event, item)"
        @dragover.prevent="handleDragOver($event, item)"
        @drop.prevent="handleDrop($event,item)"
        @dragend="handleDragEnd($event, item)"
   > 
   {{item.key}}
    </div>
</div>　
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data () {
    return {
      items: [
        { key: 1, color: '#ffebcc'},
        { key: 2, color: '#ffb86c'},
        { key: 3, color: '#f01b2d'}
      ],
       
        dragging: null,
        dragthing: null,
    }
  },
  methods:{
    handleDragStart(e,item){
        this.dragging = item;
        this.dragthing = e.target
      console.log(item.key,e.target.innerHTML," start");
    },
    handleDragEnter(e,item){
      console.log(item.key,e.target.innerHTML," Enter");
      e.dataTransfer.effectAllowed = "move"
        if(item === this.dragging){
            return
        }
        // e.target.appendChild(this.dragging)
        // const newItems = [...this.items]
        // // console.log(newItems)
        // const src = newItems.indexOf(this.dragging)
        // const dst = newItems.indexOf(item)
 
        // newItems.splice(dst, 0, ...newItems.splice(src, 1))
 
        // this.items = newItems
    },
    handleDragLeave(e,item){
      console.log(item.key,e.target.innerHTML," Leave");
    },
    handleDragOver(e,item) {
        e.dataTransfer.dropEffect="move";
      console.log(item.key,e.target.innerHTML," Over");
    },
    handleDrop(e,item){
      console.log(item.key,e.target.innerHTML," Drop");
    },
    handleDragEnd(e,item){
        this.dragging = null
        // e.target.appendChild(this.dragging)
      console.log(item.key,e.target.innerHTML," End");
    }
  }
}
</script>
 
<style scoped>
    .container{
        width: 80px;
        height: 300px;
        position: absolute;
        left: 0;
        display:flex;
        flex-direction: column;
        padding: 0;
    }
    .item {
      margin-top: 10px;
      transition: all linear .3s
    }
