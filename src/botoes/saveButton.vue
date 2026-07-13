<script setup>

</script>

<template>
    <button href="#">
      <font-awesome-icon icon="fa-regular fa-floppy-disk" style="font-size: 20px;" />
      Salvar Avaliação
    </button>
</template>

<style scoped>
button{
  background-color: rgb(104, 57, 38);
  color: whitesmoke;
  border-radius: 5px;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  width: 100%;
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