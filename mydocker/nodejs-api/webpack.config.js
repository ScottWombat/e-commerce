const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/server.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      modules: ['src', 'node_modules']
    },
    target: 'node',
    externals: {
        "express": "require('express')"
    }
};