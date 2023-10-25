<template>
    <v-layout class="rounded rounded-md">
      <v-app-bar
        color="black"
        height="48"
        flat
      ></v-app-bar>
  
      <v-app-bar
        color="grey-lighten-2"
        flat
        height="48"
        location="bottom"
      ></v-app-bar>
  
      <v-main class="d-flex flex-column align-center justify-center" style="min-height: 200px;">
        <v-row>
          <v-col>
            <h2>BedTime Tracker</h2>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col class="v-col-12">
            <p class="v-col-auto">
              Discover a better way to monitor and enhance your sleep patterns with SleepTrack, your all-in-one sleep tracking solution. Whether you're looking to establish healthier sleep habits or gain insights into your nighttime routines, SleepTrack is here to help. With a sleek and intuitive user interface, SleepTrack empowers you to effortlessly record your sleep data and track your progress over time. New users can kickstart their journey by adding sleep entries with our intuitive "New entry" feature, allowing you to select sleep and wake-up times, calculate total sleep duration, and observe your sleep trends. For returning users, SleepTrack provides a comprehensive overview of your past sleep records, complete with detailed graphs showcasing sleep duration trends. Your data is securely stored on our server, ensuring the utmost privacy and convenience. Join us on a mission to achieve restful nights and a refreshed tomorrow.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <router-link to="/login">
                <v-btn variant="tonal" class="v-col-auto">Login</v-btn>
            </router-link>
          </v-col>
          <v-col>
            <v-btn variant="tonal" class="v-col-auto">Sign In</v-btn>
          </v-col>
        </v-row>
      </v-main>
    </v-layout>
</template>