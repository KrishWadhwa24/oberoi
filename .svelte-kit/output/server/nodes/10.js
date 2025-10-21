

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/spa/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.Duu0CYw4.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.DoXM4yTu.js"];
export const stylesheets = ["_app/immutable/assets/10.xh_v7ayE.css"];
export const fonts = [];
