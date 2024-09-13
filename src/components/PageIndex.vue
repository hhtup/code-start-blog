<template>
  <div class="layout">
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


<script lang="ts" setup name="PageIndex">
import IndexHeader from "@/views/IndexHeader.vue"
</script>

<style scoped>
.el-header {
  padding: 0;
  background-color: #003366;
}
.el-footer {
  background-color: #003366;
  height: 200px;
  color: white;
  padding: 20px;
}
</style>