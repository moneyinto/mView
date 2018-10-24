<template>
    <div class="m-flex">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Flex'
    };
</script>

<style scoped>
    .m-flex {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }

    .m-flex[center] {
        align-items: center;
    }

    .m-flex[end] {
        align-items: flex-end;
    }
</style>
