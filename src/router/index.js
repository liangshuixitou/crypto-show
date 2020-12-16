import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Welcome from '../components/Welcome.vue';
import KnapsackIntro from '../components/knapsack/KnapsackIntro.vue';
import KnapsackUse from '../components/knapsack/KnapsackUse.vue';

import Info from '../components/Info.vue';

Vue.use(VueRouter);

// eslint-disable-next-line no-undef
const vueRouter = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/knapsackIntro', component: KnapsackIntro },
        { path: '/knapsackUse', component: KnapsackUse },
        { path: '/info', component: Info }
      ]
    }
  ]
});

export default vueRouter;
