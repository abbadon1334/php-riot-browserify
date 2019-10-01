const path = require("path");
const glob = require("glob");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        'nemesi': path.resolve(__dirname, 'bundles/js/build/Nemesi.js'),
        'riot-tags': glob.sync('./bundles/riot/build/**/*.js')
    },
    node: {
        fs: "empty"
    },
    output: {
        filename: "../public/assets/[name].bundle.js",
        path: path.resolve(__dirname, 'public'),
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor'
          }
        }
      }
    },
    module: {
        rules: [
            {
                test: /\.riot$/,
                exclude: /node_modules/,
                use: [{
                    loader: '@riotjs/webpack-loader',
                    options: {
                        hot: false, // set it to true if you are using hmr
                        // add here all the other @riotjs/compiler options riot.js.org/compiler
                        // template: 'pug' for example
                    }
                }]
            }
        ]
    }
}
