import type { EventItem } from "../types/event";

export const events: EventItem[] = [
  {
    id: 1,
    title: "2001: A Space Odyssey",
    description:
      "Stanley Kubricku ulmeklassika, mis viib vaataja teekonnale inimese, tehnoloogia ja kosmose piirimaile.",
    startsAt: "2026-10-09T19:00",
    location: "Haapsalu kultuurikeskus",
    tags: ["Kubrick", "ulme"],
  },


  {
    id: 2,
    title: "A Clockwork Orange",
    description:
      "Provokatiivne kultusfilm vabadusest, vägivallast ja ühiskonna soovist inimest muuta.",
    startsAt: "2026-10-16T19:00",
    location: "Haapsalu kultuurikeskus",
    tags: ["Kubrick", "kultusfilm"],
  },
  {
    id: 3,
    title: "The Shining",
    description:
      "Kõhedust tekitav õudusklassika üksildasest hotellist ja perekonnast, kelle talvine puhkus võtab sünge pöörde.",
    startsAt: "2026-08-23T20:00",
    location: "Haapsalu kultuurikeskus",
    tags: ["Kubrick", "õudus"],
  },
  {
    id: 4,
    title: "Dr. Strangelove",
    description:
      "Must komöödia külmast sõjast ja sellest, kui kiiresti võivad absurdsed otsused muutuda väga ohtlikuks.",
    startsAt: "2026-10-30T19:00",
    location: "Haapsalu kultuurikeskus",
    tags: ["Kubrick","klassika"],
  },
];
