<template>
  <Elcard class="form-card">
    <ElForm :model="formData">
<ElFormItem lable="Type" prop="type">
  <ElSelect  class="type-select" v-model="formData.type" placeholder="choose type">
<ElOption lable="Income" value="INCOME"/>
<ElOption lable="Outcome" value="Outcome"/>
     </ElSelect>
</ElFormItem>
<ElFormItem lable="Comments" prop="comment">
<el-input v-model="formData.comment"></el-input>
</ElFormItem>
<ElFormItem lable="Value" prop="value">
<ElInput v-model.number="formData.value" />
</ElFormItem>
<ElButton @click="onSubmit" type="primary">Sumbit</ElButton>
    </ElForm>
  </Elcard>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    formData: {
      type: 'INCOME',
      comment: 'wtf',
      value: 0,
    },
  }),
  methods: {
    onSubmit() {

    },
  },
};
</script>

<style scoped>
.form-card{
  display: block;
  max-width: 500px;
  margin: auto;
}
.type-select{
  width: 100%;
}

</style>
