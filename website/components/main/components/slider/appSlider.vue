<template>
    <div :style="{background: '#fff', width: '240px'}">
        <a-menu
            theme="light"
            width="auto"
            mode="inline"
            @click="handleSelect"
        >
            <template v-for="menu in menuList">
                <a-sub-menu
                    v-if="menu.submenu"
                    :key="menu.name"
                    :name="menu.name"
                >
                    <template slot="title">
                        {{ menu.label }}
                    </template>
                    <a-menu-item
                        v-for="item in menu.submenu"
                        :key="item.name"
                        :name="item.name"
                    >
                        {{ item.label }}
                    </a-menu-item>
                </a-sub-menu>
                <a-menu-item
                    v-else
                    :key="menu.name"
                    :name="menu.name"
                >
                    {{ menu.label }}
                </a-menu-item>
            </template>
        </a-menu>
    </div>
</template>

<script>
export default {
    props: {
        menuList: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        handleSelect({ key }) {
            this.$emit('on-select', key);
        }
    }
};
</script>
<style lang="less" scoped>
</style>
