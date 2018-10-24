<template>
    <div class="m-header" :class="{'m-header-ios': isIOS}">
        <div class="m-header-limit">
            <div class="m-back" @click="$router.back()" v-if="back">
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M691.392 1016 187.392 512 691.392 8 736.64 53.248 277.888 512 736.64 970.752Z" p-id="2083"></path></svg>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                default: ''
            },

            back: {
                type: Boolean,
                default: false
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
    .m-header {
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
        z-index: 10;
    }

    .m-header[border] {
        border-bottom: .55px solid #dcdcdc;
    }

    .m-back {
        position: absolute;
        width: 20px;
        display: -webkit-box;
        align-items: center;
        height: 36px;
        line-height: 40px;
        left: 0;
        top: 0;
    }

    .m-header-limit {
        position: relative;
        line-height: 36px;
        padding: 0 30px;
    }

    .m-back svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }

    .m-header-ios {}
</style>

