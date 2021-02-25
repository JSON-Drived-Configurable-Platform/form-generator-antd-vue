<template>
    <a-breadcrumb :style="{margin: '24px 0'}">
        <a-breadcrumb-item
            v-for="(item, index) in cat"
            :key="index"
        >
            {{ item }}
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>

export default {
    props: {
        cat: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {};
    }
};
</script>
<style lang="less" scoped>
</style>
