<template>
    <div>
      <h2>Charts in VueJs</h2>
        <FinanceChart/>
        <br/>
        <br/>
        <BarChart/>
        <br/>
        <br/>
        <PieChart/>
        <br/>
        <br/>
        <PolarRadarChart/>
    </div>
</template>
<script>
import FinanceChart from "../components/FinanceChart.vue"
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
import PolarRadarChart from "@/components/PolarRadarChart.vue";
export default{
    name:'ChartsView',
    components:{
        FinanceChart, 
        BarChart,
        PieChart,
        PolarRadarChart
    }
}</script>