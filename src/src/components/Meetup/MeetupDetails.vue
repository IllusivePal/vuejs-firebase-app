<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card>
                <v-card-title>
                   <h6 class="info--text"> {{meetup.title}} </h6>
                </v-card-title>
                 <v-card-media
                  :src="meetup.imageUrl"
                  height="400px"
                  >
                </v-card-media>
                <v-card-text>
                    <div class="accent--text">{{ meetup.date }} - Where it takes place</div>
                    <div>This is a testing for devmeetups all programmers within cebu has to join the said event it will
                         be very helpfull in your career.
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="primary">Register</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    meetup: function () {
      return this.$store.getters.loadedMeetup(parseInt(this.id))
    }
  }

}
</script>