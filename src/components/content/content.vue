<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Content'
    };
</script>

<style scoped>
    .header + .content {
        padding-top: 44px;
    }

    .content {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>

