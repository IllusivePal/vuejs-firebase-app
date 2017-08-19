<template>
   <v-container>
       <v-layout row wrap>
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn dark large router to="/meetups" class="info">Explore Meetups</v-btn>
           </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
               <v-btn dark large router to="/meetup/new" class="info">Organize Meetup</v-btn>
           </v-flex>
       </v-layout>
       <v-layout row wrap class="mt-2">
           <v-flex xs12>
               <v-carousel style="cursor:pointer">
                   <v-carousel-item
                   v-for="meetup in meetups"
                   :src="meetup.imageUrl"
                   :key="meetup.id"
                   @click="onLoadMeetup(meetup.id)"
                   >
                   <div class="title">
                    {{ meetup.title }}
                   </div>
                   </v-carousel-item>
               </v-carousel>
           </v-flex>
       </v-layout>
       <v-layout row wrap class="mt-2">
           <v-flex xs12 class="text-xs-center">
              <p> Join our awesome meetups</p>
           </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [ {imageUrl: 'https://static.pexels.com/photos/374710/pexels-photo-374710.jpeg', id: 1, title: 'Meetup in New York'},
                   {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Paris_vue_d%27ensemble_tour_Eiffel.jpg', id: 2, title: 'Meetup in Paris'} ]
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>
<style scoped>
    .title{
        position: absolute;
        bottom: 50px;
        background-color: rgba(0,0,0,0.5);
        color:white;
        font-size: 2em;
        padding:20px;
    }
</style>