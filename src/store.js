import Vuex from 'vuex'

export default new Vuex.Store({
  strict: true,
  state: {
    formData: {
      name: '',
      number: '',
      email: '',
      message: '',
    }
  },
  mutations: {
    updateFormData(state, data) {
      state.formData = data
    },
    resetFormData(state) {
      Object.keys(state.formData).forEach(function (key) {
        state.formData[key] = ''
      })
    }
  }
})
