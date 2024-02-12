<script setup lang="ts"></script>

<template>
    <nav class="c-navbar">
        <span>hi</span>
    </nav>
</template>

<style scoped lang="scss">

.c-navbar {
    height: 30px;
    background-color: brown;
    margin-bottom: 20px;
}

@media only screen and (min-width: 600px) {
.c-navbar {
    width: 50px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: brown;
    z-index: 100;
    margin-bottom: unset;
}
}
</style>