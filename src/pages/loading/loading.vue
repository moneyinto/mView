<template>
    <div>
        <Header title="加载进度 Loading" border back>加载进度 Loading</Header>
        <Content class="content">
            <Button class="btn" @click="showLoadingOne()">加载进度 一</Button>
            <Button class="btn" @click="showLoadingTwo()">加载进度 二</Button>
        </Content>
    </div>
</template>

<script>
export default {
    methods: {
        showLoadingOne() {
            this.$loading.show();
            setTimeout(() => {
                this.$loading.hide();
            }, 3000);
        },

        showLoadingTwo() {
            this.$loading.show(1, '数据加载中');
            setTimeout(() => {
                this.$loading.hide();
            }, 3000);
        }
    }
};
</script>

<style scoped>
    .content {
        padding: 20px;
        background-color: #f8f8f8;
    }

    .btn {
        margin: 10px 0;
    }
</style>

