<script setup>
import { cafes } from '@/data/coffes';
</script>

<template>
    <ul>
        <li v-for="cafe in cafes" :key="cafe.id">

            <div class="all">
                <div class="blocoA">
                <span class="nome">
                    {{ cafe.nome }}
                </span> 
                <span class="origem">
                    {{ cafe.origem }}
                </span>
            </div>
             <span class="media">{{ cafe.media }}</span>
            </div>

        </li>
    </ul>
</template>

<style scoped>
ul {
    width: 100%;
  list-style: none;
  padding: 0;
}
li{
    width: 100%;
    display: block;
    padding: 10px 15px;
    border-bottom: 1px solid #ddd;
}
.all{
    display: flex;
    gap: 8px;
    justify-content: space-between;
    width: 100%;
}

.blocoA{
    display: grid;
}

.nome {
  color: rgb(111, 78, 55);
  font-weight: bold;
  font-size: 20px;
}

.origem {
  color: rgb(111, 78, 55, 0.750);
  font-size: 15px;
}

.media {
  font-weight: bold;
  color: #6F4E37;
  font-size: 25px;
}
</style>