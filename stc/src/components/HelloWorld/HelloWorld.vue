<template src="./HelloWorld.html">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      files: []
    }
  },
  created: function () {
    var homedir = require('os').homedir();
    var dir = "/.smashthechampionship";
    //fs.readdir(homedir + dir, (err, content) => {
      //this.files = content
    //});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./HelloWorld.css">
</style>
