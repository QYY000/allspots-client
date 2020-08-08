<template>
  <div id="side-filters">
    filters here
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: 'SideFilters'
})
export default class Filters extends Vue {
}
</script>

<style lang="css">
#side-filters {
  background-color: var(--almostWhite);
  width: 320px;
  height: calc(100vh - 59px);
}
</style>