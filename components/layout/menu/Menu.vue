<template>
  <div class="menu_list">
    <nuxt-link
      v-for="item in MENU_DATA"
      :key="item.name"
      :to="item.url"
      class="flex items-center py-1 px-3 rounded-lg w-full hover:br-gray-700 hover:shadow transition-all mb-2 decoration-slate-100"
    >
      <Icon
        :name="item.icon"
        class="mr-3"
      />
      <span> {{ item.name }} </span>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { MENU_DATA } from './constants/menu.data';
defineOptions({ name: 'MenuVue' })
</script>

<style scoped>
.menu_list {
  margin-top: 50%;
}
</style>