<template>
  <div
    class="item-card"
    :class="isActive ? 'active' : ''"
    @click="$emit('onClick', data.id)"
  >
    {{ data.name }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { ItemCardEmits, ItemCardProps } from "./interfaces";
import { selectedItem, selectedItems } from "../../utils/functions";
const props = defineProps<ItemCardProps>();
defineEmits<ItemCardEmits>();

const isActive = computed(() => {
  if (props.data.id === selectedItem.value?.id) {
    return true;
  }
  if (selectedItems.value.find((item) => item.id === props.data.id)) {
    return true;
  }
  return false;
});
</script>

<style>
.item-card {
  cursor: pointer;
  border-radius: 8px;
  padding: 5px 10px;
  border: 1px solid #1a1a1a;
  transition: 300ms ease;
}

.item-card.active {
  background: #1a1a1a;
  color: #fff;
}
</style>
