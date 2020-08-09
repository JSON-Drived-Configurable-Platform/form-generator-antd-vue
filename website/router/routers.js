/**
 * @file 路径配置配置
 * @author wangbing11(wangbing11@baidu.com)
 */

import Main from '../components/main';

const home = () => import(/* webpackChunkName: "home" */ '../page/home');

// 核心组件
const FieldGenerator = () => import(/* webpackChunkName: "FieldGenerator" */ '../page/core-components/FieldGenerator');

// 开发
const supportedComponents = () => import(/* webpackChunkName: "supportedComponents" */ '../page/development/supported-components');


// // 内置组件
const Input = () => import(/* webpackChunkName: "Input" */ '../page/doc/Input');
const Button = () => import(/* webpackChunkName: "Button" */ '../page/doc/Button');
const Switch = () => import(/* webpackChunkName: "Switch" */ '../page/doc/Switch');

export default [
    {
        path: '/',
        redirect: '/core-components',
    },
    {
        path: '/home',
        component: home
    },
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
        path: '/development',
        component: Main,
        children: [
            {
                path: '/development/supported-components',
                component: supportedComponents
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
                component: Input
            },
            {
                path: '/doc/Button',
                component: Button
            },
            {
                path: '/doc/Switch',
                component: Switch
            }
        ],
    },
];
