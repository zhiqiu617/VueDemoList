<template>
    <div class="loginDiv">
        <div class="inputDiv">
            <input type="text" v-model="username" placeholder="账号">
            <input type="password" v-model="password" placeholder="密码">
        </div>
        <div class="btnDiv">
            <button @click="registerClick" class="registBtn">注册</button>
            <button @click="loginClick" class="loginBtn">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                username: '',
                password: '',
                flag: false,
                users: [
                    {name: 'Benny', psw: '123456'},
                    {name: 'Lily', psw: '456789'},
                    {name: 'Sunny', psw: 'qwert'}
                ]
            }
        },
        methods: {
            loginClick() {
                for(let user of this.users) {
                    if(this.username == user.name) {
                        if(this.password == user.psw) {
                            alert('登录成功');
                            this.flag = true;
                            console.log(this.flag);
                            
                        } else {
                            alert('密码错误!');
                        }
                    }
                    console.log(this.flag);
                    
                }
                if(!this.flag) {
                    alert('如没有账号，请先注册！');
                }
            },
            registerClick() {
                if(this.username != '' && this.password.length >= 6) {
                    let newuser = {};
                    newuser.name = this.username;
                    newuser.psw = this.password;
                    this.users.push(newuser);
                    alert('注册成功!');
                    console.log('注册成功',typeof this.username, this.password);
                } else if(this.username != '' && this.password.length < 6) {
                    alert('密码不少于6个字符!');
                    console.log('密码位数过少',this.username, this.password);
                    
                } else if (this.username == '' || this.password == '') {
                    alert('请勿留空!');
                    console.log('留空',this.username, this.password);
                }
            }
        }
    }
</script>

<style scoped>
    .loginDiv {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: -180px;

        border-radius: 5px;
        width: 25%;
        background: rgba(255, 255, 255, 0.623);      
    }
    input, button {
        border: 1px solid rgb(175, 175, 175);
        height: 36px;
        border-radius: 5px;
        
        font-family: 'YouYuan' 'Microsoft YaHei' 'SimSun';   /*不起作用*/
        font-size: 14px;  
    }
    input {
        display: block;
        width: 84%;
        margin: 8% 8%;
        /* box-shadow: 5px 5px 5px rgb(202, 196, 169); */
    }
    button {
        width: 50%;
        margin: 20px 0 60px 0;
        text-align: center;
        float: left;
    }
    .inputDiv {
        margin-top: 60px;
    }
    .btnDiv {
        width: 84%;
        margin: 8%;
    }
    .registBtn {
        background-color: white;
    }
    .loginBtn {
        background-color: rgb(31, 131, 212);
    }
</style>