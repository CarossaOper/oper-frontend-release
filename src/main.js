import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue"
import Blog from "@/views/Blog.vue"
import Post from "./components/BlogPost.vue"
import PageNotFound from "@/views/NotFound.vue"

const routes = [
    { path: '/', component: Home, name: 'Home' },
    //'/about': About,
    //'/partner': Partner,
    { path: '/blog', component: Blog , name: 'blog' },
    { path: '/blog/:id', component: Post, name: 'Post' },
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