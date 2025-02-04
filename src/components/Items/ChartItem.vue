<template>
  <div>
    <BarChart v-if="chartType === 'bar'" :chart-data="chartData" :chart-options="chartOptions" />
    <LineChart v-else-if="chartType === 'line'" :chart-data="chartData" :chart-options="chartOptions" />
    <DoughnutChart v-else-if="chartType === 'doughnut'" :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { BarChart, LineChart, DoughnutChart } from 'vue-chart-3';

Chart.register(...registerables);
export default {
    components: {
        BarChart,
        LineChart,
        DoughnutChart
    },
    props: {
        chartType: {
            type: String,
            required: true
        },
        chartData: {
            type: Object,
            required: true
        },
        chartOptions: {
            type: Object,
            default: () => ({ responsive: true, maintainAspectRatio: false })
        }
    }
}
</script>