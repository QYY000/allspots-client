<template>
  <div id="side-filters">
    <div class="filters-header">
      <h3>Filters</h3>
      <a 
        href="#" 
        @click.prevent="resetFilters"
        v-if="selectedLocation !== '' || selectedAccess !== '' || selectedSkill.length || selectedCategory.length || selectedSize.length"
      >
        Reset filters
      </a>
    </div>
    <PlaceFilter 
      :select="selectLocation" 
      :selected="selectedLocation">
    </PlaceFilter>
    <AccessFilter 
      :select="selectAccess" 
      :selected="selectedAccess" 
      :accesses="accesses">
    </AccessFilter>
    <CheckboxGroup 
      title="Skills" 
      :select="selectSkill" 
      :selected="selectedSkill" 
      :items="skills"></CheckboxGroup>
    <CheckboxGroup 
      title="Categories" 
      :select="selectCategory" 
      :selected="selectedCategory" 
      :items="categories"></CheckboxGroup>
    <CheckboxGroup 
      title="Sizes" 
      :select="selectSize" 
      :selected="selectedSize" 
      :items="sizes"></CheckboxGroup>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import PlaceFilter from '@/components/PlaceFilter.vue'
import AccessFilter from '@/components/AccessFilter.vue'
import CheckboxGroup from '@/components/CheckboxGroup.vue'
import { mapState, mapMutations } from 'vuex';

@Component({
  name: 'SideFilters',
  components: {
    PlaceFilter,
    AccessFilter,
    CheckboxGroup
  },
  computed: {
    ...mapState('filters', [
      'accesses',
      'categories',
      'skills',
      'sizes',
      'selectedLocation',
      'selectedAccess',
      'selectedCategory',
      'selectedSkill',
      'selectedSize'
    ]),
  },
  methods: {
    ...mapMutations('filters', [
      'selectLocation',
      'selectAccess',
      'selectSkill',
      'selectCategory',
      'selectSize'
    ])
  }
})
export default class SideFilters extends Vue {
  resetFilters() {
    this.$store.commit('filters/selectLocation', '')
    this.$store.commit('filters/selectAccess', '')
    this.$store.commit('filters/selectSkill', [])
    this.$store.commit('filters/selectCategory', [])
    this.$store.commit('filters/selectSize', [])
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