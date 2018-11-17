<template>
<Layout>
  <Header :theme="theme" text="技能树" />
  <Body :theme="theme">
    <div class="spacer-b30" v-if="list && list.length > 0">
      <div class="rating block" v-for="(item, index) in list" :key="index">
        <span class="lbl-text">{{ item.name }}</span>
        <div class="rating-wrapper">
            <input class="rating-input" id="r5" type="radio" v-model="item.level" value="5">
            <label class="rating-star" for="r5"><i class="fa fa-star"></i><span>Excellent</span></label>
            <input class="rating-input" id="r4" type="radio" v-model="item.level" value="4">
            <label class="rating-star" for="r4"><i class="fa fa-star"></i><span>Good</span></label>
            <input class="rating-input" id="r3" type="radio"  v-model="item.level" value="3">
            <label class="rating-star" for="r3"><i class="fa fa-star"></i><span>Tried</span></label>
            <input class="rating-input" id="r2" type="radio" v-model="item.level" value="2">
            <label class="rating-star" for="r2"><i class="fa fa-star"></i><span>Fair</span></label>
            <input class="rating-input" id="r1" type="radio" v-model="item.level" value="1">
            <label class="rating-star" for="r1"><i class="fa fa-star"></i><span>Poor</span></label>
        </div>
        <div class="rating-wrapper align-right">
          <button class="" @click="remove(index)">删除</button>
        </div>
      </div>
    </div>
    
    <spacer text="输入" />

    <div class="colm">
      <Input type="text" :value.sync="skillname" placeholder="技能名" />
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

const mutation = 'skills'
const lastPath = '/workexperience'
const nextPath = '/keywords'

export default {
  name: 'Skills',
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
      skillname: '',
      list: this.$store.getters.resume.skills
    }
  },
  methods: {
    create() {
      if (this.skillname === '') {
        alert('技能不能为空')
        return
      }

      this.list.push({name: this.skillname, level: '3'})
      this.skillname = ''
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
