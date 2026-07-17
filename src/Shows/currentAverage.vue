<script setup>
const props = defineProps({
  media: {
    type: Number,
    default: 0
  }
})
</script>

<template>
    <div>
        <p>Current Rating</p> <p class="number">{{ props.media }}</p>
    </div>
</template>

<style scoped>
div{
    color: #412d20;
    background-color: #fff8ed;
    border: solid rgb(111, 78, 55, 0.500) 2px;
    padding: 1.5vw 2vw;
    border-radius: 10px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
}
p{
    font-weight: bolder;
}
.number{
    font-size: 2vw;
}
</style>