<template>
  <div class="coment-content">
    <div class="coment-header">
      <p>{{ item.usr_first_name + " " + item.usr_last_name }} <span>email:</span> {{item.usr_email}}</p>
    </div>
    <div class="comment-body">
      <p>{{ item.cmt_comment }}</p>
    </div>
    <div class="comment-date">
      <p>
        <span>
          {{ item.cmt_created | formatDate }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
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