<template>
  <button
    :class="['kd-button', 'kd-button__' + type]"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'KdButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss">
.kd-button {
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  &__default {
    background-color: #fff;
    border-color: #dcdfe6;
    color: #606266;
  }
  &__primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
</style>
