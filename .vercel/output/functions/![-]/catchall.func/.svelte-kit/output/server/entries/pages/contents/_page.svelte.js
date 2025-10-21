import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: ".backgrounder.svelte-uykrtb{background-image:url('/img/toc.png');background-repeat:repeat;background-size:cover;height:auto;overflow:hidden}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let contents = [
    ["Dining options in Udaipur", "dining"],
    ["Elevated Dining experience at Udaivilas", "elevated"],
    ["Guest experiences", "experience"],
    ["Shopping options", "shopping"],
    ["Sightseeing options", "sightseeing"],
    ["The Oberoi Spa", "spa"]
  ];
  $$result.css.add(css);
  return `<div class="backgrounder flex flex-col items-center svelte-uykrtb"><div class="text-3xl titlefont-regular p-5 pt-[50px] text-center content-regular" data-svelte-h="svelte-b00wex">Navigating Your Stay</div> <div class="text-center">${each(contents, (content) => {
    return `<a href="${"./" + escape(content[1], true)}"><p class="text-black content-regular m-10 text-2xl ">${escape(content[0])}</p></a>`;
  })}</div> <p class="text-lg text-center w-[80%] pb-5" data-svelte-h="svelte-1tw385u">If you require assistance with booking any of these experiences or would like further information, please don&#39;t hesitate to reach out to our concierge team via the link provided below.
        <br><a href="https://wa.me/9257052525" class=""><em>Click Here</em></a></p></div>`;
});
export {
  Page as default
};
