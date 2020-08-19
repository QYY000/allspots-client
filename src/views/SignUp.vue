<template>
  <div class="container">
    <div class="form">
      <h3>Sign up</h3>
      <form action="">
        <input type="text" v-model="name" placeholder="Name">
        <input type="email" v-model="email" placeholder="E-mail">
        <input type="password" v-model="password" placeholder="Password">
        <input type="password" v-model="conPassword" placeholder="Confirm password">
        <div v-if="error" class="error">{{ errors[error] }}</div>
        <button @click.prevent="singUp" class="btn">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'
import { errors } from '@/config/messages'

@Component
export default class SignUp extends Vue {
  name = ''
  email = ''
  password = ''
  conPassword = ''
  error = ''
  errors = errors

  async singUp() {
    this.error = ''

    const response = await users.signUp({
      name: this.name,
      email: this.email,
      password: this.password,
      conPassword: this.conPassword
    })

    if(typeof response.message !== 'undefined'){
      this.error = response.message
    }else if(typeof response.user !== 'undefined'){
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>