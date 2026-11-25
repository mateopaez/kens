// Edit this file to publish a special. Dates use Edmonton's local calendar day.
// Only specials dated today or later appear on the page.
export type DailySpecial = {
  date: string; // YYYY-MM-DD
  lunch?: {
    mains: string[];
    sides: string[];
    dessert: string;
    price: string;
  };
  dinner?: {
    starters: string[];
    main: string;
    dessert: string;
    fullPrice: string;
    smallPrice: string;
  };
};

export const dailySpecials: DailySpecial[] = [
  {
    date: "2026-11-20",
    lunch: {
      mains: ["Homemade diner burger", "Chicken salad croissant sandwich"],
      sides: ["Vegetable beef soup", "Potato salad"],
      dessert: "Oreo cream pie",
      price: "$13.50",
    },
    dinner: {
      starters: ["Vegetable beef soup", "Coleslaw"],
      main: "Hot hamburger with garlic toast, mushroom gravy, potatoes & vegetables",
      dessert: "Oreo cream pie",
      fullPrice: "$21.00",
      smallPrice: "$13.50",
    },
  },
  {
    date: "2026-11-24",
    lunch: {
      mains: ["Slice of homemade pizza", "Roast beef & cheddar sandwich"],
      sides: ["Corn chowder", "Tomato & cucumber salad"],
      dessert: "Peanut butter brownie",
      price: "$13.50",
    },
    dinner: {
      starters: ["Corn chowder", "Tossed salad"],
      main: "BBQ chicken thighs with fries or mashed potatoes & vegetables",
      dessert: "Peanut butter brownie",
      fullPrice: "$21.00",
      smallPrice: "$13.50",
    },
  },
  {
    date: "2026-11-25",
    lunch: {
      mains: ["Chicken wings", "Salmon salad croissant sandwich"],
      sides: ["Spicy Italian sausage soup", "Veggies & dip"],
      dessert: "Cranberry shortbread cookie",
      price: "$13.50",
    },
    dinner: {
      starters: ["Spicy Italian sausage soup", "Caesar salad"],
      main: "Shepherd’s pie & vegetables",
      dessert: "Cranberry shortbread cookie",
      fullPrice: "$21.00",
      smallPrice: "$13.50",
    },
  },
  {
    // The source image is named nov-29, but its printed date is November 28.
    date: "2026-11-28",
    dinner: {
      starters: ["Homestyle turkey soup", "Spring mix salad with balsamic"],
      main: "Beef ravioli with garlic toast, peas & carrots",
      dessert: "Chef’s choice",
      fullPrice: "$21.00",
      smallPrice: "$13.50",
    },
  },
];
