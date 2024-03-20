<template>
  <section class="grid h-dvh">
    <SideBar />
    <div>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import SideBar from '~/components/layout/menu/SideBar.vue';
</script>

<style scoped lang="scss">
.grid {
  grid-template-columns: 1fr 6fr;
}
</style>
