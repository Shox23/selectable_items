import { ref } from "vue";
import { ItemModel } from "../models";
import { rightColData, leftColData } from "./mockData";

export const selectedItem = ref<ItemModel | null>(null);
export const selectedItems = ref<ItemModel[]>([]);

export const selectSingleItem = (id: number) => {
  let currentItem = rightColData.find((item) => item.id === id);
  if (currentItem) {
    selectedItem.value = currentItem;
  }
};

export const removeItem = (id: number) => {
  selectedItems.value = selectedItems.value.filter((item) => item.id !== id);
};

export const selectItem = (id: number) => {
  let currentItem = leftColData.find((item) => item.id === id);
  if (currentItem) {
    if (!selectedItems.value.find((item) => item.id === currentItem.id)) {
      if (selectedItems.value.length >= 6) {
        return;
      } else {
        selectedItems.value.push(currentItem);
      }
    }
  }
};
