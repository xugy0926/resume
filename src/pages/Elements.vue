<template>
  <div id="app" class="smart-wrap">
    <div class="smart-forms smart-container wrap-2">
      <div class="form-body">
        <div class="spacer-b30">
          <div class="tagline"><span>Form UI Elements </span></div><!-- .tagline -->
        </div>
        <div class="frm-row">
          <div class="colm colm6">
            <Input type="text" icon="fa-user" :value.sync="name" placeholder="Text input icon left" />
            <Input type="text" :value.sync="name" placeholder="Text input" />
            <Input type="search" icon="fa-search" :value.sync="name" placeholder="Search input" />
            <Select :items="items" :selected.sync="selected" />
          </div>
          <div class="colm colm12">
            <Textarea :value.sync="comment" placeholder="Text area and hint" hint="Please input" />
            <Textarea :value.sync="comment" placeholder="Text area" hint="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Textarea from '../components/Textarea.vue'
import Select from '../components/Select.vue'

export default {
  name: 'Elements',
  components: {
    Input,
    Textarea,
    Select
  },
  data() {
    return {
      theme: window.theme,
      name: '',
      comment: '',
      items: [{ key: 'AL', value: 'Albania' }, { key: 'DZ', value: 'Algeria' }],
      selected: ''
    }
  }
}
</script>
