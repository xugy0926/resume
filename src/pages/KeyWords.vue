<template>
<Layout>
  <Header :theme="theme" text="关键字" />
  <Body :theme="theme">
    <div class="price-box spacer-b30" v-for="(item, index) in list" :key="index">
      <div class="ribbon-large"><div class="ribbon-inner" @click="remove(index)">DELETE</div> </div>
      <p>{{ item.key }}</p>
      <p>{{ item.content }}</p>
    </div>
    <spacer text="输入"/>
    <div class="colm">
      <Input type="text" :value.sync="object.key" placeholder="关键字" />
      <Input type="text" :value.sync="object.content" placeholder="内容" />
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

const initData = { key: '', content: '' }
const mutation = 'keywords'
const lastPath = '/skills'
const nextPath = '/introduction'

export default {
  name: 'KeyWords',
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
      list: this.$store.getters.resume.keywords
    }
  },
  methods: {
    create() {
      if (this.object.key === '') {
        alert('关键字不能为空')
        return
      }

      if (this.object.content === '') {
        alert('内容不能为空')
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
