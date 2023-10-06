<template>
    <div id="app">
      <ejs-chart :primaryXAxis="chartPrimaryXAxis" :title="chartTitle" :primaryYAxis="chartPrimaryYAxis" :legendSettings="chartLegendSettings" :tooltip="chartTooltip">
        <e-series-collection>
          <e-series type="Column" :dataSource="salesData"  :marker="chartMarker" name="Sales"  xName="month" yName="salesValue" >
            
          </e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
    
  </template>
  <script>
  import { ColumnSeries, Category, DataLabel, Legend, Tooltip} from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    
  },
  data(){
    return{     
      chartPrimaryYAxis:{
        title:'Sales (Dollars)'
      },
      chartTitle:'Montly Sales Analysis',
      chartPrimaryXAxis:{
        valueType:'Category',
        title:'Months'
      },
      chartMarker:{
        dataLabel:{
          visible:true
        }
      },
      chartLegendSettings:{
        visible:true
      },
      chartTooltip:{
        enable:true
      },
      salesData:[
        {month:'Jan', salesValue:34},
        {month:'feb', salesValue:44},
        {month:'Mar', salesValue:32},
        {month:'Apr', salesValue:30},
        {month:'May', salesValue:29},
        {month:'Jun', salesValue:49},
        {month:'Jul', salesValue:33},
        {month:'Aug', salesValue:41},
        {month:'Sep', salesValue:38},
        {month:'Oct', salesValue:34},
        {month:'Nov', salesValue:41},
        {month:'Dec', salesValue:33},
      ]
    }
   
  },
  provide:{
    chart:[ColumnSeries, Category, DataLabel, Legend, Tooltip]
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
