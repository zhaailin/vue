<template>
  <div class="content">
    <div class="contentHeader">
      <div>
        <button @click="appear">
          <img src="../assets/加号.png" /><span>新建用户</span>
        </button>
      </div>
      <div id="search">
        <input type="text" placeholder="关键词" v-model="input" /><button
          @click="searchInfo"
        >
          搜索
        </button>
      </div>
    </div>
    <table class="reference">
      <tbody>
        <tr>
          <th width="270px" height="37px">操作</th>
          <th>租户编号</th>
          <th>租户名称</th>
          <th>联系人</th>
          <th>联系电话</th>
          <th>过期时间</th>
        </tr>
        <tr
          :index="item.id"
           v-for="(item, index) in currentPageData"
          :key="index"
        >
          <td height="37px">
            <span @click="edit(item)">编辑</span>
            <div></div>
            <span>授权配置</span>
            <div></div>
            <span id="delect" @click="delect(index)">删除</span>
          </td>
          <td>{{ item.id }}</td>
          <td>{{ item.tenantName }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </table>
    <footer>
      <span>共{{ totalPage }}页</span>
      <img src="../assets/left.png" @click="prevPage()" />
      <span>第{{ currentPage }}页</span>
      <img src="../assets/right.png" @click="nextPage()" />
    </footer>
    <div v-if="show" class="ant-modal">
      <div class="ant-modal-content">
        <div class="ant-modal-content-header">
          <div>新建用户</div>
        </div>
        <div class="ant-modal-content-body">
          <form class="ant-form">
            <div class="ant-form-item">
              <div>租户编号:</div>
              <input
                v-model="list.id"
                type="text"
                placeholder="请输入租户编号"
              />
            </div>
            <div class="ant-form-item">
              <div>租户名称:</div>
              <input
                v-model="list.tenantName"
                type="text"
                placeholder="请输入租户名称"
              />
            </div>
            <div class="ant-form-item">
              <div id="people">联系人:</div>
              <input
                v-model="list.name"
                type="text"
                placeholder="请输入联系人"
              />
            </div>
            <div class="ant-form-item">
              <div>联系电话:</div>
              <input
                v-model="list.phone"
                type="text"
                placeholder="请输入联系号码"
              />
            </div>
            <div class="ant-form-item">
              <div>联系地址:</div>
              <input type="text" placeholder="请输入联系地址" />
            </div>
            <div class="ant-form-item">
              <div>租户类别:</div>
              <select id="select" name="cars">
                <option selected>普通租户</option>
                <option>供应商</option>
                <option>机床厂商</option>
              </select>
            </div>
          </form>
        </div>
        <div class="ant-modal-content-footer">
          <button @click="appear" id="cancel">取消</button>
          <button @click="add" id="save">保存</button>
        </div>
      </div>
    </div>
    <div v-if="showInfo" class="ant-modal">
      <div class="ant-modal-content">
        <div class="ant-modal-content-header">
          <div>用户信息</div>
        </div>
        <div class="ant-modal-content-body">
          <form class="ant-form">
            <div class="ant-form-item">
              <div>租户编号:</div>
              <input
                v-model="listInfo.id"
                type="text"
                placeholder="请输入租户编号"
              />
            </div>
            <div class="ant-form-item">
              <div>租户名称:</div>
              <input
                v-model="listInfo.tenantName"
                type="text"
                placeholder="请输入租户名称"
              />
            </div>
            <div class="ant-form-item">
              <div id="people">联系人:</div>
              <input
                v-model="listInfo.name"
                type="text"
                placeholder="请输入联系人"
              />
            </div>
            <div class="ant-form-item">
              <div>联系电话:</div>
              <input
                v-model="listInfo.phone"
                type="text"
                placeholder="请输入联系号码"
              />
            </div>
            <div class="ant-form-item">
              <div>联系地址:</div>
              <input type="text" placeholder="请输入联系地址" />
            </div>
            <div class="ant-form-item">
              <div>租户类别:</div>
              <select id="select" name="cars">
                <option selected>普通租户</option>
                <option>供应商</option>
                <option>机床厂商</option>
              </select>
            </div>
          </form>
        </div>
        <div class="ant-modal-content-footer">
          <button @click="appearInfo" id="cancel">取消</button>
          <button @click="modify" id="save">保存</button>
        </div>
      </div>
    </div>
    <div class="cover" v-if="show || showInfo"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      in: "dsasd",
      show: false,
      showInfo: false,
      input: "",
      //统共页数，默认为1
      totalPage: 1,
      //当前页数 ，默认为1
      currentPage: 1,
      //每页显示数量
      pageSize: 3,
      //当前页显示内容
      currentPageData: [],
      //原始数据
      tableData: [
        {
          id: "1",
          tenantName: "老楚",
          name: "楚云飞",
          phone: "13049498454",
          time: "2020-12-1",
        },
        {
          id: "2",
          tenantName: "老李",
          name: "李云龙",
          phone: "13049498453",
          time: "2020-12-2",
        },
        {
          id: "30",
          tenantName: "老丁",
          name: "丁伟",
          phone: "13049498453",
          time: "2020-12-12",
        },
        {
          id: "4",
          tenantName: "老孔",
          name: "孔捷",
          phone: "13049498452",
          time: "2020-12-22",
        },
      ],
      //增加数据列表
      list: {
        id: "",
        tenantName: "",
        name: "",
        phone: "",
      },
      //编辑数据列表
      listInfo: {
        id: "",
        tenantName: "",
        name: "",
        phone: "",
      },
    };
  },
  mounted() {
    // 计算一共有几页
    this.totalPage = Math.ceil(this.tableData.length / this.pageSize);
    // 计算得0时设置为1
    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
    this.setCurrentPageData();
  },
  methods: {
    //添加菜单的显示隐藏
    appear() {
      this.show = !this.show;
    },
    //添加
    add() {
      const reg = /^[1][3-9][0-9]{9}$/;
      if (
        !this.list.id ||
        !this.list.tenantName ||
        !this.list.name ||
        !this.list.phone
      )
        return;
      if (!reg.test(this.list.phone) && this.list.phone != "") {
        return;
      }
      this.tableData.push({
        id: this.list.id,
        tenantName: this.list.tenantName,
        name: this.list.name,
        phone: this.list.phone,
      });
      this.show = !this.show;
    },
    //删除
    delect(index) {
      //   console.log(index)
      this.tableData.splice(index, 1);
    },
    //保存
    modify() {
      const reg = /^[1][3-9][0-9]{9}$/;
      if (
        !this.listInfo.id ||
        !this.listInfo.tenantName ||
        !this.listInfo.name ||
        !this.listInfo.phone
      )
        return;
      if (!reg.test(this.listInfo.phone) && this.listInfo.phone != "") {
        return;
      }
      for (var i = 0; i < this.tableData.length; i++)
        if (this.tableData[i].id == this.listInfo.id)
          this.tableData[i] = this.listInfo;
      this.showInfo = !this.showInfo;
    },
    //编辑
    edit(item) {
      (this.showInfo = !this.showInfo),
        (this.listInfo = {
          id: item.id,
          tenantName: item.tenantName,
          name: item.name,
          phone: item.phone,
        });
    },
    //显示隐藏修改菜单
    appearInfo() {
      this.showInfo = !this.showInfo;
    },
    //表格每页显示的数据
    setCurrentPageData() {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.tableData.slice(begin, end);
    },
    //上一页
    prevPage() {
      // console.log(this.currentPage);
      if (this.currentPage == 1) return;

      this.currentPage--;
      this.setCurrentPageData();
    },
    // 下一页
    nextPage() {
      if (this.currentPage == this.totalPage) return;

      this.currentPage++;
      this.setCurrentPageData();
    },
    searchInfo() {
      this.currentPageData = this.search;
    },
  },
  computed: {
    //查询
    search() {
      var _input = this.input;
      if (!_input) {
        return this.currentPageData;
      }
      return this.currentPageData.filter(function (n) {
        return Object.keys(n).some(function (key) {
          return n.name.match(_input);
        });
      });
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  background-color: #fff;
  height: 100%;
  margin: 0 14px;
  border-radius: 5px;
  .contentHeader {
    height: 50px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    button {
      height: 32px;
      justify-content: center;
      color: #fff;
      display: flex;
      align-items: center;
      background-color: #3a7fbc;
      border: none;
      outline: none;
    }
    img {
      height: 15px;
      width: 15px;
      margin-right: 10px;
    }
    span {
      color: #fff;
    }
    #search {
      display: flex;
      flex-direction: row;
    }
  }
  .reference {
    border-collapse: collapse;
    width: 100%;
  }
  table,
  td,
  th {
    border: 1px solid #bfbfbf;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    div {
      position: relative;
      top: -0.06em;
      display: inline-block;
      width: 1px;
      height: 0.9em;
      margin: 0 8px;
      vertical-align: middle;
      background-color: #bfbfbf;
    }
    span {
      color: #3a7fbc;
      cursor: pointer;
    }
    #delect {
      color: #ff4d4f;
    }
  }
  footer {
    color: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: flex-end;
  }
  .ant-modal {
    box-sizing: border-box;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    width: 680px;
    transform-origin: -20.5px -3px;
    margin: 0 auto;
    padding-bottom: 24px;
    position: fixed;
    bottom: 250px;
    left: 500px;
    z-index: 100;
    .ant-modal-content {
      height: 500px;
      background-color: #fff;
      .ant-modal-content-header {
        height: 55px;
        display: flex;
        align-items: center;
        div {
          line-height: 22px;
          font-size: 16px;
          margin-left: 50px;
        }
      }
      .ant-modal-content-body {
        padding: 24px;
        font-size: 14px;
        line-height: 1.5;
        height: 340px;
        border-top: 1px solid #bfbfbf;
        border-bottom: 1px solid #bfbfbf;
        .ant-form {
          height: 100%;
          .ant-form-item {
            margin-bottom: 16px;
            height: 40px;
            font-size: 14px;
            line-height: 1.5;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            #people {
              margin-left: 14px;
            }
            div {
              margin-right: 10px;
            }
            input {
              width: 310px;
              padding: 4px 11px;
              height: 20px;
              border: 1px solid #d9d9d9;
              color: rgba(0, 0, 0, 0.65);
              outline: none;
            }
            #select {
              width: 336px;
              height: 32px;
              padding: 4px 11px;
              border: 1px solid #d9d9d9;
              color: rgba(0, 0, 0, 0.65);
            }
          }
        }
      }
      .ant-modal-content-footer {
        height: 55px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
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
  footer {
    display: flex;
    align-items: center;
    img {
      width: 10px;
      height: 10px;
      margin: 0 6px;
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
}
</style>