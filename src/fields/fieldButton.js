/* eslint-disable no-unused-vars */
import {Button, Popconfirm, Icon} from 'ant-design-vue';
import {classPrefix} from '../utils/const';
import {getPropsFromField} from '../utils/fieldProps';
// doc: https://antdv.com/components/input-cn/#Input
const buttonPropsKeys = [
    'disabled',
    'ghost',
    'htmlType',
    'icon',
    // 'loading',
    'shape',
    'size',
    'type',
    'block'
];

const popconfirmPropsKeys = [
    'cancelText',
    'okText',
    'okType',
    'title',
    'icon',
    'disabled'
];

const iconPropsKeys = [

];

const FieldButton = {
    inject: ['FormContext'],
    props: {
        field: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            text: '',
            loading: false
        };
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
    },
    mounted() {
        this.text = this.field.text;
        if (this.field.textModel) {
            this.text = this.FormContext.model[this.field.textModel];
        }
    },
    methods: {
        handleClick() {
            const action = this.field.action;
            const model = this.field.model;
            const value = this.FormContext.model[model];
            switch (action.type) {
                case 'ajax':
                    this.$emit('httpRequest', {
                        component: this
                    });
                    break;
                case 'event':
                    this.$emit('buttonEvent', {
                        name: action.name,
                        field: this.field
                    });
                    break;
                // vue route
                case 'route':
                    // If use model, get route from the form.model
                    this.$router && this.$router.push(value || action.route);
                    break;
                // url
                case 'url':
                    // If use model, get url from the form.model
                    window.open(value || action.url);
                    break;
            }
        },
        handelCancel() {
            this.$emit('on-button-cancel', this);
        },
        getButtonProps(field) {
            const props = getPropsFromField(buttonPropsKeys, field);
            props.loading = this.loading;
            return props;
        },
        getPopconfirmProps(field) {
            return getPropsFromField(popconfirmPropsKeys, field);
        },
        getIconProps(field) {
            return getPropsFromField(iconPropsKeys, field);
        }
    },
    render(h) {
        const buttonProps = {
            props: this.getButtonProps(this.field)
        };

        const confirmPoptipConfig = this.field.confirmPoptip || {};
        const popconfirmProps = {
            props: this.getPopconfirmProps(confirmPoptipConfig),
            on: {
                confirm: this.handleClick,
                cancel: this.handelCancel
            }
        };

        const hasPopconfirm = Object.keys(popconfirmProps.props).length > 0;


        const popconfirmIconConfig = this.field.confirmPoptip && this.field.confirmPoptip.icon || {};
        const popconfirmIconProps = {
            props: this.getIconProps(popconfirmIconConfig)
        };

        const hasPopconfirmIcon = Object.keys(popconfirmIconProps.props).length > 0;

        return (
            hasPopconfirm
                ?
                <Popconfirm {...popconfirmProps}>
                    {hasPopconfirmIcon && <Icon {...popconfirmIconProps}/>}
                    <Button {...buttonProps}>{this.text}</Button>
                </Popconfirm>
                :
                <Button
                    {...buttonProps}
                    onClick={this.handleClick}
                >{this.text}</Button>
        );
    }
};

FieldButton.emiters = {
    /**
     * 子组件value变更时触发
     *
     * @param {Component} context FieldGenerator组件实例
     * @param {$event} $event 子组件emit时的参数
     */
    buttonEvent(context, $event) {
        context.$emit('on-button-event', $event);
    },
    /**
     * 处理子组件触发请求的行为，涉及到的子组件包含 Button
     * 请求行为最终会emit到父组件
     *
     * @param {Component} context FieldGenerator组件实例
     * @param {Object} component 触发提交事件的组件
     */
    httpRequest(context, $event) {
        const {component} = $event;
        component.loading = true;
        const field = component.field;
        const name = (field.action && field.action.name) || null;
        context.doAjaxAction(field).then(res => {
            component.loading = false;
            context.$emit('on-button-event', {name, field, res});
        }).catch(res => {
            component.loading = false;
            context.$emit('on-button-event', {name, field, res});
        });
    },
};

export default FieldButton;
