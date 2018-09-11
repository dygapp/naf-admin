<template>
  <div class="contacts">
    <el-card class="left">
      <div slot="header" class="top">
        <span>{{productName}}</span>
        <el-button icon="el-icon-edit" style="float: right; padding: 3px 0" type="text" @click="setCurrent()"> </el-button>
      </div>
      <dept-tree @selected="setCurrent" :data-items="items"></dept-tree>
    </el-card>
    <el-card class="right list" size="mini" v-if="view ==  'list'">
      <div slot="header" class="clearfix">
        <span>{{(current && current.name) || '&nbsp;' }}</span>
        <el-button icon="el-icon-plus" style="float: right; padding: 3px 0" type="text" @click="handleNew">添加子部门 </el-button>
      </div>
      <el-table border style="width: 100%;overflow: auto;" size="mini" :data="list">
        <el-table-column label="ID" prop="id" width="100"></el-table-column>
        <el-table-column label="上级ID" prop="parentid" width="100"></el-table-column>
        <el-table-column label="部门名称" prop="name"></el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="right details" size="mini" v-else>
      <div slot="header" class="clearfix">
        <span>{{form.isNew?'添加部门':'修改部门' }}</span>
        <el-button icon="el-icon-arrow-left" style="float: right; padding: 3px 10px;" type="text" @click="view = 'list'">返回</el-button>
      </div>
      <el-form ref="form" :model="form" :rules="rules" label-width="120px" size="small">
        <el-form-item label="上级ID">
          <el-input v-model="form.parentid" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="部门ID">
          <el-input v-model="form.id" :disabled="!form.isNew"></el-input>
        </el-form-item>
        <el-form-item label="部门名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import DemoTable from '@/naf/data/demo-table';
import DeptTree from '@/naf/user/dept-tree';
import { createNamespacedHelpers } from 'vuex';
import config from '@/config';
import * as types from '@/constants/mutation-types';

const { productName } = config;

const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  'system/dept'
);

export default {
  components: {
    DemoTable,
    DeptTree
  },
  mounted() {
    this.load();
  },
  data() {
    return {
      productName,
      view: 'list',
      form: {},
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    ...mapActions(['load', 'create', 'delete', 'update']),
    ...mapMutations({ setCurrent: types.DEPT_SELECTED }),
    handleEdit(data) {
      this.form = { ...data, isNew: false };
      this.isNew = false;
      this.view = 'details';
    },
    handleNew() {
      const { id: parentid } = this.current || { id: 0 };
      this.form = { parentid, isNew: true };
      this.view = 'details';
    },
    async handleSave() {
      this.$refs['form'].validate(async valid => {
        if (valid) {
          try {
            if (this.form.isNew) {
              await this.create(this.form);
            } else {
              await this.update(this.form);
            }
            this.$notify({
              title: '成功',
              message: '数据保存成功',
              type: 'success'
            });
            this.view = 'list';
          } catch (err) {
            this.$message({
              type: 'error',
              message: err.message || '请求失败',
              duration: 1000
            });
          }
          // if (res.errcode === 0) {
          //   this.$notify({
          //     title: '成功',
          //     message: '数据保存成功',
          //     type: 'success'
          //   });
          //   this.view = 'list';
          // }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    async handleDelete(data) {
      try {
        await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        });
        await this.delete(data);
        this.$message({
          type: 'success',
          message: '删除数据成功'
        });
      } catch (err) {
        if (err == 'cancel') {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        } else {
        }
      }
    }
  },
  computed: {
    ...mapState(['current', 'items']),
    list() {
      const { id } = this.current || { id: 0 };
      return this.items.filter(p => p.parentid === id);
    }
  }
};
</script>
<style lang="less" scoped>
.contacts {
  min-height: 100%;
  width: 900px;
  padding-right: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
.el-card {
  min-height: 100%;
}
.el-card /deep/ .el-card__header {
  padding: 10px;
}
.left {
  width: 260px;
}
.left .top {
  justify-content: space-around;
  align-items: left;
}
.right {
  flex: 1;
}
</style>
