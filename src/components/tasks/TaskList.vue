<template>
    <div class="task-list">
        <dynamic-list :properties="properties"/>
    </div>
</template>

<script>
import DynamicList from '../UI/DynamicList.vue'
import TheTask from './TheTask.vue'
import { mapGetters } from "vuex";

export default {
    components: { DynamicList },
    data() {
        return {
            properties: {
                component: TheTask,
                action: "getTasks",
                clear: "CLEAR_TASKS",
                getter: this.GetAllTasks,
                scrollx: 'hidden',
                payload: this.wkg_id,
                itemProps: {
                    wkg_id: this.wkg_id
                }
            },
        }
    },
    props: {
        wkg_id: {
            type: Number,
            required: true
        }
    },
    methods: {
        ...mapGetters([ 'GetAllTasks' ])
    }
}
</script>

<style>

.task-list {
    height: inherit;
}

</style>