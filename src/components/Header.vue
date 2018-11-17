<template>                            
  <div class="form-header" v-bind:class="`header-${theme}`">
    <h4><i class="fa fa-pencil-square"></i>{{text}}</h4>
  </div>
</template>
<script>
export default {
  name: 'Head',
  props: {
    theme: String,
    text: String
  }
}
</script>