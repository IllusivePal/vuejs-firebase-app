import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    loadedMeetups:[ 
        {imageUrl: 'https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg', id: 1, title: 'Meetup in New York', date: '2017-07-17'},
        {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg', id: 2, title: 'Meetup in Paris', date: '2017-07-19'} 
    ],
    user:{
        id: 'asdasd123',
        registeredMeetups:['asdasd123']
    }
  },
  mutations:{},
  actions:{},
  getters:{
      loadedMeetups (state){
          return state.loadedMeetups.sort((meetupA,meetupB)=>{
              return meetupA.date > meetupB.date
          })
      },
      loadedMeetup(state){
          return (meetupId)=>{
              return state.loadedMeetups.find((meetup)=>{
                  return meetup.id === meetupId
              })
          }
      }
  }
})