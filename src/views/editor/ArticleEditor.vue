<template>
  <div>
    <div class="header">
      <input type="text" v-model="title" placeholder="请输入标题...">
      <button @click="publish">发布</button>
    </div>
    <MarkdownEditor :context="text" @update:context="text=$event"/>
  </div>
</template>

<script lang="ts" setup name="ArticleEditor">
import MarkdownEditor from '@/components/MarkdownEditor.vue';
import { ref } from 'vue';

const title = ref('');
const text = ref('');

function publish() {
  // TODO: 发布文章
  console.log(title.value);
  console.log(text.value);
}
</script>

<style scoped>
.header {
  display: flex;
}
.header > button {
  width: 100px;
}
input {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  padding: 0 20px;;
}
</style>