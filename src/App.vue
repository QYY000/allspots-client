<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!isLoggedIn" to="/sign-in">SignIn</router-link>
      <span v-if="isLoggedIn">{{ user.name }}</span>
    </div>
    <router-view />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'

@Component
export default class App extends Vue {
  get isLoggedIn() {
    return users.isLoggedIn
  }
  get user() {
    return users.user
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
