<template>                            
  <div class="section colm" v-bind:class="buildClasses">
    <label class="field" v-bind:class="{'prepend-icon' : icon}">
      <input :type="type" class="gui-input" :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)">
      <span class="field-icon" v-if="icon"><i class="fa" v-bind:class="icon"></i></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    icon: String,
    type: String,
    value: [Number, String],
    classes: Array,
    placeholder: String
  },
  computed: {
    buildClasses() {
      let obj = {}
      this.classes && this.classes.map(item => obj[item] = item)
      return obj
    }
  }
}
</script>

