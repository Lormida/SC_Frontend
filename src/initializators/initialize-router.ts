import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { GlobalConstants } from '@shared/constants'

export function initializeRouter(app: ReturnType<typeof createApp>, routes: RouteRecordRaw[]) {
  const router = createRouter({
    history: createWebHistory(GlobalConstants.BASE_URL),
    routes,
    scrollBehavior(_, __, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0, behavior: 'smooth' }
      }
    },
  })

  router.beforeEach(async (to) => {
    document.title = `${GlobalConstants.VITE_APP_TITLE} - ${to.meta.title}`
  })
  app.use(router)
}
