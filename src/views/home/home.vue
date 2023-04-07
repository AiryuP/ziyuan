<template>
  <div class="container">
    <!-- <transition name="fade"> -->
    <div class="header" v-show="showHead">
        <Head ></Head>
    </div>
    <!-- </transition> -->
    <div class="bodyer" ref="scrollContainers">

        <div class="body_content"  >
            <RouterView ref="scrollContainer"></RouterView>
        </div>


        <div class="footer">
            <div class="main foterBox">
                <div class="copyright">
                    <div class="otherMenu">
                        <div class="site">xxxx网</div>
                        <div>|</div>
                        <div class="site">友链申请</div>
                        <div>|</div>
                        <div class="site">广告合作</div>
                        <div>|</div>
                        <div class="site">免责声明</div>
                        <div>|</div>
                        <div class="site">联系我们</div>
                    </div>
                    <div class="">Copyright © 2018-2023 xxxx网 版权所有 <a >京ICP备xxxxxxxxxxx号-1</a></div>
                    <div>本站资源仅供研究学习请勿商用以及产生法律纠纷本站概不负责！如果侵犯了您的权益请与我们联系!</div>
                </div>
                <div class="otherImg">
                    <div class="othimg">
                        <img src="" alt="">
                    </div>
                    <div class="othimg">
                        <img src="" alt="">
                    </div>
                    <div class="othimg">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
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
const scrollContainers:any = ref(null);
const handleClick = () => {
    console.log('点击事件')
}
const handleScroll = () => {
    if( scrollContainers.value.scrollTop >= 140 ){
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
    if (scrollContainers.value) {
        scrollContainers.value.addEventListener("scroll", handleScroll);
    }
})

onUnmounted(() => {
    if (scrollContainers.value) {
        scrollContainers.value.removeEventListener("scroll", handleScroll);
    }
})

</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
 .container {
    width: 100vw;
    height: 100vh;
    min-width: 1200px;
    // overflow: auto;
    background-color: #f0f8ff;
    position: relative;
    
    

    .header{
        height: 70px;
        width: 100%;
        position: absolute;
        background-color: #1268b9;
        z-index: 60;
        top: 0px;
        left: 0px;
    }
    .bodyer{
        width: 100%;
        // height: calc(100vh - 70px);
        height: 100vh;
        overflow: auto;
        overflow-y: scroll;

        &::-webkit-scrollbar { width: 0 !important }
        &::-webkit-scrollbar-thumb {
        background-color: orange;
        }
        &{ -ms-overflow-style: none; }
        &{ overflow: -moz-scrollbars-none; }
        
        .body_content{
            
            // width: 1200px;
            // margin: 0 auto;
            // overflow: hidden;
        }

        .footer{
            width: 100%;
            height: 90px;
            background-color: #393D49;
            .foterBox{
                height: 100%;
                display: flex;
                align-items: center;
                .copyright{
                    color: #ffffffb3;
                    padding: 10px 10px;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    height: 100%;
                    width: 60%;
                    .otherMenu{
                        display: flex;
                        font-size: 13px;
                        div{
                            padding: 0 6px;
                        }
                        .site{
                            &:hover{
                                cursor: pointer;
                                color: #ffffff;
                            }
                        }
                    }
                }
                .otherImg{
                    width: 40%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .othimg{
                        width: 121px;
                        height: 72px;
                        overflow: hidden;
                        border-radius: 3px;
                        background-color: #12b98fad;
                        &:hover{
                            cursor: pointer;
                        }
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

            }
        }
    }
    .highH{
        height: calc(100vh - 70px);
    }
 }
 
// .container::-webkit-scrollbar { width: 0 !important }
// .container::-webkit-scrollbar-thumb {
// background-color: orange;
// }
// .container{ -ms-overflow-style: none; }
// .container{ overflow: -moz-scrollbars-none; }





</style>
