<template>
  <div class="container">
    <div class="form">
      <h3>Sign in</h3>
      <form action="">
        <input type="email" v-model="email" placeholder="E-mail">
        <input type="password" v-model="password" placeholder="Password">
        <div v-if="error" class="error">{{ errors[error] }}</div>
        <button @click.prevent="singIn" class="btn">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'
import { errors } from '@/config/messages'

@Component
export default class SignIn extends Vue {
  email = ''
  password = ''
  error = ''
  errors = errors

  async singIn() {
    this.error = ''

    const response = await users.signIn({
      email: this.email,
      password: this.password
    })

    if(typeof response.message !== 'undefined'){
      this.error = response.message
    }else if(typeof response.user !== 'undefined'){
      this.$router.push({ name: 'Explore' })
    }
  }
}
</script>