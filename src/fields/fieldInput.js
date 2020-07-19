/* eslint-disable no-unused-vars */
import {Input, Icon} from 'ant-design-vue';
import {getInputProps, getIconProps} from '../utils/components-props';
import {fieldChange} from '../utils/common-emiters';
import { isArray } from 'core-js/fn/array';
import { isObject } from 'core-js/fn/object';

const {TextArea, Password} = Input;
const FiledInput = {
    props: {
        value: {
            type: [Object, String],
            default: ''
        },
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        handleChange(e) {
            let value = e.target.value;
            this.$emit('fieldChange', {
                model: this.field.model,
                value,
                e,
                field: this.field
            });
        },
    },
    render(h) {
        const prefix = this.field.prefix;
        const prefixProps = isObject(prefix) ? getIconProps(prefix) : prefix;

        const suffix = this.field.suffix;
        const suffixProps = isObject(suffix) ? getIconProps(suffix) : suffix;

        const addonBefore = this.field.addonBefore;
        const addonBeforeProps = isObject(addonBefore) ? getIconProps(addonBefore) : addonBefore;

        const addonAfter = this.field.addonAfter;
        const addonAfterProps = isObject(addonAfter) ? getIconProps(addonAfter) : addonAfter;

        const inputProps = getInputProps(this.field, {
            props: {
                value: this.value,
                prefix: isObject(prefixProps) ? <Icon  {...prefixProps} /> : prefixProps,
                suffix: isObject(suffixProps) ? <Icon  {...suffixProps} /> : suffixProps,
                addonBefore: isObject(addonBeforeProps) ? <Icon  {...addonBeforeProps} /> : addonBeforeProps,
                addonAfter: isObject(addonAfterProps) ? <Icon  {...addonAfterProps} /> : addonAfterProps,
            },
            on: {
                change: this.handleChange
            }
        });

        switch (this.field.subtype) {
            case 'textArea':
                return <TextArea {...inputProps}/>;
            case 'password':
                return <Password {...inputProps}/>;
            default:
                return <Input {...inputProps}/>;
        }
    }
};

// Event exposed to FieldGenerator and FormGenerator
FiledInput.emiters = {
    fieldChange
};

export default FiledInput;
