import theAnnunciation from "../joyfulMysteriesImages/theAnnunciation.webp";
import theBirthOfJesus from "../joyfulMysteriesImages/theBirthOfJesus.webp";
import theFindingOfJesus from "../joyfulMysteriesImages/TheFindingOfJesus.webp";
import thePresentation from "../joyfulMysteriesImages/thePresentation.webp";
import theVisitation from "../joyfulMysteriesImages/theVisitation.webp";
import theAgony from "../sorrowfulMysteriesImages/theAgonyInTheGarden.webp";
import theScourging from "../sorrowfulMysteriesImages/theScourgingAtThePillar.webp";
import theCrowning from "../sorrowfulMysteriesImages/theCrowningWithThorns.webp";
import carryingTheCross from "../sorrowfulMysteriesImages/jesusCarriesHisCross.webp";
import theCrucifixion from "../sorrowfulMysteriesImages/theCrucifixion.webp";

let mysteries = {
  metadata: {
    description: "Season-aware Catholic Rosary schedule",
    source: "Traditional cycle with seasonal Sunday overrides",
    note: "Luminous Mysteries introduced by Pope John Paul II",
  },
  mysterySets: {
    joyful: {
      name: "Joyful Mysteries",
      mysteries: [
        {
          title: "The Annunciation",
          scripture: "Luke 1:26-38",
          image: theAnnunciation,
        },
        {
          title: "The Visitation",
          scripture: "Luke 1:39-45",
          image: theVisitation,
        },
        {
          title: "The Nativity",
          scripture: "Luke 2:1-20",
          image: theBirthOfJesus,
        },
        {
          title: "The Presentation",
          scripture: "Luke 2:22-35",
          image: thePresentation,
        },
        {
          title: "The Finding in the Temple",
          scripture: "Luke 2:41-52",
          image: theFindingOfJesus,
        },
      ],
    },
    sorrowful: {
      name: "Sorrowful Mysteries",
      mysteries: [
        {
          title: "The Agony in the Garden",
          scripture: "Luke 22:39-46",
          image: theAgony,
        },
        {
          title: "The Scourging at the Pillar",
          scripture: "John 19:1",
          image: theScourging,
        },
        {
          title: "The Crowning with Thorns",
          scripture: "Matthew 27:27-31",
          image: theCrowning,
        },
        {
          title: "The Carrying of the Cross",
          scripture: "John 19:16-17",
          image: carryingTheCross,
        },
        {
          title: "The Crucifixion",
          scripture: "Luke 23:33-46",
          image: theCrucifixion,
        },
      ],
    },
    glorious: {
      name: "Glorious Mysteries",
      mysteries: [
        { title: "The Resurrection", scripture: "Matthew 28:1-10" },
        { title: "The Ascension", scripture: "Acts 1:6-11" },
        { title: "The Descent of the Holy Spirit", scripture: "Acts 2:1-4" },
        { title: "The Assumption", scripture: "Revelation 12:1" },
        { title: "The Coronation of Mary", scripture: "Revelation 12:1" },
      ],
    },
    luminous: {
      name: "Luminous Mysteries",
      mysteries: [
        { title: "The Baptism in the Jordan", scripture: "Matthew 3:13-17" },
        { title: "The Wedding at Cana", scripture: "John 2:1-11" },
        { title: "The Proclamation of the Kingdom", scripture: "Mark 1:14-15" },
        { title: "The Transfiguration", scripture: "Luke 9:28-36" },
        {
          title: "The Institution of the Eucharist",
          scripture: "Luke 22:14-20",
        },
      ],
    },
  },
  weeklySchedule: {
    default: {
      monday: "joyful",
      tuesday: "sorrowful",
      wednesday: "glorious",
      thursday: "luminous",
      friday: "sorrowful",
      saturday: "joyful",
      sunday: "glorious",
    },
  },
  seasonOverrides: {
    advent: {
      sunday: "joyful",
    },
    lent: {
      sunday: "sorrowful",
    },
    easter: {
      sunday: "glorious",
    },
    ordinary_time: {
      sunday: "glorious",
    },
  },
};

export default mysteries;
