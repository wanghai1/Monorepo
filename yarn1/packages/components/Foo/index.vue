<template>
  <h2>Bar_component</h2>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'foo',
  setup() {
    const count = ref(0);
    return {
      count,
    }
  },
})
</script>

<style scoped>

</style>
