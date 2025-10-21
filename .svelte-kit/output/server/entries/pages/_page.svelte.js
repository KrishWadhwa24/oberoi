import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import Page$1 from "./intro/_page.svelte.js";
import Page$2 from "./contents/_page.svelte.js";
/* empty css                                               */
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page$1, "INTRO").$$render($$result, {}, {}, {})} ${validate_component(Page$2, "Contents").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
