

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DiW7NsHR.js","_app/immutable/chunks/scheduler.CoSoSzXr.js","_app/immutable/chunks/index.DoXM4yTu.js"];
export const stylesheets = ["_app/immutable/assets/0.Cw3oly1K.css"];
export const fonts = [];
