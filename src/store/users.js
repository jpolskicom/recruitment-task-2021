import axios from 'axios';

export default {
    state: {
        userNames:[],
        users:[]
    },
    mutations:{
        setUserNames(state,payload){
            switch (typeof payload) {
                case 'string':
                    state.userNames = payload.split(' ');
                    break;
                default:
                    state.userNames = payload
                break;
            }  
            state.users = state.users.filter(e => state.userNames.includes(e.login.toLowerCase()));
        },
        setUsers(state,payload){
            state.users = payload;
        }
    },
    getters:{
        getUserNamesNotFetched(state) {
            return state.userNames.filter( e => !state.users.map( u => u.login.toLowerCase()).includes(e.toLowerCase()))
        },
        getUsers: state => state.users
    },
    actions:{
        async fetchUsers({commit,state,getters}){
            return await getters.getUserNamesNotFetched.map(async (name) => {
                const response = await axios.get(`users/${name}`).catch(() =>{
                    window.alert(`User ${name} not found!`)
                });

                if(response.status === 200){
                    commit('setUsers',[
                        ...state.users,
                        response.data
                    ]);
                }
                return response;
            })
        }
    },
    namespaced:true
}