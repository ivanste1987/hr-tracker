<template>
  <div id="nav">
    <div class="logo">
      <h1>PI Agenda</h1>
    </div>
    <div class="nav-content">
      <scroll-box>
        <p>
          <span>Tools</span>
        </p>
        <ul>
          <li>
            <router-link to="/dashboard/" active-link="active"
              ><i class="fas fa-border-all fa-lg"></i>Dashboard</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/groups"
              ><i class="fas fa-layer-group fa-lg"></i>Groups</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/statistic">
              <i class="fas fa-chart-area fa-lg"></i>Statistics</router-link
            >
          </li>
        </ul>
        <p>
          <span>Other</span>
        </p>
        <ul>
          <li>
            <router-link to="/dashboard/people"
              ><i class="fas fa-users fa-lg"></i>People</router-link
            >
          </li>
          <li>
            <router-link to="/dashboard/chat"
              ><i class="far fa-comment-alt fa-lg"></i>Chat</router-link
            >
          </li>
        </ul>
        <p>
          <span>Sign Out</span>
        </p>
        <ul>
          <li>
            <a @click="signOut"
              ><i class="fas fa-sign-out-alt fa-lg"></i>Sign Out</a
            >
          </li>
        </ul>
      </scroll-box>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ScrollBox from "../UI/ScrollBox.vue";
export default {
  components: { ScrollBox },
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    ...mapActions(["signOut"]),
  },
};
</script>

<style lang="scss">
$black: #1a1a1aff;
$black-2: #1f1f1fff;
$black-3: #262626ff;
$silver: #727272ff;
$white: #ffffffff;
$red: #a73a27ff;
$blue: #6cc7edff;
$purple: #9e9ef1ff;
$gradient-top-right: linear-gradient(45deg, #6cc7edff, #9e9ef1ff);
$gradient-top-right: linear-gradient(45deg, #6cc7edff, #9e9ef1ff);



</style>