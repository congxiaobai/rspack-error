const { defineConfig } = require('@rspack/cli');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fn = () => {
 

  const config = defineConfig({
    entry: "./src/index.tsx",
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins:[ new HtmlWebpackPlugin({
      template: "./index.html"
    })],

    experiments: {
      css: true,
    },
    output: {
      clean: true,
     
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: [/node_modules/],
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
            },
          },
          type: 'javascript/auto',
        },
        {
          test: /\.jsx$/,
          use: {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'ecmascript',
                  jsx: true,
                },
              },
            },
          },
          type: 'javascript/auto',
        },
        {
          test: /\.tsx$/,
          use: {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true,
                },
              },
            },
          },
          type: 'javascript/auto',
        },
        {
          resourceQuery: /\?raw/,
          type: 'asset/source'
        },
      ],
    },
  });
  return config
}
module.exports = fn




