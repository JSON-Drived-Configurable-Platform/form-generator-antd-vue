import {Input, Icon} from 'ant-design-vue';
import {getInputProps, getIconProps} from '../utils/components-props';
import {fieldChange} from '../utils/common-emiters';
import { isObject } from 'core-js/fn/object';

const {TextArea, Password} = Input;
const FiledInput = {
    props: {
        value: {
            type: String,
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
    /* eslint-disable no-unused-vars */
    render(h) {
        const iconPropTypes = [
            'prefix',
            'suffix',
            'addonBefore',
            'addonAfter'
        ];
        const iconPropVNodes = iconPropTypes.reduce((iconVNodes, type) => {
            const config = this.field[type];
            const props = isObject(config) ? getIconProps(config) : config;
            iconVNodes[type] = isObject(props) ? <Icon  {...props} /> : props;
            return iconVNodes;
        }, {});

        const inputProps = getInputProps(this.field, {
            props: {
                value: this.value,
                ...iconPropVNodes
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
