import axios from "axios";
import router from "../../../router/index.js";
const UserAuth = {
  state() {
    return {
      loggedIn: false,
      loginMessage: null,
      errorMsg: false,
    };
  },
  mutations: {
    SET_LOGIN(state, data) {
      state.loggedIn = data;
    },
    SET_ERROR_MESSAGE(state, data) {
      state.errorMsg = true;
      state.loginMessage = data;
    },
    CLEAR_ERROR_MESSAGE(state) {
      state.errorMsg = false
      state.loginMessage = null
    }
  },
  actions: {
    async hendleLogin(context, payload) {
      if (payload.usr_email === null || payload.usr_passwrod === null) {
        context.commit("SET_ERROR_MESSAGE", "Set username or password.");
        return;
      }
      try {
        const response = await axios.post("/api/auth/signin", payload);
        localStorage.setItem("user", response.data.sid);
        context.commit("CLEAR_ERROR_MESSAGE")
        context.commit("SET_LOGIN", true);
      } catch (error) {
        console.log(error.response.data);
        context.commit("SET_ERROR_MESSAGE", error.response.data.message);
      }
    },
    async hendleUser(context) {
      const sid = localStorage.getItem("user");
      if (router.currentRoute.fullPath === "/") {
        return;
      }
      if (sid === null) {
        context.commit("SET_LOGIN", false);
        router.push("/");
      } else {
        try {
          let userSid = localStorage.getItem("user");
          const checkUser = await axios.get(
            `/api/auth/checksession?sid=${userSid}`
          );
          if (!checkUser.data.sessionExipired) {
            context.commit("SET_LOGIN", true);
          } else {
            context.commit("SET_ERROR_MESSAGE", checkUser.data.message);
            context.commit("SET_LOGIN", false);
            router.push("/");
          }
        } catch (error) {
          context.commit("SET_ERROR_MESSAGE", error.response.data.message);
        }
      }
    },
    async checkSession(context) {
      try {
        let res = await axios.get('/api/auth/checksession', { params: { sid: localStorage.user } })
        if (res.data.sessionExpired) {
          context.dispatch('
          ')
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    GetErrorMsg(state) {
      return state.errorMsg;
    },
    GetLoginMessage(state) {
      return state.loginMessage;
    },
    GetLogin(state) {
      return state.loggedIn;
    },
  },
};

export default UserAuth;
