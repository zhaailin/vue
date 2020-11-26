<template>
  <div class="header">
    <div class="img"><img src="../assets/2.png" /></div>
    <ul>
      <li>
        <div><span>控制中心</span></div>
      </li>
      <li>
        <div><span>数字看板</span></div>
      </li>
      <li>
        <div><span>设备分析</span></div>
      </li>
      <li>
        <div><span>生产工艺</span></div>
      </li>
    </ul>
    <div class="endList">
      <div class="end">
        <div><img src="../assets/deer.png" /></div>
        <div>{{ $store.state.userName }}</div>
      </div>
      <img @click="out" src="../assets/地球.png" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //返回登录页面
    out() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  height: 55px;
  background-color: #001529;
  display: flex;
  align-items: center;
  button {
    font-size: 16px;
    background-color: #e7e7e7;
    color: black;
    border-radius: 6px;
    border: none;
  }
  ul {
    margin: 0;
    width: 65%;
    list-style-type: none;
    li {
      float: left;
      div {
        height: 52px;
        width: 100px;
        font-size: 14px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    div:hover {
      border-bottom: 3px solid #3a7fbc;
    }
  }
  .endList {
    width: 106px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    right: 3px;
    .end {
      height: 55px;
      width: 150px;
      display: flex;
      align-items: center;
      div {
        height: 40px;
        width: 40px;
        margin-right: 20px;
        font-size: 16px;
        color: #fff;
        display: flex;
        align-items: center;
        img {
          height: 100%;
          width: 100%;
          border-radius: 50%;
          border: 1px solid #fff;
        }
      }
    }
    img {
      width: 25px;
      height: 25px;
    }
  }
}
.img {
  width: 256px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 224px;
    height: 32px;
  }
}
</style>