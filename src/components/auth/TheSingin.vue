<template>
  <form @submit.prevent="tryLogin">
    <div class="input-content">
      <i class="far fa-envelope fa-lg"></i>
      <input
        type="email"
        placeholder="Username"
        v-model="user.usr_email"
        id="email1"
      />
    </div>
    <div class="input-content">
      <i class="fas fa-lock fa-lg"></i>
      <input
        type="password"
        placeholder="Password"
        v-model="user.usr_password"
      />
    </div>
    <p v-if="GetErrorMsg" style="color: red">{{ GetLoginMessage }}</p>
    <button class="btn" type="submit">Sing in</button>
  </form>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      user: {
        usr_email: null,
        usr_password: null,
      },
    };
  },
  computed:{
    ...mapGetters(['GetErrorMsg', 'GetLoginMessage'])
  },
  methods: {
     async tryLogin() {
       await this.$store.dispatch("hendleLogin", this.user);
      this.$router.push('/dashboard')
    },
  },
};
</script>

<style>
</style>