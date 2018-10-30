<template>
    <div>
        <Header title="MVIEW" border>MVIEW</Header>
        <Content class="content">
            <div class="info">
                MVIEW 是为了自己更加熟悉vue，并且方便以后使用vue进行开发提高效率而写的一套手机端的组件库。
            </div>

            <div class="category" @click="$router.push('login')">
                登录页面
            </div>

            <div class="category" @click="$router.push('flex')">
                Flex布局
            </div>

            <div class="category" @click="$router.push('toaster')">
                Toaster提示
            </div>

            <div class="category" @click="$router.push('loading')">
                Loading
            </div>

            <div class="category" @click="$router.push('button')">
                Button按钮
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

.category {
    padding: 15px;
    margin: 10px;
    background-color: #fff;
    overflow: hidden;
    border-radius: 2px;
}
</style>
