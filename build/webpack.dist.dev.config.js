/**
 * 生产构建
 */

const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
    mode: 'none',
    devtool: 'source-map',

    // 入口
    entry: {
        main: './src/index'
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'form-generator-antd-vue.js',
        library: 'FormGeneratorAntdVue',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        },
        'ant-design-vue': {
            root: 'ant-design-vue',
            commonjs: 'ant-design-vue',
            commonjs2: 'ant-design-vue',
            amd: 'ant-design-vue'
        }
    }
});
