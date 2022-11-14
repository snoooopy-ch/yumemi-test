<template>
  <div>
    <div>
      <checkbox-group :ctrl="prefecturesCheckobx" />
    </div>
    <div class="margin_top_20">
      <population-chart :ctrl="graph"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PrefecturesGetCommand } from '~~/commands/prefecture';
import { PopulationCompositionGetCommand } from '~~/commands/population';
import CheckboxGroup from '~~/components/molecules/inputs/checkbox_group/index.vue';
import CheckboxGroupCtrl from '~~/components/molecules/inputs/checkbox_group/controller';
import Prefecture from '~~/models/prefeture';
import CheckboxCtrl from '~~/components/molecules/inputs/checkbox/controller';
import Population from '~~/models/population';
import PopulationChart from "~~/components/molecules/chart/index.vue"
import { Chart, DoughnutController, ArcElement, Tooltip } from 'chart.js';
import PopulationChartCtrl from '~~/components/molecules/chart/controller';
import { PrefectureData } from '~~/models/dataset';
Chart.register(DoughnutController, ArcElement, Tooltip);

const prefectures = ref<Prefecture[]>()
const prefecturesCheckobx = ref(
  new CheckboxGroupCtrl("都道府県", [])
)

onMounted(() => {
  loadPrefectures();
})

const prefecturedata= ref<PrefectureData[]>([])

const loadPrefectures = (() => {
  new PrefecturesGetCommand()
    .execute()
    .then((data:Prefecture[]) => {
      if (data) {
        prefectures.value = [...data]
        prefecturesCheckobx.value.checkboxes = prefectures.value?.map((p: Prefecture) => new CheckboxCtrl(p.prefName, false, `${p.prefCode}`))
      }
    })
    .catch((error: any) => {
      console.log(error)
    })
})

const loadPopulations = ((prefs: string[]) => {
  prefs.map((pref: string) => {
    new PopulationCompositionGetCommand(parseInt(pref))
      .execute()
      .then((data: Population[]) => {
        if (data) {
          const labels = data.map(d => d.year);
          graph.value.labels = labels;

          const color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
          const values = data.map(d => d.value)
          prefecturedata.value?.push({
            prefCode: parseInt(pref),
            dataset: {
              label: prefectureNameFromCode(pref),
              data: values,
              backgroundColor: color,
              borderColor: color,
              borderWidth: 2,
              cubicInterpolationMode: 'monotone',
            }
          })
          graph.value.datasets.length = 0;
          graph.value.datasets = prefecturedata.value.map((p: PrefectureData) => p.dataset)
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  })
})

const selectedPrefectures = computed(() => prefecturesCheckobx.value.selectedArrForNameKey)

watch(selectedPrefectures, (newValue, oldValue) => {
  const added = newValue.filter((n: string) => !oldValue.includes(n))
  const removed = oldValue.filter((n: string) => !newValue.includes(n))

  if (removed) {
    prefecturedata.value = prefecturedata.value?.filter((p: PrefectureData) => !removed.includes(p.prefCode.toString()))

    graph.value.datasets.length = 0;
    graph.value.datasets = prefecturedata.value.map((p: PrefectureData) => p.dataset)
  }

  loadPopulations(added)
})

const graph = ref(
  new PopulationChartCtrl([], [])
)

const prefectureNameFromCode = ((code: string) => {
  return prefectures.value?.find((p: Prefecture) => p.prefCode.toString() == code)?.prefName
})

</script>


<style scoped lang="scss">
.margin_top_20 {
  margin-top: 20px;
}
</style>