const path = require("path");
const HtmlWebpackPlugin  = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  target: "web",
  devServer: {
    port: 3000,
    open: false,
    hot: true,
    liveReload: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  }
};
