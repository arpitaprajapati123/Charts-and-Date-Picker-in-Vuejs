<template>
  <div>
    <h3 class="datePickerHeader">Date Picker in Vuejs</h3>
    <v-main>
      <v-container>   
        <div v-for="item in propItems" :key="item">
        {{ item }}
          <DatePicker :formattedDate="item"/>       
        </div>          
    </v-container>
    </v-main>   
  </div>
</template>
<script>
  
import DatePicker from "../components/DatePicker.vue"
  export default {
    name: 'HomePage',
    data(){
      return{
      //  formatData1:'MMMM D, YYYY',
      //  formatData2:'DD/MM/YYYY',
      //  formatData3:'ddd, MMM D, YYYY',
      //  formatData4:'HH:mm:ss',
      //  formatData5:'h:mm:ss A',
      //  formatData6:'h:mm A',
      //  formatData7:'YYYY-MM-DD HH:mm:ss'
      propItems:['MMMM D, YYYY', 'DD/MM/YYYY','ddd, MMM D, YYYY', 'HH:mm:ss', 'h:mm:ss A', 'h:mm A', 'YYYY-MM-DD HH:mm:ss' ]
      }
    },    
    components:{
      DatePicker
    },
    
  }
</script>
<style>
.datePickerHeader{
  text-align: center;
  text-decoration: underline;
  margin-top:35px;
}</style>
