<template>
  <div>
    <v-parallax src="/static/img/banner_bg.jpg" height="500">
      <v-layout column align-center justify-center>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <h1 class="white--text">Your Auto Accident Attorneys</h1>
              <h4 class="white--text">Serving Utah since 1990</h4>
            </v-flex>
            <v-flex xs6>
              <img src="/static/img/video_thump.jpg" alt="Vuetify.js">
            </v-flex>
            <v-flex xs6>
              <v-card>
                <v-card-text class="px-0">asdasd</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </v-layout>
    </v-parallax>
    <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <img src="/static/img/banner_bg.jpg" alt="Vuetify.js" class="mb-5">
          <blockquote>
            &#8220;First, solve the problem. Then, write the code.&#8221;
            <footer>
              <small>
                <em>&mdash;John Johnson</em>
              </small>
            </footer>
          </blockquote>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
