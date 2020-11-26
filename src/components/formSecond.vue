<template>
   <div class="body">
        <div>
          <div class="inputText">
            <div class="inputText-picture"><img src="../assets/地球.png" /></div>
            <input placeholder="公司" type="text" />
          </div>
          <div class="inputText">
            <div class="inputText-picture"><img src="../assets/手机.png" /></div>
            <input placeholder="手机号"  type="text" oninput="value=value.replace(/[^\d]/g,'')"/>
          </div>
          <div class="inputText">
            <div class="inputText-picture"><img src="../assets/搜索.png" /></div>
            <input id="phone"
              placeholder="验证码"
              type="password"
            />
            <button class="btn">发送验证码</button>
          </div>
        </div>
        <div>
          <button @click.enter="login">确认</button>
        </div>
        <div>
          <span><p @click="join">账户登录</p></span>
        </div>
      </div>
</template>
<script>
export default {
    methods:{
        login() {
        this.$router.push("/index");
    },
       join() {
      this.$router.push("/formFirst");
    },
    }
}
</script>
<style lang="less" scoped>
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
      .inputText-picture {
        margin-left: 10px;
        width: 5%;
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
    #phone{
        margin-right: 0px;
        width: 70%;
    }
    .btn{
        margin: 0;
        width:30% ;
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
</style>