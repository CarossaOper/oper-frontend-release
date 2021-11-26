import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./Home.vue"
import Blog from "./Blog.vue"
import BlogPost from "./components/BlogPost.vue"
import PageNotFound from "./NotFound.vue"

/*const scrollBehaviour = (to, from, savedPosition) => {

    if(savedPosition) {
        return savedPosition
    } else {
        let position = {}

        if (to.hash) {
            position.selector = to.hash
      
            if (to.hash === '#anchor2') {
                position.offset = { y: 100 }
            }
      
            if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
                return position
            }
      
            return false
        }
    }

    return new Promise(resolve => {
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
  
        this.app.$root.$once('triggerScroll', () => {
            resolve(position)
        })
    })
}*/

const routes = [
    { path: '/', component: Home, name: 'Home' },
    //'/about': About,
    //'/partner': Partner,
    { path: '/blog', component: Blog , name: 'blog' },
    { path: '/blog/:id', component: BlogPost, name: 'BlogPost' },
    { path: '/:catchAll(.*)*', component: PageNotFound , name: 'PageNotFound' },
    //{ path: '/posts/:id',   component: }
]

const router = createRouter ({
    history: createWebHashHistory(),
    base: "/",
    routes,
})

const app = createApp({});

app.use(router);
app.mount("#app");