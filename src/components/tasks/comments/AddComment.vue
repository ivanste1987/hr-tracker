<template>
  <div class="comments-container">
    <div class="input-content">
      <textarea
        type="text"
        placeholder="Comment text..."
        v-model="commentBody"
        class="comment-message"
      />
    </div>
    <div class="input-content">
      <button class="btn" @click="sendComment">
        <span>Send</span> <i class="far fa-paper-plane"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentBody: null,
    };
  },
  methods: {
    sendComment() {
      console.log("klik");
      if (this.commentBody === "" || this.commentBody === null) {
        console.log("Comment body empty");
        return;
      }
      this.$emit("sendComment", this.commentBody);
    },
  },
};
</script>

<style lang="scss" scoped>
// *{
//   border: 1px solid red;
// }
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