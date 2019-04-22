import { RouteConfig } from 'vue-router';

const config: RouteConfig[] = [{ path: '/', name: 'home', component: () => import('@/views/home/Home.vue') }];
export default config;
