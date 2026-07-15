<script setup>
import aGrade from '@/inputs/aGrade.vue';
import coffeeType from '@/inputs/coffeeType.vue';
import competingCoffees from '@/Shows/competingCoffees.vue';
import currentAverage from '@/Shows/currentAverage.vue';
import rankingStructure from '@/Shows/rankingStructure.vue';
import recordedRates from '@/Shows/recordedRates.vue';
</script>

<template>
  <main>
    <aGrade/>
    <coffee-type/>
    <competing-coffees/>
    <current-average/>
    <ranking-structure/>
    <recorded-rates/>
  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  gap: 2vw;
}
</style>
