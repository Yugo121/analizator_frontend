<template>
    <h1 class="text-center">{{ title }}</h1>

    <div class="row mb-5 mt-5">
        <div class="col"></div>
        <div class="col-6">
            <div class="btn-group d-flex justify-content-center " role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" v-model="chartType" autocomplete="on" value="bar" checked>
                <label class="btn btn-outline-warning" for="btnradio1">Klienci na rynek</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" v-model="chartType" value="pie" autocomplete="off">
                <label class="btn btn-outline-warning" for="btnradio2">Ilość produktów</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" v-model="chartType" value="doughnut" autocomplete="off">
                <label class="btn btn-outline-warning" for="btnradio3">Wartość koszyka</label>
            </div>
        </div>
        <div class="col">
        </div>
    </div>

    <div class="row mb-5 mt-5">
        <div class="col text-center">
            <button class="btn btn-warning" v-on:click="clearChartFilters">Clear filters</button>
        </div>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text date-el">Data From</span>
                <input v-model="dateFrom" type="date" class="form-control date-el">
                <span class="input-group-text date-el">Data To</span>
                <input v-model="dateTo" type="date"  class="form-control date-el">
                <div class="btn-group" role="group">
                <button type="button" class="btn btn-warning dropdown-toggle ms-4" data-bs-toggle="dropdown">
                Countries
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item form-check-label" v-for="(label, index) in allLabels" :key="index"> 
                        <input class="form-check-input"
                        type="checkbox"
                        :value="label"
                        v-model="selectedLabels"/>
                        {{ label }}</li>
                        
                </ul>
            </div>

            </div>
        </div>
        <div class="col">
            <button class="btn btn-outline-warning" v-on:click="assignFilters">Filter</button>

        </div>
    </div>
    
    <div class="row">
        <div class="col"></div>
        <div class="col-11">
            <ChartItem :chart-type="chartType" :chart-data="originalChartData" :chart-options="chartOptions"></ChartItem>
        </div>
        <div class="col"></div>
    </div>
</template>

<script>
import ChartItem from '@/components/Items/ChartItem.vue';
export default {
    components: {ChartItem},
    data () {
        let toDate = new Date();
        let threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(toDate.getMonth() - 3);
        return {
        filterType: "Countries",
        dateFrom: threeMonthsAgo.toISOString().split("T")[0],
        dateTo: toDate.toISOString().split("T")[0],
        chartType: "bar",
        colorMap: {
                "Niemcy": "rgba(255, 178, 0, 1)",
                "Francja": "rgba(43, 25, 232, 1)",
                "Grecja": "rgba(75, 192, 192, 1)",
                "Polska": "rgba(255, 25, 48, 1)"
            },
        originalChartData: {
            labels: ["Niemcy", "Francja", "Grecja", "Polska"],
            datasets: [
                {
                    label: "Kraje",
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
            selectedLabels: ["Niemcy", "Francja", "Grecja", "Polska"],
            allLabels: ["Niemcy", "Francja", "Grecja", "Polska"]
        }
    },
    created() {
        this.selectedLabels = [...this.originalChartData.labels];
        },
    watch: {
        chartType(newVal, oldVal) {
            console.log(`Zmiana z ${oldVal} na ${newVal}`);
            this.changeChartData()
        }
    },
    methods: {
        changeChartData(){
            switch(this.chartType) {
                case "bar":
                    this.originalChartData.labels = ["Niemcy", "Francja", "Grecja", "Polska"];
                    this.title = "Ilość klientów na dany rynek"
                    this.originalChartData.datasets = 
                    [
                        {
                            label: "Kraje",
                            backgroundColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 0.5)", "rgba(255, 25, 48, 1)"],
                            borderColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 25, 48, 1)"],
                            data: [10, 5, 15, 50],
                        }
                    ]
                    break;
                case "pie":
                    this.originalChartData.labels = ["1", "2", "3"];
                    this.title = "Ilość zamawianych produktów"
                    this.originalChartData.datasets = 
                    [
                        {
                            label: "Ilość produktów",
                            backgroundColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 0.5)"],
                            borderColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 1)"],
                            data: [30, 15, 4],
                        }
                    ]
                    break;
                case "doughnut":
                    this.originalChartData.labels = ["0-100", "101-200", "201-300", "301-400", "401-500"];
                    this.title = "Wartości koszyka"
                    this.originalChartData.datasets = 
                    [
                        {
                            label: "Wartość koszyka",
                            backgroundColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 0.5)", "rgba(255, 25, 48, 1)", "rgba(64, 29, 154, 0.9)"],
                            borderColor: ["rgba(255, 178, 0, 1)", "rgba(43, 25, 232, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 25, 48, 1)", "rgba(64, 29, 154, 0.9)"],
                            data: [2, 5, 5, 23, 17],
                        }
                    ]
                    break;
                default:
                console.log("Unknown chart type: ", this.chartType);
            }
        },
        clearChartFilters(){
            let defaultToDate = new Date();
            let defaultFromDate = new Date();
            defaultFromDate.setMonth(defaultToDate.getMonth() - 3);

            this.dateFrom = defaultFromDate.toISOString().split("T")[0];
            this.dateTo = defaultToDate.toISOString().split("T")[0];
            console.log("Chart filters cleared!");
        },
        filterByCountry(){
            console.log(this.selectedLabels)
        },
        assignFilters(){
            this.clearChartFilters();
            this.filterByCountry();
        }
    },
}
</script>

<style scoped>
.btn-outline-warning{
    color: black;
}
.date-el {
 background-color: white;
 border-color: #ffc107;
}
span.date-el{
    background-color: #ffc107;
}
</style>