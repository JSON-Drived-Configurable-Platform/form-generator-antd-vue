// prop标识转换
const propMap = {
    type: 'subtype'
};

/**
 *
 * @param {Array} propKeys
 * @param {Object} field
 */
export function getPropsFromField(propKeys = [], field = {}) {
    const fieldProps = {};
    propKeys.forEach(key => {
        let fieldKey = key;
        if (field[fieldKey] !== undefined) {
            if (propMap[key]) {
                fieldKey = propMap[key];
            }
            fieldProps[key] = field[fieldKey];
        }
    });
    return fieldProps;
}

// use getListeners instead this.$listeners
// https://github.com/vueComponent/ant-design-vue/issues/1705
export function getListeners(context) {
    return (context.$vnode ? context.$vnode.componentOptions.listeners : context.$listeners) || {};
}
