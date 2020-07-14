/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');

// 核心组件
const FieldGenerator = () => import(/* webpackChunkName: "FieldGenerator" */ '../page/core-components/FieldGenerator');

// // 内置组件
const Input = () => import(/* webpackChunkName: "Input" */ '../page/doc/Input');
const Button = () => import(/* webpackChunkName: "Button" */ '../page/doc/Button');

export default [
    {
        path: '/',
        redirect: '/core-components',
    },
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: home
    // },
    {
        path: '/core-components',
        redirect: '/core-components/FieldGenerator',
        component: Main,
        children: [
            {
                path: '/core-components/FieldGenerator',
                component: FieldGenerator
            }
        ]
    },
    {
        path: '/doc',
        redirect: '/doc/FormGenerator',
        component: Main,
        children: [
            {
                path: '/doc/Input',
                name: 'doc-Input',
                component: Input
            },
            {
                path: '/doc/Button',
                name: 'doc-Button',
                component: Button
            },
        ],
    },
];