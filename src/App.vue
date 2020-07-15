<template>
  <div>
    <!-- <router-link :to="{name:'Home'}">主页</router-link> -->
    <!-- <router-link :to="{name:'city'}">切换城市</router-link>
    <router-link :to="{name:'login'}">登录</router-link>
    <router-link :to="{name:'reg'}">注册</router-link> -->

    <router-view></router-view>
  </div>
</template>

<script>

import Home from "./views/Home";
export default {
  components:{
    Home,
  }
};
</script>

<style>
</style>
