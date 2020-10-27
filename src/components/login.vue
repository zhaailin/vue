<template>
  <div class="content">
    <div class="body">
      <div class="header"><img src="../assets/用户.png" alt="" /></div>
      <input v-model="loginform.user" placeholder="用户名" type="form" />
      <input v-model="loginform.password" placeholder="密码" type="password" />
      <button type="success" @click="login">确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        user: "admin",
        password: "123456",
      },
    };
  },
  methods: {
    login() {
      if (this.loginform.user == "admin" && this.loginform.password == "123456")
        this.$router.push("/index");
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #545c64;
}

.body {
  background-color: #fff;
  height: 300px;
  width: 400px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.header {
  width: 100px;
  height: 100px;
  position: absolute;
  transform: translate(0, -150px);
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0 0 10px #fff;

  img {
    width: 100%;
    height: 100%;
    background-color: #202020;
    border-radius: 50%;
  }
}
.body input {
  margin-bottom: 2px;
  line-height: 20px;
  border-radius: 6px;
  border: 2px solid #a1a1a1;
}

.body button {
  margin-top: 5px;
  font-size: 16px;
  background-color: #e7e7e7;
  color: black;
  border-radius: 6px;
  border: none;
}
</style>