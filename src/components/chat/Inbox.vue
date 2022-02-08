<template>
    <div class="inbox">
        <dynamic-list :properties="properties"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DynamicList from '../UI/DynamicList.vue'
import MessageListItem from './components/MessageListItem.vue'

export default {
    components: { DynamicList },
    data() {
        return {
            properties: {
                component: MessageListItem,
                action: 'getReceivedMessages',
                clear: 'CLEAR_RECEIVED_MESSAGES',
                getter: this.GetReceivedMessages,
                scrollx: 'hidden'
            }
        }
    },
    methods: {
        ...mapGetters([ 'GetReceivedMessages' ])
    }
}
</script>

<style scoped>

</style>