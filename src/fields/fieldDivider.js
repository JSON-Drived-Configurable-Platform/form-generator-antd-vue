import {Divider} from 'ant-design-vue';
import {classPrefix} from '../utils/const';
import {getDividerProps} from '../utils/components-props';

const FiledDivider = {
    props: {
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
    // eslint-disable-next-line no-unused-vars
    render(h) {
        const propsConfig = getDividerProps(this.field);
        return <Divider {...propsConfig}>{propsConfig.props.title}</Divider>;
    }
};

export default FiledDivider;
