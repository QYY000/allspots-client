<template>
  <div id="explore">
    <SideFilters></SideFilters>
    <div id="spots">
      <div v-for="spot in spots" :key="spot._id">
        {{ spot.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex';
import SideFilters from '@/components/SideFilters.vue'

@Component({
  components: {
    SideFilters
  },
  computed: {
    ...mapState('spots', {
      spots: 'spots'
    }),
  }
})
export default class Explore extends Vue {

}
</script>

<style>
#explore {
  display: flex;
}

#spots {
  padding: 20px;
  box-sizing: border-box;
}
</style>