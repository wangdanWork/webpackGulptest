var webpack=require("webpack");
var path=require("path");
var htmlPlugin=require("html-webpack-plugin");

module.exports={
    entry:"./src/js/demo1.js",
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"./js/bundle.js"
    }, 
    plugins:[
        new htmlPlugin({
            template:"./src/index.html",
            filename:"index.html"
        })
    ],
    devServer:{
        contentBase:"./dist",
        inline:true,
        port:8888
    }
}
