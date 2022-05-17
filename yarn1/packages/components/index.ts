// import Foo from './Foo/index.vue';
// import Bar from './Bar/index.vue'

// export default { Foo, Bar }
export * from './Bar/index';
export * from './Foo/index';
import type { App, Plugin  } from 'vue';


import Foo from './Foo/index';
import Bar from './Bar/index';


const components:Plugin[] = [
  Foo,
  Bar
];

export default {
  install: (app: App)=> {
    components.forEach((c)=> {
      // console.log('use', c.install);
      app.use(c);
    })
  }
}