var path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, '/out'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel'] }
        ]
    }
}
