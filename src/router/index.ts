import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import PainterMsg from '../views/PainterMsg.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/mainPage',
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/painterMsg',
    name: 'PainterMsg',
    component: PainterMsg,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
