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
          <select id="category" v-model="category">
            <option value="">Category</option>
            <option v-for="c in categories" :key="c.id" :value="c._id">{{ c.title }}</option>
          </select>
          <select id="access" v-model="access">
            <option value="">Access</option>
            <option v-for="a in accesses" :key="a.id" :value="a._id">{{ a.title }}</option>
          </select>
          <select id="size" v-model="size">
            <option value="">Size</option>
            <option v-for="sz in sizes" :key="sz.id" :value="sz._id">{{ sz.title }}</option>
          </select>
          <select id="skill" v-model="skill">
            <option value="">Skill</option>
            <option v-for="sk in skills" :key="sk.id" :value="sk._id">{{ sk.title }}</option>
          </select>
        </div>
        <div v-if="error" class="error">{{ errors[error] }}</div>
        <button @click.prevent="addSpot" class="btn">Submit spot</button>
      </form>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import spots from '@/store/modules/spots'
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

  async addSpot() {
    this.error = ''

    const response = await spots.addSpot({
      name: this.name,
      description: this.description,
      lat: this.lat,
      lon: this.lon,
      city: this.city,
      country: this.country,
      image: this.image,
      category: this.category,
      access: this.access,
      size: this.size,
      skill: this.skill
    })

    if(typeof response.message !== 'undefined'){
      this.error = response.message
    }else if(typeof response.spot !== 'undefined'){
      this.$router.push({ name: 'Explore' })
    }
  }
}
</script>

<style lang="css" scoped>
.form {
  max-width: 600px;
}
</style>