// Joyful Images Import
import theAnnunciation from "../joyfulMysteriesImages/theAnnunciation.webp";
import theBirthOfJesus from "../joyfulMysteriesImages/theBirthOfJesus.webp";
import theFindingOfJesus from "../joyfulMysteriesImages/TheFindingOfJesus.webp";
import thePresentation from "../joyfulMysteriesImages/thePresentation.webp";
import theVisitation from "../joyfulMysteriesImages/theVisitation.webp";

// Sorrowful Images Import
import theAgony from "../sorrowfulMysteriesImages/theAgonyInTheGarden.webp";
import theScourging from "../sorrowfulMysteriesImages/theScourgingAtThePillar.webp";
import theCrowning from "../sorrowfulMysteriesImages/theCrowningWithThorns.webp";
import carryingTheCross from "../sorrowfulMysteriesImages/jesusCarriesHisCross.webp";
import theCrucifixion from "../sorrowfulMysteriesImages/theCrucifixion.webp";

// Glorious Images Import
import theDescent from "../gloriousMysteriesImages/descentOfTheHolySpirit.webp";
import theQueen from "../gloriousMysteriesImages/queenOfHeavenAndEarth.webp";
import theAscension from "../gloriousMysteriesImages/theAscension.webp";
import theAssumption from "../gloriousMysteriesImages/theAssumption.webp";
import theResurrection from "../gloriousMysteriesImages/theResurrection.webp";

// Luminous Images Import
import theBaptism from "../luminousMysteriesImages/baptismOfJesus.webp";
import theProclamation from "../luminousMysteriesImages/proclamationOfTheKingdom.webp";
import theEucharist from "../luminousMysteriesImages/theInstitutionOfTheEucharist.webp";
import theTransfiguration from "../luminousMysteriesImages/theTransfiguration.webp";
import theWedding from "../luminousMysteriesImages/weddingAtCana.webp";

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
          verse: `26 In the sixth month the angel Gabriel was sent from God to a city of Galilee named Nazareth, 27 to a virgin betrothed to a man whose name was Joseph, of the house of David. And the virgin's name was Mary. 28 And he came to her and said, &ldquo;Greetings, O favored one, the Lord is with you!&rdquo; 29 But she was greatly troubled at the saying, and tried to discern what sort of greeting this might be. 30 And the angel said to her, &ldquo;Do not be afraid, Mary, for you have found favor with God. 31 And behold, you will conceive in your womb and bear a son, and you shall call his name Jesus. 32 He will be great and will be called the Son of the Most High. And the Lord God will give to him the throne of his father David, 33 and he will reign over the house of Jacob forever, and of his kingdom there will be no end.&rdquo;<br>
          <br>
          34 And Mary said to the angel, &ldquo;How will this be, since I am a virgin?&rdquo;<br>
          <br>
          35 And the angel answered her, &ldquo;The Holy Spirit will come upon you, and the power of the Most High will overshadow you; therefore the child to be born will be called holy&mdash;the Son of God. 36 And behold, your relative Elizabeth in her old age has also conceived a son, and this is the sixth month with her who was called barren. 37 For nothing will be impossible with God.&rdquo; 38 And Mary said, &ldquo;Behold, I am the servant of the Lord; let it be to me according to your word.&rdquo; And the angel departed from her.`,
          image: theAnnunciation,
          fruit: "Fruit of the mystery: Humility",
        },
        {
          title: "The Visitation",
          scripture: "Luke 1:39-45",
          image: theVisitation,
          verse: `39 In those days Mary arose and went with haste into the hill country, to a town in Judah, 40 and she entered the house of Zechariah and greeted Elizabeth. 41 And when Elizabeth heard the greeting of Mary, the baby leaped in her womb. And Elizabeth was filled with the Holy Spirit, 42 and she exclaimed with a loud cry, &ldquo;Blessed are you among women, and blessed is the fruit of your womb! 43 And why is this granted to me that the mother of my Lord should come to me? 44 For behold, when the sound of your greeting came to my ears, the baby in my womb leaped for joy. 45 And blessed is she who believed that there would be a fulfillment of what was spoken to her from the Lord.&rdquo;`,
          fruit: "Fruit of the mystery: Love of neighbor",
        },
        {
          title: "The Nativity",
          scripture: "Luke 2:1-20",
          verse: `1 In those days a decree went out from Caesar Augustus that all the world should be registered. 2 This was the first registration when Quirinius was governor of Syria. 3 And all went to be registered, each to his own town. 4 And Joseph also went up from Galilee, from the town of Nazareth, to Judea, to the city of David, which is called Bethlehem, because he was of the house and lineage of David, 5 to be registered with Mary, his betrothed, who was with child. 6 And while they were there, the time came for her to give birth. 7 And she gave birth to her firstborn son and wrapped him in swaddling cloths and laid him in a manger, because there was no place for them in the inn.<br>
          <br>
          The Shepherds and the Angels<br>
          8 And in the same region there were shepherds out in the field, keeping watch over their flock by night. 9 And an angel of the Lord appeared to them, and the glory of the Lord shone around them, and they were filled with great fear. 10 And the angel said to them, &ldquo;Fear not, for behold, I bring you good news of great joy that will be for all the people. 11 For unto you is born this day in the city of David a Savior, who is Christ the Lord. 12 And this will be a sign for you: you will find a baby wrapped in swaddling cloths and lying in a manger.&rdquo; 13 And suddenly there was with the angel a multitude of the heavenly host praising God and saying,<br>
          <br>
          14 &ldquo;Glory to God in the highest,<br>
          and on earth peace among those with whom he is pleased!&rdquo;<br>
          <br>
          15 When the angels went away from them into heaven, the shepherds said to one another, &ldquo;Let us go over to Bethlehem and see this thing that has happened, which the Lord has made known to us.&rdquo; 16 And they went with haste and found Mary and Joseph, and the baby lying in a manger. 17 And when they saw it, they made known the saying that had been told them concerning this child. 18 And all who heard it wondered at what the shepherds told them. 19 But Mary treasured up all these things, pondering them in her heart. 20 And the shepherds returned, glorifying and praising God for all they had heard and seen, as it had been told them.`,
          image: theBirthOfJesus,
          fruit:
            "Fruit of the mystery: Poverty of spirit, Detachment from things of the world",
        },
        {
          title: "The Presentation",
          scripture: "Luke 2:22-35",
          verse: `22 And when the time came for their purification according to the Law of Moses, they brought him up to Jerusalem to present him to the Lord 23 (as it is written in the Law of the Lord, &ldquo;Every male who first opens the womb shall be called holy to the Lord&rdquo;) 24 and to offer a sacrifice according to what is said in the Law of the Lord, &ldquo;a pair of turtledoves, or two young pigeons.&rdquo; 25 Now there was a man in Jerusalem, whose name was Simeon, and this man was righteous and devout, waiting for the consolation of Israel, and the Holy Spirit was upon him. 26 And it had been revealed to him by the Holy Spirit that he would not see death before he had seen the Lord's Christ. 27 And he came in the Spirit into the temple, and when the parents brought in the child Jesus, to do for him according to the custom of the Law, 28 he took him up in his arms and blessed God and said,<br>
          <br>
          29 &ldquo;Lord, now you are letting your servant[a] depart in peace,<br>
          according to your word;<br>
          30 for my eyes have seen your salvation<br>
          31 that you have prepared in the presence of all peoples,<br>
          32 a light for revelation to the Gentiles,<br>
          and for glory to your people Israel.&rdquo;<br>
          <br>
          33 And his father and his mother marveled at what was said about him. 34 And Simeon blessed them and said to Mary his mother, &ldquo;Behold, this child is appointed for the fall and rising of many in Israel, and for a sign that is opposed 35 (and a sword will pierce through your own soul also), so that thoughts from many hearts may be revealed.&rdquo;`,
          image: thePresentation,
          fruit: "Fruit of the mystery: Obedience",
        },
        {
          title: "The Finding in the Temple",
          scripture: "Luke 2:41-52",
          verse: `41 Now his parents went to Jerusalem every year at the Feast of the Passover. 42 And when he was twelve years old, they went up according to custom. 43 And when the feast was ended, as they were returning, the boy Jesus stayed behind in Jerusalem. His parents did not know it, 44 but supposing him to be in the group they went a day's journey, but then they began to search for him among their relatives and acquaintances, 45 and when they did not find him, they returned to Jerusalem, searching for him. 46 After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions. 47 And all who heard him were amazed at his understanding and his answers. 48 And when his parents saw him, they were astonished. And his mother said to him, &ldquo;Son, why have you treated us so? Behold, your father and I have been searching for you in great distress.&rdquo; 49 And he said to them, &ldquo;Why were you looking for me? Did you not know that I must be in my Father's house?&rdquo; 50 And they did not understand the saying that he spoke to them. 51 And he went down with them and came to Nazareth and was submissive to them. And his mother treasured up all these things in her heart.<br>
          <br>
          52 And Jesus increased in wisdom and in stature and in favor with God and man.`,
          image: theFindingOfJesus,
          fruit: "Fruit of the mystery: Piety",
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
          fruit:
            "Fruit of the mystery: Contrition, Conformity to the will of God.",
        },
        {
          title: "The Scourging at the Pillar",
          scripture: "John 19:1",
          image: theScourging,
          fruit: "Fruit of the mystery: Purity, Mortification",
        },
        {
          title: "The Crowning with Thorns",
          scripture: "Matthew 27:27-31",
          image: theCrowning,
          fruit: "Fruit of the mystery: Moral courage",
        },
        {
          title: "The Carrying of the Cross",
          scripture: "John 19:16-17",
          image: carryingTheCross,
          fruit: "Fruit of the mystery: Patience",
        },
        {
          title: "The Crucifixion",
          scripture: "Luke 23:33-46",
          image: theCrucifixion,
          fruit: "Fruit of the mystery: Salvation, Self-Denial",
        },
      ],
    },
    glorious: {
      name: "Glorious Mysteries",
      mysteries: [
        {
          title: "The Resurrection",
          scripture: "Matthew 28:1-10",
          image: theResurrection,
          fruit: "Fruit of the mystery: Faith",
        },
        {
          title: "The Ascension",
          scripture: "Acts 1:6-11",
          image: theAscension,
          fruit: "Fruit of the mystery: Hope, Desire for Heaven",
        },
        {
          title: "The Descent of the Holy Spirit",
          scripture: "Acts 2:1-4",
          image: theDescent,
          fruit: "Fruit of the mystery: Wisdom, Love of God",
        },
        {
          title: "The Assumption",
          scripture: "Revelation 12:1",
          image: theAssumption,
          fruit: "Fruit of the mystery: Devotion to Mary",
        },
        {
          title: "The Coronation of Mary",
          scripture: "Revelation 12:1",
          image: theQueen,
          fruit: "Fruit of the mystery: Eternal happiness",
        },
      ],
    },
    luminous: {
      name: "Luminous Mysteries",
      mysteries: [
        {
          title: "The Baptism in the Jordan",
          scripture: "Matthew 3:13-17",
          image: theBaptism,
          fruit: "Fruit of the mystery: Openness to the Holy Spirit",
        },
        {
          title: "The Wedding at Cana",
          scripture: "John 2:1-11",
          image: theWedding,
          fruit: "Fruit of the mystery: To Jesus Through Mary",
        },
        {
          title: "The Proclamation of the Kingdom",
          scripture: "Mark 1:14-15",
          image: theProclamation,
          fruit: "Fruit of the mystery: Repentance, Trust in God",
        },
        {
          title: "The Transfiguration",
          scripture: "Luke 9:28-36",
          image: theTransfiguration,
          fruit: "Fruit of the mystery: Desire for holiness",
        },
        {
          title: "The Institution of the Eucharist",
          scripture: "Luke 22:14-20",
          image: theEucharist,
          fruit:
            "Fruit of the mystery: Eucharistic Adoration, Active participation at mass",
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
