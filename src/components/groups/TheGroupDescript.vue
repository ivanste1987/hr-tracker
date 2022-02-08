<template>
  <section class="group-details">
    <header>
      <h1>{{ this.group.wkg_name }}</h1>
      <add-tasks @addNewTask="addNewTask"></add-tasks>
    </header>

    <article class="tasks">
      <header>
        <div class="head" v-for="head in header" :key="head" @click="sort(head)">
          <p>
            {{ head }}
            <span v-if="sortBy===head">
              <i v-if="orderAsc" class="fas fa-long-arrow-alt-up"></i>
              <i v-else class="fas fa-long-arrow-alt-down"></i>
            </span>
          </p>
        </div>
      </header>
        <div v-if="tasksReady" class="content">
          <task-list :wkg_id="group.wkg_id" v-if="tasksReady"/>
        </div>
    </article>

    <footer>
      <p>
        <span>Group owner: </span>{{ this.group.usr_email }}
        <span>Created at: </span> {{ this.group.usr_wkg_created }}
      </p>
    </footer>
    <task-drawer v-if="openTaskDraw"></task-drawer>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import AddTasks from "../tasks/AddTasks.vue";
import TaskDrawer from "../tasks/TaskDrawer.vue";
import TaskList from '../tasks/TaskList.vue';

export default {
  components: { AddTasks, TaskDrawer, TaskList },
  data() {
    return {
      postID: this.$route.params.group_id,
      group: {},
      checked: null,
      header: [
        "Completed",
        "Title",
        "Priority",
        "Status",
        "Created",
        "Created by",
      ],
      openTaskDraw: false,
      tasksReady: false,
      sortBy: 'Created',
      orderAsc: false
    };
  },
  computed: {
    ...mapGetters(["GetAllGroups", "GetAllTasks"]),
  },

  mounted() {
    this.tasksReady = false
    this.getGroupsAndFind().then(() => {
      this.tasksReady = true
    });
  },
  methods: {
    async getAllGroups() {
      await this.$store.dispatch("allUserGroups");
    },
    findGroup() {
      const thisGroup = this.GetAllGroups.find(
        (group) => group.wkg_id == this.postID
      );
      this.group = thisGroup;
    },
    async getGroupsAndFind() {
      await this.getAllGroups();
      this.findGroup();
    },
    async addNewTask(tsk_title) {
      const newTask = {
        tsk_title: tsk_title,
        wkg_id: this.group.wkg_id,
      };
      await this.$store.dispatch("addNewTask", newTask);
    },
    async getTasks() {
      await this.$store.dispatch("getAllTasks", this.group.wkg_id);
    },
    sort(head) {
      if (this.sortBy === head) {
        this.orderAsc = !this.orderAsc
      }
      else {
        this.sortBy = head
      }
      
    }
  },
};
</script>

<style lang="scss" scoped>
$blue: #6cc7edff;
$black: #1a1a1aff;
$black-2: #1f1f1fff;
$black-3: #262626ff;
$silver: #727272ff;
$shiny: linear-gradient(
  90deg,
  transparent,
  transparent,
  rgba(255, 255, 255, 0.5),
  transparent
);

// .inprogress {
// }

.content {
  height: calc(100vh - 390px);
}

</style>