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
      <div class="title">
      <h2>COFFEE QUALITY CHALLENGE</h2>
      <h3>Sensory Evaluation Championship for Specialty Coffees</h3>
    </div>
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
      <div class="text">
        <h3>About the Championship</h3>
      <p>
        This championship aims to promote the quality of our coffees through sensory evaluations based on the SCA methodology, elevating industry standards and rewarding exceptional harvests.
      </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 2rem 5rem;
  background-color: #fff8ed;
  margin: 0 auto;
  margin-bottom: 2vw;
}
.title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
p{
  color: #412d20;
  padding: 1.15vw 0 0 0;
  font-size: 20px;
}
h3{
  color: rgb(111, 78, 55);
  font-size: 1.5vw;
}
h2{
  color: #412d20;
  font-weight: bolder;
  font-size: 2.5vw;
}
</style>
