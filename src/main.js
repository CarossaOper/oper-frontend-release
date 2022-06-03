import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue"
import Blog from "@/views/Blog.vue"
import Post from "@/views/Post.vue"
import PageNotFound from "@/views/NotFound.vue"
import About from "@/views/About.vue"


const routes = [
    { path: '/',                component: Home },
    { path: '/ueber',           component: About },
    { path: '/blog',            component: Blog },
    { path: '/blog/:id',        component: Post },
    { path: '/:catchAll(.*)*',  component: PageNotFound },
]

const router = createRouter ({
    history: createWebHistory(),
    base: "/",
    routes,
})

const app = createApp({});

app.use(router);
app.mount("#app");