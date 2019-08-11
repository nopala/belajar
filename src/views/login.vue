<template>
<div>
  <Header/> <br><br><br>

  <form @submit="daftar" method="" action="">
    <p v-if="errors.length" style="text-align:center; margin-top:100px;">
      <ul>
        <li v-for="error in errors" :key="error.errors">
          {{error}}
        </li>
      </ul>
    </p>

  <div style="text-align:center;">
    <p>USERNAME <br>
      <input type="text" name="usename" id="username" v-model="username">
    </p>
    <p>PASSWORD <br>
      <input type="text" name="password" id="password" v-model="password">
    </p>
    <p>EMAIL <br>
      <input type="text" name="email" id="email" v-model="email">
    </p>

    <button @click="daftar" @keyup.enter="daftar">
      DAFTAR
    </button>
  </div>
  </form>

</div>
</template>

<script>
import Header from '@/components/header.vue'

export default {
  components : {
    Header,
  },
  data : () => ({
    username : '',
    password : '',
    email : '',
    errors : [],
  }),

  methods : {
    daftar : function () {
      if (this.username && this.password && this.email) {
        window.alert('Berhasil daftar')
        return true;
      }

      this.errors = [];

      if (!this.username) {
        this.errors.push('Username tidak boleh kosong');
      }
      if (!this.password) {
        this.errors.push('Password tidak boleh kosong');
      }
      if (!this.email) {
        this.errors.push('Username tidak boleh kosong');
      }
    }
  }
}
</script>

<style>
li {
  list-style-type: none;
}
</style>
