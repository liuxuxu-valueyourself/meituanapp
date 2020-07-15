<template>
  <div class="main-one">
    <div class="nav-left">
      <dl>
        <dt>全部分类</dt>
        <dd data-name="美食" @mouseenter="handleEnter($event)">
          <i class="el-icon-potato-strips" style="color:#f40;"></i>
          <span>
            <a href="#">美食</a>
          </span>
          <i class="el-icon-arrow-right"></i>
        </dd>
        <dd data-name="外卖" @mouseenter="handleEnter($event)">
          <i class="el-icon-truck" style="color:#ffb500;"></i>
          <span>
            <a href="#">外卖</a>
          </span>
          <i class="el-icon-arrow-right"></i>
        </dd>
        <dd data-name="酒店" @mouseenter="handleEnter($event)">
          <i class="el-icon-office-building" style="color:#9b5e3e"></i>
          <span>
            <a href="#">酒店</a>
          </span>
          <i class="el-icon-arrow-right"></i>
        </dd>
        <dd data-name="民宿" @mouseenter="handleEnter($event)">
          <i class="el-icon-s-home" style="color:#ffb90d;"></i>
          <span>
            <a href="#">民宿</a>
          </span>
          <i class="el-icon-arrow-right"></i>
        </dd>
        <dd data-name="猫眼电影" @mouseenter="handleEnter($event)">
          <i class="el-icon-video-camera" style="color:#ff430e;"></i>
          <span>
            <a href="#">猫眼电影</a>
          </span>
          <i class="el-icon-arrow-right"></i>
        </dd>
        <dd>
          <i class="el-icon-bicycle" style="color:#03a9f4;"></i>
          <span>
            <a href="#">机票</a> /
            <a href="#">火车票</a>
          </span>
          <i class="el-icon-arrow-right"></i>
        </dd>
        <dd>
          <i class="el-icon-potato-strips"></i>
          <span>
            <a href="#">美食</a>
          </span>
          <i class="el-icon-arrow-right"></i>
        </dd>
      </dl>
      <div class="showInfo">
        <div class="title">{{ showInfoTitle }}</div>......
      </div>
    </div>
    <div class="center-title">
      <ul>
        <li>
          <a href="#">美团外卖</a>
        </li>
        <li>
          <a href="#">猫眼电影</a>
        </li>
        <li>
          <a href="#">美团酒店</a>
        </li>
        <li>
          <a href="#">民宿 / 公寓</a>
        </li>
        <li>
          <a href="#">商家入驻</a>
        </li>
        <li>
          <a href="#">美团公益</a>
        </li>
      </ul>
    </div>
    <div class="center-container">
      <div class="block banner" v-if="bannerData">
        <el-carousel height="240px">
          <el-carousel-item v-for="(item,index) in bannerData" :key="index">
            <a href="#">
              <img :src="item.img" alt />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="banner-rightImg">
        <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
      </div>
      <div class="banner-bottomImg">
        <div class="img1 same">
          <a href="#">
            <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt />
          </a>
        </div>
        <div class="img2 same">
          <a href="#">
            <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt />
          </a>
        </div>
        <div class="img3">
          <a href="#">
            <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt />
          </a>
        </div>
      </div>
    </div>
    <div class="left">
      <div class="login">
        <img src="../../assets/avatar.jpg" alt />
        <div class="hello">
          Hi!
          <span>{{ $store.state.userName }}</span> ❤
        </div>
        <div v-show="$store.state.userName === '靓仔'">
          <p>
            <router-link :to="{name:'reg'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link :to="{name:'login'}">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
        </div>
      </div>
      <div class="app">
        <img src="../../assets/download-qr.png" alt="下载APP" />
        <p>美团APP手机版</p>
        <span class="yiyuan">一元起</span>
        <span>吃喝玩乐</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfoTitle: "",
      bannerData: [
        {
          img:
            "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg"
        },
        {
          img:
            "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        },
        {
          img:
            "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg"
        },
        {
          img:
            "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg"
        },
        {
          img:
            "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg"
        }
      ]
    };
  },
  methods: {
    handleEnter(e) {
      this.showInfoTitle = e.target.dataset.name;
    }
  }
};
</script>

<style lang="scss">
.main-one {
  margin-top: -16px;
  margin-bottom: 20px;
  position: relative;

  .nav-left {
    position: relative;
    background: #fff;
    width: 230px;
    height: 475px;
    border: 1px solid #e5e5e5;
    &:hover .showInfo {
      display: block;
    }

    .showInfo {
      z-index: 222;
      background: #fff;
      padding: 10px;
      display: none;
      position: absolute;
      top: 52px;
      left: 230px;
      width: 375px;
      height: 405px;
      border: 1px 1px 3px 10px rgb(173, 173, 173);
    }

    a {
      font-size: 14px;
    }

    dt {
      color: #222222;
      font-size: 16px;
      margin: 10px;
      margin-bottom: 26px;
      font-weight: 700;
    }
    dd {
      position: relative;
      padding: 10px;

      i:nth-of-type(1) {
        margin-right: 10px;
      }
      &:hover {
        background: rgba(255, 150, 0, 0.08);
      }
    }

    .el-icon-arrow-right {
      position: absolute;
      right: 10px;
      font-size: 12px;
    }
  }
  .showInfo {
    .title {
      margin: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
  }
  .center-title {
    position: absolute;
    top: 12px;
    left: 248px;
    width: 640px;
    ul {
      display: flex;
      justify-content: space-around;
      li {
        font-weight: 700;
      }
    }
  }
  .center-container {
    position: absolute;
    top: 55px;
    left: 250px;
    width: 670px;
    height: 420px;

    .banner {
      width: 500px;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .banner-rightImg {
      position: absolute;
      top: 0;
      right: 0;
      width: 155px;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .banner-bottomImg {
      margin-top: 10px;
      height: 170px;
      .img1 {
        margin-right: 10px;
      }
      .same {
        width: 245px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div {
        height: 170px;
        float: left;
      }
      .img3 {
        width: 155px;
        img {
          width: 100%;
          margin-left: 15px;
        }
      }
    }
  }
  .left {
    position: absolute;
    top: 55px;
    right: 20px;
    width: 205px;
    height: 420px;

    .login {
      padding-top: 30px;
      box-sizing: border-box;
      text-align: center;
      height: 240px;
      border: 1px solid #e5e5e5;
      background: #fff;

      img {
        width: 47px;
        height: 47px;
        border-radius: 50%;
        border: 4px solid #e5e5e5;
      }
      .hello {
        margin: 10px 0;
      }
      p {
        margin: 15px 0;
      }
    }
    .app {
      height: 170px;
      border: 1px solid #e5e5e5;
      background: #fff;
      text-align: center;
      margin-top: 10px;
      img {
        width: 95px;
        height: 95px;
        margin-top: 10px;
        margin-bottom: 6px;
      }
      span {
        font-size: 12px;
        font-weight: 500;
        margin-top: 2px;
      }
      .yiyuan {
        color: #ec5330;
        margin-right: 5px;
      }
    }
  }
}
</style>