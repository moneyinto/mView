<template>
    <div>
        <Header title="Flex布局" border back>Flex布局</Header>
        <Content>
            <div class="content">
                <Flex class="flex">
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                </Flex>
                <Flex class="flex">
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                </Flex>
                <Flex class="flex">
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                </Flex>
                <Flex class="flex">
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                </Flex>
                <Flex class="flex">
                    <div class="placeholder">MVIEW</div>
                    <FlexItem class="placeholder">MVIEW</FlexItem>
                    <div class="placeholder">MVIEW</div>
                </Flex>

                <Flex class="list">
                    <div class="left-box">
                        MVIEW
                    </div>
                    <FlexItem>
                        <div class="title">
                            标题
                        </div>
                        <div class="desc" ellipsis>
                            学习好一门语言，才能触类旁通，此处应该有掌声！！！
                        </div>
                    </FlexItem>
                </Flex>

                <Flex class="list" center>
                    <div class="left-box">
                        MVIEW
                    </div>
                    <FlexItem>
                        <div class="title">
                            标题
                        </div>
                        <div class="desc" ellipsis="2">
                            学习好一门语言，才能触类旁通，此处应该有掌声！！！学习好一门语言，才能触类旁通，此处应该有掌声！！！
                        </div>
                    </FlexItem>
                </Flex>

                <Flex class="list" end>
                    <div class="left-box">
                        MVIEW
                    </div>
                    <FlexItem>
                        <div class="title">
                            标题
                        </div>
                        <div class="desc" ellipsis>
                            学习好一门语言，才能触类旁通，此处应该有掌声！！！
                        </div>
                    </FlexItem>
                </Flex>
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
        padding: 15px;
    }

    .flex {
        margin-bottom: 10px;
    }

    .placeholder {
        padding: 10px;
        text-align: center;
        background-color: #ebebeb;
        color: #cfcfcf;
    }

    .placeholder + .placeholder {
        margin-left: 10px;
    }

    .list {
        padding: 10px 5px;
        border-bottom: 1px solid #dcdcdc;
    }

    .left-box {
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin-right: 10px;
        background-color: #2d8cf0;
        color: #fff;
        text-align: center;
    }

    .title {
        font-size: 16px;
        color: #333;
    }

    .desc {
        margin-top: 5px;
        color: #666;
    }
</style>
