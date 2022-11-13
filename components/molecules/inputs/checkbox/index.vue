<template>
  <label>
    <input type="checkbox"
      v-model="value" 
      :name="props.ctrl.name" />
      {{ props.ctrl.label }}
  </label>
</template>

<script lang="ts">
/** チェックボックスコンポーネント
 * @module CheckboxInput
 */
export default {
  name: "checkboxInput",
};
</script>

<script lang="ts" setup>
import CheckboxCtrl from "./controller";
import VAdapter from "../v_adapter";
import { computed, ref, watch } from "vue";

const props = defineProps({
  ctrl: {
    type: CheckboxCtrl,
    required: true,
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false
  }
});

const value = computed(new VAdapter(props.ctrl));

const isFocused = computed(() => props.ctrl.value);

const onClick = () => {
  if (props.ctrl.value) props.ctrl.untick();
  else props.ctrl.tick();
};

</script>

<style lang="scss" scoped>
</style>
