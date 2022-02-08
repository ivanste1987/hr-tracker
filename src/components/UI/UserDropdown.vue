<template>
    <div class="user-dropdown">
        <div @blur="expand=false" tabindex="0" class="user-image-dropdown-button">
            <img
                @click="expand=!expand"
                @error="handleImageError"
                :src="`http://263t122.e2.mars-hosting.com/api/users/${user.id}/avatar?avt_id=${user.avatar_id}&sid=${user.sid}`"
                alt="usr_avatar"
            />
            <div v-show="expand" class="user-dropdown-dropdown">
                <img class="big-img"
                    @error="handleImageError"
                    :src="`http://263t122.e2.mars-hosting.com/api/users/${user.id}/avatar?avt_id=${user.avatar_id}&sid=${user.sid}`"
                    alt="usr_avatar"
                />
                <div class="user-dropdown-name">
                    {{ user.name + " " + user.lastname }}
                </div>
                <div class="user-dropdown-email">
                    {{ user.email }}
                </div>
                <div class="user-dropdown-btns">
                    <div @click="onClickSettings" class="btn">Settings</div>
                    <div @click="onClickSignOut" class="btn">Sign out</div>
                </div>
            </div>
        </div>
        <profile-settings @closeSettings="showSettings=false" v-if="showSettings" :user="user"/>
    </div>
</template>

<script>
import ProfileSettings from '../profile/ProfileSettings.vue'

export default {
    components: {
        ProfileSettings
    },
    data() {
        return {
            expand: false,
            showSettings: false
        }
    },
    props: {
        user: {
            type: Object
        }
    },
    methods: {
        handleImageError(event) {
            event.target.src = "https://via.placeholder.com/150"
        },
        onClickSettings() {
            this.expand = false
            this.showSettings = true
        },
        onClickSignOut() {
            this.expand = false
            this.$store.dispatch('signOut')
        }
    }
}
</script>

<style lang="scss" scoped>

$black-3: #262626ff;

.user-dropdown-dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    top: 90px;
    border: 1px solid rgb(20, 20, 20);
    border-radius: 4px;
    background: $black-3;
    padding: 30px 50px 30px 50px;
    box-shadow: 0 0 10px rgb(20, 20, 20);
}

.user-dropdown-dropdown .btn {
    color: white;
}

.big-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-dropdown-name {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
}

.user-dropdown-email {
    font-size: 18px;
    margin-bottom: 20px;
}

.user-dropdown-btns {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #1f1f1fff;
}

.user-image-dropdown-button > img {
    cursor: pointer;
}

</style>