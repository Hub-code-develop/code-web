import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { site } from '@/content/site'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: site.seo.home.title, description: site.seo.home.description },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: { title: site.seo.notFound.title, description: site.seo.notFound.description },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ?? site.brand.name
  const desc = to.meta.description as string | undefined
  if (desc) {
    const el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', desc)
  }
})

export default router
