<template>
  <v-app>
    <v-main>
      <nav>
        <router-link to="/">Home</router-link>
      <!-- <router-link to="/date-picker">Date Picker</router-link> -->
      <router-link to="/charts-view">Charts</router-link>
      </nav>     
      <router-view/>
    </v-main>
  </v-app>
</template>     

<script>
import Vue from 'vue';
import {ChartPlugin} from "@syncfusion/ej2-vue-charts"

Vue.use(ChartPlugin)
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
nav{
  margin-left:250px;
  margin-top:35px;
  text-decoration: none;
  cursor:pointer;
  font-size:20px;
  font-weight: 500;
  margin-right:570px; 
 display: flex;
 justify-content: space-evenly;
 
 /* justify-content:space-evenly; */
}
</style>