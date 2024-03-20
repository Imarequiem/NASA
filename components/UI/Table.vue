<template>
  <div class="container">
    <h1 class="item__count" v-if="count">Find: {{ count }}</h1>
    <table>

      <thead>
        <tr>
          <th v-for="item in data?.fields" @click="$emit('sortRow', $event)">{{ item }}</th>
        </tr>
      </thead>

    <tbody>

      <tr v-for="listq in data.list">
        <td v-for="item in listq" class="list__item">
          <p v-if="item !== null ">{{ item }}</p>
          <p v-else>unkown</p>
        </td>
      </tr>

    </tbody>

  </table>
  </div>
</template>

<script setup lang="ts">
const data = defineProps({
  list: Array,
  fields: Array,
  count: Number,
})
const emit = defineEmits(['sortRow'])
const { list } = toRefs(data)

const gridCol: number = data.fields!.length
</script>

<style scoped>
.item__count {
  text-align: center;
  font: 1.5em sans-serif;
  display: block;
  padding: 10px 0;
  background-color: rgb(15 23 42);
  color: rgb(148 163 184);
}

body {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

table {
  display: grid;
  border-collapse: collapse;
  grid-template-columns: repeat(v-bind(gridCol), auto);
    /* minmax(100px, 0.5fr)
    minmax(100px, 0.5fr)
    minmax(100px, 0.5fr)
    minmax(100px, 0.5fr)
    minmax(100px, 0.1fr)
    minmax(100px, 0.5fr)
    minmax(100px, 0.1fr)
    minmax(100px, 0.5fr)
    minmax(100px, 0.5fr); */
}

thead,
tbody,
tr {
  display: contents;
}

th,
td {
  padding: 15px;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  background-color: rgb(39 39 42);
  /* white-space: nowrap; */
}

th {
  position: sticky;
  top: 0;
  background: #959494;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;

}

th:last-child {
  border: 0;
}

td {
  padding-top: 10px;
  padding-bottom: 10px;
  color: #808080;
}

tr:nth-child(even) td {
  background: #EEEEEE;
}
</style>