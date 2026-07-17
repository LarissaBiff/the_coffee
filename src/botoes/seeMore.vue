<script setup>
import { ref } from 'vue'

const props = defineProps({
  cafe: {
    type: Object,
    required: true
  }
})

const mostrarModal = ref(false)

function abrirModal() {
  mostrarModal.value = true
}

function fecharModal() {
  mostrarModal.value = false
}
</script>

<template>
  <button @click="abrirModal">
    See More
  </button>

  <Teleport to="body">
    <div v-if="mostrarModal" class="overlay" @click.self="fecharModal">
      <div class="modal">
        <button class="fechar" @click="fecharModal">✕</button>

        <h3>{{ cafe.nome }}</h3>
        <p class="origem">Origin: {{ cafe.origem }}</p>
        <p class="descricao">{{ cafe.descricao }}</p>

        <div class="detalhes" v-if="cafe.minha_media !== null">
          <p><strong>Ratings:</strong></p>
          <div class="linha">
            <span>Aroma</span>
            <span>{{ cafe.notas.aroma }}</span>
          </div>
          <div class="linha">
            <span>Sweetness</span>
            <span>{{ cafe.notas.docura }}</span>
          </div>
          <div class="linha">
            <span>Acidity</span>
            <span>{{ cafe.notas.acidez }}</span>
          </div>
          <div class="linha">
            <span>Body</span>
            <span>{{ cafe.notas.corpo }}</span>
          </div>
          <div class="linha">
            <span>Finish</span>
            <span>{{ cafe.notas.finalizacao }}</span>
          </div>
        </div>

        <div class="medias">
          <p>Community: <strong>{{ cafe.media }}</strong></p>
          <p v-if="cafe.minha_media !== null">Your rating: <strong>{{ cafe.minha_media }}</strong></p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
strong{
    font-weight: bolder;
}
h3{
    color: rgb(104, 57, 38);
    font-weight: bold;
    font-size: 25px;
}
span{
    color: #412d20;
}
button {
  background-color: rgba(0, 0, 128, 0);
  border: 2.5px solid rgb(104, 57, 38);
  color: rgb(104, 57, 38);
  border-radius: 5px;
  padding: 12px 2vw;
  font-size: 15px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
button:hover {
  transform: scale(1.05);
}
button:active {
  transform: scale(1.15);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal {
  background-color: #fff8ed;
  border-radius: 10px;
  padding: 24px 32px;
  min-width: 280px;
  max-width: 90vw;
  position: relative;
}

.fechar {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
  color: #412d20;
}

.origem {
  color: rgb(104, 57, 38);
  margin-bottom: 15px;
}
.descricao{
    color: #412d20;
    max-width: 300px;
    margin-bottom: 15px;
}
.linha {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid #412d20;
}

.medias {
  margin-top: 16px;
  font-weight: bold;
}
p{
    color: #412d20;
}
</style>