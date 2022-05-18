<template>
  <div> 
      <h2>Bar_component</h2>
      <h3> {{ count }}</h3>
      <button @click="add_count">自增</button>
  </div>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import add from "@mono-demo/cor-utills";

export default defineComponent({
  name: 'bar',
  setup() {
    const count = ref(0);
    const add_count = ()=> count.value = add(count.value, 1)
    return {
      count,
      add_count,
    }
  },
})
</script>

<style scoped>

</style>
