<template>
  <div id="explore">
    <SideFilters></SideFilters>
    <div id="spots">
      <h3 class="search-result">Showing {{ spots.length }} results</h3>
      <div id="spots-container">
        <div class="spot" v-for="spot in spots" :key="spot._id">
          <div class="thumbnail" :style="'background-image:url(' + spot.image + ')'"></div>
          <div class="name">{{ spot.name }}</div>
          <div class="city">{{ spot.city }}, {{ spot.country }}</div>
        </div>
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

#explore .search-result {
  margin-bottom: 20px;
  padding: 0 10px;
}

#spots {
  padding: 20px 10px;
  box-sizing: border-box;
  width: calc(100vw - 320px);
}

#spots-container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
}

.spot {
  flex: 0 0 calc(25% - 20px);
  border: 1px solid var(--grayLighter);
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 20px;
  margin: 0 10px 20px 10px;
}

.spot .thumbnail {
  height: 0;
  padding-bottom: 70%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px;
}

.spot .name {
  margin-top: 10px;
  font-weight: 600;
  color: var(--grayDarkest);
  font-size: 14px;
}

.spot .city {
  color: var(--grayLight);
  font-size: 12px;
}
</style>