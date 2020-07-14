import {setValue} from './processValue';
/**
 * 子组件value变更时触发
 *
 * @param {Component} context FieldGenerator组件实例
 * @param {$event} $event 子组件emit时的参数
 */
export function fieldChange(context, $event) {
    const {model, value} = $event;
    setValue.call(context, {
        originModel: context.FormContext.model,
        model: model,
        value
    });
    context.FormContext.validateField(model);
    context.$emit('on-field-change', {
        model,
        value,
        field: context.computedField
    });
}
