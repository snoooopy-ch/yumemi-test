<template>
  <div>
    <div class="graph_title">人口数</div>
    <LineChart ref="chart" :chartData="graphDataSet" :options="options"/>
  </div>
</template>

<script lang="ts">
export default {
  name: "PopulationChart",
};
</script>

<script setup lang="ts">
import PopulationChartCtrl from './controller';
import { LineChart, useLineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

const chart = ref();
Chart.register(...registerables);

const props = defineProps({
  ctrl: {
    type: PopulationChartCtrl,
    required: true,
  }
})

const graphDataSet = ref({
  labels: [],
  datasets: [],
});

const options = {
  fill: false,
  interaction: {
    intersect: false
  },
  radius: 0,
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: '年度'
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: '人口数'
      }
    }
  },
  animation: false
}

watch(() => props.ctrl.labels, (newValue) => {
  graphDataSet.value.labels = [...newValue]
})

watch(() => props.ctrl.datasets, (newValue) => {
  graphDataSet.value.datasets = [...newValue]
  chart.value.chartInstance.data = [...newValue]

  if (newValue.length == 0) {
    graphDataSet.value.datasets.length = 0;
    graphDataSet.value.labels.length = 0;
  }
})
</script>

<style lang="scss" scoped>
.graph_title {
  font-size: $title-size;
  margin-bottom: 10px;
}
</style>