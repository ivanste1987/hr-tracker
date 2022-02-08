import axios from 'axios';
import router from '../../../router'
const UserRegister = {
  actions: {
      trySingup(context, payload){
        const response = axios.post('/api/auth/signup', payload).then(() => {
            if(response.status === 422){
                context.commit('SET_ERROR_MESSAGE', 'Email is already registered.')
            }
        }).then(() => {
            context.dispatch('hendleLogin', payload).then(() => {
                router.push('/dashboard')
            })
        }).catch(error => {
            console.log(error.response.data.message);
            context.commit('SET_ERROR_MESSAGE', error.response.data.message)
        })
      }
  },
};

export default UserRegister;
