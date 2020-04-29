<template>
  <div class="budget-list-wrap">
            <ElButton @click="showOut" type="danger" class="button">Outcome</ElButton>
        <ElButton @click="showIn" type="success" class="button">Income</ElButton>
        <ElButton @click="showEvery" type="primary" class="button">Everything</ElButton>
    <ElCard class="card-custom" :header="header">
      <template v-if="!isEmpty">
<BudgetListItem :outComeVisible="outComeVisible"
:incomeVisible="incomeVisible" @deleteItem="deleteItem"/>
         </template>
<ElAlert v-else type="info" :title="emptyTitle" :closable="false">  </ElAlert>

       </ElCard>
  </div>
</template>

<script>
import BudgetListItem from '@/components/BudgetListItem.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    outComeVisible: {
      type: Boolean,
      default: true,
    },
    incomeVisible: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    header: 'Budget List',
    emptyTitle: 'Empty List',
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.budgetList).length;
    },
    ...mapGetters(['budgetList']),
  },
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    showOut() {
      this.$emit('ShowOut');
    },
    showIn() {
      this.$emit('ShowIn');
    },
    showEvery() {
      this.$emit('ShowEvery');
    },

  },
};
</script>

<style scoped>
.budget-list-wrap{
  max-width: 500px;
  margin: auto;
}
.button{
  margin-bottom: 20px;
}
.card-custom{
  border-radius: 20px  20px 0 0;
}
</style>
