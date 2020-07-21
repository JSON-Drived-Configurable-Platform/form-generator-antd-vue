// 简单示例
let simple = {};

const field = {
    type: 'Switch',
    model: 'open'
};

const model = {
    open: false
};

simple.data = {
    field,
    model
};

simple.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(field)},
            model: ${JSON.stringify(model)}
        };
    }
    methods: {
        handleFieldChange(model, value) {
            console.log(model, value);
        }
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
            @on-field-change="handleFieldChange"
        />
    </Form>
</template>
`;

// 文字
let text = {};
const textField = {
    type: 'Switch',
    model: 'open',
    checkedChildren: '开',
    unCheckedChildren: '关'
};

const textModel = {
    open: true
};

text.data = {
    field: textField,
    model: textModel
};

text.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(textField)},
            model: ${JSON.stringify(textModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// 禁用
let disabled = {};
const disabledField = {
    type: 'Switch',
    model: 'open',
    disabled: true
};

const disabledModel = {
    open: false
};

disabled.data = {
    field: disabledField,
    model: disabledModel
};

disabled.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(disabledField)},
            model: ${JSON.stringify(disabledModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// size
let size = {};
const sizeField = {
    type: 'Switch',
    model: 'open',
    size: 'default'
};

const sizeSmallField = {
    type: 'Switch',
    model: 'open',
    size: 'small'
};

const sizeModel = {
    open: false
};

size.data = {
    field: sizeField,
    smallFeild: sizeSmallField,
    model: sizeModel
};

size.code = `
<script>
export default {
    data() {
        return {
            field: ${JSON.stringify(sizeField)},
            smallFeild: ${JSON.stringify(sizeSmallField)},
            model: ${JSON.stringify(sizeModel)}
        };
    }
};
</script>
<template>
    <Form :model="model">
        <FieldGenerator
            :field="field"
        />
    </Form>
</template>
`;

// value
export default {
    simple,
    text,
    disabled,
    size
};
