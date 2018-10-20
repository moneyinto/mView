<template>
    <div class="container">
        <Header title="MVIEW" border>MVIEW</Header>
        <Content>
            <div class="info">
                MVIEW 是为了自己更加熟悉vue，并且方便以后使用vue进行开发提高效率而写的一套手机端的组件库。
            </div>


        </Content>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    }
};
</script>

<style scoped>
.container {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}

.content {
    background-color: #f8f8f8;
}

.info {
    padding: 30px;
    color: #888;
    text-align: left;
    font-size: 14px;
    line-height: 22px;
}
</style>
