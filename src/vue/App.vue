<template>
  <h2>vue 的内容</h2>
  <h2>{{ title }}</h2>

  <my-component />
</template>

<script>
import MyComponent from "./MyComponent.vue"

export default {
  components: { MyComponent },
  data() {
    return {
      title: "hello",
    }
  },
}
</script>

<style></style>
