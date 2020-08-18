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

<style lang="css">
.form {
  max-width: 400px;
  margin: 40px auto 0 auto;
}

.form input {
  /* Remove First */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin-top: 15px;
  padding: 0 10px;
  line-height: 38px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid var(--grayLighter);
  background-color: var(--white);
  outline: none;

  font-family: 'SF Pro Text';
  font-weight: 500;
  font-size: 14px;
  color: var(--gray);
}

.form .btn {
  /* Remove First */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin-top: 15px;
  outline: 0;
}
</style>
