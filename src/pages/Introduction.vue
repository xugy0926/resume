<template>
<Layout>
  <Header :theme="theme" text="自我介绍" />
  <Body :theme="theme">
    <Textarea :value.sync="introduction" placeholder="Text area" hint="" />
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
import Textarea from '../components/Textarea.vue'

export default {
  name: 'Introduction',
  data() {
    return {
      theme: window.theme,
      introduction: this.$store.getters.resume.introduction
    }
  },
  components: {
    Layout,
    Header,
    Body,
    Footer,
    Textarea
  },
  methods: {
    last() {
      this.$router.push({path: '/workexperience'})
    },
    next() {
      this.$store.commit('introduction', this.introduction)
      this.$router.push({path: '/preview'})
    }
  }
}
</script>
