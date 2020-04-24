<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <DialogUi :dialogVisible="dialogVisible" @Confirm="deleteWithDialog"
     @Cancel="dialogVisible=false"/>
    <BudgetList
      :outComeVisible="outComeVisible"
      :incomeVisible="incomeVisible"
      :list="list"
      @deleteItem="onDeleteItem"
      @ShowIn="showIncome"
      @ShowOut="showOutCome"
      @ShowEvery="showEverything"
    />
  </div>
</template>

<script>
import BudgetList from '@/components/BudgetList.vue';
import TotalBalance from '@/components/totalBalance.vue';
import Form from '@/components/Form.vue';
import DialogUi from '@/components/DialogUi.vue';

export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    Form,
    DialogUi,
  },
  data: () => ({
    incomeVisible: true,
    outComeVisible: true,
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
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0,
      );
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
      this.dialogVisible = false;
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      this.$set(this.list, newObj.id, newObj);
    },
    showIncome() {
      this.outComeVisible = false;
      this.incomeVisible = true;
      // document
      //   .querySelectorAll('.Outcomevis')
      //   .forEach((item) => item.classList.add('disp-off'));
      // document
      //   .querySelectorAll('.INCOMEvis')
      //   .forEach((item) => item.classList.remove('disp-off'));
    },
    showOutCome() {
      this.outComeVisible = true;
      this.incomeVisible = false;
      // document
      //   .querySelectorAll('.INCOMEvis')
      //   .forEach((item) => item.classList.add('disp-off'));
      // document
      //   .querySelectorAll('.Outcomevis')
      //   .forEach((item) => item.classList.remove('disp-off'));
    },
    showEverything() {
      this.outComeVisible = true;
      this.incomeVisible = true;
      // document
      //   .querySelectorAll('.Outcomevis')
      //   .forEach((item) => item.classList.remove('disp-off'));
      // document
      //   .querySelectorAll('.INCOMEvis')
      //   .forEach((item) => item.classList.remove('disp-off'));
    },
  },
};
</script>

<style>
body {
  background-color: beige;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #f9f6f9;
  margin: auto;
  max-width: 500px;
}
.disp-off {
  display: none !important;
}
</style>
