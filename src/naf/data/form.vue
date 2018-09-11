<template>
  <el-form ref="form" :model="form" :rules="rules" v-bind="options">
    <slot>
      <el-form-item v-for="(item,index) in fields" :key="'form-field-'+index" :label="item.field.label" :prop="item.field.name" :required="item.field.required" :rules="item.rules" v-bind="item.formOpts">
        <el-input v-model="form[item.field.name]" :disabled="readonly || item.field.readonly || (!isNew && item.field.editable === false)"></el-input>
      </el-form-item>
      <el-form-item v-show="!readonly">
        <el-button type="primary" @click="handleSave">保存</el-button>
      </el-form-item>
    </slot>
  </el-form>
</template>
<script>
import { FieldMeta } from './meta-util';

export default {
  name: 'data-form',
  props: {
    data: { type: Object, required: true },
    meta: { type: Array, required: true },
    rules: Object,
    readonly: { type: Boolean, default: false } /* 是否只读 */,
    isNew: { type: Boolean, default: false } /* 是否新创建 */,
    options: Object
  },
  data() {
    return {
      form: { ...this.data }
    };
  },
  methods: {
    handleSave() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.$emit('save', { isNew: this.isNew, data: this.form });
        } else {
          console.warn('form validate error!!!');
        }
      });
    }
  },
  computed: {
    fields() {
      return this.meta
        .map(FieldMeta)
        .filter(p => p.slots.form)
        .sort((a, b) => b.order - a.order);
    }
  }
};
</script>
