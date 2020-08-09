<template>
  <div id="explore">
    <SideFilters></SideFilters>
    <div id="spots">
      <h3>Showing 8 search results</h3>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import SideFilters from '@/components/SideFilters.vue'

@Component({
  components: {
    SideFilters
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