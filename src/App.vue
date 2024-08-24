<template>
  <div class="main">
    <h2>How long</h2>
    <div class="main__wrapper">
      <div class="main__selected">
        <template v-if="selectedItems.length">
          <TransitionGroup name="list" tag="div" class="main__wrapper__column">
            <ItemCard
              @on-click="removeItem"
              v-for="item in selectedItems"
              :key="item.id"
              :data="item"
            />
          </TransitionGroup>
        </template>
        <div v-else>There's no selected items</div>
      </div>
      <div class="main__selected">
        <Transition name="slide-up" mode="out-in">
          <ItemCard
            :key="selectedItem"
            v-if="selectedItem"
            :data="selectedItem"
          />
          <div v-else>Item is not selected</div>
        </Transition>
      </div>
    </div>
    <div class="main__wrapper">
      <div class="main__wrapper__column">
        <ItemCard
          @on-click="selectItem"
          v-for="item in leftColData"
          :key="item.id"
          :data="item"
        />
      </div>
      <div class="main__wrapper__column">
        <ItemCard
          @on-click="selectSingleItem"
          v-for="item in rightColData"
          :key="item.id"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  removeItem,
  selectedItems,
  selectItem,
  selectSingleItem,
} from "./utils/functions.ts";
import { leftColData, rightColData } from "./utils/mockData.ts";
import ItemCard from "./components/ItemCard/ItemCard.vue";
import { selectedItem } from "./utils/functions.ts";
</script>

<style>
.main {
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  flex-direction: column;
  gap: 16px;
}

.main__selected {
  border: 1px solid #1a1a1a;
  padding: 8px;
  overflow: hidden;
  border-radius: 8px;
}

.main__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main__wrapper__column {
  border: 1px solid #1a1a1a;
  padding: 8px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
</style>
