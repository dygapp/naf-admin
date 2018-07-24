const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development', // CLI option
  context: path.resolve(__dirname, '../'),
  entry: {
    vendor: './src/vendor',
    app: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          scss: 'vue-style-loader!css-loader!sass-loader',
          less: 'vue-style-loader!css-loader!less-loader'
        }
      }, {
        test: /\.(html|tpl)$/,
        exclude: /node_modules/,
        loader: 'html'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
    })],

  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.less', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'), 
      'style': resolve('src/style'), 
    }
  },

  devServer: {
    contentBase: 'dist',
    open: false, // is default
  }
}