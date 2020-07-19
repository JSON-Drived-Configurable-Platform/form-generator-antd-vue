<style lang="less">
.doc-code {
    .hljs {
        display: block;
        overflow-x: auto;
        color: #525252;
        padding: 15px;
        -webkit-text-size-adjust: none
    }

    .hljs-doctype {
        color: #999
    }

    .hljs-tag {
        color: #3e76f6
    }

    .hljs-attribute {
        color: #e96900
    }

    .hljs-value {
        color: #42b983
    }
    .hljs-name {
        color: #63a35c;
        font-weight: bold;
    }

    .hljs-keyword {
        color: #e96900
    }

    .hljs-string {
        color: #42b983
    }

    .hljs-comment {
        color: #b3b3b3
    }

    .hljs-operator .hljs-comment {
        color: #525252
    }

    .hljs-regexp {
        color: #af7dff
    }

    .hljs-built_in {
        color: #2db7f5
    }
    div{
        position: relative;
        font-size: 14px;
    }
    span.copy, span.scale, span.open-fiddle{
        border-radius: 0 0 3px 3px;
        padding: 2px 5px;
        position: absolute;
        top: 5px;
        right: 0;
        color: #b2b2b2;
        cursor: pointer;
    }
    span.scale{
        right: 25px;
    }
    span.open-fiddle{
        right: 50px;
    }
    .bg {
        margin: 20px auto;
    }
    .bg + span.copy{
        right: 5px;
    }
    span.copy:hover, span.scale:hover, span.open-fiddle:hover{
        color: #5c6b77;
    }

    code {
        margin: 0;
        background: none;
        border-radius: 0;
        font-size: 1em;
        border: none;
    }
}

</style>
<style>
    .code-scale-modal .ivu-modal-body{
        background-color: #f7f7f7;
    }
    .code-scale-modal pre{
        font-size: 14px;
    }
</style>
<template>
    <div class="doc-code">
        <pre :class="{bg: bg}"><code ref="code" :class="language"><slot /></code></pre>
        <!-- <span v-if="title !== 'Code'" class="open-fiddle" @click="openFiddle">
            <Tooltip :content="$t('index.code_jsfiddle')" placement="top" transfer>
                <Icon type="md-code" size="18" />
            </Tooltip>
        </span> -->
        <span class="scale" @click="scale">
            <Tooltip :content="$t('index.code_fullscreen')" placement="top" transfer>
                <Icon type="md-qr-scanner" size="18" />
            </Tooltip>
        </span>
        <span class="copy" @click="clip">
            <Tooltip :content="$t('index.code_copy')" placement="top" transfer>
                <Icon v-show="!copied" type="md-copy" size="18" />
                <Icon v-show="copied" type="md-checkmark" size="18" style="color:#5cb85c" />
            </Tooltip>
        </span>
        <Modal v-model="openScale" class-name="code-scale-modal" :title="title" width="65">
            <div class="doc-code">
                <pre :class="{bg: bg}">
                    <code ref="code2" :class="language" />
                </pre>
            </div>
        </Modal>
    </div>
</template>
<script>
import hljs from 'highlightjs';
// import 'highlightjs/styles/monokai.css';
import Clipboard from 'clipboard';
// import tag_map from './tag-map';

// function replaceTag(source, tagMap) {
//     Object.keys(tagMap).forEach(i => {
//         source = source
//             .replace(new RegExp(`<${i}(\\W+)`, 'g'), `<${tagMap[i]}$1`)
//             .replace(new RegExp(`</${i}>`, 'g'), `</${tagMap[i]}>`);
//     });
//     return source;
// }

export default {
    props: {
        lang: {
            type: String,
            default: 'javascript'
        },
        bg: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            openScale: false,
            code: '',
            copied: false,
            docLang: this.$lang,
            title: 'Code'
        };
    },
    computed: {
        language () {
            if (this.lang == 'auto') {
                return '';
            } else {
                return this.lang;
            }
        }
    },
    mounted () {
        this.code = this.$refs.code.innerHTML.replace(/\n/, '');
        this.$refs.code.innerHTML = this.code;
        hljs.highlightBlock(this.$refs.code);

        this.$refs.code2.innerHTML = this.code;
        hljs.highlightBlock(this.$refs.code2);

        const Demo = this.$parent.$parent.$parent;
        if (Demo.$options.name === 'Demo') {
            this.title = Demo.title;
        }
    },
    methods: {
        clip () {
            const code = this.code.replace(/&lt;/g,'<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
            const clipboard = new Clipboard('.copy', {
                text () {
                    return code;
                }
            });

            clipboard.on('success', (e) => {
                e.clearSelection();
                clipboard.destroy();
                this.copied = true;
                if (this.docLang === 'zh-CN') {
                    this.$Message.success('代码已复制到剪贴板');
                } else {
                    this.$Message.success('Code copied');
                }
                setTimeout(() => {
                    this.copied = false;
                }, 2000);
            });
        },
        scale () {
            this.openScale = true;
        },
        getSource(source, type){
            const regex = new RegExp(`<${type}[^>]*>`);
            let openingTag = source.match(regex);

            if (!openingTag) return '';
            else openingTag = openingTag[0];

            return source.slice(source.indexOf(openingTag) + openingTag.length, source.lastIndexOf(`</${type}>`));
        },
        openFiddle(){
        }
    }
};
</script>
