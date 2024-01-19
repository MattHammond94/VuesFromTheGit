<template>
  <div class="container">
    <Home />
  </div>
  {{ new Date().toUTCString() }}

  <div>
    You clicked {{ count }} times
  </div>

  <button @click="onClick">Click me</button>
</template>

<script setup>
  import Home from './components/Home.vue'

  import { computed, ref, watchEffect } from 'vue';

  const count = ref(0);

  const onClick = () => {
    count.value = count.value + 1;
  }

  console.log('A Vue log');

  const double = computed(() => {
    count.value * 2
  });

  watchEffect(() => {
    console.log(`You clicked ${count.value} times`)
  });
</script>