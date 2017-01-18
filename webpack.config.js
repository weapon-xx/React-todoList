const path = require('path');

module.exports = {
    entry: {
      entry: './src/entry.js',
      example: './src/example.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
              test: /\.js|jsx$/,
              loaders: ['babel']
             },
            {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader']
             }
        ]
    }
}
