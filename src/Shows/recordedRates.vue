<script setup>
import { cafes } from '@/data/coffes';

const quantos_avaliados = cafes.filter(cafe => cafe.avaliado).length
</script>

<template>
    
    <div class="all-part">

        <font-awesome-icon icon="fa-regular fa-clipboard" style="font-size: 35px;" />
        
        <div class="text">
            <h3>
            Recorded Reviwes:
            </h3>
            <p>{{ quantos_avaliados }}</p>
        </div>
    </div>

</template>

<style scoped>
.all-part{
    width: 300px;
    color: rgb(111, 78, 55);
    border: solid rgb(111, 78, 55, 0.500) 2px;
    background-color: #fff8ed;
    border-radius: 10px;
    padding: 2vw;
    display: flex;
    justify-content: baseline;
    align-items: center;
    gap: 2vw;
}
.text{
    display: flex;
    flex-direction: column;
    align-items: center;
}
p{
    font-weight: bold;
    font-size: 25px;
}
h3{
    font-weight: bolder;
    color: #412d20;
}
</style>