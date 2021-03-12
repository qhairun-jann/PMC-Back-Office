const tourRequest = { category: "category", item: "tour request" };
const offers = { category: "category", item: "offers" };
const user_reg = { category: "category", item: "user registeration" };
const requirments = { category: "category", item: "requirements" };

const bangsar = { category: "location", item: "bangsar" };
const kl_gateway = { category: "location", item: "kl Gateway Residences" };
const kl_eco = { category: "location", item: "kl eco city" };
const block_a = { category: "unit", item: "block A" };
const basement = { category: "unit", item: "basement" };
const a_g_1 = { category: "unit", item: "a-g-1" };

//date format : DD/MM/YYYY
const activities = [
  {
    id: 11111,
    date: "13/02/2021",
    dateElement: `<small class="text-muted">13 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2>1 New Tour Request </h2>`,
    descriptionElement: `<p>Jeremy Davidson wants to tour a unit in Paradise Residence</p>`,
    filterKey: [tourRequest],
    link: "#",
  },

  {
    id: 22222,
    date: "14/02/2021",
    dateElement: `<small class="text-muted">14 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> An appointment for property viewing </h2>`,
    descriptionElement: `<p>appointment Kl Eco City </p>`,
    filterKey: [kl_eco],
    link: "#",
  },

  {
    id: 33333,
    date: "13/02/2021",
    dateElement: `<small class="text-muted">13 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2>1 New Offers </h2>`,
    descriptionElement: `<p>Jeremy Davidson wants Offers</p>`,
    filterKey: [offers],
    link: "#",
  },

  {
    id: 44444,
    date: "14/02/2021",
    dateElement: `<small class="text-muted">14 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> User Register  </h2>`,
    descriptionElement: `<p>user register </p>`,
    filterKey: [user_reg],
    link: "#",
  },

  {
    id: 55555,
    date: "13/02/2021",
    dateElement: `<small class="text-muted">13 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> Requirments </h2>`,
    descriptionElement: `<p>requirments</p>`,
    filterKey: [requirments],
    link: "#",
  },

  {
    id: 66666,
    date: "14/02/2021",
    dateElement: `<small class="text-muted">14 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> View Bangsar </h2>`,
    descriptionElement: `<p>Bangsar </p>`,
    filterKey: [bangsar],
    link: "#",
  },

  {
    id: 11223,
    date: "13/02/2021",
    dateElement: `<small class="text-muted">13 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> kl Gateway </h2>`,
    descriptionElement: `<p> kl Gateway</p>`,
    filterKey: [kl_gateway],
    link: "#",
  },

  {
    id: 22334,
    date: "14/02/2021",
    dateElement: `<small class="text-muted">14 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> Basement </h2>`,
    descriptionElement: `<p> basement </p>`,
    filterKey: [basement],
    link: "#",
  },

  {
    id: 55443,
    date: "13/02/2021",
    dateElement: `<small class="text-muted">13 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2>1 unit block A</h2>`,
    descriptionElement: `<p> unit bloack a</p>`,
    filterKey: [block_a],
    link: "#",
  },

  {
    id: 10101,
    date: "14/02/2021",
    dateElement: `<small class="text-muted">14 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> category: offers, unit  a-g-1, location: bangsar!  </h2>`,
    descriptionElement: `<p> category: offers, unit  a-g-1, location: bangsar!  </p>`,
    filterKey: [a_g_1,bangsar,offers],
    link: "#",
  },

  {
    id: 12345,
    date: "14/02/2021",
    dateElement: `<small class="text-muted">14 Feb 2021 | 1.02 pm</small>`,
    titleElement: `<h2> UNIT A-G-1 </h2>`,
    descriptionElement: `<p> UNIT A-G-1 </p>`,
    filterKey: [a_g_1],
    link: "#",
  },
];
