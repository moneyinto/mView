<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>

<style>
    html {
        user-select: none;
    }

    body {
        margin: 0;
        min-width: 1080px;
        overflow: hidden;
    }

    div {
        box-sizing: border-box;
    }

    #app {
        font-family: "微软雅黑";
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
    }

    img {
        max-width: 100%;
    }

    ::-webkit-scrollbar {
        height: 0;
        width: 0;
    }

    ::-webkit-scrollbar-button {
        height: 0;
        width: 0;
    }
</style>
