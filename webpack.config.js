module.exports={
    //course的entry
    //entry:"./src/course/entry.js",
    entry:"./src/main.js",
    output:{
        path:"./dist",
        filename:"build.js"
    },
    module:{
        loaders:[{
            test: /\.css$/,
            loader: "style!css"
        },
        {
            test: /\.js$/,
            loader: "babel-loader",
            // 不用转换的node_modules文件夹
            exclude: /node_modules/
        }{
            test: /\.vue$/,
            loader: "vue"
        }]
    }
}