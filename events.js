// PlayLC events. Add new events with event-builder.html, then paste them into this list.
// Dates are YYYY-MM-DD. Events disappear from "upcoming" the day after endDate.
// routeMap: leave "" for no map (the Route Map section hides itself).
//           To use one, upload the image to the repo root and put its filename, e.g. "route-nov-2026.png".
window.PLAYLC_EVENTS = [
  {
    id: "downtown-nov-2026",
    name: "PlayLC Downtown Lego City",
    tagline: "Streets open to people. Cars take the weekend off.",
    startDate: "2026-11-14",
    endDate: "2026-11-15",
    location: "Downtown Lego City",
    description: "Two days of car-free streets in Downtown Lego City. Race the 5K or 10K on Saturday, then join the free PlayLC Walk, Run, Roll on Sunday.",
    routeMap: "",
    registerUrl: "",
    activities: [
      { date: "2026-11-14", title: "PlayLC 5K & 10K", description: "Timed races through Downtown Lego City's open streets.", free: false, time: "" },
      { date: "2026-11-15", title: "PlayLC Walk, Run, Roll", description: "Walk, run, bike, skate or roll the route at your own pace. Free for everyone.", free: true, time: "" }
    ]
  }
];

// How many events show in "Next events" on the home page.
window.PLAYLC_NEXT_COUNT = 3;
