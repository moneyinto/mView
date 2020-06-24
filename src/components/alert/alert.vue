<template>
    <div class="alet">
        <div class="alert-mask"></div>
        <div class="alert-box">
            <div class="alert-animation" :class="isClose ? 'alert-close' : ''">
                <div class="alert-title">
                    {{title}}
                </div>
                <div class="alert-content">
                    <div>{{content}}</div>
                </div>
                <div class="alert-footer">
                    <div class="alert-btn cancel" v-if="showCancel" @click="cancel">
                        {{cancelText}}
                    </div>
                    <div class="alert-btn" @click="sure">
                        {{sureText}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: '',
            title: '提示',
            isClose: false,
            showCancel: false,
            cancelText: '取消',
            sureText: '确定'
        };
    },

    methods: {
        sure() {
            this.close();
            this.onSure && this.onSure();
        },

        cancel() {
            this.close();
            this.onCancel && this.onCancel();
        },

        close() {
            this.isClose = true;
            setTimeout(() => {
                this.$el.remove();
                this.isClose = false;
            }, 300);
        }
    }
};
</script>

<style scoped>
.alert-box {
    position: fixed;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

.alert-animation {
    background-color: #fff;
    box-shadow: 1px 1px 50px rgba(0, 0, 0, .3);
    animation-name: scaleIn;
    animation-duration: .3s;
    animation-fill-mode: both;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
}

.alert-close {
    animation-name: scaleOut;
}

@keyframes scaleIn {
    0% {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@keyframes scaleOut {
    0% {
        transform: scale(1);
        opacity: 1;
    }

    to {
        transform: scale(0.5);
        opacity: 0;
    }
}

.alert-mask {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
}

.alert-title {
    color: #444;
    padding: 24px 24px 16px;
    text-align: center;
    font-size: 16px;
}

.alert-content {
    background: #fff;
    color: #666;
    padding: 0 20px 20px;
    font-size: 14px;
    text-align: center;
}

.alert-footer {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    border-top: 1px solid #ececec;
}

.alert-btn {
    height: 44px;
    line-height: 44px;
    font-weight: 400;
    text-align: center;
    flex: 1;
    color: #444;
}

.cancel {
    border-right: 1px solid #ececec;
    color: #666;
}

.alert-btn:active {
    background: #ececec;
}
</style>
