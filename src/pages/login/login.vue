<template>
    <div>
        <Header title="登录页面" border back>登录页面</Header>
        <Login @login="login" :option="option" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            option: {
                verifyMobile: true,
                verifyEmail: true,
                verifyLength: true,
                minLength: 6,
                maxLength: 8
            }
        };
    },

    mounted() {

    },

    methods: {
        login(data) {
            console.log(data);
        }
    }
};
</script>
