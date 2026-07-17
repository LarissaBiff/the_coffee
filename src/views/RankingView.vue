<script setup>
import rankingStructure from '@/Shows/rankingStructure.vue';
</script>

<template>
  <main>
    <h2>Overall Ranking</h2>
    <ranking-structure class="rank"/>
  </main>
</template>

<style scoped>
h2{
  margin: 5vw 0 0 5vw;
  color: #412d20;
  font-weight: bolder;
  font-size: 2.5vw;
}
.rank{
  padding: 2vw 5vw;
  background-color: #fff8ed;
  margin: 2vw 5vw;
}
</style>