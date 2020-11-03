<template>
  <div class="login">
    <div class="left">
      <div>
        <div class="text">打造最具价值工业互联App</div>
        <div class="size"></div>
        <div class="text">Count for more</div>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <img src="../assets/立秋.png" />
      </div>
      <router-view></router-view>
      <div class="footer">
        <div>Copyright © 2020 无锡微茗智能科技有限公司</div>
        <div>苏ICP备19005118号</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  height: 100%;
  min-width: 1366px;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  background: url(../assets/1.jpg);
  .text {
    font-size: 50px;
    color: #fff;
    line-height: 1;
  }
  .size {
    width: 80px;
    height: 8px;
    background: rgb(255, 255, 255);
    margin: 24px 0px 8px;
  }
}

.right {
  display: flex;
  width: 36%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  .header {
    width: 240px;
    height: 240px;
    margin: 100px auto 40px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .body {
    width: 100%;
    min-width: 288px;
    max-width: 424px;
    padding-bottom: 48px;
    .inputText {
      height: 40px;
      margin-bottom: 16px;
      border: 1px solid #5f9bc9;
      display: flex;

      align-items: center;
      div {
        margin-left: 10px;
        width: 30px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      input {
        height: 60%;
        width: 90%;
        margin-right: 40px;
        border: none;
        outline: none;
      }
    }
    button {
      width: 100%;
      height: 40px;
      margin-top: 15px;
      background-color: #267f97;
      border: none;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
      outline: none;
    }
    button:hover {
      filter: brightness(1.2);
    }
    span {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      font-size: 14px;
      p {
        width: 20%;
        margin: 0 15px;
        text-align: center;
        cursor: pointer;
        color: #267f97;
      }
    }
    span::before {
      content: "";
      border-top: 1px solid #e8e8e8;
      width: 50%;
      transform: translateY(50%);
    }
    span::after {
      content: "";
      border-top: 1px solid #e8e8e8;
      width: 50%;
      transform: translateY(50%);
    }
  }
  .footer {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.25);
    text-align: center;
  }
}
</style>