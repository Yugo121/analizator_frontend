<template>
  <div>
    <component
    :is="chartComponent"
    v-if="chartComponent"
    :chart-data="chartData"
    :chart-options="chartOptions"></component>
    <p v-else>Nieznany typ wykresu!</p>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { BarChart, LineChart, DoughnutChart, PieChart, RadarChart } from 'vue-chart-3';

Chart.register(...registerables);

export default {
  components: {
    BarChart,
    LineChart,
    DoughnutChart,
    PieChart,
    RadarChart
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
  },
  computed: {
    chartComponent() {
      const chartMap = {
        bar: BarChart,
        line: LineChart,
        doughnut: DoughnutChart,
        pie: PieChart,
        radar: RadarChart
      };
      return chartMap[this.chartType] || null;
    }
  }
};
</script>