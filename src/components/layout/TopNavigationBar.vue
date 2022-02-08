<template>
  <div class="top-navigation-bar-content">
    <div class="path">
      <router-link :to="{ path: '/dashboard/groups/' }">{{
        this.currentRouteName()
      }}</router-link>
      <router-link :to="`/dashboard/groups/${this.$route.params.group_id}`"
        ><span v-if="getGroupTitle"> > </span
        >{{ getGroupTitle ? getGroupTitle.wkg_name : ""
        }}<span v-if="getTaskTitle"> > </span></router-link
      >
      <span>{{ getTaskTitle ? getTaskTitle.tsk_title : "" }}</span>
    </div>
    <div class="user-image-button">
      <figure v-if="userIsReady">
        <figcaption>{{ user.name + " " + user.lastname }}</figcaption>
        <user-dropdown :user="user"/>
      </figure>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserDropdown from '../UI/UserDropdown.vue';

export default {
  components: { UserDropdown },
  data() {
    return {
      user: {},
      groupTitle: "",
      userIsReady: false,
      pathIsReady: false,
    };
  },
  computed: {
    ...mapGetters(["GetUser", "GetAllGroups", "GetAllTasks"]),
    getGroupTitle() {
      if (this.GetAllGroups === [] || null || undefined) {
        return false;
      } else {
        return this.GetAllGroups.find(
          (group) => group.wkg_id == this.$route.params.group_id
        );
      }
    },
    getTaskTitle() {
      if (this.GetAllTasks === [] || null || undefined) {
        return false;
      } else {
        return this.GetAllTasks.find(
          (task) => task.tsk_id == this.$route.params.task_id
        );
      }
    },
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      this.userIsReady = false;
      await this.$store.dispatch("getUser");
      this.user = {
        id: this.GetUser.usr_id,
        avatar_id: this.GetUser.usr_avt_id,
        email: this.GetUser.usr_email,
        name: this.GetUser.usr_first_name,
        lastname: this.GetUser.usr_last_name,
        sid: localStorage.user,
      };
      this.userIsReady = true;
    },
    currentRouteName() {
      if (this.$route.name == "Group" || this.$route.name == "Group Tasks") {
        
        return "Groups";
      }else{
        return this.$route.name
      }
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  margin: 0 5px;
  font-size: 30px;
}
a {
  font-size: 26px;
}
</style>