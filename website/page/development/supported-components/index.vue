<template>
    <i-article>
        <article>
            <h1>所支持的组件汇总</h1>
            <Demo title="简单示例">
                <div slot="demo">
                    <a-form-model :model="code.simple.data.model">
                        <FieldGenerator
                            v-for="field in code.simple.data.fields"
                            :key="field.model"
                            :field="field"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Input。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
// import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/development/supported-components';

export default {
    components: {
        iArticle,
        // inAnchor,
        iCode,
        Demo
    },
    data() {
        return {
            code: Code,
            form: this.$form.createForm(this, { name: 'simple' }),
        };
    },

    methods: {
        handleFieldChange($event) {
            // eslint-disable-next-line no-console
            console.log($event);
        }
    }
};
</script>

<style>

</style>
