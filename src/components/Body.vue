<template>                            
  <div class="form-body" v-bind:class="`theme-${theme}`">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Body',
  props: {
    theme: String
  }
}
</script>