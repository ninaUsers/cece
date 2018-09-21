const path = require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports={
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'js/bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html"
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
           }),
           new CleanWebpackPlugin(['build']),
           new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React:'react',
            ReactDOM:'react-dom'
          })

      ],
      module:{
          loaders:[{
              test:/\.css$/,
              loader:'style-loader!css-loader'
            },{
                test: /\.jsx?$/,//表示要编译的文件的类型，这里要编译的是js文件
                loader: 'babel-loader',//装载的哪些模块
                exclude: /node_modules///标识不编译node_modules文件夹下面的内容
                // query: {//具体的编译的类型，
                //     compact: false,//表示不压缩
                //     presets: [ 'react']//我们需要编译的是react
                // }
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                  limit:10000,//限制小于10000字节,进行base64编码
                  name:'img/[name]_[hash].[ext]'
                }
              }
          ,
          {
            test:/\.(eot|svg|ttf|woff|woff2)$/,
            loader:'file-loader'
       }

      
   
    
          ]
      },
       resolve:{
        extensions:['.jsx','.css','.less','.js']
    }

  
}