<template>
  <LineChart :chartData="graphDataSet" :options="options"/>
</template>

<script lang="ts">
export default {
  name: "PopulationChart",
};
</script>

<script setup lang="ts">
import PopulationChartCtrl from './controller';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const props = defineProps({
  ctrl: {
    type: PopulationChartCtrl,
    required: true,
  }
})

watch(() => props.ctrl.labels, (newValue) => {
  console.log('label changed')
  graphDataSet.value.labels = [...newValue]
})

watch(() => props.ctrl.datasets, (newValue) => {
  console.log('dataset changed', newValue)
  graphDataSet.value.datasets = [...newValue]
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
  }
}
</script>