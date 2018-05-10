const path = require('path');

const srcDir = path.join(__dirname, '../src')

module.exports = {
    entry: [
        path.join(srcDir, 'index.js')
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.less$/,
          loaders: ["style-loader", "css-loader", "less-loader"],
        }
      ],
    },
    output: {
        path: srcDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: srcDir,
        historyApiFallback: true,
        port: 3100,
    }
};