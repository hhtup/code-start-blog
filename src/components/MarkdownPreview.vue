<template>
  <div>
    <v-md-preview :text="text"></v-md-preview>
  </div>
</template>

<script lang="ts" setup name="MarkdownPreview">
import { ref } from "vue";

const text = ref(`
# 示例 Markdown 文件

这是一个示例 Markdown 文件。

\`\`\`typescript
import { fileURLToPath, URL } from 'node:url';

console.log('Hello, world!');
\`\`\`
`);
</script>

<style scoped></style>
