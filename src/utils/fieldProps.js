// prop标识转换
const propMap = {
    subtype: 'type'
};

/**
 *
 * @param {Array} propKeys
 * @param {Object} field
 */
export function getPropsFromConfig(propKeys = [], config = {}) {
    const props = {};
    propKeys.forEach(key => {
        // 如果存在需要转换的key，切转换的key有值
        const configKey = propMap[key];
        if (configKey && config[key] !== undefined) {
            props[configKey] = config[key];
        }
        else if (config[key] !== undefined) {
            props[key] = config[key];
        }
    });
    return props;
}
