import type { App } from 'vue';
import bar from './index.vue';

export const Bar =  {
  install: (app: App)=> {
    console.log( 'bar', bar);
    app.component(bar.name, bar);
  }
};

export default Bar;