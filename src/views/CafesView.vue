<script setup>
import rateButton from '@/botoes/rateButton.vue';
import { cafes } from '@/data/coffes';
</script>

<template>
  <main>
    <h2>Coffees:</h2>
    <div class="cafe" v-for="cafe in cafes" :key="cafe.id">
      <img src="/public/images/coffee-beans.jpg" alt="Café">
      <div class="p">
        <p>{{ cafe.nome }}</p>
      <p class="sub">Origin: {{ cafe.origem }}</p>
    </div>
      <rate-button :cafe="cafe" />
    </div>
  </main>
</template>

<style scoped>
h2{
  color: #412d20;
  font-weight: bolder;
  font-size: 2.5vw;
  margin: 5vw 5vw 0 5vw;
}
.cafe{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  margin: 2vw 5vw;
  border: 3px solid #412d20;
  border-radius: 8px;

  background-color: #fff8ed;
}

img{
  width: 90px;
  height: 90px;

  border-radius: 10px;
}

.p{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

p{
  margin: 0;
  color: #412d20;
  font-size: 20px;
  font-weight: bold;
}

.sub{
  margin-top: 6px;
  color: rgb(111, 78, 55);
  font-size: 15px;
  font-weight: normal;
}
</style>