<template>
  <div class="create-group-modal">
    <header>
      <h3>Create group</h3>
    </header>
    <div class="content">
      <div class="center">
        <div class="input-content">
          <i class="fas fa-layer-group fa-lg"></i>
          <input
            type="text"
            placeholder="Name youre group..."
            v-model="groupName"
          />
        </div>
      </div>
      <div class="button-content">
        <button @click="saveGroup" class="btn">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close: false,
      groupName: null,
    };
  },
  methods: {
    saveGroup() {
      this.$emit("saveGroup", this.groupName);
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