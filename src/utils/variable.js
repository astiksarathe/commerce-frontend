export const CollectionList = [
  {
    title: "Audio (147)",
    children: [
      { title: "Headphones (75)" },
      { title: "Earbuds (32)" },
      { title: "Portable Speakers (30)" },
      { title: "Turntables (21)" },
      { title: "Walkmans (2)" },
      { title: "Audio Accessories (23)" },
      { title: "See All (147)" },
    ],
  },
  {
    title: "Hi-Fi (183)",
    children: [
      { title: "Speakers (77)" },
      { title: "Subwoofers (13)" },
      { title: "Sound Bars (18)" },
      { title: "Amplifiers (18)" },
      { title: "Home Cinema (146)" },
      { title: "A/V Receivers (17)" },
      { title: "See All (183)" },
    ],
  },
  {
    title: "TV & Entertainment (86)",
    children: [
      { title: "LED TVs (29)" },
      { title: "OLED TVs (32)" },
      { title: "Projectors (10)" },
      { title: "Blu-Ray & DVD Players (6)" },
      { title: "TV Accessories (9)" },
      { title: "See All (86)" },
    ],
  },
];

export const filterList = ["Colors", "Price", "Size", "Design", "Availability"];

export const getSortingOptions = (selSortingOption) => {
  return sortingOptions.map(({ key, label }) => ({
    key: key,
    label: (
      <span
        className={
          selSortingOption === label ? "text-zinc-950" : "text-zinc-500"
        }
      >
        {label}
      </span>
    ),
  }));
};

export const sortingOptions = [
  { key: "SORT_BY_DEFAULT", label: "Default" },
  { key: "SORT_BY_FEATURED", label: "Featured" },
  { key: "SORT_BY_BEST_SELLING", label: "Best selling" },
  { key: "SORT_BY_A_TO_Z", label: "Alphabetically, A-Z" },
  { key: "SORT_BY_Z_TO_A", label: "Alphabetically, Z-A" },
  { key: "SORT_BY_PRICE_LOW_TO_HIGH", label: "Price, low to high" },
  { key: "SORT_BY_PRICE_HIGH_TO_LOW", label: "Price, high to low" },
  { key: "SORT_BY_DATE_OLD_TO_NEW", label: "Date, old to new" },
  { key: "SORT_BY_DATE_NEW_TO_OLD", label: "Date, new to old" },
];

export const productViewOptions = [
  { key: "VIEW_GRID", label: "Grid" },
  { key: "VIEW_LIST", label: "List" },
];

export const prodPerPagOpt = [
  { key: 24, label: "24 per page" },
  { key: 36, label: "36 per page" },
  { key: 48, label: "48 per page" },
];
