/* eslint no-unused-expressions: 0 */
import { createTest, createVue, destroyVM } from '../util';
import Button from 'packages/button';

describe('Button', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Button, {
      type: 'primary'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('kd-button__primary')).to.be.true;
  });
  it('click', done => {
    let result;
    vm = createVue({
      template: `
        <kd-button @click="handleClick"></kd-button>
      `,
      methods: {
        handleClick (evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.click();

    setTimeout(_ => {
      expect(result).to.exist;
      done();
    }, 20);
  });
});
