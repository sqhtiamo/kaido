<template>

  <k-header></k-header>

  <div>
    <h1>{{ msg }}</h1>
  </div>


  <k-footer></k-footer>

</template>

<script>
import KHeader from './KHeader'
import KFooter from './KFooter'

export default {
  components: {
    KHeader,
    KFooter
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
