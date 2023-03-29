<template>
  <div class="container">
    <div class="header">
        <Head></Head>
    </div>
    <div class="bodyer">

        <div class="body_content">
            <RouterView></RouterView>
        </div>


        <div class="footer">

        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import { RouterView } from 'vue-router'
import Head from '../../components/Header.vue'
const a = ref(0)
</script>

<style lang="scss" scoped>
 .container {
    width: 100vw;
    height: 100vh;
    background-color: #f0f8ff;
    .header{
        height: 70px;
        width: 100%;
    }
    .bodyer{
        width: 100%;
        height: calc(100vh - 70px);
        overflow: auto;
        .body_content{
            width: 1200px;
            margin: 0 auto;
        }
        &::-webkit-scrollbar { width: 0 !important }
        &{ -ms-overflow-style: none; }
        &{ overflow: -moz-scrollbars-none; }

        .footer{
            width: 100%;
            height: 90px;
            background-color: red;
        }
    }
 }
</style>
