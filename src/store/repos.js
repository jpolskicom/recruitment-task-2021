import axios from 'axios';

export default {
    state: {
        repos:[]
    },
    mutations:{
        setRepos(state,payload){
            state.repos = payload;
        }
    },
    getters:{
        getRepos: state => state.repos,
        getRepoByOwnerLogin: state => login => state.repos.filter(e => e.owner.login == login)
    },
    actions:{
        async fetchRepos({commit,state},login){
            if(state.repos.map(e => e.owner.login).includes(login)){
                return;
            }
            const response = await axios.get(`users/${login}/repos`).catch(() =>{
                window.alert(`Repo of user ${login} not found!`)
            });

            if(response.status === 200){
                commit('setRepos',[
                    ...state.repos,
                    ...response.data
                ]);
            }
        }
    },
    namespaced:true
}