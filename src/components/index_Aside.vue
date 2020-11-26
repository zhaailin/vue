<template>
  <div class="aside">
    <div class="control">
      <span>控制中心</span>
      <img src="../assets/菜单.png" alt="" />
    </div>
    <ul>
      <li v-for="(items, index) in menulist" :key="index">
        <div @click="clickForm(index)" :class="{ active: index == getIndex }">
          <img :src="items.img" /><span>{{ items.name }}</span>
        </div>
        <ul v-if="show">
          <li v-for="(subItems, index) in items.children" :key="index">
            <div class="tableChildren">
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
  name: "asideform",
  data() {
    return {
      show:false,
      getIndex: 0,
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
        { id: 4, name: "基础数据", img: require("../assets/推广统计.png")},
        { id: 5, name: "业务数据", img: require("../assets/我的订单.png")},
        { id: 6, name: "网关管理", img: require("../assets/设置.png")},
        { id: 7, name: "多语言管理", img: require("../assets/partner.png")},
        { id: 8, name: "系统数据", img: require("../assets/备忘录.png")},
      ],
    };
  },
  methods: {
    //左侧导航菜单的显示隐藏
    clickForm(index) {
      this.getIndex = index;
      if (index == 0) this.$router.push("/tenant");
      if (index == 1) this.$router.push("/personInfo").catch((err) => err);
      if (index == 2) this.show=!this.show
    },
  },
};
</script>
<style lang="less" scoped>
.aside {
  height: 100%;
  width: 266px;
  background-color: #fff;
  .control {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;

    span {
      color: #4a90e2;
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
    padding: 0;
    li {
      div {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          height: 30%;
          width: 6%;
          margin-right: 5px;
          margin-left: 20px;
        }
        span {
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
        }
      }
      ul div {
        height: 35px;
        span {
          color: rgba(0, 0, 0, 0.65);
        }
      }
    }
  }
  .active {
    background-color: #edf8fc;
  }
  .tableChildren {
    margin-left: 50px;
  }
}
</style>