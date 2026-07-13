<script setup>
import aGrade from '@/inputs/aGrade.vue';
import coffeeType from '@/inputs/coffeeType.vue';
import rankingStructure from '@/Shows/rankingStructure.vue';
import competingCoffees from '@/Shows/competingCoffees.vue';
import recordedRates from '@/Shows/recordedRates.vue';
import currentAverage from '@/Shows/currentAverage.vue';
</script>

<template>
  <main>
    <aGrade/>
    <coffee-type/>
    <ranking-structure/>
    <competing-coffees/>
    <recordedRates/>
    <current-average/>
  </main>
</template>
