<script setup>
import { ref } from 'vue';

const numero = ref(1)

function limite(){
    if(numero.value<0){
        numero.value = 0;
    } 
    if(numero.value>10){
        numero.value = 10
    }
}
</script>

<template>
    <input type="number" v-model.number="numero" min="0" max="10" value="1" @input="limite">
</template>

<style scoped>
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