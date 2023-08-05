import { defineStore } from "pinia";

export const userStore = defineStore('userStore', {
  state : () => ({
    user: {
      firstname: '',
      lastname: '',
      loggedin: false,
    },
    errors: {
    }
  }),

  getters: {
    loggedin(state) {
      return state.user.loggedin
    }
  },

  actions: {

    register(data) {

    },

    async login(email, password){

    },

    storeUser(data){
      this.user.firstname = data.firstname
    },

    logout(){
      this.user.firstname = ''
      this.router.push("/")

    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,
      },
    ],
  },
})