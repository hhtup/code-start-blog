<template>
  <v-md-editor v-model="text" height="88vh"></v-md-editor>
</template>

<script lang="ts" setup name="MarkdownEditor">
  import { ref } from 'vue';

  const text = ref('');
</script>