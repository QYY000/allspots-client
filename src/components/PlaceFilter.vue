<template>
  <div id="place-filter">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0)">
        <path d="M17.5 8.33334C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33334C2.5 6.34422 3.29018 4.43656 4.6967 3.03004C6.10322 1.62352 8.01088 0.833344 10 0.833344C11.9891 0.833344 13.8968 1.62352 15.3033 3.03004C16.7098 4.43656 17.5 6.34422 17.5 8.33334Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 10.8333C11.3807 10.8333 12.5 9.71406 12.5 8.33334C12.5 6.95263 11.3807 5.83334 10 5.83334C8.61929 5.83334 7.5 6.95263 7.5 8.33334C7.5 9.71406 8.61929 10.8333 10 10.8333Z" stroke="#666666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <input id="places" v-model="searchTerm" type="text" placeholder="Search for a place...">
    {{ place }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import places from 'places.js'

@Component({
  name: 'PlaceFilter',
})
export default class PlaceFilter extends Vue {
  searchTerm = ''
  place = ''

  @Watch('searchTerm')
  watchPlaceTerm(value: string) {
    if(value.length < 1){
      this.place = ''
    }
  }

  mounted() {
    const placesInstance = places({
      appId: process.env.VUE_APP_ALGOLIA_ID,
      apiKey: process.env.VUE_APP_ALGOLIA_KEY,
      container: '#places',
      type: 'city',
      templates: {
        value: function(suggestion) {
          return `${suggestion.name}, ${suggestion.country}`
        },
        suggestion: function(suggestion) {
          return `${suggestion.name}, ${suggestion.country}`
        }
      }
    })

    placesInstance.on('change', () => {
      this.place = placesInstance.getVal()
    })

    placesInstance.on('clear', () => {
      this.searchTerm = ''
      this.place = ''
    })
  }
}
</script>

<style lang="css">
#place-filter {
  position: relative;
  margin-top: 20px;
}

#place-filter input {
  /* Remove First */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  padding: 0 10px 0 40px;
  line-height: 38px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid var(--grayLighter);
  background-color: var(--white);
  outline: none;

  font-family: 'SF Pro Text';
  font-weight: 500;
  font-size: 14px;
  color: var(--gray);
}

#place-filter input:focus {
  border-color: var(--grayLight);
}

#place-filter > svg {
  position: absolute;
  top: 10px;
  left: 12px;
  z-index: 999;
}

.ap-input-icon.ap-icon-pin{
  display: none;
}
</style>