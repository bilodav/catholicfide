import { createCollection } from "./createCollection";

const { items, byId } = createCollection(
  import.meta.glob("../assets/data/prayers/*.json", { eager: true }),
);

export const PRAYERS = items;
export const PRAYERS_BY_ID = byId;
