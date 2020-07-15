<template>
  <div>
    <el-container>
      <el-header>
        <Top />
        <Seach />
      </el-header>
      <el-main>
        <div class="main-w">
          <Main-one />
          <Main-two />
          <Main-three />
        </div>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Top from "./top";
import Seach from './seach';
import Footer from './footer';
import MainOne from './main-one';
import MainTwo from './main-two';
import MainThree from './main-three';
export default {
  components: {
    Top,
    Seach,
    Footer,
    MainOne,
    MainTwo,
    MainThree,
  }
};
</script>

<style lang="scss">
.el-header {
  height: 160px !important;
}
.main-w {
  width: 1160px;
  margin: 0 auto;
}

</style>