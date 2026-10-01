export function createCollection(modules) {
  const items = Object.values(modules).map((m) => m.default);
  const byId = Object.fromEntries(items.map((i) => [i.metadata.id, i]));
  return { items, byId };
}
