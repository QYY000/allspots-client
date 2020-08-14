<template>
  <div id="app">
    <div v-if="!loaded" id="splash" :class="fade ? 'fade' : 0">
      <svg width="153" height="42" viewBox="0 0 153 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 35.3577L1 12.6932L20.2253 1.353L39.2353 12.6958V35.3625L29.4257 41.1177L20.2151 35.804L10.6058 41.1153L1 35.3577ZM20.9897 34.4617L28.6559 38.8844V18.9002L20.9897 14.4774V34.4617ZM19.4564 14.4499L11.3877 18.9097V38.9119L19.4564 34.4521V14.4499ZM9.85449 38.8585V18.8916L2.53324 14.5033L2.53324 34.4703L9.85449 38.8585ZM3.28252 13.1459L10.6364 17.5538L19.8452 12.4638L27.8339 7.69721L20.2208 3.15471L3.28252 13.1459ZM29.3459 8.59939L21.7541 13.1292L29.4193 17.5514L36.9472 13.1349L29.3459 8.59939ZM37.7021 14.4887L30.1892 18.8964V38.8732L37.7021 34.4654V14.4887Z" fill="white" stroke="white"/>
        <path d="M64.5376 31H67.9189L61.6567 13.3853H58.1167L51.8667 31H55.0527L56.5664 26.4956H63.0483L64.5376 31ZM59.7158 16.7422H59.9233L62.3159 24.0054H57.2988L59.7158 16.7422Z" fill="white"/>
        <path d="M70.751 31H73.7783V12.4819H70.751V31Z" fill="white"/>
        <path d="M77.7334 31H80.7607V12.4819H77.7334V31Z" fill="white"/>
        <path d="M84.1055 26.2148C84.2642 29.4131 86.9375 31.4395 90.978 31.4395C95.2505 31.4395 97.8994 29.3032 97.8994 25.873C97.8994 23.1875 96.3979 21.6982 92.8213 20.8926L90.7949 20.4287C88.6099 19.9282 87.7188 19.2324 87.7188 18.0483C87.7188 16.5469 89.0615 15.5703 91.0879 15.5703C93.0166 15.5703 94.3838 16.5469 94.6035 18.0972H97.6187C97.4722 15.0698 94.7988 12.9458 91.1001 12.9458C87.1572 12.9458 84.5449 15.0698 84.5449 18.2681C84.5449 20.8926 86.0464 22.4795 89.2446 23.1997L91.5273 23.7246C93.7856 24.2495 94.75 24.9941 94.75 26.2637C94.75 27.7407 93.2485 28.8027 91.1733 28.8027C88.9395 28.8027 87.377 27.7896 87.1816 26.2148H84.1055Z" fill="white"/>
        <path d="M108.397 17.4258C106.566 17.4258 105.016 18.3413 104.247 19.855H104.04V17.6455H101.122V35.4434H104.149V28.9736H104.357C105.041 30.3896 106.518 31.2197 108.434 31.2197C111.803 31.2197 113.903 28.583 113.903 24.3228C113.903 20.0381 111.779 17.4258 108.397 17.4258ZM107.445 28.644C105.382 28.644 104.101 26.9961 104.088 24.3228C104.101 21.6616 105.395 20.0015 107.458 20.0015C109.533 20.0015 110.79 21.625 110.79 24.3228C110.79 27.0205 109.545 28.644 107.445 28.644Z" fill="white"/>
        <path d="M122.704 31.2686C126.696 31.2686 129.125 28.6562 129.125 24.3228C129.125 20.0015 126.684 17.377 122.704 17.377C118.737 17.377 116.283 20.0137 116.283 24.3228C116.283 28.6562 118.7 31.2686 122.704 31.2686ZM122.704 28.7295C120.592 28.7295 119.384 27.1182 119.384 24.3228C119.384 21.5396 120.592 19.916 122.704 19.916C124.804 19.916 126.012 21.5396 126.012 24.3228C126.012 27.1182 124.816 28.7295 122.704 28.7295Z" fill="white"/>
        <path d="M133.141 14.374V17.731H131.029V20.1479H133.141V27.4355C133.141 30.0234 134.362 31.061 137.426 31.061C138.012 31.061 138.573 31 139.013 30.9146V28.5464C138.646 28.583 138.415 28.6074 137.987 28.6074C136.718 28.6074 136.156 28.0215 136.156 26.7031V20.1479H139.013V17.731H136.156V14.374H133.141Z" fill="white"/>
        <path d="M141.564 21.4663C141.564 23.4805 142.772 24.6646 145.336 25.2505L147.704 25.7998C148.974 26.0806 149.547 26.5566 149.547 27.3135C149.547 28.3022 148.485 28.9736 146.959 28.9736C145.446 28.9736 144.506 28.3877 144.213 27.3989H141.222C141.454 29.8281 143.554 31.2686 146.886 31.2686C150.219 31.2686 152.575 29.5596 152.575 26.9961C152.575 25.0308 151.391 23.9321 148.839 23.3584L146.483 22.8213C145.141 22.5161 144.506 22.0522 144.506 21.2954C144.506 20.3311 145.543 19.6719 146.923 19.6719C148.339 19.6719 149.23 20.27 149.45 21.21H152.294C152.074 18.7808 150.084 17.377 146.911 17.377C143.761 17.377 141.564 19.0493 141.564 21.4663Z" fill="white"/>
      </svg>
    </div>
    <TopNav></TopNav>
    <router-view />
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import TopNav from '@/components/TopNav.vue'

@Component({
  components: {
    TopNav
  }
})
export default class App extends Vue {
  loaded = false
  fade = false

  mounted() {
    setTimeout(() => {
      this.fade = true
      setTimeout(() => {
        this.loaded = true
      }, 400)
    }, 1500)
  }
}
</script>

<style>
:root {
  --white: #FFFFFF;
  --almostWhite: #F9F9F9;
  --primary: #1666D9;
  --primaryDark: #1358BA;
  --grayLighter: #E6E6E6;
  --grayLight: #989898;
  --gray: #666666;
  --grayDarkest: #000000;
}

#splash {
  background-color: var(--grayDarkest);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 400ms ease-in-out;
}

#splash.fade {
  opacity: 0;
}

#splash svg {
  display: inline-block;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-MediumItalic.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-MediumItalic.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-Semibold.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-Semibold.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-Bold.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-Bold.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-Medium.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-Medium.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-Regular.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-Regular.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-BoldItalic.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-BoldItalic.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-SemiboldItalic.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-SemiboldItalic.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-SemiboldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'SF Pro Text';
    src: url('/fonts/sfprotext/SFProText-RegularItalic.woff2') format('woff2'),
        url('/fonts/sfprotext/SFProText-RegularItalic.woff') format('woff'),
        url('/fonts/sfprotext/SFProText-RegularItalic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'SF Pro Text';
  font-weight: normal;
  font-style: normal;
}

.btn {
  background-color: var(--primary);
  color: var(--white);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 9px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
}

.btn svg {
  margin-right: 14px;
}

.btn:hover {
  background-color: var(--primaryDark);
}

h3 {
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--grayDarkest);
}

h4 {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--gray);
}

.checkbox {
  position: relative;
  padding-left: 25px;
  padding-right: 15px;
  display: inline-block;
  cursor: pointer;
}

.checkbox > div {
  position: absolute;
  height: 15px;
  width: 15px;
  top: 1px;
  left: 0;
  background-color: var(--white);
  display: block;
  border: 1px solid var(--grayLighter);
  border-radius: 3px;
}

.checkbox:hover > div {
  border-color: var(--grayLight);
}

.checkbox input {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  bottom: 0;
}

.checkbox input:checked + div {
  background-color: var(--primary);
  border-color: var(--primary);
  background-image: url(/img/check.svg);
  background-size: 11px;
  background-position: center;
  background-repeat: no-repeat;
}

.checkbox input:checked + div + span {
  color: var(--primary);
}

.checkbox span {
  display: inline-block;
  font-weight: 500;
  color: var(--grayLight);
  font-size: 14px;
  line-height: 17px;
}
</style>
