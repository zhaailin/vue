<template>
  <div class="hellow">
    <div class="header">
      <div class="img"><img src="../assets/2.png" /></div>
      <ul>
        <li><div><span>控制中心</span></div></li>
        <li><div><span>数字看板</span></div></li>
        <li><div><span>设备分析</span></div></li>
        <li><div><span>生产工艺</span></div></li>
      </ul>
      <div class="end">
        <div><img src="../assets/deer.png" ></div>
        <div>admin</div>
      </div>
      <div @click="out" class="endPicture"><img src="../assets/地球.png" ></div>
    </div>
    <div class="body">
        <div class="aside">
          <div class="control">
            <span>控制中心</span>
            <img src="../assets/菜单.png" alt="">
          </div>
         <ul>
           <li :index="items.id" v-for="items in menulist" :key='items.id' >
             <div @click="clickForm(items.id)"><img :src="items.img" ><span>{{items.name}}</span></div>
             <ul v-if="show">
             <li v-for="(subItems,index) in items.children" :key="index" ><div><span>{{subItems.name}}</span></div></li>
             </ul>
            </li>
         </ul>
        </div>
        <div class="main">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      show:false,
      menulist:[{id:1,name:"租户",img:require("../assets/用户信息.png")},
                {id:2,name:"个人中心",img:require("../assets/用户.png")},
                {id:3,name:"系统运维",img:require("../assets/数据.png"),children:[{name:"App管理"},
                {name:"App菜单"},
                {name:"菜单维护"},
                {name:"卡片管理"},
                {name:"App授权"},
                {name:"单据分类"},
                {name:"单据管理"}]},
                {id:4,name:"基础数据",img:require("../assets/推广统计.png"),children:[{name:"员工"},
                {name:"工序"},
                {name:"工位组"},
                {name:"生产日历"},
                {name:"班次模型"},
                {name:"工位维护"}]},
                {id:5,name:"业务数据",img:require("../assets/我的订单.png")},
                {id:6,name:"网关管理",img:require("../assets/设置.png"),children:[{name:"批次管理"},
                {name:"远程终端"},
                {name:"网关列表"},
                {name:"固件管理"},
                {name:"固件日志"}]},
                {id:7,name:"多语言管理",img:require("../assets/partner.png")},
                {id:8,name:"系统数据",img:require("../assets/备忘录.png")},]
    }
  },
  methods: {
    out() {
      this.$router.push("/");
    },
    clickForm(methodsNums) {
      this[methodsNums]()
    },
    3(){
      this.show=!this.show
    },
    4(){
      this.show=!this.show
    },
    6(){
      this.show=!this.show
    }
  },
};
</script>
<style lang="less" scoped>
.hellow{
  height: 100%;
}

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
    li{
      float: left;
      div{
      height: 52px;
      width: 100px;
      font-size: 14px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      }
    }
    div:hover{
        border-bottom: 3px solid #3a7fbc;
      }
  }
  .end{
    height: 55px;
    width: 150px;
    display: flex;
    align-items: center;
    div{
      height: 40px;
      width: 40px;
      margin-right: 10px;
      font-size: 16px;
      color:#fff;
      display: flex;
      align-items: center;
      img{
      height: 100%;
      width: 100%;
      border-radius: 50%;
      border: 1px solid #fff;
    }
    }
  }
  .endPicture{
    height: 55px;
    display: flex;
    align-items: center;
    img{
      height: 25px;
      width: 25px;
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

.body{
    height: 825px;
    width: 100%;
    display: flex;
    flex-direction: row;
    .aside{
    height: 100%;
    width: 20%;
    background-color: #333744;
      .control{
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
          color: #fff;
          font-size: 20px;
          margin-left: 40px;
        }
        img{
            height: 25px;
            width: 25px;
            margin-right: 10px;
        }
      }
      ul{
      list-style-type: none;
        li {
          div {
          width: 120px;
          height: 50px;
          display: flex;
          align-items: center;
            img{
            height: 30%;
            width: 15%;
            margin-right: 5px;
            }
            span{
            color: #fff;
            }
          }
          ul div{
            height: 35px;
            span{
              color: #fff;
            }
          } 
        }
      } 
    }
    .main{
    height:100%;
    width:80%;
    }
}

</style>>
