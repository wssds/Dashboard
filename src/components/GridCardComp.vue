<script setup lang="ts"></script>

<template>
    <div class="widget">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.widget {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    height: 150px;
    border-radius: 15px;
    margin: 25px;
    box-shadow: 5px 5px 15px 5px #000000;
}

@media only screen and (min-width: 390px) {
    .widget {
        margin: unset;
    }
}
</style>