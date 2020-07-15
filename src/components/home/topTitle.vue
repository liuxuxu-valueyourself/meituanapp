<template>
  <div class="top-title" :style="styleBack">
    <el-row>
      <el-col :span="3">
        <div class="title"> {{ title }} </div>
      </el-col>
      <el-col :span="17">
        <div class="samllTitle">
          <ul>
            <li v-for="(item,index) in samllTitle"  :key="index" @mouseenter="handleEnter(index,$event)" :class="{
              active:activeIndex === item.i
            }">{{ item.val }}</li>
          </ul>
        </div>
      </el-col>
      <el-col :span="1" :offset="2">
        <div class="all">
          全部
          <i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // props: ["background","moiveList"],
  props: {
    background: String,
    samllTitle: Array,
    title:String,
  },
  data() {
    return {
      styleBack: {
        background: this.background
      },
      activeIndex:0,
    };
  },
  methods:{
    handleEnter(i,e) {
      this.activeIndex = i;
      this.$emit('change',e.target.innerText)
    }
  }
};
</script>

<style lang="scss">
.top-title {
  margin-top: 35px;
  width: 1136px;
  height: 45px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .title {
    color: #fff;
    font-size: 18px;
    margin-left: 13px;
    padding: 0 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-family: "MFShangHei-Regular" !important;
  }
  .samllTitle ul {
    color: #fff;
    display: flex;
    li {
      margin: 0 10px;
      font-size: 14px !important;
      cursor: pointer;
      position: relative;
    }
    li.active::after {
      content: "";
      position: absolute;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 7px solid #fff;
      display: block;
      width: 2px;
      height: 0;
      top: 38px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  .all {
    font-size: 14px !important;
    color: #fff;
    cursor: pointer;
  }
}
</style>