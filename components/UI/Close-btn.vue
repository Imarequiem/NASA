<template>
  <button
    class="close-button"
    aria-label="Close alert"
    type="button"
    data-close
  >

    <span
      aria-hidden="true"
      class="icon"
    >
      &times;
    </span>

  </button>
</template>

<style scoped lang="scss">
.close-button {
  border-radius: 20px;
  background-color: rgb(239 68 68);
  width: 25px;
  height: 25px;
}
.icon {
  color: #afafaf;
}
</style>
