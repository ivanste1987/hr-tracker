<template>
  <div id="groups">
    <header id="groupsHeader">
      <div class="search-group-container">
        <div class="input-serach-content">
          <i class="fas fa-search fa-lg"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div class="button-add-content">
          <span>Add new Group </span
          ><button @click="addGroup">
            <i class="far fa-plus-square fa-lg"></i>
          </button>
          {{ this.message }}
        </div>
      </div>
    </header>
    <scroll-box>
      <div class="groups-container">
        <div class="group" v-for="(group, index) in GetAllGroups" :key="index">
          <div class="group-id">
            <h3>{{ group.wkg_name }}</h3>
            <p><span>Created by: </span> {{ group.usr_email }}</p>
            <p><span>Members:</span></p>
              <members :wkg_id="group.wkg_id"/>
            <div class="button-container">
              <router-link
                class="btn"
                :to="{ name: 'Group', params: { group_id: group.wkg_id } }"
                @click="flushOld"
              >
                Enter</router-link
              >
              <button class="red" @click="deleteGroup(group.wkg_id)">
                <i class="fas fa-trash-alt fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </scroll-box>
    <transition name="fade">
      <div class="modal-content" v-if="openModal">
        <div class="group-modal">
          <div class="close-btn">
            <button @click="addGroup">
              <i class="far fa-times-circle fa-2x"></i>
            </button>
          </div>
          <create-new-group-modal
            v-if="openModal"
            @saveGroup="saveGroup"
            :groupName="this.newGroup"
          ></create-new-group-modal>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ScrollBox from '../UI/ScrollBox.vue';
import CreateNewGroupModal from "./CreateNewGroupModal.vue";
import Members from './Members.vue';

export default {
  components: {
    CreateNewGroupModal,
    Members,
    ScrollBox,
  },
  data() {
    return {
      openModal: false,
      newGroup: null,
      message: null,
    };
  },
  computed: {
    ...mapGetters(["GetAllGroups"]),
  },
  mounted() {
    
    this.getGroups();
  },
  beforeDestroy() {
    this.$store.commit("CLEAR_TASKS");
  },
  methods: {
    getGroups() {
      this.$store.dispatch("allUserGroups");
    },
    addGroup() {
      this.openModal = !this.openModal;
    },
    saveGroup(groupName) {
      if (groupName === null || groupName === undefined || groupName === "") {
        this.message = "Group field can not be empty.";
        return;
      } else {
        const newGroup = {
          wkg_name: groupName,
        };
        this.$store.dispatch("addUserGroup", newGroup);
      }
    },
    deleteGroup(id) {
      const groupID = {
        wkg_id: id,
      };
      this.$store.dispatch("deleteGroup", groupID);
    },
    flushOld() {
      this.$store.commit("CLEAR_TASKS");
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: #6cc7edff;
$black: #1a1a1aff;
$black-2: #1f1f1fff;
$black-3: #262626ff;
$silver: #727272ff;
$red: #a73a27ff;

</style>