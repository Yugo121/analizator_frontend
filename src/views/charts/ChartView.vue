<template>
    <div class="chart-container">
      <h2>{{ title }}</h2>
      <ChartItem v-if="chartData" :chart-type="chartType" :chart-data="chartData" />
      <p v-else>Ładowanie danych...</p>
    </div>
</template>
  
  <script setup>
  import { ref, watch, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import ChartItem from "@/components/Items/ChartItem.vue";
  
  const route = useRoute();
  const chartType = ref(route.params.chartType || "bar"); // Domyślny typ, gdyby `route.params.chartType` było `undefined`
  const chartData = ref(null);
  const title = ref("Ładowanie danych...");
  
  // Debug: sprawdzanie, co mamy w `chartType`
  console.log("ChartView - Initial chartType:", chartType.value);
  
  const fetchChartData = async () => {
    console.log("Fetching data for:", chartType.value);
    
    chartData.value = null; // Resetujemy dane na czas ładowania
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Symulacja API
  
    if (chartType.value === "bar") {
      chartData.value = {
        labels: ["Styczeń", "Luty", "Marzec"],
        datasets: [
          {
            label: "Sprzedaż",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            data: [10, 20, 30],
          },
        ],
      };
      title.value = "Sprzedaż miesięczna";
    } else if (chartType.value === "line") {
      chartData.value = {
        labels: ["Pon", "Wt", "Śr", "Czw", "Pt"],
        datasets: [
          {
            label: "Ruch na stronie",
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            data: [100, 150, 180, 90, 120],
          },
        ],
      };
      title.value = "Ruch na stronie w ciągu tygodnia";
    } else if (chartType.value === "doughnut") {
      chartData.value = {
        labels: ["Polska", "Niemcy", "USA"],
        datasets: [
          {
            label: "Udział w sprzedaży",
            backgroundColor: ["red", "blue", "green"],
            data: [40, 30, 30],
          },
        ],
      };
      title.value = "Udział sprzedaży według krajów";
    } else {
      console.error("Nieznany chartType:", chartType.value);
    }
  
    console.log("Dane ustawione dla:", chartType.value, chartData.value);
  };
  
  // Pobranie danych przy pierwszym załadowaniu komponentu
  onMounted(fetchChartData);
  
  // Nasłuchiwanie zmian w URL i ponowne pobranie danych
  watch(
    () => route.params.chartType,
    (newType) => {
      if (newType) {
        console.log("ChartView - Route changed, new chartType:", newType);
        chartType.value = newType;
        fetchChartData();
      } else {
        console.error("ChartView - chartType in route.params is undefined!");
      }
    }
  );
  </script>
  
  <style scoped>
  .chart-container {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  </style>
  