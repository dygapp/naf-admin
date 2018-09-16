<template>
  <div class="lite">
    <data-grid :data="items" :action="true" :meta="fields" :operation="operation" @add-new="handleNew" @edit="handleEdit" @delete="handleDelete">
    </data-grid>
    <data-dlg :title="form.isNew?'添加标签':'修改标签'" width="400px" v-if="showForm" :visible.sync="showForm" :data="form.data" :is-new="form.isNew" :options="{'label-width':'80px', size: 'mini'}" :meta="fields" @save="handleSave" @cancel="showForm = false">
    </data-dlg>
  </div>
</template>
<script>
import DataDlg from '@/naf/data/form-dlg';
import DataGrid from '@/naf/data/filter-grid';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('system/tag');

export default {
  components: {
    DataDlg,
    DataGrid
  },
  mounted() {
    this.load();
  },
  data() {
    return {
      view: 'list',
      showForm: false,
      form: {},
      passwdForm: {},
      fields: [
        { name: 'tagid', label: 'ID', readonly: true },
        { name: 'tagname', label: '标签', required: true }
      ],
      operation: [
        ['edit', '修改标签名', 'el-icon-edit'],
        ['delete', '删除标签', 'el-icon-delete', true]
      ] /* 操作类型 */
    };
  },
  methods: {
    ...mapActions(['load', 'create', 'delete', 'update']),
    handleEdit(data) {
      this.form = { data, isNew: false };
      this.showForm = true;
    },
    handleNew() {
      const { id: deptId } = this.current || { id: 0 };
      this.form = { data: { department: [deptId] }, isNew: true };
      this.showForm = true;
    },
    async handleSave(payload) {
      let res, msg;
      if (payload.isNew) {
        res = await this.create(payload.data);
        msg = '标签添加成功';
      } else {
        res = await this.update(payload.data);
        msg = '标签修改成功';
      }
      if (this.$checkRes(res, msg)) {
        this.showForm = false;
      }
    },
    async handleDelete(data) {
      const res = await this.delete(data);
      this.$checkRes(res, '删除数据成功');
    }
  },
  computed: {
    ...mapState(['items'])
  }
};
</script>
<style lang="less" scoped>
  .lite {
    width: 600px;
  }
</style>

