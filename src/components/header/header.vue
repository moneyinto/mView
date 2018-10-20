<template>
    <div class="header" :class="{'header-ios': isIOS}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                isIOS: false
            };
        },
        mounted() {
            // 判断是否为ios
            const u = navigator.userAgent;
            this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

            // 修改title的值
            if (this.title) document.title = this.title;
        }
    };
</script>

<style scoped>
    .header {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        padding: 4px;
        height: 44px;
        line-height: 36px;
        text-align: center;
        font-weight: 600;
        font-size: 16px;
        background-color: #fff;
    }

    .header[border] {
        border-bottom: .55px solid #dcdcdc;
    }

    .header-ios {

    }
</style>

