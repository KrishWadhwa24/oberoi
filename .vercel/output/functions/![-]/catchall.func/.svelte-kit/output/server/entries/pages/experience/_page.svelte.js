import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
const Imp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { about } = $$props;
  let { duration } = $$props;
  let { price } = $$props;
  let { imageLocation } = $$props;
  let { note } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.imageLocation === void 0 && $$bindings.imageLocation && imageLocation !== void 0)
    $$bindings.imageLocation(imageLocation);
  if ($$props.note === void 0 && $$bindings.note && note !== void 0)
    $$bindings.note(note);
  return `<div class="flex flex-col items-center"><h1 class="text-center text-3xl titlefont-bold p-5">${escape(name)}</h1> <img${add_attribute("src", imageLocation, 0)} class="border border-white border-8 w-80 m-5"> <div class="content-regular text-center"><p>${escape(about)}</p> <p>${escape(duration)}</p> <p>${escape(price)}</p> <p>${escape(note)}</p></div></div>`;
});
const css = {
  code: ".backgrounder.svelte-ux1yga{background-image:url('/img/toc.png');background-repeat:repeat;background-size:cover;height:auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [
    {
      name: "Heritage Walk",
      about: "Guests are invited to climb aboard a private boat and enjoy a short ride to a traditional ghat near the old city. From here, a local guide will regale you with stories of Udaipur’s colourful history, on a gentle walking tour through narrow lanes, past haveli (mansions), ancient shrines of folk deities and magnificent tributes to fabled Mewar heroes.",
      duration: "Approximately 2 Hours",
      price: "INR 3,500 per couple plus taxes",
      imageLocation: "/a1.png",
      note: ""
    },
    {
      name: "Safa Tying",
      about: "Guests who admire our team’s perfect turbans may be interested to know that they tie these themselves, by hand, every day before they start work. Each turban consists of a length of traditional Rajasthani fabric, 30 feet (9 metres) long and 4 feet (1.2 metres) wide. It takes great skill to tie these perfectly and we would be delighted to guide you in tying your own.",
      duration: "Duration: 30 minutes",
      price: "Price: INR 1500 per person",
      imageLocation: "/a2.png",
      note: "Note: Guests may also purchase their own safa at extra charge."
    },
    {
      name: "Temple Tour Through Tribal Villages",
      about: "This delightful experience begins with an early morning drive to fort Kumbhalgarh, followed by an exciting guided excursion through the Aravalli mountain ranges to the famous Ranakpur Jain temples. On the way, guests can stop to enjoy a gourmet picnic lunch, before visiting the adivasi (indigenous tribes) villages of Bheels, Meenas and Garasivas.",
      duration: "Price and Duration are Customized",
      price: "",
      imageLocation: "/a3.png",
      note: ""
    },
    {
      name: "Miniature painting school",
      about: "Art lovers will enjoy the short scenic drive and guided visit to Udaipur’s renowned organization of Mewar School of arts. On an interactive tour with a local art expert, guest will learn about the history of this area’s signature miniature paintings and try their hand at creating some art of their own.",
      duration: "The gallery is 15 minute drive away, Duration: 2 hours",
      price: "Price: Car charges as applicable.",
      imageLocation: "/a4.png",
      note: "Art work as priced."
    },
    {
      name: "Traditional Thekri Workshop",
      about: "Thekri is the traditional, highly-skilled rajasthani art of creating elaborate glass inlaid designs on wall, boxes, and furniture. A visit to the traditional thekri workshop near our luxury resort is a must for art lovers or guest wishing to find the perfect souvenir of their vacations in Rajasthan",
      duration: "Price: Complimentary, Car charges as applicable.",
      price: "The workshop is 15 minutes from the hotel.",
      imageLocation: "/a5.png",
      note: ""
    },
    {
      name: "Private Yoga Session",
      about: "Experience a journey of wellbeing with a yoga and meditation session held in the serene environ of The Oberoi Udaivilas. Our private yoga sessions can be tailored to suit guests of all ages, with any level of experience. According to individual needs, our expert instructors teach breathing and meditation techniques, stretching, yoga postures and Sanskrit mantras that help rejuvenate body and mind.",
      duration: "Price: INR 3000 plus taxes per person.",
      price: "Duration: 1 hour",
      imageLocation: "/a6.png",
      note: ""
    },
    {
      name: "Heena Painting",
      about: "An intricate painting style typically used to decorate one’s hands and feet for weddings and festive celebrations, henna painting is a traditional practice linked to Hindu beliefs. After choosing a design, guests can sit back, relax and marvel at the skilled work of the professional local artist as they create elaborate, temporary pattern",
      duration: "Duration: Approximately 30 minutes per hand, depending on the design.",
      price: "",
      imageLocation: "/a7.png",
      note: ""
    },
    {
      name: "Blessing Ceremony",
      about: "Receive auspicious blessings from a Hindu priest in a private ceremony at our onsite temple to the Goddess Tripura Sundari, a goddess who symbolizes the unity of creation. Blessings overseen by her are believed to bring peace and harmony in all aspects of your mind, body, soul and life. Shaded by a 300-year old Banyan tree, with views of Lake Pichola and utter tranquility, this truly is an unforgettable experience.",
      duration: "Duration: 1 hour.",
      price: "Price: INR 25000 plus taxes.",
      imageLocation: "/a8.png",
      note: ""
    },
    {
      name: "Play with Clay",
      about: "Guests can get their hands dirty in a fun, creative pottery making session with a rural artisan. Guests will learn how to mould and shape natural clay into a bespoke design, using a traditional potters’ wheel",
      duration: "Duration: 60 minutes",
      price: "Price: INR 3000 plus taxes",
      imageLocation: "/a9.png",
      note: "Note: Designs are left all day and overnight and the same can be collected the following day"
    },
    {
      name: "Off the Track",
      about: "A bicycle round around the world begins with a single pedal stroke. As they say you never forget how to ride a bike. Let’s find out. Guest are invited to enjoy bicycling in our premises",
      duration: "",
      price: "Price: INR 850 all inclusive of taxes per cycle for 6 hours",
      imageLocation: "/a10.png",
      note: ""
    }
  ];
  $$result.css.add(css);
  return `<div class="backgrounder flex flex-col items-center svelte-ux1yga"><h1 class="text-center text-4xl titlefont-bold p-5" data-svelte-h="svelte-138akii">Guest experiences</h1> ${each(data, (date) => {
    return `<div class="w-[90vw]">${validate_component(Imp, "Imp").$$render($$result, Object.assign({}, date), {}, {})} </div>`;
  })} <div class="h-[5vh]" data-svelte-h="svelte-1lun2y7"></div></div>`;
});
export {
  Page as default
};
