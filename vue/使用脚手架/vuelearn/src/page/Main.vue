<template>
  <div>
    Main
    <hr>
    <div v-for="(item, index) in componentsArr" :key="index">
      <component :is="item"></component>
    </div>
    <ul>
      <li v-for="(item,index) in componentsArr" :key="index" draggable="true">
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
      componentsArr:["first","second","third","fourth"]
    }
  },
  components:{
    first, second, third, fourth
  }
}
</script>

<style scoped>
li {
  background-color: skyblue;
  margin-bottom: 10px;
}
</style>
