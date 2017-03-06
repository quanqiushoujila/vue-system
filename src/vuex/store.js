/*
* @Author: kk
* @Date:   2017-02-23 16:14:06
* @Last Modified by:   kk
* @Last Modified time: 2017-03-01 14:28:40
*/

'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  dialogDelete: false,
  dialogEdit: false
}

const mutations = {
  UPDATA_DELETESTATE (state, dialogDelete) {
    state.dialogDelete = !state.dialogDelete
  },
  UPDATA_EDITSTATE (state, dialogEdit) {
    state.dialogEdit = !state.dialogEdit
  }
}

export default new Vuex.Store({
  state,
  mutations
})
