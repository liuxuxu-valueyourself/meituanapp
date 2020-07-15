<template>
  <div class="main-three">
    <div class="title">美团导航</div>
    <div class="container">
      <dl>
        <div class="citys" v-for="(item,index) in navList" :key="index">
          <dt> {{ item.title }} </dt>
          <div class="item">
            <dd v-for="(list,i) in item.list" :key="i" ><a href="http://www.liuxuxu.tech"> {{ list }} </a></dd>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList:[{
        title:'热门城市',
        list:['沈阳','重庆','成都','东莞','合肥','苏州','北京','贵阳','南京','上海','昆明','郑州','杭州','广州','南京','上海','昆明','郑州','杭州','广州'],
      },{
        title:'热门分类',
        list:['酒店','美食','生活服务','学习培训','酒店','美食','本地购物','培训','酒店','美食','旅游','培训','酒店','美食','旅游','培训'],
      },{
        title:'周边热门',
        list:['大厂回族自治县酒店','廊坊休闲娱乐','大厂回族自治县酒店','廊坊休闲娱乐','大厂回族自治县酒店','廊坊休闲娱乐','大厂回族自治县酒店','廊坊休闲娱乐','大厂回族自治县酒店','廊坊休闲娱乐','大厂回族自治县酒店','廊坊休闲娱乐'],
      }]
    }
  }
};
</script>

<style lang="scss">
.main-three {
  width: 1133px;
  height: 270px;
  background: #fff;
  margin-top: 35px;
  .title {
    height: 44px;
    font-size: 16px;
    font-weight: 500;
    color: #222222;
    padding-left: 20px;
    padding-top: 6px;
    line-height: 44px;
  }

  .container {
    dl > div {
      display: flex;
      // flex-wrap: wrap;
      height: 65px;
      margin-bottom: 10px;
      dt {
        width: 120px;
        font-size: 14px;
        text-align: center;
        color: #222;
      }
      .item {
        width: 1000px;
        border-bottom: 1px solid #E5E5E5;
      }
      dd {
        float: left;
        width: 100px;
        padding-right: 10px;
        height: 40px;
        box-sizing: border-box;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
         
        a {
          font-size: 12px;
        }
      }
    }
  }
}
.citys:nth-of-type(3) .item {
  border-bottom: none !important;
}
</style>