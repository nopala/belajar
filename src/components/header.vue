<template>
  <div id="nav">
    <img src="../assets/images/pisang.png" style="float:left; width:150px;">
    <div class="nav-kanan">
      <router-link class="text" to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text {
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin: 10px;
  margin-right: 40px;
  margin-top: 12.5px;
  font-size:24px;
  float: right;
}
.text:hover {
  color: white;
}
#nav {
  margin: 10px;
  background-color: yellow;
  height: 90px;
  margin: -8px;
}
.nav-kanan {
  float: right;
  margin-top: 15px;
}

</style>
