import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    userName:"admin",
    password:"admin",
    phoneNumber:"13022020294",
    email:"asdf@121.com"
}

const mutations = {
    mutationsUsername(state,name){
        return (state.userName=name)
    },
    mutationsPassword(state,passwordChanged){
        return (state.password=passwordChanged)
    }
}

export default new Vuex.Store({
    state,
    mutations
})