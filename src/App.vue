<template>
  <div id="app">
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
</style>
