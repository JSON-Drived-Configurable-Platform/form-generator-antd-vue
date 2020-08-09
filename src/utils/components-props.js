/* eslint-disable no-unused-vars */
import {getPropsFromConfig} from '../utils/fieldProps';

// doc https://www.antdv.com/components/divider-cn/#API
const dividerPropsKeys = [
    'dashed',
    'orientation',
    // @origin: type
    'subtype',
    // extend
    'title'
];

/**
 * 获取DividerProps
 *
 * @param {Object} field config prop
 * @param {Object} props current props
 */
export function getDividerProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(dividerPropsKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}


// doc: https://antdv.com/components/input-cn/#Input
const buttonPropsKeys = [
    'disabled',
    'ghost',
    'htmlType',
    'icon',
    'shape',
    'size',
    // @origin: type
    'subtype',
    'block',
    'loading',
    'slot'
];

/**
 * 获取ButtonProps
 *
 * @param {Object} field config prop
 * @param {Object} props current props
 */
export function getButtonProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(buttonPropsKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}

const popconfirmPropsKeys = [
    'cancelText',
    'okText',
    'okType',
    'title',
    'disabled'
];

/**
 * 获取PopconfirmProps
 *
 * @param {Object} field config prop
 * @param {Object} props current props
 */
export function getPopconfirmProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(popconfirmPropsKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}


const iconPropsKeys = [
    'type',
    'style',
    'theme',
    'spin',
    'rotate',
    'twoToneColor'
];

/**
 * 获取IconProps
 *
 * @param {Object} field config prop
 * @param {Object} props current props
 */
export function getIconProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(iconPropsKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}

// doc: https://antdv.com/components/input-cn/#Input
const inputPropsKeys = [
    'addonBefore',
    'addonAfter',
    'prefix',
    'suffix',
    // @origin type
    'subtype',
    'placeholder',
    'allowClear',
    'disabled',
    'maxLength',
    'size'
];

/**
 * 获取InputProps
 *
 * @param {Object} field config prop
 * @param {Object} props current props
 */
export function getInputProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(inputPropsKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}

// doc: https://antdv.com/components/switch-cn/
const switchPropsKeys = [
    'autoFocus',
    'checked',
    'checkedChildren',
    'defaultChecked',
    'disabled',
    'loading',
    'size',
    'unCheckedChildren'
];

export function getSwitchProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(switchPropsKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}

// doc https://www.antdv.com/components/select-cn/#API
const selectPropsKeys = [
    'allowClear',
    'autoClearSearchValue',
    'autoFocus',
    'defaultActiveFirstOption',
    'defaultValue',
    'disabled',
    'dropdownClassName',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownStyle',
    'dropdownMenuStyle',
    'filterOption',
    'firstActiveValue',
    'getPopupContainer',
    'labelInValue',
    'maxTagCount',
    'maxTagPlaceholder',
    'maxTagTextLength',
    'mode',
    'notFoundContent',
    'optionFilterProp',
    'optionLabelProp',
    'placeholder',
    'showSearch',
    'showArrow',
    'size',
    'suffixIcon',
    'removeIcon',
    'clearIcon',
    'menuItemSelectedIcon',
    'tokenSeparators',
    'options',
    'defaultOpen',
    'open'
];

export function getSelectProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(selectPropsKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}

const inputNumberPropKeys = [
    'autoFocus',
    'defaultValue',
    'disabled',
    'formatter',
    'max',
    'min',
    'parser',
    'precision',
    'decimalSeparator',
    'size',
    'step'
];

export function getInputNumberProps(field = {}, props = {}) {
    return {
        props: {
            ...getPropsFromConfig(inputNumberPropKeys, field),
            ...props.props
        },
        slot: props.slot,
        on: props.on
    };
}
