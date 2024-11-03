import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorView from '@/views/AuthorView.vue'
import PolicyView from '@/views/PolicyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component: BlogPostView,
    },
    {
      path: '/business',
      name: 'business',
      component: CategoryView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/policy',
      name: 'policy',
      component: PolicyView,
    },
  ],
})

export default router
