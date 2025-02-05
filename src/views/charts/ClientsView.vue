<template>
    <h1 class="text-center">{{ title }}</h1>
    <div class="row mb-5 mt-5">
        <div class="col"></div>
        <div class="col-6">
            <div class="btn-group d-flex justify-content-center " role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" v-model="chartType" autocomplete="on" value="bar" checked>
                <label class="btn btn-outline-warning" for="btnradio1">Bar</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" v-model="chartType" value="line" autocomplete="off">
                <label class="btn btn-outline-warning" for="btnradio2">Line</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" v-model="chartType" value="doughnut" autocomplete="off">
                <label class="btn btn-outline-warning" for="btnradio3">Doughnut</label>
            </div>
        </div>
        <div class="col">
            <div class="btn-group" role="group">
                <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">
                Countries
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item form-check-label" v-for="(label, index) in originalChartData.labels" :key="index"> 
                        <input class="form-check-input"
                        type="checkbox"
                        :value="label"
                        v-model="selectedLabels"/>
                        {{ label }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col"></div>
        <div class="col-11">
            <ChartItem :chart-type="chartType" :chart-data="filteredChartData" :chart-options="chartOptions"></ChartItem>
        </div>
        <div class="col"></div>
    </div>
</template>

<script>
import ChartItem from '@/components/Items/ChartItem.vue';
export default {
    components: {ChartItem},
    data () {
        return {
        chartType: "bar",
        originalChartData: {
            labels: ["Niemcy", "Francja", "Grecja", "Polska"],
            datasets: [
                {
                    label: "Ilość klientów",
                    backgroundColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 0.5)", "rgba(255, 25, 48, 1)"],
                    borderColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 25, 48, 1)"],
                    data: [10, 5, 15, 50],
                }
            ],
        },
        title: "Ilość klientów na dany rynek",
        chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            },
            selectedLabels: []
        }
    },
    created() {
        this.selectedLabels = [...this.originalChartData.labels]
        },
    computed: {
        // dodać mapowanie kolorów, aby też było responsywne, i dla samych warstw danych i dla labeli
        filteredChartData() {
            const ids = this.originalChartData.labels
            .map((label, index) => (this.selectedLabels.includes(label) ? index : -1))
            .filter(index => index !== -1);
            return {
                labels: this.originalChartData.labels.filter(label => this.selectedLabels.includes(label)),
                datasets: this.originalChartData.datasets.map(dataset => ({
                    ...dataset,
                    data: ids.map(index => dataset.data[index])
                }))
            };
        }
    },
}
</script>

<style scoped>
.btn-outline-warning{
    color: black;
}
</style>