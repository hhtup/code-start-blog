<template>
    <el-menu mode="horizontal" default-active="1" @select="handleSelect">
        <div>
            <el-menu-item index="1" key="">
                <router-link to="/home">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2" key="">
                <router-link to="/about">关于</router-link>
            </el-menu-item>
        </div>
        <div>
            <el-switch 
                v-model="theme" 
                inline-prompt 
                active-text="dark" 
                inactive-text="light" 
                @change="changeTheme()">
            </el-switch>
            <el-menu-item index="3" key="">
                <router-link to="/login">登录</router-link>
            </el-menu-item>
            <el-menu-item index="4" key="">
                <router-link to="/register">注册</router-link>
            </el-menu-item>
            <!-- <el-menu-item index="" key=""> -->
            <!-- </el-menu-item> -->
        </div>
    </el-menu>
</template>

<script lang="ts" setup name="IndexHeader">
import { ref } from "vue";
import { useColorMode } from '@vueuse/core'
const theme = ref(false);
const colorMode = useColorMode()
const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
}
function changeTheme() {
    console.log(colorMode.value)
    colorMode.value = theme.value === false ? 'light' : 'dark'
}
</script>

<style scoped>
.el-menu {
    background-color: var(--nav--bg--color);
    color: var(--nav--font--color);
    display: flex;
    justify-content: space-between;
}
.router-link-active {
  text-decoration: none;
  /* color: yellow; */
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