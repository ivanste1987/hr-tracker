<template>
  <div class="singup-container">
    <form @submit.prevent="trySingup">
      <div class="input-content">
        <i class="far fa-envelope fa-lg"></i>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model="newUser.usr_email"
          required
          ref="email"
        />
      </div>
      <div class="input-content">
        <i class="fas fa-lock fa-lg"></i>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          v-model="newUser.usr_password"
          required
        />
      </div>
      <div class="input-content">
        <i class="fas fa-user-tie fa-lg"></i>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="First name"
          v-model="newUser.usr_first_name"
          required
        />
      </div>
      <div class="input-content">
        <i class="fas fa-user-tie fa-lg"></i>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Last name"
          v-model="newUser.usr_last_name"
          required
        />
      </div>
      <!-- <div class="input-content">
        <input type="file" name="avatar" id="avatar" />
      </div> -->
      <button class="btn" type="submit">Sing up</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: {},
    };
  },

  methods: {
    trySingup() {
      this.$store.dispatch("trySingup", this.newUser);
    },
  },
};
</script>

<style>
</style>