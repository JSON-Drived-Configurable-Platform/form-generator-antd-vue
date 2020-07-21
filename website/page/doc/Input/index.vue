<template>
    <i-article>
        <article>
            <h1>Input</h1>
            <inAnchor title="概述" h2 />
            <p>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
            <div class="api">
                <inAnchor title="配置快速查询" h2 />
                <inAnchor title="Input" h3 />
                <alert>最新文档请参考：<a href="https://antdv.com/components/input-cn/#Input">Input of ant-design-vue</a>。配置不支持VNode类型，仅提供了一些常见的子配置。</alert>
                <table>
                    <thead>
                        <tr>
                            <th>参数</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                            <th>版本</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>addonAfter</td>
                            <td>带标签的 input，设置后置标签</td>
                            <td>string | <code>icon config</code></td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>addonBefore</td>
                            <td>带标签的 input，设置前置标签</td>
                            <td>string | <code>icon config</code></td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>defaultValue</td>
                            <td>输入框默认内容</td>
                            <td>string</td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>是否禁用状态，默认为 false</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td />
                        </tr>
                        <tr>
                            <td>id</td>
                            <td>输入框的 id</td>
                            <td>string</td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>maxLength</td>
                            <td>最大长度</td>
                            <td>number</td>
                            <td />
                            <td>1.5.0</td>
                        </tr>
                        <tr>
                            <td>prefix</td>
                            <td>带有前缀图标的 input</td>
                            <td>string | <code>icon config</code></td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>size</td>
                            <td>控件大小。注：标准表单内的输入框大小限制为<code>large</code>。可选 <code>large</code><code>default</code><code>small</code></td>
                            <td>string</td>
                            <td><code>default</code></td>
                            <td />
                        </tr>
                        <tr>
                            <td>suffix</td>
                            <td>带有后缀图标的 input</td>
                            <td>string | <code>icon config</code></td>
                            <td />
                            <td />
                        </tr>
                        <tr>
                            <td>type</td>
                            <td>声明 input 类型，同原生 input 标签的 type 属性，见：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7">MDN</a>(请直接使用 <code>Input.TextArea</code> 代替 <code>type="textarea"</code>)。</td>
                            <td>string</td>
                            <td><code>text</code></td>
                            <td />
                        </tr>
                        <tr>
                            <td>allowClear</td>
                            <td>可以点击清除图标删除内容</td>
                            <td>boolean</td>
                            <td />
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
                    <p>通过设置<code>field</code>, <code>model</code>即可生成一个Input。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.simple.code }}
                </i-code>
            </Demo>
            <Demo title="Size">
                <div slot="demo">
                    <a-form-model :model="code.size.data.model">
                        <FieldGenerator
                            :field="code.size.data.sizeLargeField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.size.data.sizeDefaultField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.size.data.sizeSmallField"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.size</code>可以控制组件大小。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.size.code }}
                </i-code>
            </Demo>
            <Demo title="allowClear">
                <div slot="demo">
                    <a-form-model :model="code.allowClear.data.model">
                        <FieldGenerator
                            :field="code.allowClear.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.allowClear</code>可以控制是否展示清空icon。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.allowClear.code }}
                </i-code>
            </Demo>
            <Demo title="prefixAndSuffix">
                <div slot="demo">
                    <a-form-model :model="code.prefixAndSuffix.data.model">
                        <FieldGenerator
                            :field="code.prefixAndSuffix.data.prefixField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.prefixAndSuffix.data.suffixField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.prefixAndSuffix.data.prefixAndSuffixField"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过<code>field.prefix</code>，<code>field.suffix</code>设置带有前缀、后缀。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.prefixAndSuffix.code }}
                </i-code>
            </Demo>
            <Demo title="addonBeforeAndAddonAfter">
                <div slot="demo">
                    <a-form-model :model="code.addonBeforeAndAddonAfter.data.model">
                        <FieldGenerator
                            :field="code.addonBeforeAndAddonAfter.data.addonBeforeField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.addonBeforeAndAddonAfter.data.addonAfterField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.addonBeforeAndAddonAfter.data.addonBeforeAndAddonAfterField"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过<code>field.addonBefore</code>，<code>field.addonAfter</code>设置带有前缀、后缀。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.addonBeforeAndAddonAfter.code }}
                </i-code>
            </Demo>
            <Demo title="password">
                <div slot="demo">
                    <a-form-model :model="code.password.data.model">
                        <FieldGenerator
                            :field="code.password.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过<code>field.subtype</code>可以设置为password。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.password.code }}
                </i-code>
            </Demo>
            <Demo title="textarea">
                <div slot="demo">
                    <a-form-model :model="code.textarea.data.model">
                        <FieldGenerator
                            :field="code.textarea.data.field"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过<code>field.subtype</code>可以设置为textarea。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.textarea.code }}
                </i-code>
            </Demo>
            <Demo title="disabled">
                <div slot="demo">
                    <a-form-model :model="code.disabled.data.model">
                        <FieldGenerator
                            :field="code.disabled.data.inputField"
                            @on-field-change="handleFieldChange"
                        />
                        <FieldGenerator
                            :field="code.disabled.data.textareaField"
                            @on-field-change="handleFieldChange"
                        />
                    </a-form-model>
                </div>
                <div slot="desc">
                    <p>通过设置<code>field.disabled</code>可以控制是否展示清空icon。</p>
                </div>
                <i-code slot="code" lang="html">
                    {{ code.disabled.code }}
                </i-code>
            </Demo>
        </article>
    </i-article>
</template>

<script>
import iArticle from '../../../components/article';
import inAnchor from '../../../components/anchor';
import iCode from '../../../components/code';
import Demo from '../../../components/demo';
import Code from '../../../code/doc/input';

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

<style scoped>
.fg-ivu-input {
    margin-top: 20px;
}
</style>
