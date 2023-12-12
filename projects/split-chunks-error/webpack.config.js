const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const cdn = '/build/'

const resolve = (...arg) => path.resolve(__dirname, ...arg)

// css loader
const cssLoader = (isModule, preprocessor) =>
  [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: !!isModule
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [postcssPresetEnv({ browsers: 'last 2 versions' })]
        }
      }
    },
    preprocessor && `${preprocessor}-loader`
  ].filter(Boolean)

const config = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  output: {
    publicPath: `${cdn}`,
    path: resolve('./build/'),
    assetModuleFilename: '[name].[contenthash:4][ext]',
    clean: true,
    filename: 'js/[name].[chunkhash:16].js',
    chunkFilename: 'js/[name].[chunkhash:16].js'
  },
  entry: './src/index.ts',
  stats: {
    chunks: false,
    assetsSpace: 1,
    moduleAssets: false,
    modules: false,
    builtAt: true,
    timings: true,
    hash: true
  },
  cache: false /* {
    type: 'filesystem',
    cacheDirectory: resolve('./.webpack_build_cache'),
    maxAge: 5 * 24 * 60 * 60 * 1000,
    buildDependencies: {
      config: [__filename],
    },
  } */,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /\/node_modules/,
        include: [resolve('./src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: true
            }
          }
        ]
      },
      {
        test: /\.(c|le|sc)ss$/,
        oneOf: [
          {
            test: /\.module\.scss$/,
            use: [...cssLoader(true, 'sass')]
          },
          {
            test: /\.module\.less$/,
            use: [...cssLoader(true, 'less')]
          },
          {
            test: /\.scss$/,
            use: [...cssLoader(false, 'sass')]
          },
          {
            test: /\.less$/,
            use: [...cssLoader(false, 'less')]
          },
          {
            use: [...cssLoader(false)]
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif|woff|woff2|eot|ttf)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@src': resolve('./src'),
      '@': resolve('./src')
    },
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name(module, chunks, cacheGroupKey) {
        return `${cacheGroupKey}`
      },
      cacheGroups: {
        // styles: {
        //   type: 'css/mini-extract',
        //   maxSize: 400000,
        //   minSize: 100000,
        //   enforce: true,
        //   priority: 100,
        // },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          maxSize: 400000,
          minSize: 10000,
          priority: 80
        },
        custom: {
          chunks: 'initial',
          priority: 20
        }
      }
    },
    minimizer: [
      // new TerserWebpackPlugin({
      //   extractComments: false,
      //   terserOptions: {
      //     compress: {
      //       unused: true,
      //       drop_console: false,
      //       pure_funcs: ['console.log', 'console.error'],
      //       inline: 2,
      //     },
      //   },
      // }),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/public/index.html',
      publicPath: `${cdn}`
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/public/favicon.ico', to: './' },
        { from: './src/public/logo.png', to: './' }
      ]
    }),
    new webpack.ProgressPlugin({ percentBy: 'entries' }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
      filename: 'css/[name].[contenthash:16].css',
      chunkFilename: 'css/[name].[contenthash:16].css'
    })
  ],
  performance: {
    hints: false
  }
}
module.exports = config
