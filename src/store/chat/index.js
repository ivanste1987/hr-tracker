import axios from "axios"

const Messages = {
  state: {
    receivedMessages: [],
    sentMessages: []
  },
  mutations: {
    APPEND_RECEIVED_MESSAGES(state, payload) {
      state.receivedMessages.push(...payload)
    },
    APPEND_SENT_MESSAGES(state, payload) {
      state.sentMessages.push(...payload)
    },
    CLEAR_RECEIVED_MESSAGES(state) {
        state.receivedMessages = []
    },
    CLEAR_SENT_MESSAGES(state) {
        state.sentMessages = []
    }
  },
  actions: {
    async getReceivedMessages(context, payload) {
        try {
            const res = await axios.get('/api/messages/received', { params: {
                sid: localStorage.user,
                offset: payload.offset,
                limit: payload.limit
            }})
            context.commit('APPEND_RECEIVED_MESSAGES', res.data.receivedMessages)
        } catch (error) {
            console.log(error);
        }
    },
    async getSentMessages(context, payload) {
      try {
          const res = await axios.get('/api/messages/sent', { params: {
              sid: localStorage.user,
              offset: payload.offset,
              limit: payload.limit
          }})
          context.commit('APPEND_SENT_MESSAGES', res.data.sentMessages)
      } catch (error) {
          console.log(error);
      }
    },
    async sendMessage(context, payload) {
      try {
          let res = await axios.post('api/messages', { sid: localStorage.user, msg_message: payload.msg_message, usr_email: payload.usr_email })
          console.log(res);
      } catch (error) {
          console.log(error);
      }
    }
  },
  getters: {
    GetReceivedMessages(state) {
      return state.receivedMessages;
    },
    GetSentMessages(state) {
      return state.sentMessages;
    },
  },
};

export default Messages;