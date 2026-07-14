<script setup>
import router from '@/router';


function abrirCafes() {
  router.push('/cafes')
}
</script>

<template>
    <button @click="abrirCafes">
      <font-awesome-icon icon="fa-solid fa-mug-hot" style="font-size: 20px;" />
      Ver Cafés
    </button>
</template>

<style scoped>
button{
  background-color: rgb(104, 57, 38);
  color: whitesmoke;
  border-radius: 5px;
  border: none;
  padding: 10px 5vw;
  font-size: 15px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
button:hover{
  transform: scale(1.05);
}
button:active{
  transform: scale(1.15);
}
</style>
