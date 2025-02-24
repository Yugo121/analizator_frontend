<template>
    <h1 class="text-center">{{ title }}</h1>

    <div class="row mb-5 mt-5">
        <div class="col"></div>
        <div class="col-6">
            <div class="btn-group d-flex justify-content-center " role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" v-model="chartType" autocomplete="on" value="line" checked>
                <label class="btn btn-outline-warning" for="btnradio1">Sprzedaż produktu w czasie</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" v-model="chartType" value="polar" autocomplete="off">
                <label class="btn btn-outline-warning" for="btnradio2">Sprzedaż produktu na danym rynku</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" v-model="chartType" value="bar" autocomplete="off">
                <label class="btn btn-outline-warning" for="btnradio3">Sprzedaż na rynkach w czasie</label>
            </div>
        </div>
        <div class="col">
        </div>
    </div>

    <div class="row">
        <div class="col">
        </div>
        <div class="col-11">
            <div class="input-group mb-3">
                <button @click="showModal = true" class="btn btn-warning">Filtruj <i class="bi bi-funnel"></i></button>

                <ModalItem 
                    :isOpen="showModal" 
                    title="Filtry" 
                    :filters="dynamicFilters" 
                    @close="showModal = false" 
                    @apply="applyFilters"
                />
            </div>
        </div>
        <div class="col"></div>
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
import ModalItem from '@/components/Items/ModalItem.vue';

export default {
    components: {ChartItem, ModalItem},
    data () {
        return {
            chartType: "line",
            originalChartData: {
                labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                datasets: [{
                    label: "Testowy item",
                    backgroundColor: ["rgba(62, 228, 68, 0.8)"],
                    borderColor: ["rgba(62, 228, 68, 0.8)"],
                    data: [27, 30, 35, 34, 42, 31, 33, 26, 29, 39, 42, 54]
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            },
            title: "Sprzedaż produktu w czasie",
            showModal: false,
            dynamicFilters: [
                {name: "dateFrom", label: "Data od", type: "date"},
                {name: "dateTo", label: "Data do", type: "date"},
                {name: "Sku", label: "Sku", type: "text"},
                {name: "Ean", label: "Ean", type: "number"},
            ]
        }
    },
    methods: {
        applyFilters(filters){
            this.appliedFilters = filters;
            console.log("Zastosowane filtry:", this.appliedFilters)
        }
    }
}
</script>

<style scoped>
span, label.input-group-text {
    background-color: #ffc107; 
}
.btn-outline-warning{
    color: black;
}
</style>