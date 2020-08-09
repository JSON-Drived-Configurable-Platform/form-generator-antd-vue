// 简单示例
let simple = {};

const fields = [
    {
        type: 'Divider',
        dashed: true,
        orientation: 'left',
        subtype: 'horizontal',
        title: 'Input'
    },
    {
        type: 'Input',
        model: 'name',
        // TODO
        initialValue: 'bingblog',
        rules: [
            {
                required: true,
                message: 'Please enter your name~'
            }
        ]
    },
    {
        type: 'Divider',
        dashed: true,
        orientation: 'left',
        subtype: 'horizontal',
        title: 'Switch'
    },
    {
        type: 'Switch',
        model: 'open',
        checkedChildren: '开',
        unCheckedChildren: '关'
    },
    {
        type: 'Divider',
        dashed: true,
        orientation: 'left',
        subtype: 'horizontal',
        title: 'Select'
    },
    {
        type: 'Select',
        model: 'person',
        options: [
            {
                value: 'jack',
                label: 'Jack'
            },
            {
                value: 'lucy',
                label: 'Lucy'
            },
            {
                value: 'bingblog',
                label: 'Bingblog'
            }
        ]
    },
    {
        type: 'Divider',
        dashed: true,
        orientation: 'left',
        subtype: 'horizontal',
        title: 'Button'
    },
    {
        confirmPoptip: {
            title: '确定删除?',
            placement: 'right',
            cancelText: '取消',
            okText: '确认',
            icon: {
                type: 'warning'
            }
        },
        type: 'Button',
        text: '删除',
        subtype: 'danger',
        action: {
            type: 'ajax',
            api: '/curdDelete',
            name: 'curdDelete'
        }
    }
];

const model = {
    name: 'bingblog',
    open: false,
    person: 'bingblog'
};

simple.data = {
    fields,
    model
};

simple.code = `
<script>
const field = ${JSON.stringify(fields, null, 4)};
export default {
    data() {
        return {
            field,
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
