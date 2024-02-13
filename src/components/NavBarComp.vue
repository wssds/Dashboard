<script setup lang="ts"></script>

<template>
    <nav class="c-navbar">
    </nav>
</template>

<style scoped lang="scss">
.c-navbar {
    height: 30px;
    background-color: rgb(12, 57, 206);
    margin-bottom: 20px;
    opacity: 0.5;
    border-bottom: 1px dotted white;
}

@media only screen and (min-width: 600px) {
    .c-navbar {
        width: 50px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgb(12, 57, 206);
        opacity: 0.5;
        border-right: 1px dotted white;
        z-index: 100;
        margin-bottom: unset;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
</style>