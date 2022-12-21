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
    <div>
      <TheHeader/>
    </div>
    <div class="bg-red-100 p-8">
      <div class="flex gap-8 h-16">
        <div class="bg-black text-white aspect-square flex justify-center items-center">{{ counter }}</div>
        <button class="p-4 bg-black text-white" type="button" @click="increase">Increase</button>
        <button class="p-4 bg-black text-white" type="button" @click="decrease">Decrease</button>
      </div>
    </div>
  </div>
</template>
