<template>
  <div class="smart-forms smart-container wrap-1">
    <Body :theme="theme">
      <div class="section">
        <div class="option-group field">
          <div class="smart-option-group">
            <label class="option" v-for="(item, index) in templates" :key="index">
                <input type="radio" v-model="selected" :value="item">
                <span class="smart-option smart-radio">
                  <span class="smart-option-ui"> <i class="iconc"></i>{{ item }}</span>
                </span>
            </label>
          </div>
        </div>
      </div>
    </Body>

    <div class="form-body" v-bind:class="useTemplate">
      <h1 v-if="resume.name">{{ resume.name }}</h1>
      <p><strong v-if="resume.gender">{{ resume.gender === 'Male' ? '男' : '女' }}</strong><span v-if="resume.yearOfBirth"> {{ resume.yearOfBirth }} 年 </span></p>
      <p v-if="resume.phone"><strong>电话 </strong> {{ resume.phone }}</p>
      <p v-if="resume.email"><strong>邮件 </strong> {{ resume.email }}</p>
      <p v-if="resume.github"><strong>GITHUB </strong> <a :href='resume.github' target='_blank' class='url'>{{ resume.github }}</a></p>
      <p v-if="resume.site"><strong>个人网站 </strong> <a :href='resume.site' target='_blank' class='url'>{{ resume.site }}</a></p>
      <h1 v-if="resume.introduction">自述</h1>
      <div v-html="changeToMD(resume.introduction)"></div>
      <div v-if="resume.projects && resume.projects.length > 0">
        <h1>项目经验</h1>
        <div v-for="(item, index) in resume.projects" :key="index">
          <h4>{{ item.name }} ({{ item.start }} - {{ item.end }})</h4>
          <div v-html="changeToMD(item.detail)"></div>
        </div>
      </div>
      <div v-if="resume.workexperiences && resume.workexperiences.length > 0">
        <h1>工作经历</h1>
        <ul>
          <li v-for="(item, index) in resume.workexperiences" :key="index">{{ item.start }} - {{ item.end }} {{ item.company }} | {{ item.position }}</li>
        </ul>
      </div>
      <div v-if="resume.keywords && resume.keywords.length > 0">
        <h1>关键字</h1>
        <ul>
          <li v-for="(item, index) in resume.keywords" :key="index">
            <strong>{{ item.key }}</strong>  {{ item.content }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import Body from '../components/Body.vue'

const templates = ['github-markdown']

export default {
  name: 'Preview',
  components: {
    Body
  },
  data() {
    return {
      theme: window.theme,
      selected: templates[Math.floor(Math.random() * templates.length)],
      templates,
    }
  },
  computed: {
    resume() {
      return this.$store.getters.resume
    },
    useTemplate() {
      const obj = {}
      obj[this.selected] = true
      return obj
    }
  },
  methods: {
    changeToMD(content) {
      return marked(content)
    },
    last() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
