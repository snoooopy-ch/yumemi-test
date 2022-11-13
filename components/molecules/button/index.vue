<template>
  <v-btn
    :class="props.ctrl.className"
    flat
    @click="props.ctrl.onClick"
  >
    <div class="button_title" v-html="$sanitize(props.ctrl.text)"></div>
  </v-btn>
</template>

<script lang="ts">
/** ボタンコンポーネント
 * @module ButtonComponent
 */
export default {
  name: "buttonComponent",
};
</script>

<script lang="ts" setup>
import ButtonCtrl from "./controller";
import $sanitize from "~/utils/sanitize_html";

const props = defineProps({
  ctrl: {
    type: ButtonCtrl,
    required: true,
  },
  menu: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="scss" scoped>

</style>
