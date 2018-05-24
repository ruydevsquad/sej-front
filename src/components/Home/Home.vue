<template>
  <v-layout column grid-list-md text-xs-center>
    <v-parallax src="/static/img/banner_bg.jpg">
        <v-layout row wrap align-center justify-center grid-list-md text-xs-center>
          <v-flex xs12 class="light-blue--text text--darken-4 title" style="height: 100px; margin-top: 15px;">
            <h1>Your Auto Accident Attorneys</h1>
            <h4>Serving Utah since 1990</h4>
          </v-flex>
          <v-flex xs12 md6>
            <img src="/static/img/video_thump.jpg" alt="Video" style="margin: 20px;">
          </v-flex>
          <v-flex xs12 md6>
            <v-card raised style="max-width: 450px;">
              <v-card-text class="px-4">
                <v-layout row wrap>
                  <v-flex xs12>
                    <h2 class="light-blue--text text--darken-4">Injured in an Accident?</h2>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn color="secondary" large block class="pa-1" style="height: 74px;font-size: 20px;">
                      Call us now 24/7 <br />
                      801-845-2799
                    </v-btn>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn color="secondary" large block class="pa-1" style="height: 74px;">Do I Have a Case?</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      <v-layout row wrap style="background: #026e9fb3;" align-center justify-center>
        <v-flex xs12 md3>
          <p>28 Years</p>
          <p>of fighting for you</p>
        </v-flex>
        <v-flex xs12 md3>
          <p>97%</p>
          <p>success rate</p>
        </v-flex>
        <v-flex xs12 md3>
          <p>Over 34,000 </p>
          <p>satisfied clients</p>
        </v-flex>
        <v-flex xs12 md3>
          <p>Over $400,000,000</p>
          <p>success rate</p>
        </v-flex>
      </v-layout>
    </v-parallax>
    <v-layout>
      <v-flex xs12 title>
        <h1>How Can We Help You?</h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 md6>
        <img src="/static/img/auto_accidents-1.jpg" alt="Auto Accidents" style="width: 100%;">
      </v-flex>
      <v-flex xs12 md6>
        <h2>Auto Accidents</h2>
        <p>After an accident may seem impossible when insurance companies try to confuse you and wear you out until you go away.</p>
        <v-btn color="secondary" large block class="pa-1" style="height: 74px;font-size: 20px;">
                      Find Out More
                    </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 md6>
        <h2>Auto Accidents</h2>
        <p>After an accident may seem impossible when insurance companies try to confuse you and wear you out until you go away.</p>
        <v-btn color="secondary" large block class="pa-1" style="height: 74px;font-size: 20px;">
                      Find Out More
                    </v-btn>
      </v-flex>
      <v-flex xs12 md6>
        <img src="/static/img/semitruck_accident.jpg" alt="Semitruck Accident" style="width: 100%;">
      </v-flex>
    </v-layout>
    <!-- <v-container fluid>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
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
    </v-container> -->
  </v-layout>
</template>
<style>
.parallax {
  width: 100% !important;
}
.parallax__content {
  padding: 0 !important;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h4 {
  font-weight: normal;
}
button {
  text-transform: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.application .theme--light.card, .theme--light .card {
    background-color: #ffffff9e;
    color: rgba(0,0,0,.87);
}
</style>
