<template>
  <div class="login-p">
    <router-link :to="{name:'Home'}">
      <img src="../../assets/login.jpg" alt class="m-img" />
    </router-link>
    <div class="container">
      <el-row>
        <el-col :span="14">
          <img
            src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt
          />
        </el-col>
        <el-col :span="7">
          <p class="error" :class="{
            show: errorInfo
          }">
            <i class="el-icon-remove-outline"></i>
            <span>{{ errorInfo }}</span>
          </p>
          <p class="shortMessage">
            <span style="font-size:14px;">短信登录</span>
            <a href="#">
              手机动态码登录
              <i class="el-icon-mobile-phone"></i>
            </a>
          </p>
          <el-input
            placeholder="用户名"
            @input="handleLogin"
            prefix-icon="el-icon-s-custom"
            v-model="phone"
          ></el-input>
          <el-input
            placeholder="密码"
            @input="handleLogin"
            prefix-icon="el-icon-unlock"
            show-password
            v-model="pwd"
          ></el-input>
          <p class="wangji">
            <a href="#">忘记密码?</a>
          </p>
          <button class="btn-login" @click="stratLogin">登录</button>
          <p class="noNum">
            <span>还没有账号？</span>
            <router-link :to="{name:'reg'}">
              <a href="#">免费注册</a>
            </router-link>
          </p>
          <p class="cooperation">
            <span>用合作网站账号登录</span>
            <img src="../../assets/qqwb.jpg" alt />
          </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { login } from "../../services/User";
export default {
  data() {
    return {
      phone: "",    //不是手机号，是用户名
      pwd: "",       
      errorInfo: ""
    };
  },
  methods: {
    handleLogin() {
      if (this.phone === "" || this.pwd === "") {
        this.errorInfo = "请填写账号或密码";
        return false;
      } else {
        this.errorInfo = "";
        return true;
      }
    },
    stratLogin() {
      const res = this.handleLogin();
      if (res) {
        let name = this.phone;
        let pwd = this.pwd;
        login(name,pwd).then(res => {
          if(res.status === 'fail') {
            this.errorInfo = res.msg;
          }else {
            this.$store.commit("ChangeUserName", res.data); //更改用户名字
            this.$router.push({name:'Home'});
          }
        })
      }
    }
  }
};
</script>

<style lang="scss">
body {
  background: #fff;
}
.login-p {
  width: 1000px;
  margin: 40px auto;
  .m-img {
    width: 82px;
    height: 54px;
    margin: 20px 0;
  }
  .el-input {
    width: 100%;
    height: 36px;
    margin: 10px 0;
  }
  .container {
    .shortMessage {
      display: flex;
      justify-content: space-between;
    }
    .wangji {
      text-align: right;
      a {
        color: #fe8c00;
      }
    }
    .btn-login {
      width: 100%;
      height: 36px;
      font-weight: 700;
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      color: #222;
      outline: none;
      border: none;
      box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
      cursor: pointer;
    }
    .noNum {
      font-size: 14px;
      a {
        color: #fe8c00;
      }
    }
    .cooperation {
      position: relative;
      border-top: 1px solid;
      top: 20px;
      border: 1px solid;
      span {
        position: absolute;
        top: -20px;
        width: 126px;
        padding: 0 10px;
        font-size: 14px;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
      }
      img {
        position: absolute;
        top: 29px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
      }
    }
    .error {
      position: absolute;
      top: -36px;
      width: 290px;
      border: 1px solid #f5d8a7;
      display: none;
      border-radius: 2px;
      background: #fff6db;
      i {
        font-size: 19px;
        color: #ff8800;
        margin: 0 6px;
        vertical-align: middle;
      }
    }
    .error.show {
      display: block;
    }
  }
}
.el-input__inner {
  border-radius: 0px;
  border: 1px solid #999;
}
.el-input__inner:focus {
  border-color: #ffc300;
}
.el-input__inner.error:focus {
  border-color: #f40;
}
</style>