<template>
  <v-container>
    <v-layout row wrap  v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="meetup.imageUrl"
                  height="130px"
                  contain
                >
                </v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h3 class="white--text">{{meetup.title}}</h3>
                    <div>{{meetup.date | date}} {{meetup.time}} - {{meetup.location}}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat @click="viewMeetup(meetup.id)">
                    <v-icon>arrow_forward</v-icon>
                    Voir le meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  },
  methods: {
    viewMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style>
.card__media__background{
  background-size: cover!important;
}
</style>
