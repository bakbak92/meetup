<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" fixed>
      <v-list dense>
        <v-list-tile @click="" v-for="item in menuItems" :key="item.title" router :to="item.link" >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="deep-purple darken-1">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Meetup
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view>

      </router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
          {icon: 'face', title: 'Inscription', link: '/signup'},
          {icon: 'lock_open', title: 'Connexion', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'supervisor_account', title: 'Voir les Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organise un meetup', link: '/meetup/new'},
          {icon: 'person', title: 'Profil', link: '/profil'}
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  name: 'App'
}
</script>
