import Vue from 'vue'
import Router from 'vue-router'

import BaseInfo from './pages/BaseInfo.vue'
import Introduction from './pages/Introduction.vue'
import Educations from './pages/Educations.vue'
import WorkExperience from './pages/WorkExperience.vue'
import Project from './pages/Project.vue'
import Skills from './pages/Skills.vue'
import KeyWords from './pages/KeyWords.vue'
import Preview from './pages/Preview.vue'
import Elements from './pages/Elements.vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    routes: [
      { path: '/', component: BaseInfo },
      { path: '/introduction', component: Introduction },
      { path: '/educations', component: Educations },
      { path: '/workexperience', component: WorkExperience },
      { path: '/project', component: Project },
      { path: '/skills', component: Skills },
      { path: '/keywords', component: KeyWords },
      { path: '/preview', component: Preview },
      { path: '/elements', component: Elements }
    ]
  })
}
