<template>
  <div class="regTop">
    <div class="logoImg">
      <router-link :to="{name:'Home'}">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
      </router-link>
    </div>
    <div class="login">
      <span>已有美团账号?</span>
      <router-link :to="{ name:'login' }">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
body {
  background: #fff;
}
.regTop {
  display: flex;
  justify-content: space-between;
  height: 66px;
  border-bottom: 2px solid #d8d8d8;
  padding: 15px 0;
  box-sizing: border-box;
  color: #666;
  .logoImg {
    width: 128px;
    height: 36px;
    img {
      height: 100%;
    }
  }
  .login {
    margin-top: 10px;
    a {
      padding: 2px 10px;
      color: #222;
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      border-width: 0;
      box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
    }
  }
}
</style>