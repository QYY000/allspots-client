<template>
  <div class="container">
    <div class="form">
      <h3>Add yours</h3>
      <form action="">
        <input type="text" v-model="name" placeholder="Name">
        <textarea v-model="description" placeholder="Description"></textarea>
        <div class="double">
          <input type="text" v-model="lat" placeholder="Latitude">
          <input type="text" v-model="lon" placeholder="Longitude">
        </div>
        <div class="double">
          <input type="text" v-model="city" placeholder="City">
          <input type="text" v-model="country" placeholder="Country">
        </div>
        <input type="text" v-model="image" placeholder="Image link">
        <div class="quad">
          <select name="category" id="category" v-model="category">
            <option value="">Category</option>
            <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.title }}</option>
          </select>
          <select name="access" id="access" v-model="access">
            <option value="">Access</option>
            <option v-for="a in accesses" :key="a.id" :value="a.id">{{ a.title }}</option>
          </select>
          <select name="size" id="size" v-model="size">
            <option value="">Size</option>
            <option v-for="sz in sizes" :key="sz.id" :value="sz.id">{{ sz.title }}</option>
          </select>
          <select name="skill" id="skill" v-model="skill">
            <option value="">Skill</option>
            <option v-for="sk in skills" :key="sk.id" :value="sk.id">{{ sk.title }}</option>
          </select>
        </div>
        <div v-if="error" class="error">{{ errors[error] }}</div>
        <button @click.prevent="singUp" class="btn">Submit spot</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import users from '@/store/modules/users'
import { errors } from '@/config/messages'
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState('filters', [
      'accesses',
      'categories',
      'skills',
      'sizes'
    ])
  }
})
export default class AddYours extends Vue {
  name = ''
  description = ''
  lat = ''
  lon = ''
  city = ''
  country = ''
  image = ''
  category = ''
  access = ''
  size = ''
  skill = ''
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

<style lang="css" scoped>
.form {
  max-width: 600px;
}
</style>