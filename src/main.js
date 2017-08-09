// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import Resource from 'vue-resource'

Vue.prototype.$moment = moment;

Vue.config.productionTip = false

Vue.use(Resource);

Vue.http.options.root = 'http://localhost:3251/api';
Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.credentials = true;
Vue.http.options.emulateJSON = true;
Vue.http.headers.common["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
