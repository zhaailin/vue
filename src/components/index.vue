<template>
  <div class="hellow">
    <Header></Header>
    <div class="body">
      <Aside></Aside>
      <div class="main">
        <div class="mainHeader"></div>
        <div class="mainBody">
          <router-view></router-view>
        </div>
        <div class="mainFooter">Copyright © 2020 无锡微茗智能科技有限公司</div>
      </div>
    </div>
  </div>
</template>
<script>
import Aside from "../components/index_Aside.vue";
import Header from "../components/index_Header.vue";
export default {
  name: "index",
  components: {
    Aside,
    Header,
  },
};
</script>
<style lang="less" scoped>
.hellow {
  height: 100%;
}
.body {
  height: calc(100% - 55px);
  width: 100%;
  display: flex;
  flex-direction: row;
  .main {
    height: 100%;
    width: calc(100% - 266px);
    background-color: #f0f2f5;
    .mainHeader {
      height: 24px;
      border-bottom: 1px solid #fff;
    }
    .mainBody {
      height: calc(100% - 49px);
    }
    .mainFooter {
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      color: rgba(0, 0, 0, 0.45);
    }
  }
}
</style>>
