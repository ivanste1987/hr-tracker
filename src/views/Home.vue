<template>
  <div class="home">
    <router-link to="/dashboard"></router-link>
    <header class="home-header">
      <h1>PI Agenda</h1>
      <p>Organize your day, family, team or company</p>
      <hr />
    </header>
    <div class="home-content">
      <div :class="move ? 'singup-content' : 'hidde-singup'">
        <header>
          <h2>Sing up</h2>
          <span>Architecto accusamus beatae veritatis totam?</span>
        </header>
        <the-singup></the-singup>
        <footer>
          <p>If you have account, please sing in.</p>
          <button @click="change" class="btn-link">Sing in</button>
        </footer>
      </div>
      <figure :class="move ? 'move' : 'move-right'">
        <img src="../assets/homepage-bg.svg" alt="img" />
      </figure>
      <div :class="move ? 'hidde-singin' : 'singin-content'">
        <header>
          <h2>Sing in</h2>
          <span>Architecto accusamus beatae veritatis totam?</span>
        </header>
        <the-singin></the-singin>
        <footer>
          <p>If you do not have account, please made one.</p>
          <button @click="change" class="btn-link">Sing up</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import TheSingup from "../components/auth/TheSingup.vue";
import TheSingin from "../components/auth/TheSingin.vue";
export default {
  components: {
    TheSingup,
    TheSingin,
  },
  data() {
    return {
      move: false,
    };
  },
  methods: {
    change() {
      this.move = !this.move;
    },
  },
};
</script>
<style lang="scss">

</style>