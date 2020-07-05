export default {
    template: `
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
        </div>`,
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