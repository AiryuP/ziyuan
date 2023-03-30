<template>
  <div class="container">
    <div class="header" v-show="showHead">
        <Head></Head>
    </div>
    <div class="bodyer" ref="scrollContainers">

        <div class="body_content"  >
            <RouterView ref="scrollContainer"></RouterView>
        </div>


        <div class="footer">
            <p>已滚动的距离：{{ scrollTop }}px</p>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import Head from '../../components/Header.vue'

const showHead = ref(false)
const scrollTop = ref(1)
const scrollContainer = ref(null);
const scrollContainers = ref(null);
const handleClick = () => {
    console.log('点击事件')
}
const handleScroll = () => {
    console.log(scrollContainers.value.scrollTop)
    if( scrollContainers.value.scrollTop == 90 ){
        // scrollContainers.value.style.marginTop = '90px'
        showHead.value = true
    }else{
        showHead.value = false
    }
    // console
//   const scrollTopVal = scrollContainers.value.scrollTop;
//   console.log("元素滚动距离:", scrollTopVal);
//   scrollTop.value = scrollTopVal;
}

onMounted(() => {
    // console.log(scrollContainers.value)
    console.log(scrollContainers)
    
    // console.log(window)
    scrollContainers.value.addEventListener("scroll", handleScroll);
})

onUnmounted(() => {
    // scrollContainers.value.removeEventListener("scroll", handleScroll);
})

</script>

<style lang="scss" scoped>
 .container {
    width: 100vw;
    height: 100vh;
    background-color: #f0f8ff;
    position: relative;
    .header{
        height: 70px;
        width: 100%;
        position: absolute;
        background-color: #1268b9ab;
        z-index: 6;
        top: 0px;
        left: 0px;
    }
    .bodyer{
        width: 100%;
        // height: calc(100vh - 70px);
        height: 100vh;
        overflow: auto;
        &::-webkit-scrollbar { width: 0 !important }
        &{ -ms-overflow-style: none; }
        &{ overflow: -moz-scrollbars-none; }
        
        .body_content{
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;
        }

        .footer{
            width: 100%;
            height: 90px;
            background-color: rgb(31, 201, 158);
        }
    }
    .highH{
        height: calc(100vh - 70px);
    }
 }
</style>
