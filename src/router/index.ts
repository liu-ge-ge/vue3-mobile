import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/components/Layout/index.vue'),
    meta: {
      title: '凉城美玉',
    },
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          title: 'index',
        },
        component: () => import('@/views/Index/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
