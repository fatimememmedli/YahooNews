import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export interface obj {
  id: string;
  category: string;
  image: string;
  newsHead: string;
  news: string;
  seen: number;
  like: number;
  dislike: number;
  date: Date;
}
interface like {
  id: string;
  like: number;
}
export interface newsState {
  news: obj[];
}

const initialState: newsState = {
  news: [
    {
      id: uuidv4(),
      category: "Politics",
      image:
        "https://s.yimg.com/ny/api/res/1.2/KcB5VB7UwezopAiDT10awA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xMzUwO2NmPXdlYnA-/https://media.zenfs.com/en/gobankingrates_644/e2272cf377f1828bad8f99ececb853dd",
      newsHead:
        "In Less Than a Decade, You’ll Wish You Bought a Home in These 14 Metros",
      news: "Although the housing market is often spoken of in aggregate, variations and pricing and market performance can be very localized. For example, according to data from Zillow, the anticipated one-year growth rate for homes prices in the U.S.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },

    {
      id: uuidv4(),
      category: "Politics",
      image:
        "https://s.yimg.com/ny/api/res/1.2/5xysfXjBNJcun73pBab6Ug--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/ap.org/0c6ac08e1b3e98a471b14076cecc86e8",
      newsHead:
        "Trump wants New Hampshire to put him on a path to the nomination before rivals find their footing",
      news: "His appearance Saturday in Durham was part of a swing taking the former president through early nominating states as he cites his wide polling lead over a dwindling field of GOP hopefuls. They are trying to block his political comeback as Trump navigates multiple indictments and looks ahead to a potential rematch with President Joe Biden, the Democrat he lost to in 2020.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },

    {
      id: uuidv4(),
      category: "World",
      image:
        "https://s.yimg.com/ny/api/res/1.2/7qXf8tJYiVYh11BWGXnShA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE4MDA7aD0xMDEwO2NmPXdlYnA-/https://media.zenfs.com/en/the_hill_articles_341/47b25b1edd33a3416f076f514b733332",
      newsHead:
        "Netanyahu says accidental hostage deaths ‘broke the whole nation’s heart’",
      news: "In his first speech since it was announced that three Israeli hostages were killed in Gaza by Israeli forces, Israel’s Prime Minister Benjamin Netanyahu said the deaths “broke the whole nation’s heart.”",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "World",
      image:
        "https://s.yimg.com/ny/api/res/1.2/MB3ZDt43Ox2EXs3KTibYYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEzODA7aD05MjA7Y2Y9d2VicA--/https://media.zenfs.com/en/ukrayinska_pravda_articles_451/918f568b3fd2bfe74ad87558c3c7b84b",
      newsHead: "Russians launch Shahed UAVs from multiple directions",
      news: "Russians attacked Ukraine with Shahed drones on the night of Saturday, 16 December.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Politics",
      image:
        "https://s.yimg.com/ny/api/res/1.2/P3Vvbh9xHRVqwlAMX5Y1PA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE5MjA7aD0xMDgwO2NmPXdlYnA-/https://media.zenfs.com/en/cnn_articles_875/2284ffd688246184bd493f98b92649d4",
      newsHead:
        "McCarthy says he’s open to serving in potential new Trump administration after House retirement",
      news: "Former House Speaker Kevin McCarthy said he believes former President Donald Trump will receive the 2024 Republican presidential nomination and he’ll support the former president in seeking a second term – including as a potential member of the administration.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "World",
      image:
        "https://s.yimg.com/ny/api/res/1.2/8IzU6bvnb7ZPWtpWebbwzQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE4MDA7aD05MDA7Y2Y9d2VicA--/https://media.zenfs.com/en/the_new_voice_of_ukraine_articles_294/595d414102c4d768fedb3613eb5d4314",
      newsHead:
        "Three more Ukrainian kids abducted by Russia reunited with their families",
      news: "Three more Ukrainian children have been returned from the Russian-occupied parts of Ukraine and from Russia with the mediation of Qatar, Ukrainian presidential chief-of-staff Andrii Yermak reported on Telegram on Dec. 16.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Health",
      image:
        "https://s.yimg.com/ny/api/res/1.2/1v.ZTRUOx4T7cZiZqklsDA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/ap.org/ffdb9db7b8e701695529d4b3c664be5c",
      newsHead:
        "CDC warns of 'urgent need' to boost vaccine coverage as winter virus activity picks up",
      news: "Not enough Americans are being vaccinated against Covid, the flu and RSV to stem rising numbers of the respiratory illnesses, the Centers for Disease Control and Prevention said Thursday.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Politics",
      image:
        "https://s.yimg.com/ny/api/res/1.2/d9lOSBj1ufvjbGUO82YaAQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg7Y2Y9d2VicA--/https://media.zenfs.com/en/la_times_articles_853/4e320ed5fe0a892fbd3782021e93965a",
      newsHead:
        "California elections officials say Assemblymember Vince Fong can't run for Congress in Bakersfield",
      news: "California's chief elections officer said late Friday that Bakersfield Republican Vince Fong cannot appear on the ballot for a Central Valley congressional seat because he is already running for reelection to the state Assembly — a decision the state lawmaker vowed to challenge in court.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Health",
      image:
        "https://s.yimg.com/ny/api/res/1.2/gPP71mUivja2MTyWLwVyIw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE5NTI7aD0xMDk4O2NmPXdlYnA-/https://media.zenfs.com/en/bbc_us_articles_995/de16684e2c002a2a3a63a598f703264d",
      newsHead: "Why Covid is still flooring some people",
      news: "What is it like to catch Covid now? It is a question I have been pondering since a friend was surprised by how roughed up they were by it. Their third bout of Covid was significantly worse than the previous time they caught it.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Health",
      image:
        "https://s.yimg.com/ny/api/res/1.2/d9dE3LZmTyxEhJUWOSZ6Dg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAwO2NmPXdlYnA-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/da7d8b90-983a-11ee-bd7f-e3ac4660faac",
      newsHead:
        "Matthew Perry underwent ketamine therapy for depression. Here's how that differs from recreational use.",
      news: "Weeks after his Oct. 28 death, the autopsy for Matthew Perry revealed the Friends icon’s cause of death in his home in the Los Angeles neighborhood of Pacific Palisades. Perry died from the effects of ketamine, according to the autopsy report from the County of Los Angeles Department of Medical Examiner, with “contributing factors to his death including drowning, coronary artery disease and the effects of buprenorphine,” a medication used to treat opioid use disorder.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Science",
      image:
        "https://s.yimg.com/ny/api/res/1.2/8slNx0JwW0bQVSDULNuwEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MDE7Y2Y9d2VicA--/https://media.zenfs.com/en/the_conversation_us_articles_815/69aba7380048ef55b10821bcbe313476",
      newsHead:
        "When Greenland was green: Ancient soil from beneath a mile of ice offers warnings for the future",
      news: "About 400,000 years ago, large parts of Greenland were ice-free. Scrubby tundra basked in the Sun’s rays on the island’s northwest highlands. Evidence suggests that a forest of spruce trees, buzzing with insects, covered the southern part of Greenland. Global sea level was much higher then, between 20 and 40 feet above today’s levels. Around the world, land that today is home to hundreds of millions of people was under water.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Science",
      image:
        "https://s.yimg.com/ny/api/res/1.2/ilrM2ndnwoX3UlE.m_lrJw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE5MjA7aD0xMDgwO2NmPXdlYnA-/https://media.zenfs.com/en/cnn_articles_875/ba657369fea80ae5aac5a70a07f8be63",
      newsHead:
        "Rare rock structures could provide a glimpse into possible life on ancient Mars",
      news: "It’s impossible to know what Mars looked like billions of years ago, but one robotic explorer’s intrepid sleuthing is giving astronomers a peek into the past.The NASA Perseverance rover just marked 1,000 days on the red planet. Percy has completed its investigation of an ancient river delta that fed into a Martian surface feature called Jezero Crater.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Science",
      image:
        "https://s.yimg.com/ny/api/res/1.2/Oj7ubHnPyu4L7.ODmztlYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNTgwO2NmPXdlYnA-/https://media.zenfs.com/en/the_conversation_us_articles_815/0cce3be9a3a1bbe769d68620228ca588",
      newsHead:
        "How global warming shakes the Earth: Seismic data show ocean waves gaining strength as the planet warms",
      news: "As oceans waves rise and fall, they apply forces to the sea floor below and generate seismic waves. These seismic waves are so powerful and widespread that they show up as a steady thrum on seismographs, the same instruments used to monitor and study earthquakes.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Science",
      image:
        "https://s.yimg.com/ny/api/res/1.2/8slNx0JwW0bQVSDULNuwEg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MDE7Y2Y9d2VicA--/https://media.zenfs.com/en/the_conversation_us_articles_815/69aba7380048ef55b10821bcbe313476",
      newsHead:
        "When Greenland was green: Ancient soil from beneath a mile of ice offers warnings for the future",
      news: "About 400,000 years ago, large parts of Greenland were ice-free. Scrubby tundra basked in the Sun’s rays on the island’s northwest highlands. Evidence suggests that a forest of spruce trees, buzzing with insects, covered the southern part of Greenland. Global sea level was much higher then, between 20 and 40 feet above today’s levels. Around the world, land that today is home to hundreds of millions of people was under water.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
    {
      id: uuidv4(),
      category: "Science",
      image:
        "https://s.yimg.com/ny/api/res/1.2/ilrM2ndnwoX3UlE.m_lrJw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTE5MjA7aD0xMDgwO2NmPXdlYnA-/https://media.zenfs.com/en/cnn_articles_875/ba657369fea80ae5aac5a70a07f8be63",
      newsHead:
        "Rare rock structures could provide a glimpse into possible life on ancient Mars",
      news: "It’s impossible to know what Mars looked like billions of years ago, but one robotic explorer’s intrepid sleuthing is giving astronomers a peek into the past.The NASA Perseverance rover just marked 1,000 days on the red planet. Percy has completed its investigation of an ancient river delta that fed into a Martian surface feature called Jezero Crater.",
      seen: 30,
      like: 10,
      dislike: 5,
      date: new Date(),
    },
  ],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    incLike: (state, action: PayloadAction<like>) => {
      // console.log(action.payload);
      // let arr = [...current(state.news)];
      // arr = arr.map((element) => {
      //   if (element.id == action.payload.id) {
      //     element.like = action.payload.like;
      //     return element;
      //   } else {
      //     return element;
      //   }
      // });
      // state.news = arr;
    },
    addNews: (state, action: PayloadAction<obj>) => {
      state.news.push(action.payload);
    },
    deleteNews: (state, action: PayloadAction<string>) => {
      state.news = state.news.filter((elem) => elem.id != action.payload);
      // state.news.push(action.payload);
    },
    // search: (state, action: PayloadAction<string>) => {
    //   const arr: obj[] = state.news.find((element) =>
    //     element.newsHead.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    //   state.news = arr;
    //   // state.news.push(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { incLike, addNews, deleteNews } = newsSlice.actions;

export default newsSlice.reducer;
