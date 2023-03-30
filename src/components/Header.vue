<template>
  <div class="headBox">
      <div @click="toHome">首页</div>
      <div @click="toSource">源码</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {useRouter} from 'vue-router'
const a = ref(0)
const router = useRouter()

const toHome = () => {
  router.push({
    path: '/',
  })
}

const toSource = () =>{
  router.push({
    path: '/source',
  })
}



</script>

<style lang="scss" scoped>
 .headBox {
  
 }
</style>
