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
