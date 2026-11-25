export const business = {
  name: "Ken’s Diner",
  address: "6104 Schonsee Way NW, Edmonton, AB T5Z 0K6",
  phone: "780-244-5367",
  phoneHref: "tel:+17802445367",
  email: "info@kensdiner.ca",
  instagram: "https://www.instagram.com/kensdineryeg/",
  specials: "/dailyspecials",
  directions: "https://www.google.com/maps/dir/?api=1&destination=6104%20Schonsee%20Way%20NW%2C%20Edmonton%2C%20AB%20T5Z%200K6",
  hours: {
    weekday: { days: "Monday–Friday", time: "8 am–6 pm" },
    weekend: { days: "Saturday–Sunday", time: "9:30 am–6 pm" },
    holiday: "Closed statutory holidays",
  },
  earlyBirdService: { days: "Monday–Friday", time: "8 am–11 am", restriction: "Dine-in only" },
  brunchService: { days: "Saturday–Sunday", time: "9:30 am–2 pm" },
} as const;
