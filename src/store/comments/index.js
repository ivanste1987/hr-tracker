import axios from 'axios'
const Comments = {
  state() {
    return {
      allComments: [],
    };
  },
  mutations: {
    CLEAR_COMMENTS(state){
      state.allComments = [];
    },
    SET_ALL_COMMENTS(state, payload) {
      state.allComments = payload;
    },
    APPEND_COMMENTS(state, payload) {
      state.allComments.push(...payload)
    },
    INSERT_FIRST_COMMENT(state, payload) {
      state.allComments.unshift(...payload)
    }
  },
  actions: {
    async getSentComment(context, payload) {
      try{
        const response =  await axios.get(`/api/tasks/${payload}/comments?sid=${localStorage.user}`, { params: {
          offset: 0,
          limit: 1
        }})
        context.commit('INSERT_FIRST_COMMENT', response.data.comments)
      }catch(error){
          console.log(error);
      }
    },
    async SetAllComments(context, payload){
        try{
            const response =  await axios.get(`/api/tasks/${payload.payload}/comments?sid=${localStorage.user}`, { params: {
              offset: payload.offset,
              limit: payload.limit,
              tsk_id: payload
            }})
            
            context.commit('APPEND_COMMENTS', response.data.comments)
        }catch(error){
            console.log(error);
        }
    },  
    async SendComment(context, payload) {
      try {
        await axios.post(`/api/tasks/${payload.tsk_id}/comments?sid=${localStorage.user}`, {cmt_comment: payload.cmt_comment});
      } catch (error) {
        console.log(error);
      }
      context.dispatch('getSentComment', payload.tsk_id)
    },
  },
  getters: {
    GetAllComments(state){
      return state.allComments
    }
  },
};
export default Comments;
