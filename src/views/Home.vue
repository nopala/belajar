<template>
  <div class="home">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/headerhome.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
}
</script>
