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
         <div class="advert_list" v-for="(item,index) in topAdvert" :key="index" >{{ item.tit }}</div>
      </div>
      <div class="main boxCard advert">
         <div class="advert_list_img"><img src="" alt=""></div>
         <div class="advert_list_img"><img src="" alt=""></div>
      </div>
      <div class="main neir">
         <div class="cardBox">
            <revealBox v-for="(itemx,index) in newest" :reveal="itemx" ></revealBox>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import revealBox from '../../../components/revealBox.vue'


const a = ref(0)
const isLogin = ref(false)
const newest = ref([
   {imgUrl: 'https://down.hackzt.cn/201908/b07beef140.png',title: 'thinkphp5+layui php后台管理系统-集成第三方短信附件等应用',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '22',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/9defccde29.png',title: '三方四方聚合支付PHP网站源码-对接支付宝微信接口',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '3',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/202001/79ed1a501a.png',title: 'PHP虚拟商品自动发货系统网站源码_支持商家入驻_对接支付接口',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '4',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/281f5667fb.png',title: 'emlog模板-蓝叶博客模板源码-清新大气模板，适合做博客和资源一体！亲测',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '45',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/8b345e8515.jpg',title: '杰奇V2.2仿磨铁中文网二次开发版原创小说系统完整版网站源码下载',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '1',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/6ee30b08ad.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '4444',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201911/99871a09b5.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '5222',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201909/f57b61aca1.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '147',commentNum: '',isPraise: false,createTime: '2023-04-04'},
   {imgUrl: 'https://down.hackzt.cn/201908/51b77fd6b0.png',title: 'Cloudreve云盘系统源码，支持本地储存和对接各大对象储存,界面美观',detailed: '云盘系统安装教程测试环境:PHP7.1 + MYSQL5.6 + Apache1. 上传源码到根目录2. 安装程序:  浏览器数据 http://localhost/CloudreveInstaller	localhost更换成你的网址3. 安装完毕 记住系统默认的账号密码温馨提示:如果默认的伪静态不行就替换一下的,没问题就不用换!伪静态配置RewriteEngine onRewriteCond ...',seeNum: '7',commentNum: '',isPraise: false,createTime: '2023-04-04'},
])
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
      
      // background-color: #339b9b;

      .cardBox{
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
      }
      
   }
 }
</style>
