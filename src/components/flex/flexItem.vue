<template>
    <div class="m-flex-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'FlexItem'
    };
</script>

<style scoped>
    .m-flex-item {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        min-width: 0;
    }

    [ellipsis] {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 1;
    }

    [ellipsis="1"] {
        -webkit-line-clamp: 1;
    }

    [ellipsis="2"] {
        -webkit-line-clamp: 2;
    }

    [ellipsis="3"] {
        -webkit-line-clamp: 3;
    }

    [ellipsis="4"] {
        -webkit-line-clamp: 4;
    }

    [ellipsis="5"] {
        -webkit-line-clamp: 5;
    }
</style>

