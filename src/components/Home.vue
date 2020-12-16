<template>
  <el-container class="home-container">
    <el-aside :width="isCollapsed ? '64px' : '200px'">
      <div class="toggle-button" @click="toggleCollapse">
        |||
      </div>
      <el-menu
        :default-active="activePath"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        unique-opened
        :router="true"
        :collapse=isCollapsed
        :collapse-transition="false"
        active-text-color="#409eff">
        <el-menu-item index="/welcome">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-goods"></i>
            <span>背包密码</span>
          </template>
          <el-menu-item index="/knapsackIntro">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">介绍</span>
          </el-menu-item>
          <el-menu-item index="/knapsackUse">
            <i class="el-icon-s-platform"></i>
            <span slot="title">使用</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-goods"></i>
            <span>Rabin 密码</span>
          </template>
          <el-menu-item index="/knapsackIntro">
            <i class="el-icon-notebook-2"></i>
            <span slot="title">介绍</span>
          </el-menu-item>
          <el-menu-item index="/knapsackUse">
            <i class="el-icon-s-platform"></i>
            <span slot="title">使用</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="/info">
          <i class="el-icon-info"></i>
          <span slot="title">相关说明</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div>
          <span>密码学课程设计展示</span>
        </div>
        <el-button @click="signOut" round>退出</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 菜单是否折叠
      isCollapsed: false,
      // 被激活的链接地址
      activePath: ''
    };
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath');
  },
  methods: {
    // 点击按钮，实现菜单的折叠，切换以及展开
    toggleCollapse () {
      this.isCollapsed = !this.isCollapsed;
    },
    // 保存连接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath);
      this.activePath = activePath;
    },
    // 退出
    signOut () {
      this.$notify.warning({
        title: '警告',
        message: '谁让你关掉我的???',
        showClose: false,
        position: 'bottom-right',
        offset: 100
      });
    }
  }
};
</script>

<style lang="less" scoped>
  .home-container {
    height: 100%;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    background-color: #409eff;
    align-items: center;
    padding-left: 10px;
    color: #ffffff;
    font-size: 28px;
    font-family: "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
    > div {
      display: flex;
      align-items: center;
      padding: 15px;
    }
  }
  .el-aside {
    background-color: #304156;
    .el-menu {
      border-right: 0;
    }
    .toggle-button {
      background-color: #304156;
      font-size: 10px;
      line-height: 24px;
      color: #ffffff;
      text-align: center;
      letter-spacing: 0.2em;
      cursor: pointer;
    }
  }
  .el-main {
    background-color: #ffffff;
  }
  .toggle-button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
