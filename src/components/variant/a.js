const variantTree = {
  list: [
    {
      name: "small",
      available: false,
    },
    {
      name: "medium",
      available: false,
    },
    {
      name: "large",
      available: false,
    },
    {
      name: "extra large",
      available: false,
    },
  ],
  small: {
    list: [
      {
        name: "green",
        available: false,
      },
      {
        name: "yellow",
        available: false,
      },
      {
        name: "red",
        available: false,
      },
    ],
    green: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 44999039320311,
      Galaxy: 45028909318391,
      "Solar System": 45028909351159,
      Saturn: 45028909383927,
    },
    yellow: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 44999039385847,
      Galaxy: 45028909416695,
      "Solar System": 45028909449463,
      Saturn: 45028909482231,
    },
    red: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 45028909514999,
      Galaxy: 45028909547767,
      "Solar System": 45028909580535,
      Saturn: 45028909613303,
    },
  },
  medium: {
    list: [
      {
        name: "yellow",
        available: false,
      },
      {
        name: "red",
        available: false,
      },
    ],
    yellow: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 44999039549687,
      Galaxy: 45028909744375,
      "Solar System": 45028909777143,
      Saturn: 45028909809911,
    },
    red: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 45028909842679,
      Galaxy: 45028909875447,
      "Solar System": 45028909908215,
      Saturn: 45028909940983,
    },
  },
  large: {
    list: [
      {
        name: "green",
        available: false,
      },
      {
        name: "yellow",
        available: false,
      },
      {
        name: "red",
        available: false,
      },
    ],
    green: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 45028909973751,
      Galaxy: 45028910006519,
      "Solar System": 45028910039287,
      Saturn: 45028910072055,
    },
    yellow: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 45028910104823,
      Galaxy: 45028910137591,
      "Solar System": 45028910170359,
      Saturn: 45028910203127,
    },
    red: {
      list: [
        {
          name: "Moon",
          available: false,
        },
        {
          name: "Galaxy",
          available: false,
        },
        {
          name: "Solar System",
          available: false,
        },
        {
          name: "Saturn",
          available: false,
        },
      ],
      Moon: 45028910235895,
      Galaxy: 45028910268663,
      "Solar System": 45028910301431,
      Saturn: 45028910334199,
    },
  },
  "extra large": {
    list: [
      {
        name: "Brown",
        available: false,
      },
    ],
    Brown: {
      list: [
        {
          name: "Solar",
          available: false,
        },
      ],
      Solar: 45028915249399,
    },
  },
};

const updateAvailability = (tree, ind, title) => {
  if (!tree) return null;
  if (!tree.list) return null;
  for (let i = 0; i < tree.list; i++) {
    const ele = tree[i].name;
    console.log(ele);
    updateAvailability(tree[ele], i, "");
  }
};

updateAvailability(variantTree, 0, "");
