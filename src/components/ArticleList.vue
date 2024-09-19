<template>
    <el-space fill direction='vertical' :fill-ratio="100" style="width: 100%">
        <div class="line" v-for="(item, index) in 3" :key="index">
            <div class="article-introduction">
                <h2>标题 {{ item }}</h2>
                <p>内容</p>
            </div>
            <div class="article-image">
                <!-- <img :src='imageSrc'> -->
                <el-skeleton style="width: 220px" :loading="false" animated>
                    <template #default>
                        <el-skeleton-item variant="image" style="width: 220px; height: 220px" />
                    </template>
                </el-skeleton>
            </div>
        </div>
    </el-space>
</template>

<script lang="ts" setup name="ArticleList">
    import axios from 'axios';
    import { ref, onMounted } from 'vue';

    const imageSrc = ref('');

    const loadImage = async () => {
        const imageUrl = 'https://api.uomg.com/api/rand.img3?sort=七了个三&format=json';
        try {
            const response = await axios(imageUrl);
            imageSrc.value = response.data.imgurl;
        } catch (error) {
            console.error('Error loading image:', error);
        }
    };
    
    onMounted(()=>{
        loadImage();
    })
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