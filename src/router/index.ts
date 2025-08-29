import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('@pages/Home/HomePage.vue') },
    { path: '/projects', component: () => import('@pages/Projects/ProjectsPage.vue') },
    { path: '/contact', component: () => import('@pages/Contact/ContactPage.vue') },
    { path: '/stack-architecture', component: () => import('@pages/StackArchitecture/StackArchitecturePage.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { return { top: 0 }; }
});
