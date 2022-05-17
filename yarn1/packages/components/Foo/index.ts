import type { App } from 'vue';
import foo from './index.vue';

export const Foo =  {
  install: (app: App)=> {
    app.component(foo.name, foo);
  }
};

export default Foo;