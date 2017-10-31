<template> 
  <div> 
    <div v-if="!loggedIn">
      not logged in
    </div>
    <div v-if="loggedIn">
      <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">User Profile</h4>
      </div>
      <button @click="logOut">Log out</button> 
      <hr> 
      <img :src="photo" style="height: 120px"> <br> 
      <p>{{name}}</p> 
      <p>{{email}}</p> 
      <hr> 
      <pre>{{user}}</pre> 
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import { eventBus } from '../main.js';
export default {
  data(){
    return {
      photo: "",
      userId: "",
      name: "",
      email: "",
      user: {},
      loggedIn: false
    }
  },
  created() {
    this.user = firebase.auth().currentUser; 
    if(this.user) { 
      this.name = this.user.displayName; 
      this.email = this.user.email; 
      this.photo = this.user.photoURL; 
      this.userId = this.user.uid; 
      this.loggedIn = true;
    }
  },
  methods: { 
    logOut() { 
      firebase.auth().signOut();
      this.$router.push('/')
    } 
  },
};
</script>

<style>
div {
    text-align: center;
}
</style>
