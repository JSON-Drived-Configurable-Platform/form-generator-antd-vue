<template>
    <div class="layout-container">
        <a-layout>
            <appHeader :title="title" />
            <a-layout class="layout-body ivu-layout-has-sider">
                <appSlider
                    :menu-list="menuList"
                    @on-select="turnToPage"
                />
                <a-layout class="layout-body-right">
                    <!-- <Breadcrumb :cat="cat" /> -->
                    <Content class="layout-body-right-content">
                        <router-view />
                    </Content>
                </a-layout>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
import appHeader from './components/header/appHeader';
// import Breadcrumb from './components/breadcrumb/Breadcrumb';
import appSlider from './components/slider/appSlider';
import config from '../../config';
export default {
    components: {
        appHeader,
        // Breadcrumb,
        appSlider
    },
    data() {
        return {};
    },

    computed: {
        title() {
            return config.title || [];
        },

        openNames() {
            return config.defaultOpenNames || [];
        },

        menuList() {
            return this.$store.state.app.menuList || [];
        },

        pagePath() {
            return this.$store.state.page.pagePath || '';
        },
    },

    methods: {
        turnToPage(path) {
            this.$router.push({
                path
            });
        }
    }
};
</script>
<style lang="less" scoped>
    .ivu-layout-header {
        padding: 0 30px;
    }
</style>
<style lang="less" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;

    &-body {
        display: flex;
        flex-direction: row;
        &-right {
            padding: 10px;
            &-content {
                padding: 10px;
                min-height: 700px;
                background: #fff;
            }
        }
    }
}

</style>
