import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [ { imageUrl: 'https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg', id: 1, title: 'Meetup in New York', date: '2017-07-17' },
    { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg', id: 2, title: 'Meetup in Paris', date: '2017-07-19' } ],
    user: {
      id: 'asdasd123',
      registeredMeetups: ['1']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 3
      }
      // Reach out to firevase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
