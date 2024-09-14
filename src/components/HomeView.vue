<template>
  <div class="container">
      <!-- 内容展示 -->
      <div class="main">
        <ArticleList></ArticleList>
      </div>
      <!-- 侧边栏 -->
       <div class="aside">
          <UserInfoCard></UserInfoCard>
       </div>

  </div>
</template>

<script lang="ts" setup name="HomeView">
  import UserInfoCard from '@/views/UserInfoCard.vue';
  import ArticleList from '@/views/ArticleList.vue';

</script>

<style scoped>
  .container {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .main {
    background-color: var(--main--bg--color);
    color: var(--main--font--color);
    text-align: center;
    max-width: 800px;
    width:100%;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 12px rgb(0, 0, 0, 0.12);
  }
  .aside {
    padding: 0 20px;
    max-width: 360px;
  }
</style>