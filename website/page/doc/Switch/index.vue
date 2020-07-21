<template>
    <i-article>
        <article>
            <h1>Switch 开关</h1>
            <inAnchor title="概述" h2 />
            <p>在两种状态间切换时用到的开关选择器。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <inAnchor title="核心配置" h3 />
                <table>
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>autoFocus</td>
                            <td>组件自动获取焦点</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checked(v-model)</td>
                            <td>指定当前是否选中</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>checkedChildren</td>
                            <td>选中时的内容</td>
                            <td>string|icon config</td>
                            <td />
                        </tr>
                        <tr>
                            <td>defaultChecked</td>
                            <td>初始是否选中</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>loading</td>
                            <td>加载中的开关</td>
                            <td>boolean</td>
                            <td>false</td>
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>开关大小，可选值：<code>default</code>
                                <code>small</code></td>
                            <td>string</td>
                            <td>default</td>
                        </tr>
                        <tr>
                            <td>unCheckedChildren</td>
                            <td>非选中时的内容</td>
                            <td>string|icon config</td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>
            <inAnchor title="代码示例" h2 />
            <Demo title="基础用法">
                <div slot="demo">
                    <a-form-model :model="code.simple.data.model">
                        <FieldGenerator
                            :field="code.simple.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field</code>即可生成一个Switch。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.simple.code }}</i-code>
            </Demo>
            <Demo title="文字">
                <div slot="demo">
                    <a-form-model :model="code.text.data.model">
                        <FieldGenerator
                            :field="code.text.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.checkedChildren</code>, <code>field.checkedChildren</code>展示自定义文字。</p>
                </div>
                <i-code slot="code" lang="html">{{ code.text.code }}</i-code>
            </Demo>
            <Demo title="禁用">
                <div slot="demo">
                    <a-form-model :model="code.disabled.data.model">
                        <FieldGenerator
                            :field="code.disabled.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc" />
                <i-code slot="code" lang="html">{{ code.disabled.code }}</i-code>
            </Demo>
            <Demo title="大小">
                <div slot="demo">
                    <a-form-model :model="code.size.data.model">
                        <FieldGenerator
                            :field="code.size.data.field"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.size.data.smallFeild"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc" />
                <i-code slot="code" lang="html">{{ code.size.code }}</i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/switch';

export default {
    components: {
        iArticle,
        inAnchor,
        iCode,
        Demo
    },
    data() {
        return {
            code: Code
        };
    },
    methods: {
        handleFieldChange(model, value) {
            // eslint-disable-next-line no-console
            console.log(model, value);
        }
    }
};
</script>
