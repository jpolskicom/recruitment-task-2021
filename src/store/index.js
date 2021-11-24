import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import users from './users'
import repos from './repos'

export default new Vuex.Store({
    modules: {
        users,
        repos
    }
});