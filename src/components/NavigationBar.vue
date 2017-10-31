<template>
  <div>
    <!-- <nav class="navbar navbar-light navbar-toggleable-md bg-faded" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#" style="pull-right">
        <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> Bootstrap
      </a>
    </nav> -->
    <nav class="navbar navbar-light bg-faded rounded navbar-toggleable-md">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#containerNavbar" aria-controls="containerNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <router-link :to="ToHome">
        <a class="navbar-brand active" href="#" style="pull-right">
          <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""> Fuzzy Learning Web
          <span class="sr-only">(current)</span>
        </a>
      </router-link>
        <div class="collapse navbar-collapse" id="containerNavbar">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <!-- <router-link to="/learn" tag="li" active-class="active" exact><a>Home</a></router-link> -->
              <router-link tag="a" :to="ToLearn" class="nav-link">Learn</router-link>
              <!-- <router-link tag="button" :to="link" class="btn btn-primary">Edit</router-link> -->
              <!-- <a class="nav-link" href="#">Learn</a> -->
            </li>
            <li class="nav-item">
              <router-link tag="a" :to="ToHeapParadox" class="nav-link">HeapParadox</router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" :to="ToLab" class="nav-link">Lab</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link tag="a" :to="ToAssignments" class="nav-link">Assignments</router-link>
              <!-- <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Assignment</a> -->
              <!-- <div class="dropdown-menu" aria-labelledby="dropdown04">
                <a class="dropdown-item" href="#">1) Membership function</a>
                <a class="dropdown-item" href="#">2) ...</a>
                <a class="dropdown-item" href="#">3) ...</a>
              </div> -->
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <!-- <form class="form-inline my-2 my-md-0" _lpchecked="1">
            <input class="form-control mr-sm-2" placeholder="Search" type="text">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
          <router-link v-if="loggedIn" :to="ToSuccess">
            <a class="navbar-brand active" href="#" style="pull-right">
              <img :src="photo" width="30" height="30" class="d-inline-block align-top" alt="user avatar">{{ name }}
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link v-if="!loggedIn" :to="ToAuth">
            <a class="navbar-brand active" href="#" style="pull-right">
              <img src="../assets/avatar.png" width="30" height="30" class="d-inline-block align-top" alt="guest avatar">Login
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </div>
      </nav>
  </div>
</template>

<script>
  import firebase from "firebase";
  import { eventBus } from '../main.js';

  export default {
    data() {
      return {
        photo: "",
        name: "",
        user: {},
        loggedIn: false,
        ToAuth: {
          name: 'Auth'
        },
        ToSuccess: {
          name: 'AuthSuccess'
        },
        ToHome: {
          name: 'Home'
        },
        ToLearn: {
            name: 'Learn',
            heapParadox: {
              name: 'HeapParadox'
            }
        },
        ToLab: {
          name: 'Lab'
        },
        ToAssignments: {
          name: 'Assignments'
        },
        ToHeapParadox: {
          name: 'HeapParadox'
        }
      }
    },
    created() {
      // this.user = firebase.auth().currentUser; 
      // if(this.user) {
      //     this.name = this.user.displayName;
      //     this.photo = this.user.photoURL;
      //     this.loggedIn = true;
      //     console.log(this.name);
      //     console.log(this.photo);
      // } else {
      //   this.loggedIn = false;
      //   console.log("please sign in");
      // }
      // console.log(this.loggedIn);
      eventBus.$on('UserObject', (user)=> {
        this.user = user;
        this.name = this.user.displayName;
        this.email = this.user.email;
        this.photo = this.user.photoURL;
        this.userId = this.user.uid;
      });
      eventBus.$on('LoggedIn', (loggedIn)=> {
        this.loggedIn = loggedIn;
      });
    },
    methods: { 
      logOut() {
        this.loggedIn = false;
        firebase.auth().signOut();
      } 
    }
  }

</script>

<style>


</style>
