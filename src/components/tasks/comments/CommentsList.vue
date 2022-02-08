<template>
  <section class="comment-list">
   
    <dynamic-list :properties="properties"></dynamic-list>
   
  </section>
</template>

<script>
import TheComment from "./TheComment.vue";
import DynamicList from "../../UI/DynamicList.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DynamicList,
  },
  props:{
    tsk_id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      properties: {
        component: TheComment,
        action: "SetAllComments",
        clear: "CLEAR_COMMENTS",
        getter: this.GetAllComments,
        reverse: true,
        payload: this.tsk_id,
      },
    };
  },
  methods: {
    ...mapGetters(["GetAllComments"]),
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

</style>