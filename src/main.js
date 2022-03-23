import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue"
import Blog from "@/views/Blog.vue"
import Post from "@/views/Post.vue"
import PageNotFound from "@/views/NotFound.vue"

const routes = [
    { path: '/',                component: Home },
    { path: '/blog',            component: Blog },
    { path: '/blog/:id',        component: Post },
    { path: '/:catchAll(.*)*',  component: PageNotFound },
]

const router = createRouter ({
    history: createWebHashHistory(),
    base: "/",
    routes,
})

const app = createApp({});

app.use(router);
app.mount("#app");