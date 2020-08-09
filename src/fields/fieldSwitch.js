/* eslint-disable no-unused-vars */
import {Switch} from 'ant-design-vue';
import {classPrefix} from '../utils/const';
import {getSwitchProps, getIconProps} from '../utils/components-props';
import {fieldChange} from '../utils/common-emiters';

const FiledSwitch = {
    props: {
        value: {
            type: Boolean,
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
        const propsConfig = getSwitchProps(this.field, {
            props: {
                checked: this.value
            },
            on: {
                change: this.handleChange
            }
        });
        return <Switch {...propsConfig} />;
    }
};

// Event exposed to FieldGenerator and FormGenerator
FiledSwitch.emiters = {
    fieldChange
};

export default FiledSwitch;
