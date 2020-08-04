<template>
  <div class="home">
    Sign in
    <form action="">
      <input type="email" v-model="email" placeholder="email">
      <input type="password" v-model="password" placeholder="password">
      <button @click.prevent="singIn">Sign in</button>
    </form>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'

@Component
export default class SignIn extends Vue {
  email = ''
  password = '' 

  singIn() {
    users.signIn({
      email: this.email,
      password: this.password
    })
  }
}
</script>
