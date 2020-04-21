<template>
  <el-card class="form-card">
    <ElForm :model="formData"  ref="addItemForm" :rules="rules" label-position="right">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="choose type">
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="Outcome" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <el-input v-model="formData.comment"></el-input>
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </el-card>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    formData: {
      type: 'INCOME',
      comment: '',
      value: 0,
    },
    rules: {
      type: [
        { required: true, message: 'Please select type', trigger: 'blur' },
      ],
      comment: [
        { required: true, message: 'Please input comment', trigger: 'blur' },
      ],
      value: [{ required: true, message: 'Please input value', trigger: 'change' },
        { type: 'number', message: 'Please input number', trigger: 'change' },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type !== 'Outcome') {
            this.$emit('submitForm', { ...this.formData });
          } else {
            this.formData.value = this.formData.value > 0 ? 0 - this.formData.value
              : this.formData.value;
            this.$emit('submitForm', { ...this.formData });
          }
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}
.type-select {
  width: 100%;
}
</style>
