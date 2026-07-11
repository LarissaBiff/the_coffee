<script setup></script>

<template>
    <button href="#">
        Avaliar
    </button>
</template>

<style scoped>
button{
  background-color: rgba(0, 0, 128, 0);
  border: 2.5px solid rgb(104, 57, 38);
  color: rgb(104, 57, 38);
  border-radius: 5px;
  padding: 12px 2vw;
  font-size: 15px;
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