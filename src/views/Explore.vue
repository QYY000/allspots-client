<template>
  <div id="explore">
    <SideFilters></SideFilters>
    <div id="spots">
      <h3 class="search-result">Showing {{ spots.length }} results</h3>
      <div id="spots-container">
        <div class="spot" v-for="spot in spots" :key="spot._id">
          <router-link :to="{ name: 'Spot', params: { slug: spot.slug }}">
            <div class="thumbnail" :style="'background-image:url(' + spot.image + ')'"></div>
            <div class="name">{{ spot.name }}</div>
            <div class="city">{{ spot.city }}, {{ spot.country }}</div>
            <ul class="details">
              <li>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ spot.access.title }} access</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11.25C11.8995 11.25 14.25 8.8995 14.25 6C14.25 3.10051 11.8995 0.75 9 0.75C6.10051 0.75 3.75 3.10051 3.75 6C3.75 8.8995 6.10051 11.25 9 11.25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.1575 10.4175L5.25 17.25L9 15L12.75 17.25L11.8425 10.41" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ spot.skill.title }} skill</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 12V6C15.7497 5.73696 15.6803 5.47861 15.5487 5.25088C15.417 5.02314 15.2278 4.83403 15 4.7025L9.75 1.7025C9.52197 1.57085 9.2633 1.50154 9 1.50154C8.7367 1.50154 8.47803 1.57085 8.25 1.7025L3 4.7025C2.7722 4.83403 2.58299 5.02314 2.45135 5.25088C2.31971 5.47861 2.25027 5.73696 2.25 6V12C2.25027 12.263 2.31971 12.5214 2.45135 12.7491C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4292 8.7367 16.4985 9 16.4985C9.2633 16.4985 9.52197 16.4292 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7491C15.6803 12.5214 15.7497 12.263 15.75 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.45251 5.22L9.00001 9.0075L15.5475 5.22" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 16.56V9" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{{ spot.size.title }} size</span>
              </li>
            </ul>
          </router-link>
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
  margin-bottom: 20px;
  margin: 0 10px 20px 10px;
}

.spot a {
  display: block;
  text-decoration: none;
  padding: 10px;
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

.spot .details {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

.spot .details li {
  display: flex;
  align-items: center;
  margin-top: 3px;
}

.spot .details li span {
  margin-left: 5px;
  font-size: 12px;
  color: var(--grayLight);
  font-weight: 500;
}

@media only screen and (min-width: 1600px) {
 .spot {
    flex: 0 0 calc(20% - 20px);
  }
}

@media only screen and (min-width: 1900px) {
 .spot {
    flex: 0 0 calc(16.666666% - 20px);
  }
}

@media only screen and (min-width: 2100px) {
 .spot {
    flex: 0 0 320px;
  }
}
</style>