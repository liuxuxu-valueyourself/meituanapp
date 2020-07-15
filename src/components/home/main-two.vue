<template>
  <div class="main-two">
    <div class="catEye">
      <TopTitle :background="'#fa3c68'" :samllTitle="moiveList" :title="'猫眼电影'" />
      <div class="container">
        <div class="innerContainer">
          <a href="https://maoyan.com/films/1318812?utm_source=meituanweb">
            <img src="../../assets/m-1.jpg" alt />
          </a>
          <a
            href="https://verify.meituan.com/v2/web/general_page?action=spiderindefence&requestCode=6220b36e15ca4597b45dab0cdf4416a2&platform=1000&adaptor=auto&succCallbackUrl=https%3A%2F%2Foptimus-mtsi.meituan.com%2Foptimus%2FverifyResult%3ForiginUrl%3Dhttp%253A%252F%252Fmaoyan.com%252Ffilms%252F1247400%253Futm_source%253Dmeituanweb"
          >
            <img src="../../assets/m-2.jpg" alt />
          </a>
          <a
            href="https://verify.meituan.com/v2/web/general_page?action=spiderindefence&requestCode=96aa4745bb114058bf2e066b2ea08f8d&platform=1000&adaptor=auto&succCallbackUrl=https%3A%2F%2Foptimus-mtsi.meituan.com%2Foptimus%2FverifyResult%3ForiginUrl%3Dhttp%253A%252F%252Fmaoyan.com%252Ffilms%252F1222268%253Futm_source%253Dmeituanweb"
          >
            <img src="../../assets/m-3.jpg" alt />
          </a>
          <a
            href="https://verify.meituan.com/v2/web/general_page?action=spiderindefence&requestCode=e356e0c4e4894d42966fcae2f6cde59e&platform=1000&adaptor=auto&succCallbackUrl=https%3A%2F%2Foptimus-mtsi.meituan.com%2Foptimus%2FverifyResult%3ForiginUrl%3Dhttp%253A%252F%252Fmaoyan.com%252Ffilms%252F665702%253Futm_source%253Dmeituanweb"
          >
            <img src="../../assets/m-4.jpg" alt />
          </a>
          <a href>
            <img src="../../assets/m-5.jpg" alt />
          </a>
          <a href>
            <img src="../../assets/m-6.jpg" alt />
          </a>
          <a href>
            <img src="../../assets/m-7.jpg" alt />
          </a>
          <a href>
            <img src="../../assets/m-1.jpg" alt />
          </a>
          <a href>
            <img src="../../assets/m-2.jpg" alt />
          </a>
          <a href>
            <img src="../../assets/m-3.jpg" alt />
          </a>
        </div>
        <div class="btn-left btn" @click="btnLeftClick">
          <i class="el-icon-arrow-left"></i>
        </div>
        <div class="btn-right btn" @click="btnRightClick">
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="bAndB">
      <TopTitle :background="'#f2c545'" @change="handleChange" :samllTitle="bAndB" :title="'民宿推荐'" />
      <div class="container">
        <ul>
          <li v-for="(item,index) in bAndBList" :key="index">
            <a href="http://www.liuxuxu.tech">
              <img :src="item.img" alt />
            </a>
            <div class="bgImg"></div>
            <p class="pOne">
              <a href="http://www.liuxuxu.tech">{{ item.pOne }}</a>
            </p>
            <p class="pTwo">
              <a href="#">
                <span>{{ item.pTwo.info }}</span>
                <span>{{ item.pTwo.address }}</span>
              </a>
            </p>
            <p class="pTree">
              <a href="#">￥{{ item.pirce }}</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="like">
      <TopTitle :background="'#42bfcd'" :samllTitle="like" :title="'猜你喜欢'" />
      <ul class="likeUl">
        <li v-for="(item,index) in likeList" :key="index">
          <a href="http://www.liuxuxu.tech">
            <img
              :src="item.img"
              alt
            />
            <p class="title"> {{ item.title }} </p>
            <p class="score">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <i class="el-icon-star-on"></i>
              <span> {{ item.score }} 个评价</span>
            </p>
            <p class="area"> {{ item.area }} </p>
            <p class="price">
              <span class="yuan">￥</span>
              <span class="price-number numfont"> {{ item.price }} </span>
              <span class="price-desc">起</span>
            </p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopTitle from "./topTitle";
export default {
  components: {
    TopTitle
  },
  data() {
    return {
      moiveList: [
        {
          val: "即将上映",
          i: 0
        }
      ],
      bAndB: [
        {
          val: "北京",
          i: 0
        },
        {
          val: "南京",
          i: 1
        },
        {
          val: "上海",
          i: 2
        },
        {
          val: "重庆",
          i: 3
        },
        {
          val: "杭州",
          i: 4
        },
        {
          val: "广州",
          i: 5
        }
      ],
      bAndBList: [
        {
          img:
            "https://img.meituan.net/phoenix/5b196ec3dd7effa629234451bf5c1f65539880.jpg",
          pOne:
            "印象城旁双床房，可住四人，洪楼广场旁，山东大学。距离大明湖趵突泉芙蓉街宽厚里4公里",
          pTwo: {
            info: "整套1居室·可住3人 |",
            address: "老城厢/鼓楼"
          },
          pirce: 188
        },
        {
          img:
            "https://img.meituan.net/phoenix/965ef2098b658d72bb218ad57d47fa03510335.jpg",
          pOne:
            "下元繁华商业中心 公交总站  独立公寓 密码锁自助入住  长 短期 少女心爆棚ins系独角兽",
          pTwo: {
            info: "整套1居室·可住3人 |",
            address: "老城厢/鼓楼"
          },
          pirce: 168
        },
        {
          img:
            "https://img.meituan.net/phoenix/4cd24eaae9ee03d8077e7e4856e53fc5302150.jpg",
          pOne: "下元粉色经典之恋智能密码锁自动入住随时",
          pTwo: {
            info: "整套1居室·可住3人 |",
            address: "老城厢/鼓楼"
          },
          pirce: 148
        },
        {
          img:
            "https://img.meituan.net/phoenix/a902e4bd4cf6dea175758d9e4685c35b80067.jpg",
          pOne:
            "【两小无猜】【可长租】近大学/客运站/交通购物便捷/繁华步行街商圈/朝阳复试温馨景观公寓",
          pTwo: {
            info: "整套1居室·可住2人 |",
            address: "老城厢/鼓楼"
          },
          pirce: 146
        },
        {
          img:
            "https://img.meituan.net/phoenix/937f944c130cdcff8342de29b867a2572071647.jpg",
          pOne: "黄色经典，智能门锁，日式风格榻榻米精装大床房",
          pTwo: {
            info: "整套1居室·可住3人 |",
            address: "老城厢/鼓楼"
          },
          pirce: 148
        },
        {
          img:
            "https://img.meituan.net/phoenix/a81ade42097f0669b31a61a4aec58b39482116.jpg",
          pOne:
            "【太原下元核心商业中心】【阳光Loft舒适大床房】【窗帘100%遮光】【智能入住】【行李寄存】",
          pTwo: {
            info: "整套1居室·可住2人 |",
            address: "老城厢/鼓楼"
          },
          pirce: 159
        }
      ],
      like: [
        {
          val: "为你甄选最合适滴",
          i: 0
        }
      ],
      likeList:[{
        img:'https://p0.meituan.net/dpmerchantpic/b4f08dbd06a9f02c6aed7ab24b09acbd129481.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p0.meituan.net/dpmerchantpic/b4f08dbd06a9f02c6aed7ab24b09acbd129481.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/msmerchant/9e4e852d82b8749671f0fcacc7f79a38185869.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/msmerchant/9e4e852d82b8749671f0fcacc7f79a38185869.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/msmerchant/9e4e852d82b8749671f0fcacc7f79a38185869.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p0.meituan.net/dpmerchantpic/b4f08dbd06a9f02c6aed7ab24b09acbd129481.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/bbia/66fd7b3ea9b59d4687b42e07a514013593187.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@267w_150h_1e_1c',
        title:'宽板凳老灶火锅（古城店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p0.meituan.net/dpmerchantpic/b4f08dbd06a9f02c6aed7ab24b09acbd129481.jpg@267w_150h_1e_1c',
        title:'宽板凳老灶火锅（古城店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p1.meituan.net/merchantpic/10243b977e1332f52ea0379294681fda188751.jpg@267w_150h_1e_1c',
        title:'宽板凳老灶火锅（古城店）',
        score:521,
        area:'洋桥/木樨园',
        price:13.14
      },{
        img:'https://p1.meituan.net/merchantpic/10243b977e1332f52ea0379294681fda188751.jpg@267w_150h_1e_1c',
        title:'宽板凳老灶火锅（古城店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      },{
        img:'https://p0.meituan.net/dpmerchantpic/b4f08dbd06a9f02c6aed7ab24b09acbd129481.jpg@267w_150h_1e_1c',
        title:'木北护肤造型（四路通店）',
        score:521,
        area:'洋桥/木樨园',
        price:58.0
      }]
    };
  },
  methods: {
    btnLeftClick() {
      const oContainer = document.getElementsByClassName("innerContainer")[0];
      oContainer.style.marginLeft = 0 + "px";
    },
    btnRightClick() {
      const oContainer = document.getElementsByClassName("innerContainer")[0];
      oContainer.style.marginLeft = -1133 + "px";
    },
    handleChange(val) {
      // console.log(val)
      this.bAndBList = this.bAndBList.reverse();
    }
  }
};
</script>

<style lang='scss'>
.catEye {
  .container {
    position: relative;
    width: 1133px;
    height: 300px;
    overflow: hidden;
    margin-top: 6px;

    &:hover .btn {
      display: block;
    }
    .innerContainer {
      width: 2266px;
      transition: all 0.2s;
      img {
        width: 215px;
        margin: 0 5px;
        height: 100%;
      }
    }
    .btn {
      position: absolute;
      top: 130px;
      color: #fff;
      font-size: 36px;
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      cursor: pointer;
      display: none;
    }
    .btn-left {
      left: 0;
    }
    .btn-right {
      right: 0;
    }
  }
}
.bAndB {
  .container {
    width: 1133px;
    height: 689px;
    background: #fff;

    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        position: relative;
        margin: 5px 12px;
        width: 350px;
        height: 334px;
        img {
          width: 100%;
          height: 208px;
          border-radius: 10px;
          margin-bottom: 22px;
        }
        .bgImg {
          bottom: 100px;
          right: 15px;
          width: 52px;
          height: 52px;
          background-position: center;
          background-size: contain;
          position: absolute;
          background-image: url("https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png");
        }
        p a {
          margin: 12px;
          font-size: 16px;
          color: #222;
          line-height: 26px;
        }
        .pOne {
          margin-left: 6px;
          width: 250px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pTwo span {
          font-size: 12px;
          color: #999999;
        }
        .pTree a {
          font-weight: 500;
          font-size: 22px;
          color: #ff6600;
          letter-spacing: -0.8px;
          padding: 4px 0;
        }
      }
    }
  }
}
.like {
  width: 1136px;
  height: 758px;
  background: #fff;
  border-radius: 6px;
  .likeUl {
    display: flex;
    flex-wrap: wrap;
    li {
      margin: 5px 11px;
      width: 205px;
      height: 225px;
      padding: 10px;
      box-sizing: border-box;
      transition: all 0.2s;
      border-radius: 10px;
      &:hover {
        background: #F4F4F4;
      }

      img {
        width: 185px;
        height: 120px;
      }
      .title {
        margin-top: 6px;
        font-size: 16px;
        line-height: 22px;
        width: 100%;
        height: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .score {
        font-size: 12px;
        color: #999;
        height: 24px;
        line-height: 24px;

        i {
          color: #ff6600;
          font-size: 18px;
          vertical-align: middle;
        }
        span {
          margin-left: 10px;
        }
      }
      .area {
        font-size: 12px;
        color: #999999;
        width: 100%;
        height: 18px;
        line-height: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price {
        color: #ff6600;
        .yuan {
          font-size: 14px;
          font-weight: 700;
        }
        .price-number {
          font-size: 22px;
        }
        .price-desc {
          font-size: 12px;
          margin-left: 4px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>