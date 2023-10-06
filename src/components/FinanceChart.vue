<template>
    <div>
       <ejs-chart :primaryXAxis="chartPrimaryAxis" :title="chartTitle" :primaryYAxis="chartPrimaryYAxis" :tooltip="chartTooltip" :crosshair="chartCrosshairSettings">
        <e-series-collection>
            <e-series type="Hilo" :dataSource="stockData" xName="date" high="highValue" low="lowValue" open="openValue" close="closeValue" volume="CandleSeries">

            </e-series>
        </e-series-collection>
       </ejs-chart>
    </div>
</template>
<script>
import {HiloSeries, DateTime, Tooltip, Crosshair, HiloOpenCloseSeries} from "@syncfusion/ej2-vue-charts"
export default{
    provide:{
        chart:[HiloSeries, DateTime, Tooltip, Crosshair, HiloOpenCloseSeries]
    },
    data(){
        return{
            chartCrosshairSettings:{
                enable:true,
                lineType:'Vertical'
            },
            chartTooltip:{
                enable:true
            },
            chartPrimaryYAxis:{
                title:'Price in Dollars'
            }, 
            chartTitle:'Financial Analysis',
            chartPrimaryAxis:{
                valueType:'DateTime',
                minimum:new Date('2019-12-31'),
                maximum:new Date('2021-07-01')
            },
            stockData:[
                {
                    date:new Date('2020-07-04'),
                    highValue:105.78,
                    lowValue:96.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989384
                },
                {
                    date:new Date('2020-07-15'),
                    highValue:115.78,
                    lowValue:96.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989384
                },
                {
                    date:new Date('2020-07-31'),
                    highValue:125.78,
                    lowValue:96.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989384
                },
                {
                    date:new Date('2021-11-24'),
                    highValue:215.78,
                    lowValue:176.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989384
                },
                {
                    date:new Date('2021-11-01'),
                    highValue:98.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989384
                },
                {
                    date:new Date('2021-11-14'),
                    highValue:100.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989384
                },
                {
                    date:new Date('2020-02-14'),
                    highValue:89.78,
                    lowValue:86.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989376
                },
                {
                    date:new Date('2020-02-22'),
                    highValue:75.78,
                    lowValue:46.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989376
                },
                {
                    date:new Date('2020-02-28'),
                    highValue:90.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989376
                },
                {
                    date:new Date('2020-03-11'),
                    highValue:125.78,
                    lowValue:90.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343987884
                },
                {
                    date:new Date('2020-03-21'),
                    highValue:115.78,
                    lowValue:90.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343987884
                },
                {
                    date:new Date('2020-03-30'),
                    highValue:85.78,
                    lowValue:79.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343987884
                },
                

                {
                    date:new Date('2020-04-12'),
                    highValue:185.78,
                    lowValue:126.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-04-31'),
                    highValue:102.78,
                    lowValue:99.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-05-12'),
                    highValue:109.78,
                    lowValue:86.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },

                {
                    date:new Date('2020-05-02'),
                    highValue:85.78,
                    lowValue:56.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                }, {
                    date:new Date('2020-05-22'),
                    highValue:185.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-06-30'),
                    highValue:235.78,
                    lowValue:199.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-08-12'),
                    highValue:135.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-08-22'),
                    highValue:185.78,
                    lowValue:116.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-07-02'),
                    highValue:85.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-07-12'),
                    highValue:95.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-07-31'),
                    highValue:65.78,
                    lowValue:26.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-09-12'),
                    highValue:55.78,
                    lowValue:46.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-10-12'),
                    highValue:59.78,
                    lowValue:36.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-07-11'),
                    highValue:85.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                }, {
                    date:new Date('2020-07-02'),
                    highValue:185.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                }, {
                    date:new Date('2020-07-31'),
                    highValue:145.78,
                    lowValue:126.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-11-12'),
                    highValue:95.78,
                    lowValue:86.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2020-12-12'),
                    highValue:105.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-01-01'),
                    highValue:90.78,
                    lowValue:89.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-02-12'),
                    highValue:70.78,
                    lowValue:60.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-03-10'),
                    highValue:65.78,
                    lowValue:46.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-04-22'),
                    highValue:85.78,
                    lowValue:69.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-05-31'),
                    highValue:185.78,
                    lowValue:145.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-06-26'),
                    highValue:65.78,
                    lowValue:60.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-04-12'),
                    highValue:56.78,
                    lowValue:45.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-02-02'),
                    highValue:95.78,
                    lowValue:89.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-04-12'),
                    highValue:185.78,
                    lowValue:146.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-05-12'),
                    highValue:95.78,
                    lowValue:86.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-01-12'),
                    highValue:85.78,
                    lowValue:76.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                },
                {
                    date:new Date('2021-2-12'),
                    highValue:185.78,
                    lowValue:176.45,
                    openValue:102.34,
                    closeValue:96.40,
                    volumeValue:343989387
                }
            ]
        }
    }
}
</script>