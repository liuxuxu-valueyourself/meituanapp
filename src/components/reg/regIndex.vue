<template>
  <div class="UserLog">
    <Reg-top />
    <div class="container">
      <div class="topError" :class="{
        show:topError !== ''
      }"> 亲 {{ topError }}哦 </div>
      <div class="username same" :class="{
        showError:name === ''
      }">
        <label for="name">创建用户名</label>
        <input id="name" type="text" v-model="name" />
        <span>
          <i class="el-icon-remove"></i>
          请输入用户名
        </span>
      </div>
      <div class="userPwd same" :class="{
        showError:pwd === ''
      }">
        <label for="pwd">密码</label>
        <input id="pwd" type="text" v-model="pwd" />
        <span>
          <i class="el-icon-remove"></i>
          请创建你的密码
        </span>
      </div>
      <div class="wrap">
        <div class="Mantle" :class="pwdStrength"></div>
        <p class="strongePwd">
          <span class="weak">弱</span>
          <span class="middle">中</span>
          <span class="strong">强</span>
        </p>
      </div>
      <div class="userPwdTwo same" :class="{
        showError:pwdTwo === ''
      }">
        <label for="pwdTwo">重复密码</label>
        <input id="pwdTwo" type="text" v-model="pwdTwo" />
        <span>
          <i class="el-icon-remove"></i>
          请确认你的密码
        </span>
      </div>
      <div class="regBtn">
        <button @click="startLog">同意以下协议并注册</button>
      </div>
      <a href="#">《美团点评用户服务协议》 《美团点评隐私政策》</a>
    </div>
    <div class="footer">©meituan.com 京ICP证070791号 京公网安备11010502025545号</div>
  </div>
</template>

<script>
import RegTop from "./regTop";
import { reg } from "../../services/User";
export default {
  components: {
    RegTop
  },
  data() {
    return {
      name: "",
      pwd: "",
      pwdTwo: "",
      pwdStrength: "",
      topError:''
    };
  },
  watch: {
    pwd() {
      const res = this.judgePwd(this.pwd);
      this.pwdStrength = res;
    }
  },
  methods: {
    startLog() {
      if (this.name !== "" && this.pwd !== "" && this.pwdTwo !== "") {
        if (this.pwd !== this.pwdTwo) {
          alert("两次密码不一致");
        } else {
          console.log(this.name, this.pwd);
          let name = this.name;
          let pwd = this.pwd;
          reg(name, pwd).then(res => {
            console.log(res);
            if(res.status === 'fail') {
              this.topError = res.msg;
            }else {
              this.$router.push({name:'login'})
            }
          });
        }
      }
    },
    judgePwd(pwd) {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#_,.]).{6,16}$/.test(pwd)) {
        return "qiang";
      } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,16}$/.test(pwd)) {
        return "zhong";
      } else if (/^(?=.*[a-z])(?=.*[A-Z]).{6,16}$/.test(pwd)) {
        return "ruo";
      } else {
        return "ruo";
      }
    }
  }
};
</script>

<style lang="scss">
.UserLog {
  width: 980px;
  margin: 0 auto;
  .container {
    position: relative;

    .topError {
      position: absolute;
      top: -28px;
      left: 155px;
      font-size: 12px;
      color: #f60;
      display: none;
    }
    .topError.show {
      display: block;
    }

    a {
      font-size: 13px;
      color: #fe8c00;
      margin-left: 146px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: inline-block;
    }
    .regBtn {
      button {
        cursor: pointer;
        margin-left: 152px;
        padding: 9px 27px;
        font-size: 14px;
        font-weight: 700;
        color: #222;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        border-width: 0;
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
      }
    }
    .username.showError span {
      display: inline-block;
    }
    .userPwd.showError span {
      display: inline-block;
    }
    .userPwdTwo.showError span {
      display: inline-block;
    }
    .wrap {
      position: absolute;
      top: 115px;
      left: 150px;
      width: 260px;
      height: 20px;
      background: #eee;
      .Mantle {
        height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        transition: all 0.6s;
        width: 0;
      }
      .Mantle.ruo {
        width: 85px;
        background: #f76120;
      }
      .Mantle.zhong {
        width: 172px;
        background: #ff8900;
      }
      .Mantle.qiang {
        width: 260px;
        background: #5bab3c;
      }
      p {
        width: 265px;
        position: absolute;
        z-index: 10;
        span {
          width: 85px;
          height: 20px;
          display: inline-block;
          color: #fff;
          text-align: center;
          border-right: 2px solid #fff;
          overflow: hidden;
          vertical-align: middle;
        }
      }
    }

    .same {
      margin: 36px;
      label {
        width: 106px;
        margin-right: 10px;
        display: inline-block;
        text-align: end;
      }
      input {
        outline: none;
        height: 32px;
        width: 260px;
        border: 1px solid #aaa;
      }
      span {
        display: none;
        margin-left: 16px;
        font-size: 12px;
        i {
          color: #ff8800;
          font-size: 19px;
          vertical-align: middle;
          margin-right: 6px;
        }
      }
    }
  }
  .footer {
    color: #666;
    margin-top: 36px;
    border-top: 0.1px solid #eee;
    text-align: center;
    padding: 16px 0;
    font-size: 12px;
  }
}
</style>