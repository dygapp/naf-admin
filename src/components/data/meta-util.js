import _ from 'lodash';

/* 字段定义 */
export const FieldMeta = (meta) => {
  let { field, slots } = meta;
  const { rules, formOpts, listOpts, order = 0 } = meta;
  if (field === undefined) {
    const { name, label, required = false, readonly = false, editable = true } = meta;
    field = { name, label, required, readonly, editable };
  }
  if (_.isArray(field)) {
    const [name, label, required = false, readonly = false, editable = true] = field;
    field = { name, label, required, readonly, editable };
  }

  if (slots === undefined) {
    // 从meta对象中提取slots属性
    const { filter = false, list = true, form = true } = meta;
    slots = { filter, list, form };
  } else if (_.isObject(slots)) {
    // 处理slots默认值
    const { filter = false, list = true, form = true } = slots;
    slots = { filter, list, form };
  } else if (_.isArray(slots)) {
    slots = { filter: slots.includes('filter'), filter: slots.includes('list'), form: slots.includes('form') }
  }

  return { field, rules, slots, order, formOpts, listOpts };
}

/* 列表操作列定义 */
export const Operation = (meta) => {
  let items = Object.entries(meta);
  if (_.isArray(meta)) {
    items = Object.values(meta);
  }
  return items.map(item => {
    if (_.isArray(item)) {
      const [event, label, confirm = false] = item;
      return { event, label, confirm };
    }
    return item;
  });
}
