// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './router'
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import { config } from './firebaseConfig'

Vue.config.productionTip = false
Vue.use(VueRouter)
export const eventBus = new Vue();

const router = new VueRouter({
  routes: routes, // or just 'routes' in ES6
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  // render: h => h(App)
  components: { App },
  created() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        // this.$router.push('/success')
        let loggedIn = true;
        eventBus.$emit('UserObject', user);
        eventBus.$emit('LoggedIn', loggedIn);
      } else {
        // this.$router.push('/auth')
      }
    });
  }
})
