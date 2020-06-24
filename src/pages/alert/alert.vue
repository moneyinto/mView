<template>
    <div>
        <Header title="弹框" border back>弹框</Header>
        <Content class="content">
            <Button class="btn" @click="alert()">Alert</Button>

            <Button class="btn" @click="confirm()">Confirm</Button>

            <Button class="btn" @click="confirm2()">自定义Confirm</Button>
        </Content>
    </div>
</template>

<script>
export default {
    methods: {
        alert() {
            this.$alert.show('提示信息');
        },

        confirm() {
            this.$alert.show('提示1', '确定这样了吗', () => {
                this.$toaster.show('点击的确认');
            });
        },

        confirm2() {
            this.$alert.show('提示2', '确定这样了吗', [
                {
                    text: 'Cancel',
                    on: () => {
                        this.$toaster.show('点击了取消');
                    }
                },
                {
                    text: 'Sure',
                    on: () => {
                        this.$toaster.show('点击了确定');
                    }
                }
            ]);
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

