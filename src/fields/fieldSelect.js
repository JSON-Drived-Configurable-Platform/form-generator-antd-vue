/* eslint-disable no-unused-vars */
import {Select} from 'ant-design-vue';
import {classPrefix} from '../utils/const';
import {getSelectProps, getIconProps} from '../utils/components-props';
import {fieldChange} from '../utils/common-emiters';
import { isObject } from 'core-js/fn/object';

const FiledSelect = {
    props: {
        value: {
            type: [Boolean, String, Number, Array],
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
        const iconPropTypes = [
            'suffixIcon',
            'removeIcon',
            'clearIcon',
            'menuItemSelectedIcon'
        ];

        const iconPropVNodes = iconPropTypes.reduce((iconVNodes, type) => {
            const config = this.field[type];
            const props = isObject(config) ? getIconProps(config) : config;
            iconVNodes[type] = isObject(props) ? <Icon  {...props} /> : props;
            return iconVNodes;
        }, {});

        const propsConfig = getSelectProps(this.field, {
            props: {
                checked: this.value
            },
            on: {
                change: this.handleChange
            }
        });
        return <Select {...propsConfig} />;
    }
};

// Event exposed to FieldGenerator and FormGenerator
FiledSelect.emiters = {
    fieldChange
};

export default FiledSelect;
