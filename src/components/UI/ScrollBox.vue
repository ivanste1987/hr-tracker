<template>
    <div class="scroll-box" ref="scrollBox" @scroll="onScroll" :class="{
        'owf-x-visible': scrollx === 'visible',
        'owf-y-visible': scrolly === 'visible',
        'owf-x-hidden': scrollx === 'hidden',
        'owf-y-hidden': scrolly === 'hidden',
        'owf-x-clip': scrollx === 'clip',
        'owf-y-clip': scrolly === 'clip',
        'owf-x-scroll': scrollx === 'scroll',
        'owf-y-scroll': scrolly === 'scroll'
        }">
        <slot/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scroll: { x: 0, y: 0}
        }
    },
    props: {
        scrollx: {
            type: String,
            default: 'auto',
            validator: function (value) {
                return ['visible', 'hidden', 'clip', 'scroll', 'auto'].indexOf(value) !== -1
            }
        },
        scrolly: {
            type: String,
            default: 'auto',
            validator: function (value) {
                return ['visible', 'hidden', 'clip', 'scroll', 'auto'].indexOf(value) !== -1
            }
        }
    },
    activated() {
        this.$refs.scrollBox.scrollLeft = this.scroll.x
        this.$refs.scrollBox.scrollTop = this.scroll.y
    },
    methods: {
        onScroll(event) {
            this.scroll.x = event.target.scrollLeft
            this.scroll.y = event.target.scrollTop
            this.$emit('scroll', this.scroll, event)
        }
    }
}
</script>

<style scoped>

.scroll-box {
    display: block;
    width: 100%;
    height: 100%;
    overflow: auto;
}

.owf-x-visible {
    overflow-x: visible;
}

.owf-y-visible {
    overflow-y: visible;
}

.owf-x-hidden {
    overflow-x: hidden;
}

.owf-y-hidden {
    overflow-y: hidden;
}

.owf-x-clip {
    overflow-x: clip;
}

.owf-y-clip {
    overflow-y: clip;
}

.owf-x-scroll {
    overflow-x: scroll;
}

.owf-y-scroll {
    overflow-y: scroll;
}

</style>