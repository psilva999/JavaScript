//babel
const path = require('path')

module.export = {
  entry: './parte-54-webpack-babel/script.js',

  output: {
    path: path.resolve(__dirname, './'),
    filename: 'script.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          },
        },

      },
    ],

  },
}
//npm run build
//npm run dev