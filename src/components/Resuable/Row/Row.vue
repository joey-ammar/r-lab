<script setup>
import { h } from "vue";
import Field from "../Field/Field.vue";
function Columns(props, { slots }) {
  const items = slots.default()[0]?.children ?? [];
  const cnt = Math.floor(12 / items.length);
  const ret = items.map((item) => {
    if (Field != item.type ?? null) {
      item = h(Field, { label: item.props?.label ?? null }, [item]);
    }
    return h("div", { class: "col-sm-12 col-md-" + cnt }, [item]);
  });
  return h("div", { class: "row" }, ret);
}
</script>
<template>
  <Columns>
    <slot></slot>
  </Columns>
</template>
<style lang="scss">
.row {
  display: flex;
  align-content: flex-end;
  align-items: baseline;
  > * {
    align-self: flex-end;
  }
}
</style>
