<template>
    <div>
        <div class="topNav">
            <!-- <img :src="logo" alt="logo"> -->
            <h2 class="title">{{message}}</h2>
        </div>
        
        <Login class="loginBlock"/>
    </div>
</template>

<script>
    import Login from './Login.vue';
    
    export default {
        name: 'App',
        components: {
            Login
        },
        data() {
            return {
                message: '网上书城',
                // logo: require('@/img/logo.png')
            }
        }
    }
</script>

<style scoped>
    .topNav {
        display: inline-block;
    }
    img {
        width: 10px;
        height: 7px;
        float: left;
    }
    .title {
        color: rgb(148, 148, 148);
        height: 7px;
    }
</style>