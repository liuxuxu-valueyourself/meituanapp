<template>
  <div>
    <Top />
    <Seach />
    <City />
    <Footer />
  </div>
</template>

<script>
import Top from '../components/home/top';
import Seach from '../components/home/seach';
import City from '../components/city/city';
import Footer from '../components/home/footer';
export default {
  components:{
    Top,
    Seach,
    Footer,
    City,
  }
}
</script>

<style>

</style>
