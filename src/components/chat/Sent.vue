<template>
    <div class="sent">
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
                action: 'getSentMessages',
                clear: 'CLEAR_SENT_MESSAGES',
                getter: this.GetSentMessages
            }
        }
    },
    methods: {
        ...mapGetters([ 'GetSentMessages' ])
    }
}
</script>

<style>

</style>