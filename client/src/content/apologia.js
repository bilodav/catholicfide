// Apologia articles are split across meta.json / content.json / citations.json
// per article folder, so this loader stitches them together instead of using
// createCollection. Each article is shaped like the other collections
// ({ metadata, ... }) so LibraryBrowser can work with it.
const metaModules = import.meta.glob(
  "../assets/data/apologia/articles/**/meta.json",
  { eager: true },
);
const contentModules = import.meta.glob(
  "../assets/data/apologia/articles/**/content.json",
  { eager: true },
);
const citationsModules = import.meta.glob(
  "../assets/data/apologia/articles/**/citations.json",
  { eager: true },
);
// Eagerly glob-import every media file so Vite can bundle/hash it and give
// us a real, resolvable URL. Keyed by full module path.
const mediaModules = import.meta.glob(
  "../assets/data/apologia/articles/**/media/*.{jpg,jpeg,png,webp,gif,svg}",
  { eager: true, import: "default", query: "?url" },
);

function dirOf(path) {
  return path.substring(0, path.lastIndexOf("/"));
}

function indexByDir(modules) {
  const map = {};
  for (const path in modules) {
    map[dirOf(path)] = modules[path].default;
  }
  return map;
}

const contentByDir = indexByDir(contentModules);
const citationsByDir = indexByDir(citationsModules);

export const ARTICLES = Object.entries(metaModules).map(([path, m]) => {
  const dir = dirOf(path);
  return {
    metadata: m.default,
    content: contentByDir[dir] ?? null,
    citations: citationsByDir[dir] ?? null,
    // Kept so relative media paths (e.g. "media/burningBush.jpeg") in
    // citations.json can be resolved.
    dir,
  };
});

export const ARTICLES_BY_ID = Object.fromEntries(
  ARTICLES.map((a) => [a.metadata.id, a]),
);

// Resolve a citation's relative "src" against the article's directory.
export function resolveMediaSrc(dir, relativeSrc) {
  if (!dir || !relativeSrc) return null;
  return mediaModules[`${dir}/${relativeSrc}`] ?? null;
}
