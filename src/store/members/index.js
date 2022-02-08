import axios from "axios"
const Members = {
    state() {
        return {
        members: []
        }
    },
    mutations: {
        SET_MEMBERS(state, data) {
            state.members = data
        },
        CLEAR_MEMBERS(state) {
            state.members = []
        }
    },
    actions: {
        async getMembers(context, payload) {
            context.commit("CLEAR_MEMBERS");
            try {
                const res = await axios.get('/api/workgroups/:wkg_id/members', {
                    params: {
                        sid: localStorage.user,
                        wkg_id: payload
                    }
                });
                context.commit("SET_MEMBERS", res.data.members);
            } catch (error) {
                console.log(error);
            }
        },
    },
    getters: {
        GetMembers(state) {
            return state.members
        },
    },
};

export default Members;
