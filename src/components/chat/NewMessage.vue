<template>
    <div class="new-message">
        <div class="content">
            <input type="text" placeholder="To" v-model="to">
            <input type="text" placeholder="Message" v-model="message">
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            to: '',
            message: ''
        }
    },
    methods: {
        async sendMessage() {
            await this.$store.dispatch('sendMessage', { msg_message: this.message, usr_email: this.to })
        }
    }
}
</script>

<style scoped>

input {
  background: black;
}

</style>