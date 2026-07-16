<script setup>
import { cafes } from '@/data/coffes'
import aGrade from '@/inputs/aGrade.vue'
import coffeeType from '@/inputs/coffeeType.vue'
import saveButton from '@/botoes/saveButton.vue'
import currentAverage from '@/Shows/currentAverage.vue'

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const id = route.params.id

const cafeSelecionado = ref(id ? Number(id) : null)

const cafe = computed(() =>
  cafes.find(c => c.id === cafeSelecionado.value)
)
</script>

<template>
  <main>
    <h2>New rate:</h2>
    <div class="avalia">
      <coffee-type v-model="cafeSelecionado"/>
      <div v-if="cafe" class="notas">
        <a-grade label="Aroma" v-model="cafe.notas.aroma" />
        <a-grade label="Sweetness" v-model="cafe.notas.docura" />
        <a-grade label="Acidity" v-model="cafe.notas.acidez" />
        <a-grade label="Body" v-model="cafe.notas.corpo" />
        <a-grade label="Finish" v-model="cafe.notas.finalizacao" />
        <current-average class="media"/>
        <save-button class="salvar"/>
      </div>
      
    </div>
    
  </main>
</template>

<style scoped>
.notas{
  display: flex;
  flex-direction: column;
}
.media{
  align-self: flex-start;
  margin-top: 15px;
}
.salvar{
  align-self: flex-end;
  margin-top: 15px;
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2vw;
}

h2{
  color: #412d20;
  font-weight: bolder;
  font-size: 2.5vw;
  margin: 5vw 5vw 0 5vw;
}

.avalia{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2rem;

  background-color: #fff8ed;
  border: 3px solid #412d20;
  border-radius: 10px;

  box-sizing: border-box;
  margin-top: 2vw;
}
</style>