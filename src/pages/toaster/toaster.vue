<template>
    <div>
        <Header title="Toaster提示" border back>Toaster提示</Header>
        <Content class="content">
            <Button class="btn" @click="messageShow()">提示</Button>

            <Button class="btn" @click="infoShow()">Info提示</Button>

            <Button class="btn" @click="successShow()">success提示</Button>

            <Button class="btn" @click="warningShow()">warning提示</Button>
        </Content>
    </div>
</template>

<script>
export default {
    methods: {
        messageShow() {
            this.$toaster.show('提示信息');
        },

        infoShow() {
            this.$toaster.show('info提示信息', 1);
        },

        successShow() {
            this.$toaster.show('success提示信息', 2);
        },

        warningShow() {
            this.$toaster.show('warning提示信息', 3);
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

