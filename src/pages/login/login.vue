<template>
    <Login @login="login" :option="option" />
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
