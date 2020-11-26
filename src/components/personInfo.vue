<template>
  <div class="content">
    <div class="content-header"></div>
    <div class="body">
      <div class="body-aside">
        <div class="body-aside-header">
          <img src="../assets/deer.png" />
          <div>{{ $store.state.userName }}</div>
        </div>
        <ul>
          <li
            v-for="(item, index) in menuList"
            :key="index"
            @click="openInfo_one(index)"
            :class="{ active: index == categoryIndex }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="body-main">
        <form v-show="showInfo_one">
          <div>昵称：<input type="text" v-model="name" /></div>
          <div>
            性别：<input class="sex" type="radio" checked name="sex" />男
            <input class="sex" type="radio" checked name="sex" />女
          </div>
          <div>生日：<input type="date" /></div>
          <div id="phone">
            手机号：<input type="text" v-model="getPhoneNumber" />
          </div>
          <div>邮箱：<input type="text" v-model="getemail" /></div>
          <div><button @click="changeUsername">保存</button></div>
        </form>
        <div class="accountSetting" v-show="changePass">
          <div class="changePassword">
            <span>登录密码</span
            ><button @click="openchangePassword">修改</button>
          </div>
          <div class="remind">
            密码要求至少包含字母，符号或数字中的两项且长度超过8位
          </div>
        </div>
        <div class="changePasswordview" v-show="showchangePassword">
          <div class="changePasswordview-header"><span>修改密码</span></div>
          <div class="changePasswordview-main">
            <div class="ant-form-item">
              <div>旧密码:</div>
              <input type="text" placeholder="请输入租户名称" v-model="oldPassword"/>
            </div>
            <div class="ant-form-item">
              <div>新密码:</div>
              <input type="text" placeholder="请输入租户名称" v-model="passwordChanged" />
            </div>
            <div class="ant-form-item" id="repeat">
              <div>重复新密码:</div>
              <input type="text" placeholder="请输入租户名称" v-model="repeatPassword" />
            </div>
          </div>
          <div class="changePasswordview-footer">
            <button @click="clossChangePassword" id="cancel">取消</button>
            <button @click="changeStatePassword" id="save">保存</button>
          </div>
        </div>
      </div>
    </div>
    <div class="cover" v-show="showchangePassword"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showchangePassword: false,
      showInfo_one: true,
      changePass: false,
      categoryIndex: 0,
      menuList: ["基本信息", "账号设置", "子账号设置"],
      name: this.$store.state.userName,
      oldPassword:'',
      passwordChanged:'',
      repeatPassword:''
    };
  },
  created() {
    this.enter();
  },
  methods: {
    //修改用户名
    changeUsername() {
      if (this.name.length > 8) return;
      this.$store.commit("mutationsUsername", this.name);
    },
    //修改密码
    changeStatePassword(){
      if(this.oldPassword!=this.$store.state.password)
      {confirm("原密码错误")
      return}
      else if(this.passwordChanged!=this.repeatPassword)
      {confirm("密码输入不一致，请重新确认密码")
      return}
      else if(this.oldPassword==this.$store.state.password&&this.passwordChanged==this.repeatPassword)
      this.$store.commit("mutationsPassword",this.passwordChanged)
      this.showchangePassword = !this.showchangePassword;
    },
    //绑定回车键
    enter() {
      document.onkeydown = (e) => {
        //13表示回车键，baseURI是当前页面的地址，为了更严谨，也可以加别的，可以打印e看一下
        // console.log(e)
        if (e.keyCode === 13) {
          this.changeUsername();
        }
      };
    },
    //打开基本信息菜单
    openInfo_one(index) {
      this.categoryIndex = index;
      if (index == 0 && this.showInfo_one==false)
        {this.showInfo_one = true
        this.changePass = false
        return}
      if (index == 1 && this.changePass == false)
        this.changePass = true
        this.showInfo_one=false
    },
    openchangePassword() {
      this.showchangePassword = !this.showchangePassword;
    },
    clossChangePassword() {
      this.showchangePassword = !this.showchangePassword;
    },
  },
  computed: {
    //获取手机号码
    getPhoneNumber() {
      return this.$store.state.phoneNumber;
    },
    //获取邮箱
    getemail() {
      return this.$store.state.email;
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  height: 100%;
  margin: 0 14px;
  .content-header {
    height: 10px;
    background-color: #f0f2f5;
  }
  .body {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    height: calc(100% - 10px);
    .body-aside {
      width: 20%;
      border-right: 1px solid #bfbfbf;
      .body-aside-header {
        text-align: center;
        margin: 20px 0;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 1px solid #bfbfbf;
        }
        div {
          font-size: 24px;
          margin-top: 8px;
        }
      }
      .active {
        background-color: #edf8fc;
      }
      ul {
        padding: 0;
        list-style-type: none;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 10px 0;
          height: 66px;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
    .body-main {
      width: 80%;
      form {
        text-align: center;
        margin: 20px 0;
        div {
          margin-bottom: 16px;
          height: 40px;
          input {
            width: 310px;
            padding: 4px 11px;
            height: 20px;
            outline: none;
            border: 1px solid #d9d9d9;
            color:rgba(0, 0, 0, 0.65);
          }
          .sex {
            width: 20px;
          }
          button {
            background: #3a7fbc;
            border: none;
            color: #fff;
            width: 50px;
            height: 30px;
            outline: none;
          }
        }
        #phone {
          margin-left: -14px;
        }
      }
      .accountSetting {
        height: 45px;
        font-size: 14px;
        border-bottom: 1px solid #e8e8e8;
        padding: 16px 0;
        .changePassword {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 14px;
            width: 100%;
            line-height: 22px;
            color: #000000a6;
          }
          button {
            width: 65px;
            color: #fff;
            background-color: #3a7fbc;
            border: none;
            height: 32px;
            padding: 0 14px;
            font-size: 14px;
            border-radius: 0;
          }
        }
        .remind {
          color: rgba(0, 0, 0, 0.25);
          width: 100%;
          line-height: 22px;
        }
      }
      .changePasswordview {
        position: fixed;
        left: 444px;
        top: 100px;
        width: 680px;
        height: 400px;
        background-color: #fff;
        z-index: 10;
        .changePasswordview-header {
          font-size: 16px;
          height: 55px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #bfbfbf;
          span {
            margin: 20px;
          }
        }
        .changePasswordview-main {
          margin-top: 65px;
          height: 223px;
          .ant-form-item {
            margin-bottom: 16px;
            height: 40px;
            font-size: 14px;
            line-height: 1.5;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            input {
              width: 310px;
              padding: 4px 11px;
              height: 20px;
              margin-left: 10px;
            }
          }
          #repeat {
            margin-left: -28px;
          }
        }
        .changePasswordview-footer {
          height: 55px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          border-top: 1px solid #bfbfbf;
          button {
            border: none;
            width: 64px;
            outline: none;
            height: 32px;
          }
          #cancel {
            background-color: #bfbfbf;
            border: none;
            margin-right: 3px;
          }
          #save {
            background-color: #3a7fbc;
            margin: 15px;
            color: #bfbfbf;
          }
        }
      }
    }
  }
}
.cover {
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
  background-color: #000000;
  position: fixed;
  left: 0;
  top: 0;
}
</style>