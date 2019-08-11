<template>
  <div class="nav">
    <div class="row">
    <div class="col-8">
		  <img class="slideShow" style="width:800px;" src="../assets/images/produk/chickenpuff.png">
		</div>
    <div class="col-4">
      <router-link class="hl2" to="/lks" style="margin-right:-297px;">DAFTAR</router-link> <br>
      <router-link class="hl4" to="/profile" style="margin-right:-380px;">PROFILE ALICE BTR</router-link> <br>
      <router-link class="hl3" to="/todo" style="margin-right:-275px;">TODO</router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  text-align: center;
  font-size: 30px;
  background-color: yellow;
  height: 500px;
  margin: -8px;
}

.img-clr {
  text-align: left;
  float: left;
  margin-top:60px;
  margin-left: 200px;
}

.hl1, .hl2, .hl3, .hl4 {
  color: black;
  float: right;
  margin-right: 250px;
  margin-top: 200px;
  text-decoration: none;
}

.hl1:hover,
.hl2:hover,
.hl4:hover,
.hl3:hover {
  color: white;
}

.col-8 {
  max-width: 66%;
}
.col-4 {
  max-width: 40%;
}
</style>
