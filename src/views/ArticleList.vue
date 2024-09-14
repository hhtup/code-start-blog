<template>
    <el-space fill direction='vertical' :fill-ratio="100" style="width: 100%">
        <div class="line" v-for="(item, index) in 5" :key="index">
            <div class="article-introduction">
                <h2>标题 {{ item }}</h2>
                <p>内容</p>
            </div>
            <div class="article-image">
                <img src="https://s21.ax1x.com/2024/09/10/pAm2OWn.png">
            </div>
        </div>
    </el-space>
</template>

<script lang="ts" setup name="ArticleList">
    import { ref } from 'vue'
</script>

<style scoped>
.line {
    display: flex;
    height: 220px;
    border-radius: 6px;
    gap: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    color: var(--article--font--color);
    background-color: var(--article--bg--color);
}

.article-introduction {
    flex-grow: 1;
    padding: 10px;
}

.article-image {
    height: 220px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.article-image > img {
    max-width: 100%;
    max-height: 100%;
}
</style>