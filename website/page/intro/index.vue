<template>
    <i-article>
        <article>
            <h1>关于 FormGenerator</h1>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../components/article';
// import inAnchor from '../../components/anchor';
// import iCode from '../../components/code';
// import Demo from '../../components/demo';
import Code from '../../code/intro';
export default {
    components: {
        iArticle,
        // inAnchor,
        // iCode,
        // Demo
    },
    data() {
        return {
            code: Code
        };
    },
    methods: {
        handleSubmit() {
            // eslint-disable-next-line no-console
            this.$Message.info(JSON.stringify(this.$refs.FormGenerator.model));
        },
    }
};
</script>

<style>

</style>
