<template>                            
  <div class="spacer-b30">
    <div class="tagline"><span>{{ text }} </span></div>
  </div>
</template>
<script>
export default {
  name: 'Head',
  props: {
    text: String
  }
}
</script>