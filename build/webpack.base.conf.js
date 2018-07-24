const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const utils = require('./utils')
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf')

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
	// mode: "development" || "production",
  context: path.resolve(__dirname, '../'),
  entry: {
    // framework: './src/framework.js',
    //app: './src/index.js'
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '~': resolve('src'),
      'assets': resolve('src/assets'), 
      'style': resolve('src/style'), 
    }
  },
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
	optimization: {
    runtimeChunk: 'single',
    // runtimeChunk: {
    //   name: entry => `runtimechunk-${entry.name}`
    // },
    namedChunks: true,
    splitChunks: {
      // filename: '[name].js',
      // chunks: "async",
      chunks: "initial",
      automaticNameDelimiter: '-',
      name: true,
      minSize: 1000,
      minChunks: 1,
      maxAsyncRequests: 8,
      maxInitialRequests: 5,
      cacheGroups: {
        element: {
          name: 'element',
          test: /[\\/]node_modules[\\/]element-ui[\\/]/,
        },
        vue: {
          name: 'vue',
          test: /[\\/]node_modules[\\/]vue/,
        },
        echarts: {
          name: 'echarts',
          test: /[\\/]node_modules[\\/]echarts[\\/]/,
        },
				commons: {
					name: 'commons',
					chunks: "async",
				},
        vendors: {   // 抽离第三方插件
          test: /[\\/]node_modules[\\/]/,
          // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
	},

};
