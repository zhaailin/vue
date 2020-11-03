<template>
  <div class="aside">
    <div class="control">
      <span>控制中心</span>
      <img src="../assets/菜单.png" alt="" />
    </div>
    <ul>
      <li :index="items.id" v-for="items in menulist" :key="items.id" >
        <div @click="clickForm(items.id)">
          <img :src="items.img" /><span>{{ items.name }}</span>
        </div>
        <ul v-if="show">
          <li v-for="(subItems, index) in items.children" :key="index" >
            <div>
              <span>{{ subItems.name }}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'asideform',
  data() {
    return {
      show: false,
      current:0,
      menulist: [
        { id: 1, name: "租户", img: require("../assets/用户信息.png") },
        { id: 2, name: "个人中心", img: require("../assets/用户.png") },
        {
          id: 3,
          name: "系统运维",
          img: require("../assets/数据.png"),
          children: [
            { name: "App管理" },
            { name: "App菜单" },
            { name: "菜单维护" },
            { name: "卡片管理" },
            { name: "App授权" },
            { name: "单据分类" },
            { name: "单据管理" },
          ],
        },
        { id: 4, name: "基础数据", img: require("../assets/推广统计.png") },
        { id: 5, name: "业务数据", img: require("../assets/我的订单.png") },
        { id: 6, name: "网关管理", img: require("../assets/设置.png") },
        { id: 7, name: "多语言管理", img: require("../assets/partner.png") },
        { id: 8, name: "系统数据", img: require("../assets/备忘录.png") },
      ],
    };
  },
  methods: {
    //左侧导航菜单的显示隐藏
    clickForm(methodsNums) {
      this[methodsNums]();
    },
    1(){
     this.$router.push('/tenant')
    },
    2(){
     this.$router.push('/hellow')
    },
    3() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="less" scoped>
.aside {
  height: 100%;
  width: 20%;
  background-color: #333744;
  .control {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      color: #fff;
      font-size: 20px;
      margin-left: 40px;
    }
    img {
      height: 25px;
      width: 25px;
      margin-right: 10px;
    }
  }
  ul {
    list-style-type: none;
    li {
      div {
        width: 120px;
        height: 50px;
        display: flex;
        align-items: center;
        img {
          height: 30%;
          width: 15%;
          margin-right: 5px;
        }
        span {
          color: #fff;
        }
      }
      ul div {
        height: 35px;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>