<template>
    <el-dialog title="Tips" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>Do you really want to delete this item?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel" >Cancel</el-button>
        <el-button type="primary" @click="handleConfirm">Confirm</el-button>
      </span>
    </el-dialog>
</template>

<script>
export default {
  name: 'DialogUi',
  props: ['dialogVisible'],
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleConfirm() {
      this.$emit('Confirm');
    },
    handleCancel() {
      this.$emit('Cancel');
    },
  },
};
</script>

<style scoped>

</style>
