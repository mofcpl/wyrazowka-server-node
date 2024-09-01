const path = require('path')

module.exports = 
{
    target: 'node',
    entry: './app.js',
    mode: 'production',
    output: 
    {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
}