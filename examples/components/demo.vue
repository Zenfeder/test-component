<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <kd-button>默认按钮</kd-button>
    <kd-button type="primary">主要按钮</kd-button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: '组件库测试Demo'
    };
  },
  methods: {
    handleBtnClick (e) {
      console.log(e);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
