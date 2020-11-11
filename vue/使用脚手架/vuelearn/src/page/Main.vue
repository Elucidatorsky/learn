<template>
  <div>
    Main
    <hr>
    <div v-for="(item, index) in items" :key="index">
      <component :is="item"></component>
    </div>
    <ul>
      <li v-for="(item,index) in items" :key="index" draggable="true"
        @dragstart="handleDragStart($event, item)"
        @dragover.prevent="handleDragOver($event, item)"
        @dragenter="handleDragEnter($event, item)" 
        @dragend="handleDragEnd($event, item)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import first from "@/components/first.vue"
import second from "@/components/second.vue"
import third from "@/components/third.vue"
import fourth from "@/components/fourth.vue"
export default {
  data() {
    return{
      items:["first","second","third","fourth"],
      dragging: null
    }
  },
  components:{
    first, second, third, fourth
  },
  
  methods:{
    handleDragStart(e,item){
      console.log(item," start");
        this.dragging = item;
    },
    handleDragEnd(e,item){
      console.log(item," end");
        this.dragging = null
    },
    //首先把div变成可以放置的元素，即重写dragenter/dragover
    handleDragOver(e) {
      console.log(" over");
        e.dataTransfer.dropEffect="move";
        //在dragenter中针对放置目标来设置!
    },
    handleDragEnter(e,item){
      console.log(item," enter");
        e.dataTransfer.effectAllowed = "move"//为需要移动的元素设置dragstart事件
        if(item === this.dragging){
            return
        }
        const newItems = [...this.items]
        // console.log(newItems)
        const src = newItems.indexOf(this.dragging)
        const dst = newItems.indexOf(item)
 
        newItems.splice(dst, 0, ...newItems.splice(src, 1))
 
        this.items = newItems
    }
  }
}
</script>

<style scoped>
li {
  background-color: skyblue;
  margin-bottom: 10px;
}
</style>
