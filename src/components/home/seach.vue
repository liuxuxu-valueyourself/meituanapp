<template>
  <div class="header-content">
    <el-row>
      <el-col :span="5" :offset="3">
        <router-link :to="{ name:'Home' }">
          <img src="../../assets/logo.png" alt />
        </router-link>
      </el-col>
      <el-col :span="6">
        <div style="margin-top: 15px;">
          <el-input
            placeholder="搜索商家或地点"
            v-model="inputValue"
            @focus="hotsShow = true"
            @blur="hotsShow = false"
          >
            <template slot="append">
              <i class="el-icon-search"></i>
            </template>
          </el-input>
          <ul v-show="hotsShow && inputValue === ''">
            <strong>热门搜索</strong>
            <span v-for="(item,index) in hots" :key="index">
              <a href="#">{{ item }}</a>
            </span>
          </ul>
          <ul v-show=" inputValue " style="z-index:9999;">
            <li v-for="(item,index) in guess" :key="index">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
      hots: ["火锅", "火龙果", "火锅底料", "火锅店", "重庆火锅"],
      hotsShow: false,
      guess: ["火锅", "火龙果", "火锅底料", "火锅店", "重庆火锅"]
    };
  },
  watch: {
    inputValue() {
      if(this.inputValue) {
        this.$axios.get('http://open.duyiedu.com/api/meituan/header/search.json',{
          params:{
            appkey:'xuxu_hbz_1581051267609'
          }
        }).then(res => {
          this.guess = res.data.data.list;
        })
      }
    }
  }
};
</script>

<style lang="scss">
.header-content {
  background: #fff;
  box-shadow: 0 12px 27px 0 rgba(0, 0, 0, 0.1);
  height: 165px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 50px;
}
.el-col-offset-3 img {
  width: 126px;
  height: 46px;
  margin-top: 16px;
}
.header-content {
  .el-input-group__append {
    outline: none;
    box-sizing: border-box;
    line-height: 100%;
    height: 100%;
    background: #ffc300 !important;
    border: none;
    color: #222222;
    cursor: pointer;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  .el-input__inner {
    width: 432px;
    outline: none !important;
  }
  .el-icon-search {
    margin: 0 10px;
    font-size: 24px;
    font-weight: 700;
  }
  input {
    border-color: #dcdfe6 !important;
  }
  ul {
    overflow: hidden;
    position: relative;
    transition: all 0.2s;
    background: #fff;
    margin-left: 2px;
    border-top: none;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    width: 432px;
    box-shadow: 0px 0px 5px 2px rgb(238, 238, 238);

    span {
      margin: 0 3px;
    }
    a {
      color: #333;
      &:hover {
        color: #ffc300;
      }
    }
    strong {
      font-weight: 700;
      margin-left: 6px;
      margin-right: 10px;
    }
    li {
      a {
        width: 100%;
        display: block;
        padding-left: 10px;
        &:hover {
          background: rgba(199, 199, 199, 0.2);
        }
      }
    }
  }
}
.el-input-group--append {
  top: 6px;
}
</style>