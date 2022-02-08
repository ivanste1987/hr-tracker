<template>
    <div class="profile-settings">
        <div class="profile-settings-content">
            <div class="profile-settings-title-bar">
                <h3>
                    Profile Settings
                </h3>
                <div @click="$emit('closeSettings')" class="close-btn">
                    <i class="far fa-times-circle fa-2x"></i>
                </div>
            </div>
            <div class="profile-settings-profile">
                <form @submit.prevent="trySingup">
                    <div class="input-content">
                        <i class="far fa-envelope fa-lg"></i>
                        <input
                        type="email"
                        name="usr_email"
                        id="email"
                        placeholder="Email"
                        required
                        ref="email"
                        v-model="usr_email"
                        readonly
                        />
                    </div>
                    <!-- <div class="input-content">
                        <i class="fas fa-lock fa-lg"></i>
                        <input
                        type="password"
                        name="usr_password"
                        id="password"
                        placeholder="New password"
                        required
                        v-model="usr_password"
                        />
                    </div> -->
                    <div class="input-content">
                        <i class="fas fa-user-tie fa-lg"></i>
                        <input
                        type="text"
                        name="usr_first_name"
                        id="firstname"
                        placeholder="New first name"
                        required
                        v-model="usr_first_name"
                        />
                    </div>
                    <div class="input-content">
                        <i class="fas fa-user-tie fa-lg"></i>
                        <input
                        type="text"
                        name="usr_last_name"
                        id="lastname"
                        placeholder="New last name"
                        required
                        v-model="usr_last_name"
                        />
                    </div>
                    <button class="btn" type="submit">Save changes</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            usr_first_name: '',
            usr_last_name: '',
            usr_email: '',
            usr_password: ''
        }
    },
    props: {
        user: {
            type: Object
        }
    },
    created() {
        console.log(this.user);
        this.usr_first_name = this.user.name
        this.usr_last_name = this.user.lastname
        this.usr_email = this.user.email
    }
}
</script>

<style lang="scss" scoped>

$black-3: #262626ff;
$blue: #6cc7edff;
$silver: #727272ff;
$black-2-rgba: rgba(31, 31, 31, 0.7);

.profile-settings {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    background: $black-2-rgba;
}

.profile-settings-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $black-3;
    border-radius: 20px;
    padding: 20px 30px 20px 30px;
    width: 400px;
}

.profile-settings-title-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h3 {
        margin: 0;
    }
}

.close-btn {
    i {
        color: $blue;
    }
}

.profile-settings-profile {
    width: 100%;
    form {
        .btn {
            margin-top: 15px;
        }
        padding: 15px 0 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        width: 100%;
        .input-content {
            width: 100%;
            position: relative;
            display: grid;
            grid-template-columns: 10% 90%;
            margin-bottom: 10px;
            border-bottom: 1px solid $silver;
            transition: all 0.5s ease;
            &:focus-within {
                border-bottom: 1px solid $blue;
                i {
                color: $blue;
                }
            }
            input,
            i {
                line-height: 2;
            }
            input {
                position: relative;
                background: transparent;
                border: none;
                outline: none;
                padding: 10px 16px;
                width: 100%;
            }
        }
    }
}

</style>