<template>
  <div class="dashboard">
    <the-navigation></the-navigation>
    <div class="dashboard-right">
      <top-navigation-bar/>
      <transition name="appear">
        <router-view class="router-view"></router-view>
      </transition>
      <div class="show-error" v-if="GetErrorMsg">
        <session-dialog :message="GetLoginMessage"></session-dialog>
      </div>
    </div>
  </div>
</template>

<script>
//**Components */
import TheNavigation from "../components/layout/TheNavigation.vue";

import SessionDialog from "../components/UI/SessionDialog.vue";
/**Vuex */
import { mapGetters, mapActions } from "vuex";
import TopNavigationBar from '../components/layout/TopNavigationBar.vue';
export default {
  data() {
    return {
      interval: null,
    };
  },
  components: { TheNavigation, SessionDialog, TopNavigationBar },
  computed: {
    ...mapGetters(["GetLogin", "GetErrorMsg", "GetLoginMessage"]),
    ...mapActions(["hendleUser"]),
  },
  created() {
    this.interval = setInterval(() => {
      this.$store.dispatch("checkSession");
    }, 600000); // 600000 ms = 10 min
  },
  mounted() {
    this.checkUser();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    checkUser() {
      this.$store.dispatch("hendleUser");
    },
  },
};
</script>

<style lang="scss">
.router-view {
  overflow: hidden;
}
</style>