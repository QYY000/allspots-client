<template>
  <div id="explore">
    <SideFilters></SideFilters>
    <div class="rest">
      spots here
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import SideFilters from '@/components/SideFilters'

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
</style>