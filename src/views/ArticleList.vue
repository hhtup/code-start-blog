<template>
    <el-space fill direction='vertical' :fill-ratio="100" style="width: 100%">
        <div class="line" v-for="(item, index) in 5" :key="index">
            <div class="box-text">
                <h2>标题 {{ item }}</h2>
                <p>内容</p>
            </div>
            <div class="box-card">
                <img src="https://s21.ax1x.com/2024/09/10/pAm2OWn.png" class="card-image">
            </div>
        </div>
    </el-space>
</template>

<script lang="ts" setup name="ArticleList">
    
</script>

<style scoped>
.line {
    display: flex;
    height: 220px;
    border-radius: 5px;
    gap: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
}

.box-text {
    flex-grow: 1;
    padding: 10px;
}

.box-card {
    height: 220px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-image {
    max-width: 100%;
    max-height: 100%;
}
</style>