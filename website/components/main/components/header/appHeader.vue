<template>
    <a-layout-header>
        <div class="layout-logo">
            <div class="layout-logo-img" />
            <router-link to="/home">{{ title }}</router-link>
        </div>
        <div class="layout-nav">
            <a-menu mode="horizontal" theme="dark">
                <a-menu-item name="1">
                    <router-link to="/intro">简介</router-link>
                </a-menu-item>
                <a-menu-item name="1">
                    <router-link to="/practice">思考与实践</router-link>
                </a-menu-item>
                <a-menu-item name="2">
                    <router-link to="/doc">组件配置文档</router-link>
                </a-menu-item>
                <a-sub-menu name="3">
                    <template slot="title">
                        生态
                    </template>
                    <a-menu-item name="3-1">
                        <a target="_blank" href="https://json-drived-configurable-platform.github.io/cp">Configurable Plaform</a>
                    </a-menu-item>
                    <a-menu-item name="3-2">
                        <a target="_blank" href="https://json-drived-configurable-platform.github.io/data-vis-iview">Data Vis IView</a>
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item name="GitHub">
                    <a target="_blank" href="https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview">
                        <Icon type="logo-github" />
                        GitHub
                    </a>
                </a-menu-item>
            </a-menu>
        </div>
    </a-layout-header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
.layout-logo{
    height: 64px;
    border-radius: 3px;
    float: left;
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &-img {
        display: inline-block;
        width: 60px;
        height: 35px;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url("./logo.png");
    }
}

.layout-nav{
    float: right;
    margin: 8px 40px;
}
</style>
