/* eslint-disable no-unused-vars */
import {InputNumber} from 'ant-design-vue';
import {classPrefix} from '../utils/const';
import {getInputNumberProps} from '../utils/components-props';
import {fieldChange} from '../utils/common-emiters';

const FieldNumber = {
    props: {
        value: {
            type: Number,
            default: ''
        },
        field: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        }
    },
    methods: {
        handleChange(value, e) {
            this.$emit('fieldChange', {
                model: this.field.model,
                value,
                e,
                field: this.field
            });
        },
    },
    render(h) {
        const propsConfig = getInputNumberProps(this.field, {
            props: {
                value: this.value
            },
            on: {
                change: this.handleChange
            }
        });
        return <InputNumber {...propsConfig} />;
    }
};

// Event exposed to FieldGenerator and FormGenerator
FieldNumber.emiters = {
    fieldChange
};

export default FieldNumber;
