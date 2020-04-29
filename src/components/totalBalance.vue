/* eslint-disable no-nested-ternary */
<template>
<div :class="currentColor" class="total-value"
:style="currentColor"  >
Balance: {{ total }}
</div>
</template>

<script>

export default {
  name: 'TotalBalance',
  data: () => ({
    activeClass: 'default',
    testColor: 'blue',

  }),
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    currentColor() {
      return {
        // eslint-disable-next-line no-nested-ternary
        color: this.total === 0 ? 'black' : this.total > 0 ? 'green' : 'red',
      };
    },
  },
};
</script>

<style scoped>
.total-value{
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

/* .black{
  color:black;
}
.green{
  color:green
}
.red{
  color:red
} */
</style>
