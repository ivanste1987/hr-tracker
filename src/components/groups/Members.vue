<template>
    <div class="members">
        <div class="member" v-for="member, idx in members" :key="idx" :style="{
              'background-image': `url(http://263t122.e2.mars-hosting.com/api/users/${member.usr_id}/avatar?avt_id=${member.usr_avt_id}&sid=${sid})`
            }">
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            members: [],
            sid: localStorage.user
        }
    },
    props: {
        wkg_id: {
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapGetters(['GetMembers'])
    },
    created() {
        this.getGroupMembers()
    },
    methods: {
        async getGroupMembers() {
            await this.$store.dispatch('getMembers', this.wkg_id)
            this.members = this.GetMembers
        }
    }
}
</script>

<style>

</style>