<script setup>
import rateButton from '@/botoes/rateButton.vue';
import saveButton from '@/botoes/saveButton.vue';
import seeCoffees from '@/botoes/seeCoffees.vue';
</script>

<template>
  <main>
    <rate-button/>
    <save-button/>
    <see-coffees/>
  </main>
</template>
<style>
main{
  display: flex;
  flex-direction: column;
  gap: 2vw;
}
</style>
