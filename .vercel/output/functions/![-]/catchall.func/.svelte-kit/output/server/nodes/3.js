

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contents/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BbfgSXDD.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.DoXM4yTu.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/3.D0LWOfSN.css"];
export const fonts = [];
