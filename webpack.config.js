const HtmlWebpackPlugin=require('html-webpack-plugin');
const path = require('path');

module.exports={
    context: path.join(__dirname),
    entry:'./src/app.js',
    output:{
        path:__dirname + '/build',
        filename:'bundle.js'
    },
    module:{
        rules: [
            {
              test: /\.(sa|sc|c)ss$/,
              use: ['style-loader', 'css-loader','sass-loader'],
            },
          ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}