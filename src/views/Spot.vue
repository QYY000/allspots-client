<template>
  <div class="container">
    <div class="single-spot" v-if="activeSpot !== null">
      <div class="title-location-map">
        <div class="title">
          <h1>{{ activeSpot.name }}</h1>
          <div class="location">{{ activeSpot.city }}, {{ activeSpot.country }}</div>
        </div>
        <div>
          <a target="_blank" :href="'https://www.google.com/maps/search/?api=1&query=' + activeSpot.lat + ',' + activeSpot.lon" class="btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="18" height="18" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <span>Map</span>
          </a>
        </div>
      </div>
      <div class="thumbnail" :style="'background-image:url(' + activeSpot.image + ')'"></div>
      <div class="text">{{ activeSpot.description }}</div>
      <div class="attributes">
        <div class="attribute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.25 15.75L9 12L3.75 15.75V3.75C3.75 3.35218 3.90804 2.97064 4.18934 2.68934C4.47064 2.40804 4.85218 2.25 5.25 2.25H12.75C13.1478 2.25 13.5294 2.40804 13.8107 2.68934C14.092 2.97064 14.25 3.35218 14.25 3.75V15.75Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ activeSpot.category.title }}</span>
        </div>
        <div class="attribute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.25 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V9.75C15.75 8.92157 15.0784 8.25 14.25 8.25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.25 8.25V5.25C5.25 4.25544 5.64509 3.30161 6.34835 2.59835C7.05161 1.89509 8.00544 1.5 9 1.5C9.99456 1.5 10.9484 1.89509 11.6517 2.59835C12.3549 3.30161 12.75 4.25544 12.75 5.25V8.25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ activeSpot.access.title }} access</span>
        </div>
        <div class="attribute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.25C11.8995 11.25 14.25 8.8995 14.25 6C14.25 3.10051 11.8995 0.75 9 0.75C6.10051 0.75 3.75 3.10051 3.75 6C3.75 8.8995 6.10051 11.25 9 11.25Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.1575 10.4175L5.25 17.25L9 15L12.75 17.25L11.8425 10.41" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ activeSpot.skill.title }} skill</span>
        </div>
        <div class="attribute">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 12V6C15.7497 5.73696 15.6803 5.47861 15.5487 5.25088C15.417 5.02314 15.2278 4.83403 15 4.7025L9.75 1.7025C9.52197 1.57085 9.2633 1.50154 9 1.50154C8.7367 1.50154 8.47803 1.57085 8.25 1.7025L3 4.7025C2.7722 4.83403 2.58299 5.02314 2.45135 5.25088C2.31971 5.47861 2.25027 5.73696 2.25 6V12C2.25027 12.263 2.31971 12.5214 2.45135 12.7491C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4292 8.7367 16.4985 9 16.4985C9.2633 16.4985 9.52197 16.4292 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7491C15.6803 12.5214 15.7497 12.263 15.75 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.45251 5.22L9.00001 9.0075L15.5475 5.22" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 16.56V9" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{ activeSpot.size.title }} size</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import activeSpots from '@/store/modules/spots'
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState('spots', {
      activeSpot: 'activeSpot'
    }),
  }
})
export default class Spot extends Vue {
  mounted() {
    this.$store.commit('spots/setActiveSpot', null)
    activeSpots.getSingleSpot(this.$route.params.slug)
  }
}
</script>

<style>
.single-spot {
  margin-top: 40px;
}

.title-location-map {
  display: flex;
  align-items: center;
}

.single-spot .title-location-map .title {
  flex: 1;
}

.single-spot .location {
  color: var(--grayLight);
  font-size: 16px;
}

.single-spot .thumbnail {
  height: 0;
  padding-bottom: 70%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px;
  margin-top: 20px;
}

.single-spot .text {
  color: var(--grayLight);
  font-size: 16px;
  margin-top: 20px;
}

.single-spot .attributes {
  display: flex;
  margin: 20px -10px 0 -10px;
}

.single-spot .attribute {
  flex: 1;
  border: 1px solid var(--grayLighter);
  border-radius: 4px;
  margin: 0 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.single-spot .attribute span {
  margin-left: 5px;
  font-size: 14px;
  color: var(--grayLight);
  font-weight: 500;
}
</style>