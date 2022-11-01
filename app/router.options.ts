import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      // Scroll with a timeout because transitions between views is 300ms and in
      // Safari this will trigger a warning that the element is not yet
      // available.
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 100)
      })
    }

    // if you click on a button for the same page, it will smooth scroll you to
    // the top, but if you go to a different route, it will use a transition
    if (to.path === from.path) {
      return savedPosition || { top: 0, behavior: 'smooth' }
    } else {
      // setTimeout time set a little higher than transition time to help
      // alevate some of the jankiness of it jumping to the top of the page
      // during the transition.
      return savedPosition || new Promise(resolve => setTimeout(() => resolve({ top: 0 }), 320))
    }
  }
}