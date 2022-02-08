<template>
    <div class="message-list-item">
        {{ item.msg_id }} {{ item.msg_message }} {{ item.usr_email }} {{ item.msg_created }}
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    props: {
        item: {
            required: true
        }
    }
}
</script>

<style scoped>

.message-list-item {
    cursor: pointer;
    user-select: none;
    color: yellow;
    border: 1px solid rgb(25, 25, 25);
    border-bottom: 1px solid rgb(10, 10, 10);
    border-top: none;

    line-height: 40px;
}

.message-list-item:hover {
    box-shadow: 0 5px 3px -4px black;
    background: rgb(14, 24, 24);
}

</style>