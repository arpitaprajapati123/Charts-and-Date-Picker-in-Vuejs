<template>
  <div>
    <p class="customeDateFormat">{{ customDateFormat() }}</p>
    <v-date-picker
      :width="250"
      v-model="selectedDate"
      :no-title="true"
    ></v-date-picker>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {    
    formattedDate:String,
    // formattedData2:String ,
    // formattedData3:String,
    // formattedData4:String,
    // formattedData5:String,
    // formattedData6:String,
    // formattedData7:String,
  },
  data() {
    return {
      selectedDate: "",
      date: new Date(),
    };
  },
  methods: {
    customDateFormat() {     
      console.log("function got triggered");
      if (this.selectedDate === "") {  
        // this.formattedDataItems.forEach((item)=>{
        //   console.log("item: ", item)
         
        // // console.log("resultant date: ", resultantDate)
        // // return resultantDate ;
        // })     
        let resultantDate = moment(this.date).format(this.formattedDate);
        console.log(resultantDate)
          // this.selectedDate=resultantDate;
          return resultantDate;       
      }
      return moment(this.selectedDate).format(this.formattedDate);
    },
  },
};
</script>
<style>
.customeDateFormat{
  font-size:18px;
  font-weight:500;
  text-align: center;
}
</style>
