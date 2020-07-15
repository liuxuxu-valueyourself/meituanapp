<template>
  <div class="Change-city" v-document-click="documentClick">
    <ul>
      <li class="one">
        <div class="province">按省份选择:</div>
        <div class="input-provice" @click.stop="showProvice">
          {{ address!=='' ? address : '省份' }}
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="provice-item" :class="{
          none:isShowProvice
        }">
          <div class="title">省份</div>
          <div class="main">
            <dl v-for="(item,index) in shengFenOne" :key="index">
              <dd
                v-for="(s,i) in item"
                :key="i"
                @click.stop="ddClick(i,index,$event,s)"
                :class="{
                  active:activeI === i&& activeIndex === index
                }"
              >{{ s.provinceName }}</dd>
            </dl>
          </div>
        </div>
        <div
          class="input-city"
          @click.stop="cityClick"
          :class="{
          no:address === ''
        }"
        >
          城市
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="provice-item city-item" :class="{
          none: isShowCity
        }">
          <div class="title">城市</div>
          <div class="main">
            <dl v-for="(item,index) in shengFenTwo" :key="index">
              <dd v-for="(s,i) in item" :key="i" @click.stop="changeCity($event)">{{ s.name }}</dd>
            </dl>
          </div>
        </div>
        <div class="province sousuo">直接搜索:</div>
        <el-input placeholder="请输入城市中文或拼音" class="sousuoInput"></el-input>
      </li>
      <li>
        <div class="province">热门城市:</div>
        <a href="#" class="hotsCity" v-for="(item,index) in hotsCity" :key="index">{{ item.name }}</a>
      </li>
      <li>
        <div class="province">最近访问:</div>
        <a href="#" class="hotsCity">北京</a>
        <a href="#" class="hotsCity">南京</a>
      </li>
      <li>
        <div class="province">按拼音首字母选择:</div>
        <a
          :href="`#${item}`"
          class="hotsCity letter"
          v-for="(item,index) in firstLetter"
          :key="index"
        >{{ item }}</a>
      </li>
    </ul>
    <div class="showAllCity">
      <dl class="col" v-for="(item,index) in allCity" :key="index">
        <dt>{{ item[0].firstChar.toUpperCase() }}</dt>
        <div class="container">
          <dd v-for="(list,i) in item" :key="i">
            <a :name="item[0].firstChar.toUpperCase()"> {{ list.name }} </a>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotsCity: [],
      firstLetter: "ABCDEFGHIJKLMNOPQISTUVWXYZ",
      shengfen: [],
      activeI: null,
      activeIndex: null,
      isShowProvice: true,
      isShowCity: true,
      address: "",
      cityList: [],
      allCity:null,
    };
  },
  computed: {
    shengFenOne() {
      let col = Math.ceil(this.shengfen.length / 12);
      let res = [];
      for (let i = 0; i < col; i++) {
        res.push(this.shengfen.slice(i * 12, i * 12 + 12));
      }
      return res;
    },
    shengFenTwo() {
      let col = Math.ceil(this.cityList.length / 12);
      let res = [];
      for (let i = 0; i < col; i++) {
        res.push(this.cityList.slice(i * 12, i * 12 + 12));
      }
      return res;
    }
  },
  methods: {
    ddClick(i, index, e, item) {
      this.activeI = i;
      this.activeIndex = index;
      this.address = e.target.innerText;
      this.cityList = item.cityInfoList;
    },
    showProvice() {
      this.isShowProvice = false;
      this.isShowCity = true;
    },
    changeCity(e) {
      this.$store.commit("ChangeAddress", e.target.innerText); //更改首页头部的展示地址
      this.$router.push({ name: "Home" }); //跳转到首页
    },
    cityClick() {
      if (this.address === "") {
        return;
      }
      this.isShowProvice = true;
      this.isShowCity = false;
    },
    documentClick() {
      this.isShowProvice = true;
      this.isShowCity = true;
    }
  },
  async mounted() {
    this.$axios
      .get("http://open.duyiedu.com/api/meituan/city/hot.json", {
        params: {
          appkey: "xuxu_hbz_1581051267609"
        }
      })
      .then(res => {
        this.hotsCity = res.data.data;
      });
    this.$axios
      .get("http://open.duyiedu.com/api/meituan/city/province.json", {
        params: {
          appkey: "xuxu_hbz_1581051267609"
        }
      })
      .then(res => {
        // console.log(res.data.data);
        this.shengfen = res.data.data;
      });
    let allCity = await this.$axios.get(
      "http://open.duyiedu.com/api/meituan/city/cityList.json",
      {
        params: {
          appkey: "xuxu_hbz_1581051267609"
        }
      }
    );
    let obj = {};
    allCity.data.data.forEach(item => {
      if (!obj[item.firstChar]) {
        obj[item.firstChar] = [];
      }
      obj[item.firstChar].push(item);
    });
    this.allCity = obj;
  }
};
</script>

<style lang="scss">
.Change-city {
  width: 1133px;
  margin: 15px auto;
  border: 1px solid #e5e5e5;
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  li.one .province {
    line-height: 40px;
  }
  li {
    position: relative;
    display: flex;
    height: 70px;
    border-top: 1px solid #e5e5e5;

    .provice-item.none {
      display: none;
    }
    &:nth-of-type(1) {
      border-top: none;
    }
    .sousuo {
      margin-left: 35px;
    }
    .input-provice,
    .input-city {
      margin: 0 10px;
      width: 120px;
      line-height: 40px;
      height: 40px;
      padding: 0 10px;
      border-radius: 6px;
      border: 1px solid #e5e5e5;
      color: #666;
      i {
        margin-left: 66px;
      }
    }
    .input-city.no:hover {
      cursor: no-drop;
    }
    .sousuoInput {
      width: 225px;
      height: 40px;
      input:focus {
        border-color: #e5e5e5 !important;
      }
    }
    a {
      line-height: 70px;
      margin: 0 12px;
    }
    a.letter:hover {
      color: #000;
    }
    .provice-item {
      width: 260px;
      height: 375px;
      position: absolute;
      border: 1px solid #e5e5e5;
      background: #fff;
      top: 50px;
      left: 115px;
      padding: 10px;
      z-index: 1;
      .main {
        display: flex;
        justify-content: space-around;
      }
      .title {
        font-size: 16px;
        color: #ccc;
        margin-bottom: 11px;
      }
      dl {
        dd {
          line-height: 26px;
          font-size: 12px;
          border-radius: 15px;
          cursor: pointer;
          padding: 2px 10px;
          &:hover {
            background: rgb(240, 240, 240);
          }
        }
        dd.active {
          background: linear-gradient(to bottom right, #ffd000, #ffbd00);
          color: #222222;
        }
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #e5e5e5;
        position: absolute;
        top: -16px;
        left: 66px;
      }
      &::before {
        content: "";
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fff;
        position: absolute;
        top: -15px;
        z-index: 1;
        left: 66px;
      }
    }
    .city-item {
      left: 277px;
      width: 475px;
    }
  }
  .province {
    font-size: 16px;
    color: #333;
    font-weight: 500;
    height: 40px;
    line-height: 70px;
    margin-right: 20px;
  }
  .input-provice:hover {
    cursor: pointer;
  }
}
.showAllCity {
  .col {
    display: flex;
    padding: 20px 0;
    border-radius: 10px;
    transition: all 0.6s;

    &:hover {
      background: #f5f5f5c4;
    }

    .container {
      width: 1000px;
      display: flex;
      flex-wrap: wrap;
    }

    dt {
      box-sizing: border-box;
      padding-top: 10px;
      text-align: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #222222;
      background: #ffd000;
      margin-right: 26px;
      margin-left: 16px;
    }
    dd {
      margin: 10px 26px;
    }
  }
}
</style>