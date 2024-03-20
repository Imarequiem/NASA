<template>
  <aside class="menu">
    <NuxtLink to="/">
      <img
        src="/public/nasa-6.svg"
        class="logo w-56 h-56"
        alt="NASA logo"
      >
    </NuxtLink>
    <Menu />
  </aside>
</template>

<script setup lang="ts">
import Menu from './Menu.vue'
</script>

<style scoped>
.menu {
  padding: 10px 20px;
  background: #afafaf;
  min-width: 240px;
  position: sticky;
}
</style>
