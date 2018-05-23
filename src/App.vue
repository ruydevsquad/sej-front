<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <!-- <v-container wrap> -->
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-btn icon @click.stop="clipped = !clipped">
          <v-icon>web</v-icon>
        </v-btn>
        <v-btn icon @click.stop="fixed = !fixed">
          <v-icon>remove</v-icon>
        </v-btn> -->
        <v-toolbar-title><router-link to="home" ><img src="/static/img/header-logo.png" alt="Siegfried & Jensen"></router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
          <v-icon>menu</v-icon>
        </v-btn> -->
        <v-toolbar-items>
          <v-btn flat @click.stop="rightDrawer = !rightDrawer" class="orange--text text--darken-1">
            FREE Case Review<br />(801) 509-9925
          </v-btn>
        </v-toolbar-items>
        <!-- </v-container> -->
    </v-toolbar>
    <br />
    <div>teste</div>
    <v-toolbar app dark color="primary" class="toolbar-home-blue hidden-sm-and-down white--text" fixed="false">
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/about-us">{{ 'About Us' | translate }}</v-btn>
        <v-btn flat to="/happy-clients">{{ 'Our Happy Clients' | translate }}</v-btn>
        <v-btn flat to="/auto-accident">{{ 'Automobile Accidents' | translate }}</v-btn>
        <v-btn flat to="/semi-truck">{{ 'Semi-truck Accidents' | translate }}</v-btn>
        <v-btn flat to="/pratice-area">{{ 'Other Practice Areas' | translate }}</v-btn>
        <v-btn flat to="/contact">{{ 'Contact Us' | translate }}</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>
<style>
  nav.toolbar-home-blue {
    top: 64px; height: 45px;
  }
  nav .toolbar__items button {
    text-transform: inherit;
  }
  nav.toolbar-home-blue .toolbar__items a{
    height: 45px !important;
    text-transform: inherit;
  }

  .application .theme--dark.toolbar, .theme--dark .toolbar {
    background: linear-gradient(141deg,#026e9f, #2096cc 51%,#026e9f 75%);
    /* background: linear-gradient(141deg,#0874ff,#00aeff 51%,#0093ff 75%); */
    color: #fff;
  }
  .toolbar__title {
    background: -webkit-linear-gradient(#ffed9c, #e4ba00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Siegfried & Jensen'
    }
  },
  name: 'App'
}
</script>
