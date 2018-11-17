<template>
  <Layout>
    <Header :theme="theme" text="基本信息" />
    <Body :theme="theme">
      <Spacer text="个人信息" />

      <label for="name" class="field-label">姓名</label>
      <div class="frm-row" id="name">
        <Input :classes="['colm', 'colm6']" type="text" :value.sync="baseInfo.name" placeholder="中文名"/>
        <Input :classes="['colm', 'colm6']" type="text" :value.sync="baseInfo.englishname" placeholder="英文名"/>
      </div>

      <label for="birthday" class="field-label">性别</label>
      <Select :items="gendertypes" :selected.sync="baseInfo.gender" />

      <label for="birthday" class="field-label">生日</label>
      <div class="frm-row spacer-b30">
        <div class="colm colm4">
          <Select :items="mouths" :selected.sync="baseInfo.mouthOfBirth" />
        </div>
        
        <div class="colm colm4">
          <Input type="text" id="day" :value.sync="baseInfo.dayOfBirth" placeholder="Day..." />
        </div>
        
        <div class="colm colm4">
          <Input type="text" id="year" :value.sync="baseInfo.yearOfBirth" placeholder="Year..." />
        </div>
      </div>

      <Spacer text="联系信息" />

      <label for="email" class="field-label">邮箱</label>
      <div class="frm-row" id="email">
        <Input :classes="['colm', 'colm12']" type="email" :value.sync="baseInfo.email" placeholder="example@domain.com"/>
      </div>

      <label for="phone" class="field-label">手机</label>
      <div class="frm-row" id="phone">
        <Input :classes="['colm', 'colm12']" type="text" :value.sync="baseInfo.phone" placeholder="138........"/>
      </div>

      <label for="github" class="field-label">GITHUB</label>
      <div class="frm-row" id="github">
        <Input :classes="['colm', 'colm12']" type="text" :value.sync="baseInfo.github" placeholder="https://github.com/yourname."/>
      </div>

      <label for="site" class="field-label">个人网站</label>
      <div class="frm-row" id="site">
        <Input :classes="['colm', 'colm12']" type="text" :value.sync="baseInfo.site" placeholder="https://domain.com"/>
      </div>
    </Body>

    <Footer>
      <button class="button" v-bind:class="`btn-${theme}`" @click="next">下一步</button>
    </Footer>
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import Header from '../components/Header.vue'
import Body from '../components/Body.vue'
import Footer from '../components/Footer.vue'
import Spacer from '../components/Spacer.vue'
import Input from '../components/Input.vue'
import Select from '../components/Select.vue'

export default {
  name: 'BaseInfo',
  data() {
    return {
      theme: window.theme,
      gendertypes: [
        {
          key: 'Male',
          value: '男'
        },
        {
          key: 'Female',
          value: '女'
        }
      ],
      mouths: [
        { key: '01', value: '01' },
        { key: '02', value: '02' },
        { key: '03', value: '03' },
        { key: '04', value: '04' },
        { key: '05', value: '05' },
        { key: '06', value: '06' },
        { key: '07', value: '07' },
        { key: '08', value: '08' },
        { key: '09', value: '09' },
        { key: '10', value: '10' },
        { key: '11', value: '11' },
        { key: '12', value: '12' }
      ],
      baseInfo: {
        name: this.$store.getters.resume.name || '',
        englishname: this.$store.getters.resume.englishname || '',
        gender: this.$store.getters.resume.gender || '',
        yearOfBirth: this.$store.getters.resume.yearOfBirth || '1990',
        mouthOfBirth: this.$store.getters.resume.mouthOfBirth || '09',
        dayOfBirth: this.$store.getters.resume.dayOfBirth || '26',
        email: this.$store.getters.resume.email || '',
        phone: this.$store.getters.resume.phone || '',
        github: this.$store.getters.resume.github || '',
        site: this.$store.getters.resume.site || ''
      }
    }
  },
  components: {
    Layout,
    Header,
    Body,
    Footer,
    Spacer,
    Input,
    Select
  },
  methods: {
    next() {
      this.$store.commit('baseInfo', this.baseInfo)
      this.$router.push({ path: '/educations' })
    }
  }
}
</script>
