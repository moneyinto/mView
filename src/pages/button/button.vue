<template>
    <div>
        <Header title="Button按钮" border back>Button按钮</Header>
        <Content class="content">
            <Button class="btn">default</Button>

            <Button class="btn" primary>primary</Button>

            <Button class="btn" success>success</Button>

            <Button class="btn" warning>warning</Button>

            <Button class="btn" disabled>default</Button>

            <Button class="btn" primary disabled>primary</Button>

            <Button class="btn" success disabled>success</Button>

            <Button class="btn" warning disabled>warning</Button>
        </Content>
    </div>
</template>

<script>
export default {

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

