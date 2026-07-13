<script setup>
import { ref } from 'vue';
import { cafes } from '@/data/coffes';

const cf = ref('')

</script>

<template>
    <div class="tp-cf">
        <label for="coffee_types">Coffee</label>
        <select id="coffee_types" name="coffee_types" v-model="cf">
            <option v-for="cafe in cafes" :key="cafe.id" :value="cafe.nome">
                {{ cafe.nome }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.tp-cf{
    display:  grid;
}
label{
    color: #6F4E37;
    font-weight: bold;
}

select{
    background-color: #fff8ed;
    border: rgb(111, 78, 55, 0.500) 2.5px solid;
    border-radius: 5px;
    padding: 8px 15px;
    width: 100%;
    color: #6F4E37;
}
select:focus {
    border-color: rgb(111, 78, 55, 0.750);
    outline: none;
}
</style>