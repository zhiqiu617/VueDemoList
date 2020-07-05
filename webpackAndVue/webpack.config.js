/**
 * webpack.config.js文件是为了让webpack工作的时候自主在这里寻找出入口，通过这里的定义生成bundle.js
 */

// node的核心模块内容path，webpack运行时会去node找
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        // path需要绝对路径
        // path.resolve()是将两个参数内容进行拼接，第一个参数__dirname是node自带的上下文变量，指代当前文件的所在路径
        // path.join()也可以
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 任何涉及url的资源的路径都会拼接上publicPath
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                // 正则表达式匹配css文件
                test: /\.css$/,
                // 使用多个loader时，读取顺序是从右向左的
                use: ['style-loader', 'css-loader'],
            },
            {
                // 匹配less文件
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                // jpg更完整的名称缩写是jpeg，但早期DOS系统限制后缀只能三个字符，所以jpg后缀得到更大的推广。如.htm与.html都是指代html页面的
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片小于limit时，会将图片编译成base64字符串形式
                            // 当加载的图片大于limit时，需要使用file-loader模块进行加载
                            limit: 13000,
                            // 规范自动生成的图片资源的命名
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            },
            {
                // 匹配js文件将ES6语法转换为ES5
                test: /\.js$/,
                // exclude即排除，排除不需要转换目录
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['ES2015']
                    }
                }
            },
            {
                // 匹配vue文件
                test: /\.vue$/,
                use: ['vue-loader']
            }
          ],
          
    },
    resolve: {
        // 解决路径简写问题，使用extensions，数组中出现的后缀名的对应文件在引用时，路径可以简写不写后缀
        // extensions: ['.js', '.css', '.vue'],
        // alias---别名
        alias: {
            // 在指定的文件夹内找vue
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
}