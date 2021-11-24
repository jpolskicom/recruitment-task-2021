import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://api.github.com/';

Vue.use(VueAxios, axios);