<template>
  <el-row class="home-footer">
    <el-col :span="17" :offset="3">
      <div class="container">
        <ul class="muen1">
          <li>
            <dl>
              <dt>用户帮助</dt>
              <dd>
                <a href="#">申请退款</a>
              </dd>
              <dd>
                <a href="#">常见问题</a>
              </dd>
              <dd>
                <a href="#">用户协议</a>
              </dd>
              <dd>
                <a href="#">隐私政策</a>
              </dd>
              <dd>
                <a href="#">反诈骗策略</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
            <dl>
              <dt>用户帮助</dt>
              <dd>
                <a href="#">申请退款</a>
              </dd>
              <dd>
                <a href="#">常见问题</a>
              </dd>
              <dd>
                <a href="#">用户协议</a>
              </dd>
              <dd>
                <a href="#">隐私政策</a>
              </dd>
              <dd>
                <a href="#">反诈骗策略</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <a href="#">用户帮助</a>
              </dt>
              <dd>
                <a href="#">申请退款</a>
              </dd>
              <dd>
                <a href="#">常见问题</a>
              </dd>
              <dd>
                <a href="#">用户协议</a>
              </dd>
              <dd>
                <a href="#">隐私政策</a>
              </dd>
              <dd>
                <a href="#">反诈骗策略</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#">用户帮助</a>
              </dt>
              <dd>
                <a href="#">申请退款</a>
              </dd>
              <dd>
                <a href="#">常见问题</a>
              </dd>
              <dd>
                <a href="#">用户协议</a>
              </dd>
              <dd>
                <a href="#">隐私政策</a>
              </dd>
              <dd>
                <a href="#">反诈骗策略</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
            <dl>
              <dt>用户帮助</dt>
              <dd>申请退款</dd>
              <dd>常见问题</dd>
              <dd>用户协议</dd>
              <dd>隐私政策</dd>
              <dd>反诈骗策略</dd>
              <dd>用户权益保障</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>商家合作</dt>
              <dd>
                <a href="#">美团买卖代理商招募</a>
              </dd>
              <dd>
                <a href="#">美团联盟</a>
              </dd>
              <dd>
                <a href="#">美团收单渠道代理商招募</a>
              </dd>
              <dd>
                <a href="#">美团点评5S服务商招募</a>
              </dd>
              <dd>
                <a href="#">非餐饮代理商招募</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#">美团规则</a>
              </dt>
              <dd>
                <a href="#">规则中心</a>
              </dd>
              <dd>
                <a href="#">规则目录</a>
              </dd>
              <dd>
                <a href="#">规则评议院</a>
              </dd>
            </dl>
            <dl>
              <dt>用户帮助</dt>
              <dd>申请退款</dd>
              <dd>常见问题</dd>
              <dd>用户协议</dd>
              <dd>隐私政策</dd>
              <dd>反诈骗策略</dd>
              <dd>用户权益保障</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <a href="#">关注美团</a>
              </dt>
              <dd>
                <a href="#">反诈骗策略</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#">用户帮助</a>
              </dt>
              <dd>
                <a href="#">申请退款</a>
              </dd>
              <dd>
                <a href="#">常见问题</a>
              </dd>
              <dd>
                <a href="#">用户协议</a>
              </dd>
              <dd>
                <a href="#">隐私政策</a>
              </dd>
              <dd>
                <a href="#">反诈骗策略</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
            <dl>
              <dt>用户帮助</dt>
              <dd>申请退款</dd>
              <dd>常见问题</dd>
              <dd>用户协议</dd>
              <dd>隐私政策</dd>
              <dd>反诈骗策略</dd>
              <dd>用户权益保障</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <a href="#">消费者服务热线</a>
              </dt>
              <dd>
                <a href="#">外卖消费者：10109777</a>
              </dd>
              <dd>
                <a href="#">猫眼消费者：10105335</a>
              </dd>
              <dd>
                <a href="#">其他消费者：10107888</a>
              </dd>
            </dl>
            <dl>
              <dt>
                <a href="#">商家服务热线</a>
              </dt>
              <dd>
                <a href="#">外卖 餐饮商家：10105557</a>
              </dd>
              <dd>
                <a href="#">休闲娱乐、丽人、ktv等</a>
              </dd>
              <dd>
                <a href="#">商家：10100107</a>
              </dd>
              <dd>
                <a href="#">隐私政策</a>
              </dd>
              <dd>
                <a href="#">反诈骗策略</a>
              </dd>
              <dd>
                <a href="#">用户权益保障</a>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <el-row>
        <el-col :span="10" class="container-record">
          <ul>
            <li v-for="(item,index) in keepOnRecord" :key="index">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </el-col>
        <el-col :span="10" :offset="3">
          <div class="title">
            <a href="#">京公网安备11010502025545号</a>
          </div>
          <div class="imgs">
            <img src="../../assets/gongan.jpg" alt />
            <span>北京三快科技有限公司</span>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      keepOnRecord: [
        "©美团网团购 meituan.com京ICP证070791号京ICP备10211739号",
        "广播电视节目制作经营许可证（京）字第03889号",
        "食品经营许可证互联网药品信息服务资格证",
        "医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号"
      ]
    };
  }
};
</script>

<style lang="scss">
.home-footer {
  .container {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding-bottom: 30px;
    padding-top: 30px;

    .muen1 {
      display: flex;
      justify-content: space-around;

      dl {
        margin-bottom: 22px;
      }
      dt {
        font-size: 14px;
        margin-bottom: -14px;
      }
      dd {
        height: 24px;
      }
    }
  }
  .container-record {
    margin: 30px 0;
    li {
      line-height: 24px;
    }
  }

  .title {
    text-align: right;
    margin-top: 30px;
  }

  .imgs {
    text-align: right;
    span {
      vertical-align: text-bottom;
    }

    img:nth-of-type(1) {
      width: 38px;
      height: 38px;
    }
  }
}
</style>