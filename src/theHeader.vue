<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
        <div class="menu">
            <h1>
            <RouterLink to="/">
                <font-awesome-icon icon="fa-solid fa-mug-hot" style="font-size: 20px; color: wheat;"/> 
                The C.Q.C.
            </RouterLink>
        </h1>

        <div class="pages">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/cafes">COFFEES</RouterLink>
            <RouterLink to="/avaliar">RATE</RouterLink>
            <RouterLink to="/ranking">RANKING</RouterLink>
        </div>
        </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgb(104, 57, 38);
}
.menu{
    display: flex;
    justify-content: baseline;
    align-items: center;
}
</style>