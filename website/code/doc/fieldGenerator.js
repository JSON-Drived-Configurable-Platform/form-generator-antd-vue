// 简单示例
let simple = {};

const field = {
    type: 'Input',
    model: 'name',
    initialValue: 'ant-design-vue',
    rules: [
        {
            required: true,
            message: 'Please enter your name~'
        }
    ]
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
    <a-form-model :model="model">
        <FieldGenerator
            :field="field"
        />
    </a-form-model>
</template>
`;

export default {
    simple
};
