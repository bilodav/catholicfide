import { createCollection } from "./createCollection";

// import.meta.glob needs a literal path, so each collection has its own call.
const { items, byId } = createCollection(
  import.meta.glob("../assets/data/novenas/*.json", { eager: true }),
);

export const NOVENAS = items;
export const NOVENAS_BY_ID = byId;
