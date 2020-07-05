<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <Cpn/>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue';
    
    export default {
        name: 'App',
        components: {
            Cpn
        },
        data() {
            return {
                message: '使用Vue的简单测试'
            }
        },
        methods: {
            btnClick() {
                console.log('button test');
            }
        }
    }
</script>

<style scoped>
    .title {
        color: green;
    }
</style>