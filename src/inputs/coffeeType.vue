<script setup>
import { ref } from 'vue';
import { cafes } from '@/data/coffes';

defineProps({
  modelValue: Number
})

const cf = ref('')

const emit = defineEmits(['update:modelValue'])

</script>

<template>
    <div class="tp-cf">
        <label for="coffee_types">Coffee</label>
        <select id="coffee_types" :value="modelValue"
      @change="emit('update:modelValue', Number($event.target.value))">

            <option
                v-for="cafe in cafes"
                :key="cafe.id"
                :value="cafe.id">
                {{ cafe.nome }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.tp-cf{
    display:  grid;
    width: fit-content;
}
label{
    color: #6F4E37;
    font-weight: bold;
    font-size: 20px;
}

select{

    background-color: #fff8ed;
    border: rgb(111, 78, 55, 0.500) 2.5px solid;
    border-radius: 5px;
    padding: 8px 15px;
    width: 50vw;
    color: #6F4E37;
    font-size: 15px;
}
select:focus {
    border-color: rgb(111, 78, 55, 0.750);
    outline: none;
}
</style>