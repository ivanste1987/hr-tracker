<template>
  <div class="add-task">
    <div class="inputs">
      <div class="input-content">
        <input 
          type="text" 
          v-model="task_title" 
          placeholder="Title" 
        />
      </div>
      <button @click="addNewTask" class="btn">Create Task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task_title: null,
      
    };
  },
  methods: {
    addNewTask() {
      this.$emit("addNewTask", this.task_title);
    },
  },
};
</script>

<style lang="scss">
$blue: #6cc7edff;
$black-2: #1f1f1fff;
$black-3: #262626ff;
$silver: #727272ff;

</style>