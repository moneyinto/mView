<template>
    <div class="login-box">
        <div class="input-box">
            <input :type="type" :placeholder="accountPlaceholder" v-model="account" />
        </div>

        <div class="input-box">
            <input type="password" :placeholder="passwordPlaceholder" v-model="password" />
        </div>
        <div class="login-btn" @click="login()">登 录</div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            option: {
                type: Object,
                default: () => ({
                    verifyMobile: false,
                    verifyEmail: false,
                    verifyLength: false,
                    minLength: 0,
                    maxLength: 100
                })
            },

            type: {
                type: String,
                default: 'text'
            },

            accountPlaceholder: {
                type: String,
                default: '账号'
            },

            passwordPlaceholder: {
                type: String,
                default: '密码'
            }
        },

        data() {
            return {
                account: '',
                password: ''
            };
        },

        methods: {
            login() {
                const phoneReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0-9])\d{8}$/;
                const emailReg = /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/;
                let phoneIsOk = true;
                let emailIsOk = true;

                if (!this.account || !this.password) {
                    this.$toaster.show('请将信息填写完整！', 3);
                    return;
                }

                if (this.option.verifyMobile && !phoneReg.test(this.account)) {
                    phoneIsOk = false;
                }

                if (this.option.verifyEmail && !emailReg.test(this.account)) {
                    emailIsOk = false;
                }

                // 验证手机号和邮箱
                if (this.option.verifyMobile && this.option.verifyEmail && !phoneIsOk && !emailIsOk) {
                    this.$toaster.show('手机号或邮箱格式不正确！', 3);
                    return;
                }

                // 仅验证手机号
                if (this.option.verifyMobile && !this.option.verifyEmail && !phoneIsOk) {
                    this.$toaster.show('手机号格式不正确！', 3);
                    return;
                }

                // 仅验证邮箱
                if (!this.option.verifyMobile && this.option.verifyEmail && !emailIsOk) {
                    this.$toaster.show('邮箱格式不正确！', 3);
                    return;
                }

                // 密码长度验证
                if (this.option.verifyLength) {
                    if (this.password.length > this.option.maxLength || this.password.length < this.option.minLength) {
                        this.$toaster.show(`请输入${this.option.minLength === this.option.maxLength ? this.option.minLength : (this.option.minLength + '~' + this.option.maxLength)}位密码`, 3);
                        return;
                    }
                }

                this.$emit('login', {
                    account: this.account,
                    password: this.password
                });
            }
        }
    };
</script>

<style scoped>
    .login-box {
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        padding: 30px 15%;
    }

    .input-box {
        margin-bottom: 15px;
    }

    .input-box input {
        width: 100%;
        -webkit-appearance: none;
        outline: 0;
        color: #666;
        border: 1px solid #dcdcdc;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 14px;
        box-sizing: border-box;
        box-shadow: none;
    }

    .login-btn {
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        color: #fff;
        background-color: #2d8cf0;
        margin-top: 16px; /** 当为15px时input边框模糊 */
        font-size: 14px;
    }

    .login-btn:active {
        background-color: #57a3f3;
    }
</style>
