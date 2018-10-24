<template>
    <div class="m-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Content'
    };
</script>

<style scoped>
    .m-content {
        position: fixed;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
    }

    .m-header + .m-content {
        padding-top: 44px;
    }

    .m-content {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>

