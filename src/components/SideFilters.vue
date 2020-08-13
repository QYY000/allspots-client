<template>
  <div id="side-filters">
    <div class="filters-header">
      <h3>Filters</h3>
      <a href="#">Reset filters</a>
    </div>
    <PlaceFilter></PlaceFilter>
    <AccessFilter :accesses="accesses"></AccessFilter>
    <ul>
      <li v-for="category in categories" :key="category._id">{{ category.title }}</li>
    </ul>
    <ul>
      <li v-for="skill in skills" :key="skill._id">{{ skill.title }}</li>
    </ul>
    <ul>
      <li v-for="size in sizes" :key="size._id">{{ size.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import PlaceFilter from '@/components/PlaceFilter.vue'
import AccessFilter from '@/components/AccessFilter.vue'
import filters from '@/store/modules/filters'
import { mapState } from 'vuex';

@Component({
  name: 'SideFilters',
  components: {
    PlaceFilter,
    AccessFilter
  },
  computed: {
    ...mapState('filters', {
      accesses: 'accesses',
      categories: 'categories',
      skills: 'skills',
      sizes: 'sizes',
    }),
  }
})
export default class SideFilters extends Vue {
  mounted() {
    filters.getFilters()
  }
}
</script>

<style lang="css">
#side-filters {
  background-color: var(--almostWhite);
  width: 320px;
  min-height: calc(100vh - 59px);
  padding: 20px;
  box-sizing: border-box;
}

.filters-header {
  display: flex;
  align-items: center;
}

.filters-header h3 {
  flex: 1;
}

.filters-header a {
  font-size: 12px;
  color: var(--grayLight);
  font-weight: 400;
  text-decoration: none;
}

.filters-header a:hover {
  color: var(--grayDarkest);
}
</style>