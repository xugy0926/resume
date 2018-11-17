<template>
  <Layout>
    <Header :theme="theme" text="教育信息" />
    <Body :theme="theme">
      <div class="price-box spacer-b30" v-for="(item, index) in list" :key="index">
        <div class="ribbon-large"><div class="ribbon-inner" @click="remove(index)">DELETE</div> </div>
        <h4 class="pre-mouth">{{ item.school }}</h4>
        <h5>{{ item.major }}</h5>
        <div class="spacer spacer-t20 spacer-b20"></div>
        <p>{{ item.start }} - {{ item.end }}</p>
      </div>

      <spacer text="填写"/>

      <div class="colm">
        <Input type="text" :value.sync="object.school" placeholder="学校" />
        <Input type="text" :value.sync="object.major" placeholder="专业" />
        <Input type="number" :value.sync="object.start" placeholder="开始时间" />
        <Input type="number" :value.sync="object.end" placeholder="结束时间" />
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

const initData = { school: '', major: '', start: '', end: '' }
const mutation = 'educations'
const lastPath = '/'
const nextPath = '/workexperience'

export default {
  name: 'Educations',
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
      list: this.$store.getters.resume.educations
    }
  },
  methods: {
    create() {
      if (this.object.school === '') {
        alert('学校不能为空')
        return
      }

      if (this.object.major === '') {
        alert('专业不能为空')
        return
      }

      if (this.object.start === '') {
        alert('入学时间不能为空')
        return
      }

      if (this.object.end === '') {
        alert('毕业时间不能为空')
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
