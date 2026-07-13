<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
        <div class="menu">
            <h1>
            <RouterLink to="/">
                <font-awesome-icon icon="fa-solid fa-mug-hot" style="font-size: 22px; color: #FFF4E3;"/> 
                The Coffee Quality Challenge
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
    padding: 2vw;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #6F4E37;
}
.menu{
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}
.pages {
    display: flex;
    justify-content: center;
    gap: 2rem;
}
h1 a{
    display: flex;
    align-items: normal;
    gap: 1.2vw;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.45vw;
}
a{
    text-decoration: none;
    color: #FFF4E3;
    font-size: 1.1vw;
}
.pages .router-link-active{
        color: #6F4E37;
        font-weight: bolder;
        padding: 0.25rem 0.5rem;
        border-radius: 8px;
        background-color: #FFF4E3;
    }
</style>