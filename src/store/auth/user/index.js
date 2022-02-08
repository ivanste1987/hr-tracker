import axios from "axios";
const User = {
  state() {
    return {
      user: {},
    };
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async getUser(context){
      const response = await axios.get(`http://263t122.e2.mars-hosting.com/api/users?sid=${localStorage.user}`)
      context.commit('SET_USER', response.data.user)
    }
      
  },
  
    getters:{
        GetUser(state){
            return state.user
        }
    }
  
}

export default User;
