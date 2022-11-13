<template>
  <div>
    <checkbox-group :ctrl="prefecturesCheckobx" />
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

const prefectures = ref<Prefecture[]>()
const prefecturesCheckobx = ref(
  new CheckboxGroupCtrl("都道府県", [])
)

onMounted(() => {
  loadPrefectures();
})

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
          console.log(pref)
          console.log(data)
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  })
})

const selectedPrefectures = computed(() => prefecturesCheckobx.value.selectedArrForNameKey)

watch(selectedPrefectures, (newValue) => {
  loadPopulations(newValue)
})

</script>