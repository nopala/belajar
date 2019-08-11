<template>
  <div>
    <Header/> <br>

    <h1 style="text-align:center;"> POFILE</h1> <br> <hr>
    <div class="row" style="text-align:center;">
      <div class="col-6" v-for="profile in profile" v-bind:key="profile">
        <h2>Youtube</h2>
        {{ profile.snippet.title }} <br><br>
          <img v-bind:src="profile.snippet.thumbnails.high.url" style="width:300px;"> <br>
        <p>Suscriber : {{profile.statistics.subscriberCount}}</p> <br>
      </div>

      <div class="col-6">
        <h2>Instagram</h2>
        {{pict.data.username}} <br>
        Nama Lengkap : {{pict.data.full_name}} <br>
        <img v-bind:src="pict.data.profile_picture" style="width:300px;"> <br>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import axios from 'axios'


export default {
  components : {
    Header,
  },
  data : () => ({
    profile : '',
    pict : '',
  }),

mounted () {
  axios
  .get('https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCbPXSXG2RK5GtbO3YFkfLaQ&key=AIzaSyDkQsGc63pw7Yux4uC-HdAFkErLXnCPsKI')
  .then(response => {this.profile = response.data.items})
  axios
  .get('https://api.instagram.com/v1/users/self/?access_token=47088831.1677ed0.b804edb104de41cfab10c9fae9e87402')
  .then(response => {this.pict = response.data})
  }
}
</script>

<style>

</style>
