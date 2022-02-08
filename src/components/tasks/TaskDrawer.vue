<template>
  <div class="task-drawer-content" v-if="taskReady">
    <div class="task-container">
      <base-spinner v-if="!taskReady"></base-spinner>
      <div class="input-content">
        <button
          :class="task.tsk_completed ? 'mark-complete' : 'mark-incomplete'"
          @click="markTask"
        >
          <i class="fas fa-check"></i>

          <span>
            {{ task.tsk_completed ? "Completed" : "Mark Completed" }}
          </span>
        </button>
        <button class="red" @click="deleteTask(task.tsk_id)">
          Delete
          <i class="fas fa-trash-alt fa-lg"></i>
        </button>
      </div>
      <div class="input-content">
        <div class="title">
          <input type="text" name="Title" :value="task.tsk_title" />
        </div>
      </div>
      <div class="input-content">
        <div class="task-prop"><p>Assignee:</p>
        
        </div>
      </div>
      <div class="input-content">
        <div class="task-prop"><p>Start date:</p></div>
        <div class="date">
          <button @click="opencal">open</button>
          <vc-date-picker
            v-if="show"
            :value="null"
            color="#6cc7ed"
            is-dark
            is-range
          />
        </div>
      </div>
      <div class="input-content">
        <div class="task-prop"><p>Priority:</p></div>
        <options-box v-if="taskReady"
          @change="setTaskPriority"
          :options="priorityOptions"
          :selectedIdx="task.tsk_priority"
        />
      </div>
      <div class="input-content">
        <div class="task-prop"><p>Status:</p></div>
        <options-box
          @change="setTaskStatus"
          :options="statusOptions"
          :selectedIdx="task.tsk_status"
        />
      </div>
      <div class="input-content">
        <div class="task-prop"><p>Description:</p></div>
        <textarea
          name="Description"
          :placeholder="task.tsk_description"
          v-model="taskDescription"
        ></textarea>
      </div>
    </div>
    <div class="task-comments">
      <comments-list :tsk_id="this.task.tsk_id"></comments-list>
      <add-comment @sendComment="sendComment"></add-comment>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OptionsBox from "../UI/OptionsBox.vue";
import BaseSpinner from "../UI/BaseSpinner.vue";
import AddComment from "./comments/AddComment.vue";
import CommentsList from "./comments/CommentsList.vue";
export default {
  components: {
    OptionsBox,
    BaseSpinner,
    AddComment,
    CommentsList,
  },
  data() {
    return {
      marked: false,
      show: false,
      taskID: this.$route.params.task_id,
      task: {},
      taskReady: false,
      taskDescription: '',
      priorityOptions: ["Low", "Medium", "High"],
      statusOptions: ["On track", "At risk", "Off track"],
    };
  },
  computed: {
    ...mapGetters(["GetAllTasks"]),
  },
  mounted() {
    this.taskReady = false
    this.getAndFindTask().then(() => {
      this.taskDescription = this.task.tsk_description
    })
    console.log(this.$route.params);
  },
  beforeDestroy() {
    this.$store.commit('CLEAR_ALL_GROUPS')
  },
  methods: {
    markTask() {
      this.$store
        .dispatch("toogleTaskCompleted", {
          tsk_id: this.task.tsk_id,
          tsk_completed: !this.task.tsk_completed,
        })
        .then(() => {
          this.task.tsk_completed = !this.task.tsk_completed;
        });
    },
    opencal() {
      this.show = !this.show;
    },
    async getAllTasks() {
      await this.$store.dispatch("getAllTasks", this.$route.params.group_id);
    },
    findTask() {
      this.taskReady = false;
      const findTask = this.GetAllTasks.find(
        (task) => task.tsk_id == this.$route.params.task_id
      );
      console.log(this.task);
      this.task = findTask;
      this.taskReady = true;
    },
    async getAndFindTask() {
      await this.getAllTasks();
      this.findTask();
    },
    async deleteTask(id) {
      await this.$store.dispatch("deleteTask", id);
      this.$router.push(`/dashboard/groups/${this.$route.params.group_id}`);
    },
    toogleTaskCompleted() {
      this.$store
        .dispatch("toogleTaskCompleted", {
          tsk_id: this.task.tsk_id,
          tsk_completed: !this.task.tsk_completed,
        })
        .then(() => {
          this.task.tsk_completed = !this.task.tsk_completed;
        });
    },
    setTaskPriority(priority) {
      this.$store.dispatch("setTaskPriority", {
        tsk_id: this.task.tsk_id,
        tsk_priority: priority,
      });
    },
    setTaskStatus(status) {
      this.$store.dispatch("setTaskStatus", {
        tsk_id: this.task.tsk_id,
        tsk_status: status,
      });
    },
    sendComment(commentBody) {
      const comment = {
        tsk_id: this.task.tsk_id,
        cmt_comment: commentBody,
      };
      this.$store.dispatch("SendComment", comment);
    },
  },
};
</script>

<style lang="scss" >
// *{
//     border: 1px solid red;
// }
$blue: #6cc7edff;
$black-2: #1f1f1fff;
$black-3: #262626ff;
$silver: #727272ff;
$white: #ffffffff;
$red: #a73a27ff;

</style>