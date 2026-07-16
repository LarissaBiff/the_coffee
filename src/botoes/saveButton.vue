<script setup>

</script>

<template>
    <button>
      <font-awesome-icon icon="fa-regular fa-floppy-disk" style="font-size: 20px;" />
      Salvar Avaliação
    </button>
</template>

<style scoped>
button{
  background-color: rgb(111, 78, 55);
  color: whitesmoke;
  border-radius: 5px;
  border: none;
  padding: 10px 35px;
  font-size: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  width: fit-content;
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