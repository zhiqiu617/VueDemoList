<template>
    <div>
        <h2>{{title}}</h2>
        <h3>Cpn组件的内容</h3>
    </div>
</template>

<script>
    export default {
        name: 'Cpn',
        data() {
            return {
                title: 'Cpn组件的使用'
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid pink;
    }
    h3 {
        color: brown;
    }
</style>