<template>
  <div @blur="expanded = false" tabindex="0" class="options-box">
    <div class="options-select-button" @click="expanded = !expanded">
      {{ selected }}
    </div>
    <div v-show="expanded" class="options-list">
      <div @click="select(null)" class="options-list-item">
        <div class="options-list-item-check">
          <div :class="{ 'options-list-selected': selectedIndex !== null }">
            <i class="fas fa-check"></i>
          </div>
        </div>
        <div class="options-list-item-label">—</div>
      </div>
      <div v-for="(option, idx) in options" :key="idx">
        <div @click="select(idx)" class="options-list-item">
          <div class="options-list-item-check">
            <div :class="{ 'options-list-selected': selectedIndex != idx }">
              <i class="fas fa-check" :class="selectedIndex != idx ? '' : 'options-list-item-check-color-blue'"></i>
            </div>
          </div>
          <div class="options-list-item-label">{{ option }}</div>
        </div>
      </div>
      <!-- <div class="options-list-separator"></div>
            <div>Edit options</div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false,
      selectedIndex: null,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    selectedIdx: {
      default: null,
    },
  },
  computed: {
    selected() {
      return this.selectedIndex !== null ? this.options[this.selectedIndex] : "—";
    },
  },
  created() {
    this.selectedIndex = this.selectedIdx;
  },
  methods: {
    select(index) {
      this.selectedIndex = index;
      this.expanded = false;
      this.$emit("change", index);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>