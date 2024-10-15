<template>
  <v-md-editor v-model="text" height="88vh" @change="emit('update:context', text);"></v-md-editor>
</template>

<script lang="ts" setup name="MarkdownEditor">
  import { ref } from 'vue';

  const text = ref('');
  const emit = defineEmits(['update:context']);
</script>