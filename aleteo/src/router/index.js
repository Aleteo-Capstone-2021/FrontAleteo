import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import projectlist from "@/components/projectlist";
import learning from "@/components/learning";
import dataform from "@/components/dataform";
import learning_data from "@/components/learning_data";
import algorithm from "@/components/algorithm";
import compare_learning_result from "@/components/compare_learning_result";
import predictlist from "@/components/predictlist";
import predict_data from "@/components/predict_data";
import predict from "@/components/predict";
import compare_predict_result from "@/components/compare_predict_result";

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/projectlist',
    name: 'projectlist',
    component: projectlist
  },
  {
    path: '/learninglist',
    name: 'learninglist',
    component: learning
  },
  {
    path: '/learninglist/dataform',
    name: 'dataform',
    component: dataform
  },
  {
    path: '/learninglist/learning_data',
    name: 'learning_data',
    component: learning_data
  },
  {
    path: '/learninglist/algorithm',
    name: 'algorithm',
    component: algorithm
  },
  {
    path: '/learninglist/learning',
    name: 'learning',
    component: learning
  },
  {
    path: '/learninglist/compare_learning_result',
    name: 'compare_learning_result',
    component: compare_learning_result
  },
  {
    path: '/predictlist',
    name: 'predictlist',
    component: predictlist
  },
  {
    path: '/predictlist/predict_data',
    name: 'predict_data',
    component: predict_data
  },
  {
    path: '/predictlist/predict',
    name: 'predict',
    component: predict
  },
  {
    path: '/predictlist/compare_predict_result',
    name: 'compare_predict_result',
    component: compare_predict_result
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
