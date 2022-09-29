import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue"
import PageNotFound from "@/views/NotFound.vue"
import About from "@/views/About.vue"


const routes = [
    { path: '/',                component: Home },
    { path: '/ueber',           component: About },
    { path: '/blog',            beforeEnter() { location.href = 'http://blog.carossa-oper.de/' }},
    { path: '/:catchAll(.*)*',  component: PageNotFound },
]

const router = createRouter ({
	history: createWebHistory(),
    base: "/",
    routes,
})

const app = createApp({});
 
console.log(process.env.VUE_APP_BLOG_URL);
app.use(router);
app.mount("#app");
