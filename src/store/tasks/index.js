import axios from "axios";
const Tasks = {
  state() {
    return {
      allTasks: [],
    };
  },
  mutations: {
    SET_ALL_TASKS(state, payload) {
      state.allTasks = payload;
    },
    APPEND_ALL_TASKS(state, payload) {
      state.allTasks.push(...payload)
    },
    INSERT_FIRST_TASK(state, payload) {
      state.allTasks.unshift(...payload)
    },
    REMOVE_TASK(state, payload) {
      const index = state.allTasks.findIndex(task => task.tsk_id === payload )
      state.allTasks.splice(index, 1)
    },
    CLEAR_TASKS(state) {
      state.allTasks = [];
    },
  },
  actions: {
    async toogleTaskCompleted(context, payload) {
      try {
        await axios.put(`/api/tasks/${payload.tsk_id}/completed`, {
          tsk_completed: payload.tsk_completed,
          sid: localStorage.user,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async setTaskPriority(context, payload) {
      try {
        await axios.put(`/api/tasks/${payload.tsk_id}/priority`, {
          tsk_priority: payload.tsk_priority,
          sid: localStorage.user,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async setTaskStatus(context, payload) {
      try {
        await axios.put(`/api/tasks/${payload.tsk_id}/status`, {
          tsk_status: payload.tsk_status,
          sid: localStorage.user,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getAllTasks(context, payload) {
      try {
        const response = await axios.get(
          `/api/workgroups/${payload}/tasks?sid=${localStorage.user}`
        );
        context.commit("SET_ALL_TASKS", response.data.tasks);
      } catch (error) {
        console.log(error);
      }
    },
    async getCreatedTask(context, payload) {
      try{
        const response =  await axios.get(`/api/workgroups/${payload}/tasks1`, { params: {
          sid: localStorage.user,
          offset: 0,
          limit: 1
        }})
        context.commit('INSERT_FIRST_TASK', response.data.tasks)
      }catch(error){
          console.log(error);
      }
    },
    async getTasks(context, payload) {
      try {
        const response = await axios.get(`/api/workgroups/${payload.payload}/tasks1`, {
          params: {
            sid: localStorage.user,
            offset: payload.offset,
            limit: payload.limit
          }
        });
        context.commit("APPEND_ALL_TASKS", response.data.tasks);
      } catch (error) {
        console.log(error);
      }
    },
    async addNewTask(context, payload) {
      try {
        await axios.post(
          `/api/workgroups/${payload.wkg_id}/tasks?sid=${localStorage.user}`,
          payload
        );
        context.dispatch("getCreatedTask", payload.wkg_id);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteTask(context, payload) {
      try {
        const response = await axios.delete(
          `/api/tasks/${payload}/?sid=${localStorage.user}`
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    GetAllTasks(state) {
      return state.allTasks;
    },
  },
};

export default Tasks;
