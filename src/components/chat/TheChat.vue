<template>
  <div class="chat">
    <header>
      <h1>Messages</h1>
      <div class="tab-container">
        <router-link to="/dashboard/chat" class="tab">Inbox</router-link>
        <router-link to="/dashboard/chat/sent" class="tab">Sent</router-link>
        <router-link to="/dashboard/chat/new" class="tab">New message</router-link>
      </div>
    </header>
    <article>
      <keep-alive>
        <router-view class="tab-content"/>
      </keep-alive>
    </article>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">

$black: #1a1a1aff;

.chat {
  header {
    position: fixed;
    top: 0;
    height: 130px;
    left: 250px;
    padding: 5px 40px 10px 40px;
    width: 100%;
    background: $black;
    z-index: 1;
    box-shadow: 0 5px 10px black;
  }
}

.tab-container {
  display: flex;
  flex-direction: row;
}

.tab-container .router-link-exact-active {
  color: dodgerblue;
}

.tab {
  font-size: large;
  font-weight: 500;
  color: lightgray;
  margin: 0 15px 0 0;
}

.tab-active {
  color: dodgerblue;
}

.tab:hover {
  cursor: pointer;
  color: dodgerblue;
}

.tab-content {
  display: block;
  position: relative;
  top: 30px;
  height: calc(100vh - 130px);
  overflow: hidden;
  width: 100%;
}

.tab-content .content {
  padding: 20px 40px 0 40px;
}

</style>