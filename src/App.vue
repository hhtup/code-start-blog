<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup name="App">
  import { useDark, useToggle, useColorMode } from '@vueuse/core'

  const isDark = useDark()
  const colorMode = useColorMode({
    modes: {
      dark: 'dark',
      light: 'light',
    },
    attribute: 'theme',
  })
  
  // useDark({
  //   onChanged: (isDark) => {
  //     useToggle(isDark)
  //   },
  // })
</script>

<style>
  .app {
    background-color: var(--root--bg--color);
  }
</style>