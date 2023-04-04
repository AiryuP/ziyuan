<template>
   <div class="firstBox">
      <div class="head">
         <div class="main topBnn">
            <div class="menuBox">
            <div class="menu">首页</div>
            <div class="menu">网站源码</div>
            <div class="menu">插件模块</div>
            <div class="menu">软件工具</div>
            <div class="menu">视频教程</div>
            <div class="menu">高清壁纸</div>
            <div class="menu">综合资源</div>
            </div>
            <div class="userInfo">
               <div class="user_info" v-show="isLogin" >
                  <div class="headIcon">
                     <img src="http://himg.bdimg.com/sys/portrait/item/public.1.98c33402.RQb8hHkA1rjSVJJ03x8KMw.jpg" alt="">
                  </div>
                  <div class="userName">路西菲尔</div>
               </div>
               <div class="L_R"  v-show="!isLogin" >
                  <div class="login">登录</div>
                  <div>|</div>
                  <div class="register">注册</div>
               </div>
            </div>
         </div>
      </div>
      <div class="advert main boxCard">
         <div class="advert_list" v-for="(item,index) in topAdvert" >{{ item.tit }}</div>
      </div>
      <div class="main boxCard advert">
         <div class="advert_list_img"><img src="" alt=""></div>
         <div class="advert_list_img"><img src="" alt=""></div>
      </div>
      <div class="main neir">
         
         这是网站具体内容区域
      </div>
   </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const a = ref(0)
const isLogin = ref(false)
const topAdvert = ref([
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
   {id: '1',tit: '这是一条小广告',path: ''},
])
</script>

<style lang="scss" scoped>
 .firstBox {
    width: 100%;
   //  height: 2000px;

   //  background-color: aqua;
   .head{
      margin-top: 120px;
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
   .advert{
      display: flex;
      flex-wrap: wrap;
      // padding: 0;
      justify-content: space-around;
      align-items: center;
      .advert_list{
         font-size: 10px;
         padding: 3px 6px;
         width: 233px;
         height: 23px;
         text-align: center;
         border: 1px dashed rgb(0, 0, 0, 0.2);
         margin: 2px 0;
         &:hover{
            cursor: pointer;
            color: #fff;
            border: none;
         }
      }
      .advert_list_img{
         height: 80px;
         width: 590px;
         img{
            width: 100%;
            height: 100%;
         }
      }
   }
   .neir{
      height: 1200px;
      background-color: #339b9b;
      
   }
 }
</style>
