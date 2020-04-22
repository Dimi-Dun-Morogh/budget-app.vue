<template>
  <div id="app">
    <Form @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance"/>
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
    visibility: {
      showIncome: true,
    },
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

    onDeleteItem(id) {
      if (confirm('really delete?')) {
        this.$delete(this.list, id);
      }
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
      };
      this.$set(this.list, newObj.id, newObj);
    },
    showIncome() {
      console.log('is income popin', document.querySelectorAll('.INCOMEvis'));
      document.querySelectorAll('.Outcomevis').forEach((item) => item.classList.add('piss-off'));
      document.querySelectorAll('.INCOMEvis').forEach((item) => item.classList.remove('piss-off'));
    },
    showOutCome() {
      document.querySelectorAll('.INCOMEvis').forEach((item) => item.classList.add('piss-off'));
      document.querySelectorAll('.Outcomevis').forEach((item) => item.classList.remove('piss-off'));
    },
    showEverything() {
      document.querySelectorAll('.Outcomevis').forEach((item) => item.classList.remove('piss-off'));
      document.querySelectorAll('.INCOMEvis').forEach((item) => item.classList.remove('piss-off'));
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
.piss-off{
  display: none !important;
}
</style>
