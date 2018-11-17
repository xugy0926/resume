<template>
<Layout>
  <Header :theme="theme" text="工作经历" />
  <Body :theme="theme">
    <div class="price-box spacer-b30" v-for="(item, index) in list" :key="index">
      <div class="ribbon-large"><div class="ribbon-inner" @click="remove(index)">DELETE</div> </div>
      <h4 class="pre-mouth">{{ item.company }}</h4>
      <h5>{{ item.position }}</h5>
      <div class="spacer spacer-t20 spacer-b20"></div>
      <p>{{ item.start }} - {{ item.end }}</p>
    </div>

    <spacer text="输入" />

    <div class="colm">
      <Input type="text" :value.sync="object.company" placeholder="公司" />
      <Input type="text" :value.sync="object.position" placeholder="职位" />
      <Input type="number" :value.sync="object.start" placeholder="入职时间" />
      <Input type="number" :value.sync="object.end" placeholder="离职时间" />
    </div>

    <div class="colm">
      <button class="button block pushed expand" @click="create">保存并继续</button>
    </div>
  </Body>
  <Footer>
    <button class="button btn-primary" v-bind:class="`btn-${theme}`" @click="last">上一步</button>
    <button class="button btn-primary" v-bind:class="`btn-${theme}`" @click="next">下一步</button>
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

const initData = { company: '', position: '', start: '', end: '' }
const mutation = 'workexperiences'
const lastPath = '/educations'
const nextPath = '/project'

export default {
  name: 'WorkExperience',
  components: {
    Layout,
    Header,
    Body,
    Footer,
    Spacer,
    Input
  },
  data() {
    return {
      theme: window.theme,
      object: Object.assign({}, initData),
      list: this.$store.getters.resume.workexperiences
    }
  },
  methods: {
    create() {
      if (this.object.company === '') {
        alert('学校不能为空')
        return
      }

      if (this.object.position === '') {
        alert('专业不能为空')
        return
      }

      if (this.object.start === '') {
        alert('入职时间不能为空')
        return
      }

      if (this.object.end === '') {
        alert('离职时间不能为空')
        return
      }

      this.list.push(this.object)
      this.object = Object.assign({}, this.object, initData)
    },
    remove(index) {
      this.list = this.list.filter(function(value, idx) {
        return idx !== index
      })
    },
    last() {
      this.$router.push({ path: lastPath })
    },
    next() {
      this.$store.commit(mutation, this.list)
      this.$router.push({ path: nextPath })
    }
  }
}
</script>
