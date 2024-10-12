<template>
  <div class="app">
    <el-container>
      <el-header>
        <index-header></index-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup name="App">
import IndexHeader from "@/components/IndexHeader.vue";
</script>

<style>
.app {
  background-color: var(--root--bg--color);
}
.el-header {
  padding: 0;
}
.el-footer {
  height: 200px;
  padding: 20px;
}
.el-footer {
  background: var(--footer--bg--color);
  color: var(--footer--font--color);
}
</style>
