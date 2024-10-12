<template>
  <el-menu
    mode="horizontal"
    :router="true"
    default-active="/home"
    @select="handleSelect"
  >
    <div>
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </div>
    <div>
      <el-switch
        v-model="theme"
        inline-prompt
        active-text="dark"
        inactive-text="light"
        @change="changeTheme()"
      >
      </el-switch>
      <el-menu-item index="/login">登录</el-menu-item>
      <el-menu-item index="/register"> 注册 </el-menu-item>
      <el-sub-menu index="1">
        <template #title>创作中心</template>
        <el-menu-item index="/editor/article"> 写文章 </el-menu-item>
        <el-menu-item index="/editor/code"> 写代码 </el-menu-item>
        <el-menu-item index="/editor/drafts"> 草稿箱 </el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu>
</template>

<script lang="ts" setup name="IndexHeader">
import { ref } from "vue";
import { useColorMode } from "@vueuse/core";
const theme = ref(false);
const colorMode = useColorMode();
const handleSelect = (key: string, keyPath: string[]) => {};
function changeTheme() {
  colorMode.value = theme.value === false ? "light" : "dark";
}
</script>

<style scoped>
.el-menu {
  background-color: var(--nav--bg--color);
  color: var(--nav--font--color);
  display: flex;
  justify-content: space-between;
}
.el-menu :deep(.el-menu-item:hover) {
  background-color: var(--nav--hover--bg--color);
}
.router-link-active {
  text-decoration: none;
}
.el-menu-item a {
  text-decoration: none;
  color: var(--nav--font--color);
}
.el-menu > div {
  display: flex;
  justify-content: space-evenly;
}
.el-switch {
  /* padding: 10px; */
  height: 100%;
}
</style>
