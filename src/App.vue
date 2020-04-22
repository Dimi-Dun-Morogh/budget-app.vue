<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance"/>
    <el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>Do you really want to delete this item?</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false;deleteWithDialog();">Confirm</el-button>
  </span>
</el-dialog>
    <BudgetList :list="list" @deleteItem="onDeleteItem" @ShowIn="showIncome" @ShowOut="showOutCome"
     @ShowEvery="showEverything"/>
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';

import TotalBalance from '@/components/totalBalance.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
  },
  data: () => ({
    dialogVisible: false,
    idToDel: 0,
    list: {
      1: {
        type: 'INCOME',
        value: 100,
        comment: 'Some comment',
        id: 1,
      },
      2: {
        type: 'Outcome',
        value: -50,
        comment: 'Outcome comment',
        id: 2,
      },
    },

  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0);
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          done();
        })
        .catch(() => {});
    },

    onDeleteItem(id) {
      this.dialogVisible = true;
      this.idToDel = id;
      // if (confirm('really delete?')) {
      //   this.$delete(this.list, id);
      // }
    },
    deleteWithDialog() {
      this.$delete(this.list, this.idToDel);
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      this.$set(this.list, newObj.id, newObj);
    },
    showIncome() {
      document.querySelectorAll('.Outcomevis').forEach((item) => item.classList.add('disp-off'));
      document.querySelectorAll('.INCOMEvis').forEach((item) => item.classList.remove('disp-off'));
    },
    showOutCome() {
      document.querySelectorAll('.INCOMEvis').forEach((item) => item.classList.add('disp-off'));
      document.querySelectorAll('.Outcomevis').forEach((item) => item.classList.remove('disp-off'));
    },
    showEverything() {
      document.querySelectorAll('.Outcomevis').forEach((item) => item.classList.remove('disp-off'));
      document.querySelectorAll('.INCOMEvis').forEach((item) => item.classList.remove('disp-off'));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.disp-off{
  display: none !important;
}
</style>
