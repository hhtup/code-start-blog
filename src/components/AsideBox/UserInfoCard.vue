<template>
  <div class="user-info-card">
    <el-card>
        <template #header >
            <el-avatar size="large" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="fill"></el-avatar>
            <el-text>{{ user.username }}</el-text>
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
    import axios from 'axios';
    import { ref, onMounted } from 'vue'
    import { useUserStore } from "@/store/user"

    const userStore = useUserStore();
    const user  = userStore.user;
    const avatarSrc = ref('')
    const getAvatarSrc = async () => {
        const imageUrl = 'https://api.uomg.com/api/rand.img3?sort=七了个三&format=json';
        try {
            const response = await axios(imageUrl);
            avatarSrc.value = response.data.imgurl;
        } catch (error) {
            console.error('Error loading image:', error);
        }
    }
    onMounted(() => {
        getAvatarSrc();
    })
</script>

<style scoped>
    .el-card {
        text-align: center;
        background-color: var(--aside--bar--bg--color);
        color: var(--aside--bar--font--color);
        min-width: 190px;
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