import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import error from './error'
import message from './message'

Vue.use(Vuex)

// ストアは種類に応じてモジュールとして分けて作成することができる
// 認証関係のデータストア、写真データのストアなど
const store = new Vuex.Store({
    modules: {
        auth,
        error,
        message
    }
})

export default store