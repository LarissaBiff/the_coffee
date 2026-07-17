<script setup>
import { cafes } from '@/data/coffes';
import { computed } from 'vue'

const ranking = computed(() => {
  return [...cafes]
    .map(cafe => ({
      ...cafe,
      mediaFinal: cafe.minha_media !== null
        ? Number(((cafe.media + cafe.minha_media) / 2).toFixed(1))
        : cafe.media
    }))
    .sort((a, b) => b.mediaFinal - a.mediaFinal)
})
</script>

<template>
    <ul>
        <li v-for="(cafe, index) in ranking" :key="cafe.id">

            <div class="all">

                    <span class="posicao">{{ index + 1 }}º</span>

                <div class="blocoA">

                    <span class="nome">
                        {{ cafe.nome }}
                    </span> 

                <span class="origem">
                    {{ cafe.origem }}
                </span>

            </div>

             <span class="media">{{ cafe.mediaFinal }}</span>

            </div>

        </li>
    </ul>
</template>

<style scoped>
.posicao{
    font-weight: bold;
    color: #6F4E37;
    font-size: 25px;
}
ul {
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