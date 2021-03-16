// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import bootstrap
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import css (includes bootstrap)
// import "./assets/styles/global.scss";
// declare use
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
import '~/assets/styles/global.scss'

// Day.js
import * as dayjs from 'dayjs';
Vue.$dayjs = Vue.prototype.$dayjs = dayjs;
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat);

// Gridsome app:
import DefaultLayout from '~/layouts/Default.vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
