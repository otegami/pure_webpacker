const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const WebpackAssetsManifest = require('webpack-assets-manifest')
const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    application: path.resolve(__dirname, "./app/javascript/packs/application.js"),
  },
  output: {
    filename: "js/[name]-[contenthash].js",
    chunkFilename: "js/[name]-[chunkhash].chunk.js",
    hotUpdateChunkFilename: "js/[id]-[fullhash].hot-update.js",
    path: path.resolve(__dirname, "./public/packs"),
    publicPath: isProd ? "/packs/" : "//localhost:8080/packs/",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
    modules: [
      path.resolve(__dirname, "./app/javascript"),
      "node_modules"
    ]
  },
  module: {
    parser: {
      javascript: {
        exportsPresence: 'error',
      },
    },
    rules: [
      {
        test: /\.png$/,
        type: "asset/resource"
      },
      {
        test: /\.(sass|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: !isProd
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: !isProd
            }
          },
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader"
          },
        ],
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new WebpackAssetsManifest({
      entrypoints: true,
      writeToDisk: true,
      output: "manifest.json",
      publicPath: true
    }),
  ],
  devServer: {
    host: "localhost",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    devMiddleware: {
      publicPath: "/packs/",
    },
    static: {
      directory: path.resolve(__dirname, "public/packs"),
    }
  },
  devtool: 'source-map'
}
