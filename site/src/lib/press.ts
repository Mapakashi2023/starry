export interface PressItem {
  id: string;
  publication: string;
  title: string;
  author?: string;
  date: string;
  excerpt: string;
  url: string;
}

export const pressItems: PressItem[] = [
  {
    id: "bbc-2025",
    publication: "BBC News",
    title: "Artist explores the toxic mining legacy of Zambia's 'black mountains'",
    author: "Penny Dale",
    date: "July 2025",
    excerpt:
      "Zambia's notorious 'black mountains' — huge heaps of mining waste that scar the Copperbelt skyline — are deeply personal to Stary Mwaba, one of the country's leading visual artists.",
    url: "https://www.bbc.com/news/articles/cvgewwvp00yo",
  },
  {
    id: "cnn-african-voices",
    publication: "CNN African Voices",
    title: "From HIV counselor to award-winning painter",
    date: "2017",
    excerpt:
      "CNN African Voices profiles Stary Mwaba's journey from working as an HIV counselor to becoming one of Zambia's most recognized contemporary artists.",
    url: "http://edition.cnn.com/videos/world/2017/05/08/african-voices-from-hiv-counselor-to-award-winning-painter-b.cnn",
  },
  {
    id: "contemporary-and",
    publication: "Contemporary And",
    title: "Stary Mwaba: Life on Mars",
    date: "2015",
    excerpt:
      "An exhibition exploring themes of migration, identity, and the human condition through Mwaba's distinctive mixed-media practice.",
    url: "http://www.contemporaryand.com/exhibition/stary-mwaba-life-on-mars/",
  },
  {
    id: "bethanien",
    publication: "Künstlerhaus Bethanien, Berlin",
    title: "Stary Mwaba — KfW Stiftung Residency Exhibition",
    date: "2014–2015",
    excerpt:
      "As recipient of the KfW Stiftung grant, Mwaba's residency at Künstlerhaus Bethanien in Berlin produced a body of work engaging with the Chinese presence in Zambia's mining sector.",
    url: "http://www.bethanien.de/en/exhibitions/stary-mwaba/",
  },
  {
    id: "eflux",
    publication: "E-flux",
    title: "Metrozones / Chinafrika: Under Construction",
    date: "2017",
    excerpt:
      "A group exhibition examining the complex relationships between African nations and China, featuring Mwaba's Chinese Cabbage installation.",
    url: "http://www.e-flux.com/announcements/139852/metrozoneschinafrika-under-construction/",
  },
  {
    id: "asiko",
    publication: "Asiko Art School",
    title: "Stary Mwaba — Artist Profile",
    date: "2016",
    excerpt:
      "Mwaba's participation in Bisi Silva's Asiko Art School programme, an intensive pan-African curatorial and art residency.",
    url: "http://www.asikoartschool.org/stary-mwamba/",
  },
];
