
// PlayLC events. Add new events with event-builder.html, then paste them into this list.
// Dates are YYYY-MM-DD. Events disappear from "upcoming" the day after endDate.
// routeMap: leave "" for no map (the Route Map section hides itself).
//           To use one, upload the image to the repo root and put its filename, e.g. "route-nov-2026.png".

window.PLAYLC_EVENTS = [
  {
    id: "legocity-feb-2027",
    name: "PlayLC Heart of Lego City",
    tagline: "Streets open to people. Cars take the weekend off.",
    startDate: "2027-02-14",
    endDate: "2027-02-14",
    location: "Heart of Downtown lego City",
    description: "One day of car-free streets in the Heart of Lego City. Race,Walk, Run, Roll on Sunday from Union Station to Downtown Lego City.",
    routeMap: "",
    registerUrl: "",
    activities: [
      {
        date: "2027-02-14",
        title: "PlayLC Race, Walk, Run, Roll",
        description: "Walk, run, bike, skate or roll the route at your own pace. Free for everyone.",
        free: true,
        time: "6:00"
      }
    ]
  },
  {
    id: "showcase-may-2027",
    name: "PlayLC Heart of Lego City",
    tagline: "Streets open to people. Cars take the weekend off.",
    startDate: "2027-05-13",
    endDate: "2027-05-16",
    location: "Downtown lego City",
    description: "Three days of car-free streets in the Heart of Lego City. Race,Walk, Run, Roll in Downtown Lego City and watch the amazing parade every day at 12:00 PM",
    routeMap: "",
    registerUrl: "",
    activities: [
      {
        date: "2027-05-13",
        title: "PlayLC Race, Walk, Run, Roll Day 1 Parade",
        description: "The amazing Lego City County Grand Tour Parade sponsered by City Metro!",
        free: true,
        time: "12:00-1:00"
      },
      {
        date: "2027-05-14",
        title: "PlayLC Race, Walk, Run, Roll Day 2 Parade",
        description: "The amazing Lego City County Grand Tour Parade sponsered by City Metro!",
        free: true,
        time: "12:00-1:00"
      },
      {
        date: "2027-05-15",
        title: "PlayLC Race, Walk, Run, Roll Day 3 Parade",
        description: "The amazing Lego City County Grand Tour Parade sponsered by City Metro!",
        free: true,
        time: "12:00-1:00"
      },
      {
        date: "2027-05-16",
        title: "PlayLC Race, Walk, Run, Roll Day 4 Parade",
        description: "The amazing Lego City County Grand Tour Parade sponsered by City Metro!",
        free: true,
        time: "12:00-1:00"
      }
    ]
  }
];

// How many events show in "Next events" on the home page.
window.PLAYLC_NEXT_COUNT = 3;
