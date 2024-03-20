<template>
  <div class="form__group field">

    <select name="" id="" class="form__field" v-model="model">
      <option v-for="option in options" :value="option.name">
        {{ option.description }}
      </option>
    </select>

    <label
      for="name"
      class="form__label"
    >
      {{ label }}
    </label>

  </div>
</template>

<script setup lang="ts">
const {label} = defineProps({
  label: String,
  options: Object,
})
const model = defineModel()
</script>

<style lang="scss" scoped>
$primary: rgb(8 51 68);;
$secondary: rgb(14 116 144);;
$white: #fff;
$gray: #9b9b9b;

.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
  content: {
    color: $white;
    background: $white;
  }
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;


  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $secondary;
    font-weight:700;
  }
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to left, $primary,$secondary);
  border-image-slice: 1;
}
.form__field{
  &:required,&:invalid { box-shadow:none; }
}

body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color:#222222;
}
</style>