/* eslint-disable no-unused-vars */
import {Input} from 'ant-design-vue';
import {getPropsFromField} from '../utils/fieldProps';
import {fieldChange} from '../utils/common-emiters';


// doc: https://antdv.com/components/input-cn/#Input
const fieldPropsKeys = [
    'placeholder',
    'allowClear',
    'disabled',
    'maxLength',
    'prefix',
    'suffix',
    'size'
];

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
        getProps(field) {
            return getPropsFromField(fieldPropsKeys, field);
        }
    },
    render(h) {
        const props = {
            props: this.getProps(this.field)
        };
        return (
            <Input
                {...props}
                value={this.value}
                onChange={this.handleChange}
            >
            </Input>
        );
    }
};

FiledInput.emiters = {
    fieldChange
};

export default FiledInput;
