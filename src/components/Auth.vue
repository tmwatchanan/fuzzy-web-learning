<template lang="html">
  <div>
      <!-- <hr>  -->
    <!-- <div v-if="!loggedIn"> -->
      <div id="firebaseui-auth-container"></div>
      <!-- not logged in -->
    <!-- </div> -->
    <!-- <div v-if="loggedIn"> -->
      <!-- <img :src="photo" style="height: 120px"> <br>  -->
      <!-- <p>{{name}}</p> -->
      <!-- <p>{{email}}</p> -->
    <!-- </div> -->
    <!-- <hr>  -->
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import { config } from '../firebaseConfig';
import { eventBus } from '../main.js';

export default {
  name: 'auth',
  data() {
    return {
      user: {}
    }
  },
  created() {
    eventBus.$on('UserObject', (user)=> {
      if (user) {
        this.$router.push('/success')
      }
    });
  },
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  },
  destroyed() {
    ui.reset();
  }
}
</script>
