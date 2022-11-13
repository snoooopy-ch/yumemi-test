<template>
  <div>
    {{ props.ctrl.label }}
    <div class="checkbox_row">
      <CheckboxInput
        v-for="(checkbox, index) in props.ctrl.checkboxes"
        :key="index"
        class="checkbox_row_item"
        :ctrl="checkbox"
        :readonly="props.readonly"
        @click="onClickCheckboxInput(index)"
      >
      </CheckboxInput>
    </div>
  </div>
</template>

<script lang="ts">
/** チェックボックスグループコンポーネント
 * @module CheckboxGroup
 */
export default {
  name: "checkboxGroup",
};
</script>

<script lang="ts" setup>
import CheckboxGroupCtrl from "./controller";
import CheckboxInput from "../checkbox/index.vue";
import CheckboxCtrl from "../checkbox/controller";

const props = defineProps({
  ctrl: {
    type: CheckboxGroupCtrl,
    required: true,
  },
  readonly: {
    type:Boolean,
    required: false,
    default: false
  }
});

const onClickCheckboxInput = function(index: number) {
  if (props.ctrl.checkboxes[index].value) {
    props.ctrl.checkboxes.forEach((chkbox, idx) => {
      if (idx != index &&
          chkbox.name == props.ctrl.checkboxes[index].name &&
          chkbox.value)
        chkbox.value = false;
    });
  }
}
</script>

<style lang="scss" scoped>
.checkbox_row {
  display: flex;
  flex-wrap: wrap;

  &_item {
    display: block;
  }
}

::v-deep(.v-row) {
  display: flex;

  @media only screen and (max-width: 680px) {
    display: block;
	}
}
</style>
