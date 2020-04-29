<template>
  <div id="app">
    <Form @submitForm="onFormSubmit" />
    <TotalBalance :total="totalBalance" />
    <DialogUi :dialogVisible="dialogVisible" @Confirm="deleteWithDialog"
     @Cancel="dialogVisible=false"/>
    <BudgetList
      :outComeVisible="outComeVisible"
      :incomeVisible="incomeVisible"
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
import { mapActions, mapGetters } from 'vuex';

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
  }),
  computed: {
    ...mapGetters(['budgetList']),
    totalBalance() {
      return Object.values(this.budgetList).reduce(
        (acc, item) => acc + item.value,
        0,
      );
    },
  },
  methods: {
    ...mapActions(['addNewListValue', 'deleteListItem']),
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
    },
    deleteWithDialog() {
      this.deleteListItem(this.idToDel);
      this.dialogVisible = false;
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      this.addNewListValue(newObj);
    },
    showIncome() {
      this.outComeVisible = false;
      this.incomeVisible = true;
    },
    showOutCome() {
      this.outComeVisible = true;
      this.incomeVisible = false;
    },
    showEverything() {
      this.outComeVisible = true;
      this.incomeVisible = true;
    },
  },
};
</script>

<style>
body {
  /* background-color: beige; */
  background-image: url("img/texture.jpg");
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
   border-radius: 25px !important;
  /* border: 2px solid #73AD21 !important; */
}
.disp-off {
  display: none !important;
}
</style>
