import Button from './button/index';

const components = [
  Button
];

const install = function (Vue) {
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 单独到处，实现按需加载（有没有更好的方案呢？）
export {
  Button
}

// 全部导出
export default {
  install,
  Button
};
