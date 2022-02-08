<template>
  <div class="all-tasks" tabindex="0" @click="onClickItem">
    <div class="inputs-container">
      <div class="input-content">
        <div class="toogle-completed" @click="toogleTaskCompleted">
          <i
            ref="toggleNotCompleted"
            v-if="!item.tsk_completed"
            :class="item.tsk_completed ? 'blue' : 'grey'"
            class="far fa-check-circle fa-lg"
          ></i>
          <i
            ref="toggleCompleted"
            v-if="item.tsk_completed"
            :class="item.tsk_completed ? 'blue' : 'grey'"
            class="fas fa-check-circle fa-lg"
          ></i>
        </div>
      </div>
      <div class="input-content">
        <p>{{ item.tsk_title }}</p>
      </div>
      <div class="input-content">
        <options-box
          ref="obPriority"
          @change="setTaskPriority"
          :options="priorityOptions"
          :selectedIdx="item.tsk_priority"
        />
      </div>
      <div class="input-content">
        <options-box
          ref="obStatus"
          @change="setTaskStatus"
          :options="statusOptions"
          :selectedIdx="item.tsk_status"
        />
      </div>
      <div class="input-content">
        <p>{{ item.tsk_created | formatDate }}</p>
      </div>
      <div class="input-content">
        <p>{{ item.usr_first_name + " " + item.usr_last_name }}</p>
      </div>
      <div class="input-content">
        <router-link
          class="btn"
          :to="`/dashboard/groups/${properties.wkg_id}/task/${item.tsk_id}`"
        >
          Open</router-link
        >
      </div>
      <div class="input-content">
        <a class="red" @click="deleteTask(item.tsk_id)" ref="deleteTask">
          Delete
          <i class="fas fa-trash-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import OptionsBox from "../UI/OptionsBox.vue";

export default {
  components: { OptionsBox },
  data() {
    return {
      priorityOptions: ["Low", "Medium", "High"],
      statusOptions: ["On track", "At risk", "Off track"],
    };
  },
  props: {
    item: {
      type: Object,
    },
    properties: {
      type: Object
    },
  },
  methods: {
    onClickItem(event) {
      if (!(event.target.classList.contains('input-content') ||
        event.target.classList.contains('inputs-container') ||
        event.target.tagName === 'P')) return
      this.$router.push(`/dashboard/groups/${this.properties.wkg_id}/task/${this.item.tsk_id}`)
    },
    toogleTaskCompleted() {
      this.$store
        .dispatch("toogleTaskCompleted", {
          tsk_id: this.item.tsk_id,
          tsk_completed: !this.item.tsk_completed,
        })
        .then(() => {
          this.item.tsk_completed = !this.item.tsk_completed;
        });
    },
    setTaskPriority(priority) {
      console.log('priTask', priority);
      this.$store.dispatch("setTaskPriority", {
        tsk_id: this.item.tsk_id,
        tsk_priority: priority,
      });
    },
    setTaskStatus(status) {
      this.$store.dispatch("setTaskStatus", {
        tsk_id: this.item.tsk_id,
        tsk_status: status,
      });
    },
     async deleteTask(id) {
      await this.$store.dispatch("deleteTask", id);
      this.$store.commit('REMOVE_TASK', id)
    },
  },
};
</script>

<style lang="scss">

</style>