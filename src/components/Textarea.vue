<template>                            
  <div class="section">
    <label class="field prepend-icon">
      <textarea class="gui-textarea" :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)"></textarea>
        <span class="field-icon"><i class="fa fa-comments"></i></span>
        <span class="input-hint" v-if="hint"> 
          {{ hint }}
        </span>   
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: String,
    placeholder: String,
    hint: String
  }
}
</script>

