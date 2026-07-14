<script setup>
import competingCoffees from '@/Shows/competingCoffees.vue';
import recordedRates from '@/Shows/recordedRates.vue';
import seeCoffees from '@/botoes/seeCoffees.vue';

</script>

<template>
  <main>
    <section>
      <img src="/public/images/coffeeimg.png" alt="Coffee image">
      <img src="/public/images/coffeeimg.png" alt="Coffee image">
    </section>
    <section>
      <div class="thats_all">
      <div class="tables">
      <competing-coffees/>
      <recorded-rates/>
    </div>
    <see-coffees/>
    </div>
    </section>
  </main>
</template>

<style scoped>
.thats_all {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3vw;
  gap: 2vw;
}
.tables{
  display: flex;
  justify-content: center;
  gap: 5vw;
}
img{
  width: 50%;
  opacity: 85%;
}
</style>
