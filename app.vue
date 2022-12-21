<script setup lang="ts">
const counter = ref<number>(0);

function increase() {
  counter.value++;
}

function decrease() {
  counter.value--;
}
</script>

<template>
  <div>
    <TheHeader />
    <span>Counter: {{ counter }}</span>
    <button type="button" @click="increase">Increase</button>
    <button type="button" @click="decrease">Decrease</button>
  </div>
</template>
