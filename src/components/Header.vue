<template>
  <div class="headBox">
     <div class="main topBnn">
        <div class="menuBox">
          <div class="menu" :class=" isActive == 'home' ? 'isActive' : '' " @click="changeMenu('home')" >首页</div>
          <div class="menu" :class=" isActive == 'source' ? 'isActive' : '' " @click="changeMenu('source')" >网站源码</div>
          <!-- <div class="menu" :class=" isActive == '' ? '' : '' " @click="changeMenu('')" >插件模块</div> -->
          <div class="menu" :class=" isActive == 'software' ? 'isActive' : '' " @click="changeMenu('software')" >软件工具</div>
          <!-- <div class="menu" :class=" isActive == '' ? '' : '' " @click="changeMenu('')" >视频教程</div> -->
          <div class="menu" :class=" isActive == 'wallpaper' ? 'isActive' : '' " @click="changeMenu('wallpaper')" >高清壁纸</div>
          <div class="menu" :class=" isActive == 'composite' ? 'isActive' : '' " @click="changeMenu('composite')" >综合资源</div>
        </div>
        <div class="userInfo">
           <div class="user_info" v-show="isLogin" >
              <div class="headIcon">
                 <img src="http://himg.bdimg.com/sys/portrait/item/public.1.98c33402.RQb8hHkA1rjSVJJ03x8KMw.jpg" alt="">
              </div>
              <div class="userName">路西菲尔</div>
           </div>
           <div class="L_R"  v-show="!isLogin" >
              <div class="login">登录{{ store.doubleCount }}</div>
              <div>|</div>
              <div class="register">注册{{ store.count }}</div>
           </div>
        </div>
     </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useRouter} from 'vue-router'

import {useCounterStore} from "../stores/counter" //将之前配置的pinia文件夹中的index.js文件引入
let store=useCounterStore()

const isLogin = ref(false)
const router = useRouter()
let isActive = ref('home')

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


const changeMenu = (name:string)=>{
  console.log(name)
  isActive.value = name
  sessionStorage.setItem('menuActive',name)
  store.count++
}

onMounted(()=>{
  console.log('xxxxxxx')
  // let activeName = sessionStorage.getItem('menuActive')
  // if( activeName == null  || activeName == undefined ){

  // }else{
  //   isActive = activeName
  // }
})



</script>

<style lang="scss" scoped>
 .headBox {
    width: 100%;
    height: 70px;
    // background-color: #1268b9;
    background-color: #393D49;
    .topBnn{
        display: flex;
        height: 100%;
        .menuBox{
          display: flex;
          width: 80%;
          height: 100%;
          color: #ffffffb3;
          align-items: center;
          .menu{
              height: 100%;
              padding: 0 20px;
              font-size: 17px;
              line-height: 70px;
              position: relative;
              &::before{
                    content: "";
                    position: absolute;
                    top: -3px;
                    left: 0;/*靠最左边开始*/
                    border-bottom: 3px solid #05b5bb;/*设置底部边颜色*/
                    width: 0;/*宽度为0，这里的宽度是相对与li的宽度*/
                    height: 100%;/*设置高度使它和li等高*/
              }
              &:hover{
                // border-bottom: 4px solid #05b5bb;
                color: #fff;
                cursor: pointer;
              }
              &:hover::before{
                width: 100%;
                transition: 0.2s all linear;/*设置过度时间*/
                transition-delay: 0.1s;/*过度延时*/
              }
          }
          .isActive{
            color: #05b5bb;
            position: relative;
            &::before{
                  content: "";
                  position: absolute;
                  top: -3px;
                  left: 0;/*靠最左边开始*/
                  border-bottom: 3px solid #05b5bb;/*设置底部边颜色*/
                  width: 100%;/*宽度为0，这里的宽度是相对与li的宽度*/
                  height: 100%;/*设置高度使它和li等高*/
            }
          }
        }
        .userInfo{
          width: 20%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .user_info{
              height: 100%;
              display: flex;
              align-items: center;
              &:hover{
                cursor: pointer;
              }
              .headIcon{
                width: 30px;
                height: 30px;
                border-radius: 50%;
                overflow: hidden;
                margin: 0 10px;
                img{
                    width: 100%;
                    height: 100%;
                }
              }
              .userName{
                color: #fff;
                font-size: 12px;
              }
          }
          .L_R{
              color: #fff;
              height: 100%;
              display: flex;
              align-items: center;
              font-size: 12px;
              div{
                padding-left: 12px;
              }
              .login,.register{
                &:hover{
                    cursor: pointer;
                    color: #05b5bb;
                }
              }
              
          }
        }
    }
 }
</style>
