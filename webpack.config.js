const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
            // JS
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
            // CSS
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
            //Imagens 
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
            // fontes
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            },
            {
            // arquivos CSV/TSV
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
            //   Arquivos XML
                test: /\.xml$/i,
                use: ['xml-loader'],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
          filename: 'index.html',
          template: '/src/index.html'
        })
      ]
};