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
      <h2>COFFEE QUALITY CHALLENGE</h2>
      <h3>Sensory Evaluation Championship for Specialty Coffees</h3>
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
    <section>
      <h3>About the Championship</h3>
      <p>
        This championship aims to promote the quality of our coffees through sensory evaluations based on the SCA methodology.
      </p>
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
h2{
  color: rgb(104, 57, 38);
  font-weight: bolder;
}
h3, p{
  color: black;
}
</style>
