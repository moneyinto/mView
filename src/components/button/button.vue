<template>
    <div class="m-button" :class="disabled ? 'disabled' : ''" @click="btnClick()">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            btnClick() {
                if (this.disabled) return;
                this.$emit('click');
            }
        }
    };
</script>

<style scoped>
    .m-button {
        border-radius: 5px;
        padding: 14px;
        text-align: center;
        text-decoration: none;
        border: 1px solid #dcdcdc;
        background-color: #fff;
    }

    .m-button:active {
        opacity: 0.8;
    }

    .m-button[success] {
        background: #1AAD19;
        color: #fff;
    }

    .m-button[warning] {
        background: #E64340;
        color: #fff;
    }

    .m-button[primary] {
        background: #2d8cf0;
        color: #fff;
    }

    .m-button.disabled {
        opacity: 0.6 !important;
    }
</style>
