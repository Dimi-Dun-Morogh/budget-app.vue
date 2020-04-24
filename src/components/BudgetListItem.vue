<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop"
      v-show="item.type ===  'Outcome'? outComeVisible: incomeVisible ">
      <span  class="budget-comment">{{ item.comment}}</span>

      <span :style="`color: ${item.type === 'INCOME' ? 'green' : 'red'}`"
       :class="item.type" class="budget-value">
        {{ item.value}}
        <i :class="item.type==='INCOME'?'el-icon-top'
   :'el-icon-bottom'"></i>
      </span>
      <ElButton type="danger" size="mini" @click="deleteItem(item.id)">Delete</ElButton>

    </div>
  </div>
</template>

<script>
export default {
  name: 'BudgetListItem',
  props: ['list', 'outComeVisible', 'incomeVisible'],
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
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
</style>
