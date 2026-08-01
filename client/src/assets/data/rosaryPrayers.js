const rosary = Array.from(
  { length: 61 },
  (_, i) =>
    new URL(`../rosaryBeadsImages/rosary${i + 1}.png`, import.meta.url).href,
);

const ourFatherPrayer =
  "Our Father, who art in heaven,hallowed be thy name; thy kingdom come; thy will be done;on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespassesas we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil, Amen.";

const hailMaryPrayer =
  "Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death, Amen.";

const rosaryPrayers = [
  {
    title: "Sign, of the Cross and Apostle's Creed",
    prayer:
      "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.",
    bead: rosary[0],
  },
  {
    title: "Our Father",
    prayer: ourFatherPrayer,
    bead: rosary[1],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[2],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[3],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[4],
  },
  {
    title: "Glory Be",
    prayer:
      "Glory be to the Father, and to the Son, and to the Holy Spirit as it was in the beginning is now and ever shall be, world without end, Amen.",
    bead: rosary[5],
  },
  {
    title: "Fatima Prayer",
    prayer:
      "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those in most need of Thy mercy, Amen",
    bead: rosary[5],
  },
  {
    title: "Announce the first mystery",
    prayer: "",
    bead: rosary[5],
  },
  {
    title: "Our Father",
    prayer: ourFatherPrayer,
    bead: rosary[5],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[6],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[7],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[8],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[9],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[10],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[11],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[12],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[13],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[14],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[15],
  },
  {
    title: "Glory Be",
    prayer:
      "Glory be to the Father, and to the Son, and to the Holy Spirit as it was in the beginning is now and ever shall be, world without end, Amen.",
    bead: rosary[16],
  },
  {
    title: "Fatima Prayer",
    prayer:
      "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those in most need of Thy mercy, Amen",
    bead: rosary[16],
  },
  {
    title: "Announce the second  mystery",
    prayer: "",
    bead: rosary[16],
  },
  {
    title: "Our Father",
    prayer: ourFatherPrayer,
    bead: rosary[16],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[17],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[18],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[19],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[20],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[21],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[22],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[23],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[24],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[25],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[26],
  },
  {
    title: "Glory Be",
    prayer:
      "Glory be to the Father, and to the Son, and to the Holy Spirit as it was in the beginning is now and ever shall be, world without end, Amen.",
    bead: rosary[27],
  },
  {
    title: "Fatima Prayer",
    prayer:
      "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those in most need of Thy mercy, Amen",
    bead: rosary[27],
  },
  {
    title: "Announce the third  mystery",
    prayer: "",
    bead: rosary[27],
  },
  {
    title: "Our Father",
    prayer: ourFatherPrayer,
    bead: rosary[27],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[28],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[29],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[30],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[31],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[32],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[33],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[34],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[35],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[36],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[37],
  },
  {
    title: "Glory Be",
    prayer:
      "Glory be to the Father, and to the Son, and to the Holy Spirit as it was in the beginning is now and ever shall be, world without end, Amen.",
    bead: rosary[38],
  },
  {
    title: "Fatima Prayer",
    prayer:
      "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those in most need of Thy mercy, Amen",
    bead: rosary[38],
  },
  {
    title: "Announce the fouth  mystery",
    prayer: "",
    bead: rosary[38],
  },
  {
    title: "Our Father",
    prayer: ourFatherPrayer,
    bead: rosary[38],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[39],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[40],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[41],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[42],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[43],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[44],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[45],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[46],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[47],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[48],
  },
  {
    title: "Glory Be",
    prayer:
      "Glory be to the Father, and to the Son, and to the Holy Spirit as it was in the beginning is now and ever shall be, world without end, Amen.",
    bead: rosary[49],
  },
  {
    title: "Fatima Prayer",
    prayer:
      "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those in most need of Thy mercy, Amen",
    bead: rosary[49],
  },
  {
    title: "Announce the fifth mystery",
    prayer: "",
    bead: rosary[49],
  },
  {
    title: "Our Father",
    prayer: ourFatherPrayer,
    bead: rosary[49],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[50],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[51],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[52],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[53],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[54],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[55],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[56],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[57],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[58],
  },
  {
    title: "Hail Mary",
    prayer: hailMaryPrayer,
    bead: rosary[59],
  },
  {
    title: "Glory Be",
    prayer:
      "Glory be to the Father, and to the Son, and to the Holy Spirit as it was in the beginning is now and ever shall be, world without end, Amen.",
    bead: rosary[60],
  },
  {
    title: "Fatima Prayer",
    prayer:
      "O my Jesus, forgive us our sins, save us from the fires of hell; lead all souls to Heaven, especially those in most need of Thy mercy, Amen",
    bead: rosary[60],
  },
  {
    title: "Salve Regina",
    prayer:
      "Hail, holy Queen, mother of mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile show us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O Holy Mother of God. That we may be made worthy of the promises of Christ , Amen ",
    bead: rosary[60],
  },
  {
    title: "Prayer after the rosary",
    prayer:
      "O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.",
    bead: rosary[60],
  },
  {
    title: "Fatima Prayer - (Pardon Prayer)",
    prayer:
      "My God, I believe, I adore, I hope and I love Thee! I ask pardon for those who do not believe, do not adore, do not hope and do not love Thee. Amen",
    bead: rosary[60],
  },
  {
    title: "Intercession Prayer",
    prayer:
      "Grant, we beseech Thee, O Lord God, that we, Your servants, may enjoy perpetual health of mind and body; and by the intercession of the Blessed Mary, ever Virgin, may be delivered from present sorrow, and obtain eternal joy. Through Christ Our Lord. Amen.",
    bead: rosary[60],
  },
  {
    title: "Litany of Loreto",
    prayer:
      "Lord have mercy.<br/>Christ have mercy.<br/>Lord have mercy.<br/>Christ hear us.<br/>Christ graciously hear us.<br/>God, the Father of heaven, have mercy on us.God the Son, Redeemer of the world,<br/> God the Holy Spirit,<br/> Holy Trinity, one God,<br/>Holy Mary, pray for us.<br/>Holy Mother of God, pray for us.<br/>Holy Virgin of virgins, pray for us.<br/> Mother of Christ, pray for us.<br/> Mother of the Church, pray for us.<br/> Mother of Mercy, pray for us.<br/>Mother of divine grace, pray for us.<br/>Mother of Hope, pray for us.<br/>Mother most pure, pray for us.<br/>Mother most chaste, pray for us.<br/>Mother inviolate, pray for us.<br/>Mother undefiled, pray for us.<br/>Mother most amiable, pray for us.<br/>Mother most admirable, pray for us.<br/>Mother of good counsel, pray for us.<br/>Mother of our Creator, pray for us.<br/>Mother of our Saviour, pray for us.<br/>Virgin most prudent, pray for us.<br/>Virgin most venerable, pray for us.<br/>Virgin most renowned, pray for us.<br/>Virgin most powerful, pray for us.<br/>Virgin most merciful, pray for us.<br/>Virgin most faithful, pray for us.<br/>Mirror of justice, pray for us.<br/>Seat of wisdom, pray for us.<br/>Cause of our joy, pray for us.<br/>Spiritual vessel, pray for us.<br/>Vessel of honour, pray for us.<br/>Singular vessel of devotion, pray for us.<br/>Mystical rose, pray for us.<br/>Tower of David, pray for us.<br/>Tower of ivory, pray for us.<br/>House of gold, pray for us.<br/>Ark of the covenant, pray for us.<br/> Gate of heaven, pray for us.<br/>Morning star, pray for us.<br/>Health of the sick, pray for us.<br/> Refuge of sinners, pray for us.<br/>Solace of Migrants, pray for us.<br/>Comfort of the afflicted, pray for us.<br/> Help of Christians, pray for us.<br/>Queen of Angels, pray for us.<br/>Queen of Patriarchs, pray for us.<br/>Queen of Prophets, pray for us.<br/>Queen of Apostles, pray for us.<br/>Queen of Martyrs, pray for us.<br/>Queen of Confessors, pray for us.<br/>Queen of Virgins, pray for us.<br/>Queen of all Saints, pray for us.<br/>Queen conceived without original sin, pray for us.<br/> Queen assumed into heaven, pray for us.<br/>Queen of the most holy Rosary, pray for us.<br/>Queen of families, pray for us.<br/>Queen of peace, pray for us.<br/>Lamb of God, who takes away the sins of the world,<br/>spare us, O Lord.<br/>Lamb of God, who takes away the sins of the world,<br/>graciously hear us, O Lord.<br/>Lamb of God, who takes away the sins of the world,<br/>have mercy on us.<br/>Pray for us, O holy Mother of God. <br/>That we may be made worthy of the promises of Christ.<br/>Let us pray. <br/>Grant, we beseech thee, <br/>O Lord God, <br/>that we, your servants,<br/>may enjoy perpetual health of mind and body; <br/>and by the glorious intercession of the Blessed Mary, ever Virgin, <br/>may be delivered from present sorrow, <br/>and obtain eternal joy. <br/>Through Christ our Lord. <br/>Amen.<br/>",
    bead: rosary[60],
  },
  {
    title: "Memorare of St. Bernard",
    prayer:
      "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thine intercession was left unaided.Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen.",
    bead: rosary[60],
  },
  {
    title: "For the intentions of the Holy Father",
    prayer:
      "Our Father, who art in heaven,hallowed be thy name; thy kingdom come; thy will be done;on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespassesas we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil, Amen.<br><br>Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death, Amen.<br><br>Glory be to the Father, and to the Son, and to the Holy Spirit as it was in the beginning is now and ever shall be, world without end, Amen.",
    bead: rosary[60],
  },
  {
    title: "Done",
    prayer: "Fin",
    bead: rosary[60],
  },
];

export default rosaryPrayers;
