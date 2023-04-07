export const mockLineData = [
  {
    id:
      localStorage.getItem("language") === "jp" ? "退職金の積立て" : "Other Savings",
    data: [
      {
        x: "2020",
        y: 5,
      },
      {
        x: "2030",
        y: 40,
      },
      {
        x: "2040",
        y: 75,
      },
      {
        x: "2050",
        y: 110,
      },
      {
        x: "2060",
        y: 150,
      },
    ],
  },
  {
    id:  localStorage.getItem("language") === "jp" ? "その他の貯蓄" : "Retirement Savings",

    data: [
      {
        x: "2020",
        y: 5,
      },
      {
        x: "2030",
        y: 10,
      },
      {
        x: "2040",
        y: 30,
      },
      {
        x: "2050",
        y: 100,
      },
      {
        x: "2060",
        y: 256,
      },
    ],
  },
];

export const mockStreamData = [
  {
    "Retirement Savings": 143,
    "Othe rSavings": 44,
  },
  {
    "Retirement Savings": 91,
    "Other Savings": 58,
  },
  {
    "Retirement Savings": 112,
    "Other Savings": 25,
  },
  {
    "Retirement Savings": 151,
    "Other Savings": 21,
  },
  {
    "Retirement Savings": 146,
    "Other Savings": 168,
  },
  {
    "Retirement Savings": 115,
    "Other Savings": 152,
  },
  {
    "Retirement Savings": 128,
    "Other Savings": 164,
  },
  {
    "Retirement Savings": 11,
    "Other Savings": 177,
  },
  {
    "Retirement Savings": 118,
    "Other Savings": 112,
  },
];

export const mockMyLineData = [
  {
    id: "Retirement Savings",

    data: [
      {
        x: "2020",
        y: 130,
      },
      {
        x: "2030",
        y: 200,
      },
      {
        x: "2040",
        y: 100,
      },
      {
        x: "2050",
        y: 150,
      },
      {
        x: "2060",
        y: 90,
      },
      {
        x: "2070",
        y: 160,
      },
      {
        x: "2080",
        y: 120,
      },
      {
        x: "2090",
        y: 270,
      },
    ],
  },
];
