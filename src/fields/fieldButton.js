/* eslint-disable no-unused-vars */
import {Button, Popconfirm, Icon} from 'ant-design-vue';
import {getButtonProps, getPopconfirmProps, getIconProps} from '../utils/components-props';
import {classPrefix} from '../utils/const';
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
    },
    render(h) {
        const confirmPoptipConfig = this.field.confirmPoptip || {};
        const hasPopconfirm = Object.keys(confirmPoptipConfig).length > 0;

        const confirmPoptipIconConfig = confirmPoptipConfig.icon || {};
        const hasConfirmPopIcon = Object.keys(confirmPoptipIconConfig).length > 0;
        const confirmPoptipIconProps = getIconProps(confirmPoptipIconConfig);

        // Button
        const buttonProps = getButtonProps(this.field, {
            props: {
                loading: this.loading,
                text: this.text
            },
            on: hasPopconfirm ? {} : {click: this.handleClick}
        });

        const ButtonVNode = <Button {...buttonProps}>{buttonProps.props.text}</Button>;

        // Popconfirm
        const popconfirmProps = getPopconfirmProps(confirmPoptipConfig, {
            props: {
                icon: <Icon {...confirmPoptipIconProps}></Icon>
            },
            on: {
                confirm: this.handleClick,
                cancel: this.handelCancel
            }
        });
        return hasPopconfirm
            ?
            <Popconfirm {...popconfirmProps}>
                {ButtonVNode}
            </Popconfirm>
            :
            ButtonVNode;
    }
};

// Event exposed to FieldGenerator and FormGenerator
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
