import { ItemModel } from "../../models";

export interface ItemCardProps {
  data: ItemModel;
}

export interface ItemCardEmits {
  (e: "onClick", id: number): void;
}
