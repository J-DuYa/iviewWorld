<template>
    <div class="t_commonCard">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "CommonCard"
    }
</script>

<style scoped>
.t_commonCard {
    padding: 16px 16px 0;
    background: #fff;
    margin-bottom: 32px;
    box-sizing: border-box;
    overflow: hidden;
}
</style>
