// export { default as VytiaService } from './Service';
// export { default as Player } from './components/Player';

import VytiaService from './Service';
import PlayerComponent from './components/Player';

export const Player = PlayerComponent;
export default {
  install(Vue, options = {}) {
    VytiaService.mergeOptions(options);
    Vue.component('VytiaPlayer', PlayerComponent);
    Vue.prototype.$vytia = VytiaService;
  }
}

typeof window.Vue === 'function' && window.Vue.use(plugin);
