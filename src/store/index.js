import Vue from 'vue'
import Vuex from 'vuex'
import Singin from './auth/singin/index.js'
import Singup from './auth/singup/index.js'
import Signout from './auth/signout/index.js'
import User from './auth/user/index.js'
import Groups from './groups/index.js'
import Tasks from './tasks/index.js'
import Messages from './chat/index.js'
import Comments from './comments/index.js'
import Members from './members/index.js'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    Singin: Singin,
    Singup: Singup,
    Groups: Groups,
    Tasks: Tasks,
    Signout: Signout,
    Messages: Messages,
    Comments: Comments,
    User: User,
    Members: Members,
  }
});
export default Store;
