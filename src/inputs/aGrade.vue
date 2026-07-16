<script setup>
import { ref } from 'vue';

defineProps({
  label: String,
  modelValue: Number
})

const emit = defineEmits(['update:modelValue'])

function limite(event) {
  let valor = Number(event.target.value)

  if (valor < 0) valor = 0
  if (valor > 10) valor = 10

  emit('update:modelValue', valor)
}
</script>

<template>
    <div class="a">
        <label>{{ label }}</label>
        <input type="number" :value="modelValue" @input="limite">
    </div>
</template>

<style scoped>
.a{
    display: flex;
    flex-direction: column;
    width: fit-content;
}
label{
    color: #6F4E37;
    font-weight: bold;
    font-size: 20px;
}
input{
    background-color: #fff8ed;
    border: rgb(111, 78, 55, 0.500) 2.5px solid;
    border-radius: 5px;
    padding: 8px 15px;
}
input:focus {
    border-color: rgb(111, 78, 55, 0.750);
    outline: none;
}
</style>