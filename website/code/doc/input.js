// simple
let simple = {};

const field = {
    type: 'Input',
    model: 'name'
};

const model = {
    name: 'ant-design-vue'
};

simple.data = {
    field,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(field, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(model)};
        };
    },
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    },
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </a-form-model>
</template>
`;

// size
let size = {};

const sizeLargeField = {
    type: 'Input',
    model: 'name',
    size: 'large'
};

const sizeDefaultField = {
    type: 'Input',
    model: 'name',
    size: 'default'
};

const sizeSmallField = {
    type: 'Input',
    model: 'name',
    size: 'small'
};

const sizeModel = {
    name: 'ant-design-vue'
};

size.code = `
<script>
const sizeLargeField = ${JSON.stringify(sizeLargeField, null, 4)};
const sizeDefaultField = ${JSON.stringify(sizeDefaultField, null, 4)};
const sizeSmallField = ${JSON.stringify(sizeSmallField, null, 4)};
export default {
    data() {
        return {
            sizeLargeField,
            sizeDefaultField,
            sizeSmallField,
            model: ${JSON.stringify(sizeModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="sizeLargeField"
        />
        <FieldGenerator
            :field="sizeDefaultField"
        />
        <FieldGenerator
            :field="sizeSmallField"
        />
    </a-form-model>
</template>
`;

size.data = {
    sizeLargeField,
    sizeDefaultField,
    sizeSmallField,
    model: sizeModel
};

// 可清空
let allowClear = {};

const allowClearField = {
    type: 'Input',
    model: 'name',
    allowClear: true
};

const allowClearModel = {
    name: 'hover时，展示可清空按钮'
};

allowClear.code = `
<script>
const field = ${JSON.stringify(allowClearField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(allowClearModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="field"
        />
    </a-form-model>
</template>
`;

allowClear.data = {
    field: allowClearField,
    model: allowClearModel
};

// prefix suffix

let prefixAndSuffix = {};

const prefixField = {
    type: 'Input',
    model: 'url',
    prefix: 'https://'
};

const suffixField = {
    type: 'Input',
    model: 'url',
    suffix: '.com'
};

const prefixAndSuffixField = {
    type: 'Input',
    model: 'url',
    prefix: {
        type: 'user'
    },
    suffix: {
        type: 'info-circle'
    }
};

const prefixAndSuffixModel = {
    url: ''
};

prefixAndSuffix.code = `
<script>
const prefixField = ${JSON.stringify(prefixField, null, 4)};
const suffixField = ${JSON.stringify(suffixField, null, 4)};
const prefixAndSuffixField = ${JSON.stringify(prefixAndSuffixField, null, 4)};
export default {
    data() {
        return {
            prefixField,
            suffixField,
            prefixAndSuffixField,
            model: ${JSON.stringify(prefixAndSuffixModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="prefixField"
        />
        <FieldGenerator
            :field="suffixField"
        />
        <FieldGenerator
            :field="prefixAndSuffixField"
        />
    </a-form-model>
</template>
`;

prefixAndSuffix.data = {
    prefixField,
    suffixField,
    prefixAndSuffixField,
    model: prefixAndSuffixModel
};

// addonBeforeAndAddonAfter

let addonBeforeAndAddonAfter = {};

const addonBeforeField = {
    type: 'Input',
    model: 'url',
    addonBefore: 'https://'
};

const addonAfterField = {
    type: 'Input',
    model: 'url',
    addonAfter: '.com'
};

const addonBeforeAndAddonAfterField = {
    type: 'Input',
    model: 'url',
    addonBefore: {
        type: 'user'
    },
    addonAfter: {
        type: 'info-circle'
    }
};

const addonBeforeAndAddonAfterModel = {
    url: ''
};

addonBeforeAndAddonAfter.code = `
<script>
const addonBeforeField = ${JSON.stringify(addonBeforeField, null, 4)};
const addonAfterField = ${JSON.stringify(addonAfterField, null, 4)};
const addonBeforeAndAddonAfterField = ${JSON.stringify(addonBeforeAndAddonAfterField, null, 4)};
export default {
    data() {
        return {
            addonBeforeField,
            addonAfterField,
            addonBeforeAndAddonAfterField,
            model: ${JSON.stringify(addonBeforeAndAddonAfterModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="addonBeforeField"
        />
        <FieldGenerator
            :field="addonAfterField"
        />
        <FieldGenerator
            :field="addonBeforeAndAddonAfterField"
        />
    </a-form-model>
</template>
`;

addonBeforeAndAddonAfter.data = {
    addonBeforeField,
    addonAfterField,
    addonBeforeAndAddonAfterField,
    model: addonBeforeAndAddonAfterModel
};

// password
let password = {};

const passwordField = {
    type: 'Input',
    model: 'name',
    subtype: 'password',
    visibilityToggle: true
};

const passwordModel = {
    name: ''
};

password.code = `
<script>
const field = ${JSON.stringify(passwordField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(passwordModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="field"
        />
    </a-form-model>
</template>
`;

password.data = {
    field: passwordField,
    model: passwordModel
};

// 文本域
let textarea = {};

const textareaField = {
    type: 'Input',
    model: 'name',
    subtype: 'textarea',
    rows: 4,
    allowClear: true
};

const textareaModel = {
    name: ''
};

textarea.code = `
<script>
const field = ${JSON.stringify(textareaField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(textareaModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="field"
        />
    </a-form-model>
</template>
`;

textarea.data = {
    field: textareaField,
    model: textareaModel
};

// 适应文本高度的文本域
let aotusizeTextarea = {};

const aotusizeTextareaField = {
    type: 'Input',
    model: 'name',
    subtype: 'textarea',
    autosize: true
};

const aotusizeTextareaModel = {
    name: ''
};

aotusizeTextarea.code = `
<script>
const field = ${JSON.stringify(aotusizeTextareaField, null, 4)};
export default {
    data() {
        return {
            field,
            model: ${JSON.stringify(aotusizeTextareaModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="field"
        />
    </a-form-model>
</template>
`;

aotusizeTextarea.data = {
    field: aotusizeTextareaField,
    model: aotusizeTextareaModel
};



// 禁用
let disabled = {};

const disabledInputField = {
    type: 'Input',
    model: 'name',
    disabled: true
};

const disabledTextareaField = {
    type: 'Input',
    model: 'intro',
    subtype: 'textarea',
    disabled: true
};

const disabledModel = {
    name: '',
    intro: ''
};

disabled.code = `
<script>
const inputField = ${JSON.stringify(disabledInputField, null, 4)};
const textareaField = ${JSON.stringify(disabledTextareaField, null, 4)};
export default {
    data() {
        return {
            inputField,
            textareaField,
            model: ${JSON.stringify(disabledModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="field"
        />
        <FieldGenerator
            :field="textareaField"
        />
    </a-form-model>
</template>
`;

disabled.data = {
    inputField: disabledInputField,
    textareaField: disabledTextareaField,
    model: disabledModel
};

// 搜索框
let search = {};

const searchField = {
    type: 'Input',
    model: 'name',
    search: true
};

const enterButtonField = {
    type: 'Input',
    model: 'name',
    search: true,
    enterButton: true
};

const searchWithEnterButtonField = {
    type: 'Input',
    model: 'name',
    search: true,
    enterButton: '搜索'
};

const searchModel = {
    name: ''
};

search.code = `
<script>
export default {
    data() {
        return {
            searchField: ${JSON.stringify(searchField)},
            enterButtonField: ${JSON.stringify(enterButtonField)},
            searchWithEnterButtonField: ${JSON.stringify(searchWithEnterButtonField)},
            model: ${JSON.stringify(searchModel)}
        };
    }
};
</script>
<template>
    <a-form-model :model="model">
        <FieldGenerator
            :field="searchField"
        />
        <FieldGenerator
            :field="enterButtonField"
        />
        <FieldGenerator
            :field="searchWithEnterButtonField"
        />
    </a-form-model>
</template>
`;

search.data = {
    searchField,
    enterButtonField,
    searchWithEnterButtonField,
    model: searchModel
};

export default {
    simple,
    size,
    allowClear,
    prefixAndSuffix,
    addonBeforeAndAddonAfter,
    search,
    password,
    textarea,
    aotusizeTextarea,
    disabled
};
