<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop" :class="item.type + 'vis'">
      <span  class="budget-comment">{{ item.comment}}</span>

      <span :class="item.type" class="budget-value">
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
  props: ['list', 'visibility'],
  methods: {
    deleteItem(id) {
      this.$emit('deleteItem', id);
    },
  },
  computed: {
    // isVisible(){
    //   return {

    //   }
    // }
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
.Outcome {
  color: red;
}
.INCOME {
  color: green;
}
</style>
