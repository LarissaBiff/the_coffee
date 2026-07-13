<script setup>
import theHeader from './theHeader.vue';
import theFooter from './theFooter.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<div class="layout">
    <the-header/>
    <main>
        <router-view/>
    </main>
    <the-footer/>
</div>
</template>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
