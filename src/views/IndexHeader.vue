<template>
    <el-row>
        <el-col :span="2">
            <router-link to="/home">首页</router-link>
        </el-col>
        <el-col :span="2">
            <router-link to="/about">关于</router-link>
        </el-col>
        <el-col :span="2" :offset="16">
            <router-link to="/login">登录</router-link>
        </el-col>
        <el-col :span="2">
            <router-link to="/register">注册</router-link>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup name="IndexHeader">

</script>

<style scoped>
.el-col a {
    color: white;
    text-decoration: none;
}
.el-row {
    height: 100%;
    text-align: center;
    align-items: center;
}
</style>