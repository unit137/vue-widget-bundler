import 'idempotent-babel-polyfill';
import 'document-register-element/build/document-register-element';
import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';
import VueWidget from './components/VueWidget';

Vue.config.productionTip = false;
Vue.use(VueCustomElement);
Vue.customElement('vue-widget', VueWidget);
