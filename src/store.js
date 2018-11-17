import Vuex from 'vuex'

export function createStore() {
  return new Vuex.Store({
    state: {
      template: 'github-markdown',
      resume: {
        name: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        gender: '',
        email: '',
        phone: '',
        github: '',
        site: '',
        introduction: '',
        educations: [],
        workexperiences: [],
        projects: [],
        skills: [],
        keywords: []
      }
    },
    getters: {
      resume: state => {
        return state.resume
      }
    },
    mutations: {
      baseInfo(state, payload) {
        state.resume = Object.assign({}, { ...state.resume }, { ...payload })
      },
      introduction(state, payload) {
        state.resume.introduction = payload
      },
      educations(state, payload) {
        state.resume.educations = payload
      },
      workexperiences(state, payload) {
        state.resume.workexperiences = payload
      },
      projects(state, payload) {
        state.resume.projects = payload
      },
      skills(state, payload) {
        state.resume.skills = payload
      },
      keywords(state, payload) {
        state.resume.keywords = payload
      }
    }
  })
}
