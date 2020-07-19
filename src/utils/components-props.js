/* eslint-disable no-unused-vars */
import {getPropsFromConfig} from '../utils/fieldProps';
import { render } from 'less';
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

const popconfirmPropsKeys = [
    'cancelText',
    'okText',
    'okType',
    'title',
    'disabled'
];

const iconPropsKeys = [
    'type',
    'style',
    'theme',
    'spin',
    'rotate',
    'twoToneColor'
];

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
