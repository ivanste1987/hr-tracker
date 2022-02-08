<template>
    <div class="dynamic-list">
        <scroll-box :scrollx="properties.scrollx" :scrolly="properties.scrolly" @scroll="onScroll" ref="scrollBox">
            <div class="content-wrapper" ref="content">
                <div v-if="listReady" class="dynamic-list-content" :class="{ 'reverse': properties.reverse }">
                    <div v-for="item, idx in list" :key="idx" class="dynamic-list-item">
                        <item :is="properties.component" :item="item" :properties="properties.itemProps"/>
                    </div>
                </div>
            </div>
        </scroll-box>
    </div>
</template>

<script>
import ScrollBox from './ScrollBox.vue'

export default {
    components: { ScrollBox },
     data() {
        return {
            limit: 15,
            overflowBoundary: 300,
            requestTimeout: 600,
            requestAllowed: true,
            listReady: true
        }
    },
    props: {
        properties: {
            type: Object,
            required: true
        }
    },
    computed: {
        list() {
            return this.properties.getter()
        },
        listLength() {
            return this.list.length
        }
    },
    watch: {
        listLength() {
            this.listReady = false
            this.$nextTick().then(() => {
            //   setTimeout(() => {
                this.listReady = true
            //   }, 100)
            })
        }
    },
    created() {
        this.$store.commit(this.properties.clear)
    },
    mounted() {
        this.scrollBox = this.$refs.scrollBox.$el
        this.content = this.$refs.content
        this.initialLoad()
    },
    beforeDestroy() {
        this.$store.commit(this.properties.clear)
    },
    methods: {
        requestMore(offset, limit) {
            return new Promise(resolve => {
                if (!this.requestAllowed) return
                this.requestAllowed = false
                this.$store.dispatch(this.properties.action, { offset, limit, payload: this.properties.payload })
                setTimeout(() => {
                    this.requestAllowed = true
                    resolve()
                }, this.requestTimeout)
            })
        },
        overflow() {
            if (this.properties.reverse) {
                return this.scrollBox.scrollTop
            }
            return this.content.scrollHeight - this.scrollBox.scrollTop - this.scrollBox.clientHeight
        },
        onScroll() {
            if (this.overflow() < this.overflowBoundary) {
                this.requestMore(this.list.length, this.limit)
            }
        },
        initialLoad(length = this.list.length) {
            this.requestMore(this.list.length, 10).then(() => {
                if (this.properties.reverse) this.scrollBox.scrollTop = this.content.scrollHeight
                if (length === this.list.length || this.overflow() > this.overflowBoundary) return
                this.initialLoad()
            })
        }
    }
}
</script>

<style scoped>

.dynamic-list {
    height: 100%;
}

.dynamic-list-content {
    display: flex;
    flex-direction: column;
}

.reverse {
    flex-direction: column-reverse;
}

</style>