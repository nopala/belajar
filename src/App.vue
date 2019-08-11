<template>
  <div id="app">
    <router-view/>
  </div>


</template>


<script>
export default {
}


</script>

<style>
.col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
button {
  outline: none;
}
input {
  outline: none;
}
hr {
  color: yellow;
  width: 70%;
}
</style>
