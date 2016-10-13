module.exports={
    //course的entry
    //entry:'./src/course/entry.js',
    entry:'./src/main.js',
    output:{
        path:'./dist',
        filename:'build.js'
    },
    module:{
        loaders:[{
            test: /\.vue$/,
            loader: 'vue'
        },
        {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.less$/,
            loader: 'style!css!less'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            // 不用转换的node_modules文件夹
            exclude: /node_modules/
        },
        { 
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    //删除也没有影响
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
    }
}