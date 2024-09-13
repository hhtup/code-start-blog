<template>
  <div class="user-info-card">
    <el-card>
        <template #header >
            <el-avatar size="large" src="https://s21.ax1x.com/2024/09/10/pAm2LJs.png" fit="fill"></el-avatar>
            <el-text>username</el-text>
        </template>
        <div>
            <el-row>
                <el-col :span="6"><span>我的文章</span></el-col>
                <el-divider direction="vertical" />
                <el-col :span="6"><span>我的收藏</span></el-col>
                <el-divider direction="vertical" />
                <el-col :span="6"><span>我的关注</span></el-col>
            </el-row>
        </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="UserInfoCard">
    
</script>

<style scoped>
    .el-card {
        text-align: center;
    }
    :deep(.el-card__header) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 200px;
    }
    .el-row {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>