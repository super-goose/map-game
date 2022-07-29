export type Location = {
  latitude: number,
  longitude: number,
};

export type POI = {
  name: string
  image: string
  location: Location
  state: string
  type: 'castle'
}

export const pointsOfInterest: Array<POI> = [
  {
    // image: 'burg-hohenzollern.png',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Burg_Hohenzollern_ak.jpg/400px-Burg_Hohenzollern_ak.jpg',
    name: 'Hohenzollern Castle',
    state: 'Baden-Württemberg',
    type: 'castle',
    location: {
      latitude: 48.323194,
      longitude: 8.967722,
    }
  },
  {
    // image: 'neuschwanstein.png',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Neuschwanstein_Castle_LOC_print.jpg/400px-Neuschwanstein_Castle_LOC_print.jpg',
    name: 'Neuschwanstein Castle',
    state: 'Bavaria',
    type: 'castle',
    location: {
      latitude: 47.5575,
      longitude: 10.749444,
    }
  },
  {
    // image: 'schloss-braunfels.png',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Schloss_Braunfels_2.jpg/400px-Schloss_Braunfels_2.jpg',
    name: 'Braunfels Castle',
    state: 'Hesse',
    type: 'castle',
    location: {
      latitude: 50.514111,
      longitude: 8.387389,
    }
  },
  {
    // image: 'wartburg.png',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wartburg2004.JPG/400px-Wartburg2004.JPG',
    name: 'Wartburg',
    state: 'Thuringia',
    type: 'castle',
    location: {
      latitude: 50.966111,
      longitude: 10.306389,
    }
  },
  {
    // image: 'wernigerode.png',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/WernigerodeCastleWinter.jpg/400px-WernigerodeCastleWinter.jpg',
    name: 'Wernigerode Castle',
    state: 'Saxony-Anhalt',
    type: 'castle',
    location: {
      latitude: 51.830278,
      longitude: 10.795,
    }
  },
];