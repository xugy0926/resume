<template>                            
  <div class="section">
    <label class="field select">
      <select :value="selected" @input="$emit('update:selected', $event.target.value)">
        <option value="">请选择</option>
        <option :value="item.key" :key="item.key" v-for="item in items">{{ item.value }}</option>
      </select>
      <i class="arrow"></i>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    selected: String,
    items: Array,
    placeholder: String
  }
}
</script>

