<template>
    <div>
        <ejs-chart :tooltip="chartTooltip" :primaryXAxis="chartPrimaryXAxis" :title="chartTitle" :primaryYAxis="chartPrimaryYAxis">
            <e-series-collection>
                <e-series type="Polar" drawType="Line" :dataSource="chartData" xName="month" yName="temperature" :marker="chartMarker">

                </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import { PolarSeries, LineSeries, Category, Tooltip, ColumnSeries, RadarSeries } from "@syncfusion/ej2-vue-charts";
export default{
    name:'PolarRadarChart',
    provide: {
    chart: [PolarSeries, LineSeries, Category, Tooltip, ColumnSeries, RadarSeries],
    },
     data(){
       
        return{
            chartTooltip:{
                enable:true
            },
            chartMarker:{
                visible:true,
                width:7,
                height:7
            },
            chartTitle:'Weather Statistics',
            chartPrimaryYAxis:{
                minimum:-25,
                maximum:25,
                interval:10,
                labelFormat:'{value}°C'
            },
           
            chartPrimaryXAxis:{
                valueType:'Category',
                 labelPlacement:'OnTicks',
                 startAngle:45,
                 coefficient:70
            },
            chartData:[
                {month:'Jan', temperature:'-7.8'},
                {month:'Feb', temperature:'11.8'},
                {month:'Mar', temperature:'27.8'},
                {month:'Apr', temperature:'17.8'},
                {month:'May', temperature:'-1.8'},
                {month:'Jun', temperature:'12.04'},
                {month:'Jul', temperature:'15.7'},
                {month:'Aug', temperature:'-9.8'},
                {month:'Sep', temperature:'22.8'},
                {month:'Oct', temperature:'44.8'},
                {month:'Nov', temperature:'12.8'},
                {month:'Dec', temperature:'-4.8'},
            ]
        }
     }
  }
</script>