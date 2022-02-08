import axios from 'axios'
import router from '@/router'

const Signout = {
    actions: {
        closeLocalSession(context) {
            localStorage.removeItem('user')
            context.commit('SET_LOGIN', false)
            context.commit('CLEAR_ERROR_MESSAGE')
            router.push('/')
        },
        signOut(context) {
            (function () {
                try {
                    axios.get('api/auth/signout', { params: { sid: localStorage.user } })
                } catch (error) {
                    console.log(error)
                }
            })()
            context.dispatch('closeLocalSession')
        }
    }
}

export default Signout