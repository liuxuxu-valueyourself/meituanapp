<template>
  <div class="top">
    <el-row>
      <el-col :span="10" :offset="3">
        <div class="grid-content bg-purple-dark">
          <i class="el-icon-location-outline"></i>
          <span> {{ $store.state.address }} </span>
          <span class="city">
            <router-link :to="{name:'city'}">切换城市</router-link>
          </span>
          <span class="address">
            [
            <a href="#">门头沟区</a>
            <a href="#">大厂回族自治县</a>
            <a href="#">廊坊</a>
            ]
          </span>
          <span class="login">
            <router-link :to="{name:'login'}">立即登录</router-link>
          </span>
          <span class="reg">
            <router-link :to="{name:'reg'}">注册</router-link>
          </span>
        </div>
      </el-col>
      <el-col :span="7" :offset="1">
        <div class="top-nav">
          <div class="nav-item nav-item-1">
            我的美团
            <ul>
              <li>我的订单</li>
              <li>我的收藏</li>
              <li>抵用券</li>
              <li>账户设置</li>
            </ul>
          </div>
          <div class="nav-item">手机APP</div>
          <div class="nav-item nav-item-3">
            商家中心
            <ul>
              <li>美团餐饮中心</li>
              <li>登录商家中心</li>
              <li>我想合作</li>
              <li>手机免费开店</li>
              <li>餐饮代理商招募</li>
              <li>商家申请开票</li>
            </ul>
          </div>
          <div class="nav-item">美团规则</div>
          <div class="nav-item nav-item-5">
            美团导航
            <ul>
              <li>
                <div class="title">
                  酒店旅游
                </div>
                <div class="info-item">国际机票</div>
                <div class="info-item">火车票</div>
                <div class="info-item">经济型酒店</div>
                <div class="info-item">客栈</div>
              </li>
              <li>
                <div class="title">
                  吃美食
                </div>
                <div class="info-item">one</div>
                <div class="info-item">one</div>
              </li><li>
                <div class="title">
                  看电影
                </div>
                <div class="info-item">one</div>
                <div class="info-item">one</div>
              </li><li>
                <div class="title">
                  手机应用
                </div>
                <div class="info-item">
                  <img src="../../assets/meituan.png" alt="">
                </div>
                <div class="info-item">one</div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.top {
  background: #f8f8f8;
}
.el-row {
  font-size: 12px;
  color: #666;
  margin-bottom: 20px;
  line-height: 40px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
// .bg-purple-dark {
//   background: #99a9bf;
// }
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  // padding: 10px 0;
  background-color: #f9fafc;
}
.city a {
  border: 1px solid #ccc;
  padding: 1px 2px;
  margin: 0 5px;
  background: rgb(243, 243, 243);
  box-shadow: 0px 0px 1px rgb(233, 233, 233);
}
.city a:hover {
  color: #fe8c00;
}
.address,
.reg {
  a {
    margin: 0 2px;
    color: #999;
    &:hover {
      color: #fe8c00;
    }
  }
}
.login a {
  color: #fe8c00;
  margin: 0 3px;
  margin-left: 20px;
}
.top-nav {
  .nav-item {
    display: inline-block;
    margin: 0 10px;
    padding: 0px 6px;
    color: #999;
    position: relative;
    cursor: pointer;
    border-bottom: none !important;
    border: 1px solid transparent;
  }
  .nav-item-1,
  .nav-item-3,
  .nav-item-5 {
    z-index: 200;
    &:hover {
      background: #fff;
      border-color: #e5e5e5;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    }

    &:hover ul {
      display: block;
    }
    ul {
      display: none;
      background: #fff;
      border-color: #e5e5e5;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
      position: absolute;
      border-top: none;
      left: 0px;
      padding: 0 3px;
      text-align: center;
      li:hover {
        color: #fe8c00;
        cursor: pointer;
      }
    }
  }
  .nav-item-1 ul {
    width: 54px;
  }
  .nav-item-3 ul {
    width: 100px;
  }
  .nav-item-5 ul {
    width: 1120px;
    height: 200px;
    left: -1042px;
  }
  .nav-item-5 li {
    vertical-align:top;
    width: 200px;
    display: inline-block;
    padding-top: 20px;

    .title {
      font-size: 14px;
      color: #222;
      font-weight: 500;
    }

    .info-item {
      line-height: 1.6;
    }
  }
  li > div {
    color: #666;
  }
  li > div:hover {
    color: #fe8c00;
  }
}
</style>