<template>
  <div>
    <div class="list-item" v-for="(item, prop) in budgetList" :key="prop"
      v-show="item.type ===  'Outcome'? outComeVisible: incomeVisible ">
      <span  class="budget-comment">{{ item.comment}}</span>

      <span :style="`color: ${item.type === 'INCOME' ? 'green' : 'red'}`"
       :class="item.type" class="budget-value">
        {{ item.value}}
        <i :class="item.type==='INCOME'?'el-icon-top'
   :'el-icon-bottom'"></i>
      </span>
      <ElButton class="custom-icon"  plain icon="el-icon-error"
      size="mini" @click="deleteItem(item.id)"></ElButton>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BudgetListItem',
  props: ['outComeVisible', 'incomeVisible'],
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
  computed: {
    ...mapGetters(['budgetList']),
  },
};
</script>

<style scoped>
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.custom-icon {
   font-size: 1.3rem;
   color: red;
   border: none;
}
</style>
