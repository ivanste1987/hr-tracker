import axios from "axios";
const Groups = {
  state() {
    return {
      allGroups: [],
      groupInfoMsg: null,
    };
  },
  mutations: {
    SET_ALL_GROUPS(state, data) {
      state.allGroups = data;
    },
    SET_INFO_MESSAGE(state, data) {
      state.groupInfoMsg = data;
    },
    CLEAR_ALL_GROUPS(state) {
      state.allGroups = []
    }
  },
  actions: {
    async allUserGroups(context) {
      try {
       
        const response = await axios.get(`/api/workgroups?sid=${localStorage.user}`);
        context.commit("SET_ALL_GROUPS", response.data.res);
      } catch (error) {
        console.log(error);
      }
    },
    async addUserGroup(context, payload) {
      try {
       
        const response = await axios.post(
          `/api/workgroups?sid=${localStorage.user}`,
          payload
        );

        if (response.status === 201) {
          context.commit("SET_INFO_MESSAGE", response.data.message);
        }
        context.dispatch("allUserGroups");
      } catch (error) {
        context.commit("SET_INFO_MESSAGE", error.response.data.message);
      }
    },
    async deleteGroup(context, payload) {
      console.log(payload);
      try {
       
        const response = await axios.delete(
          `/api/workgroups/${payload.wkg_id}?sid=${localStorage.user}`
        );
        if (response.status === 200) {
          context.commit("SET_INFO_MESSAGE", response.data.message);
        }
        context.dispatch("allUserGroups");
      } catch (error) {
        context.commit("SET_INFO_MESSAGE", error.response.data.message);
      }
    },
  },
  getters: {
    GetAllGroups(state) {
      return state.allGroups;
    },
  },
};

export default Groups;
