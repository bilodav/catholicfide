const stationImg = Array.from(
  { length: 14 },
  (_, i) =>
    new URL(`../stationsOfTheCrossImages/station${i + 1}.jpeg`, import.meta.url)
      .href,
);

/** Data List*/
const stationOfCrossDataApi = [
  {
    id: "1",
    title: "Jesus Is Condemned to Death.",
    scripture: "Mark 15:1-5, 15",
    reading:
      "And as soon as it was morning the chief priests, with the elders and scribes, and the whole council held a consultation; and they bound Jesus and led him away and delivered him to Pilate. And Pilate asked him, “Are you the King of the Jews?” And he answered him, “You have said so.” And the chief priests accused him of many things. And Pilate again asked him, “Have you no answer to make? See how many charges they bring against you.” But Jesus made no further answer, so that Pilate wondered. So Pilate, wishing to satisfy the crowd, released for them Barab’bas; and having scourged Jesus, he delivered him to be crucified.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "Jesus, after having been scourged and crowned with thorns, was unjustly condemned by Pilate to die on the Cross.",
    prayer:
      "Jesus, it is because of my sins that You are going to die. Through the merits of Your sorrowful journey, help me in my journey to Heaven. I love You, Jesus. I repent of my sins. Help me to never sin again and to love You always and to do Your will.",
    image: stationImg[0],
  },
  {
    id: "2",
    title: "Jesus Takes Up His Cross.",
    scripture: "John 19:6, 15-17",
    reading:
      "When the chief priests and the officers saw him, they cried out, “Crucify him, crucify him!” Pilate said to them, “Take him yourselves and crucify him, for I find no crime in him.” They cried out, “Away with him, away with him, crucify him!” Pilate said to them, “Shall I crucify you King?” The chief priests answered, “We have no king but Caesar.” Then he handed him over to them to be crucified. So they took Jesus, and he went out, bearing his own cross, to the place called the place of a skull, which is called in Hebrew Gol’gotha.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "Jesus, in making this journey with the Cross on His shoulders, thought of us, and offered for us, to His Father, the death that He was about to undergo.",
    prayer:
      "Jesus, I embrace all the suffering that you send to me. Through the merits of your pain in carrying Your Cross, help me to carry my cross with patience and resignation. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[1],
  },
  {
    id: "3",
    title: "Jesus Falls the First Time.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    scripture: "John 19:1-3",
    reading:
      "Then Pilate took Jesus and had him scourged. And the soldiers wove a crown out of thorns and placed it on his head, and clothed him in a purple cloak, and they came to him and said,”Hail, King of the Jews!” And they struck him repeatedly",
    meditation:
      "Jesus fell for the first time under His Cross. He had been scourged and had a crown of thorns on His head, and the soldiers hit Him. He was in so\r\n\r\nmuch pain He could barely walk, but He had to carry the heavy Cross.",
    prayer:
      "Jesus, the weight of my sins adds to your suffering and makes it infinitely worse. Through the merits of your first fall, deliver me from falling into mortal sin. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[2],
  },
  {
    id: "4",
    title: "Jesus Meets His Sorrowful Mother.",
    scripture: "John 19: 25-27",
    reading:
      "So the soldiers did this. But standing by the cross of Jesus were his mother, and his mother’s sister, Mary the wife of Clopas,and Mary Mag’dalene. When Jesus saw his mother, and the disciple whom he loved standing near, he said to his mother,“Woman, behold, you son!” Then he said to the disciple,“Behold, your mother!” And from that hour the disciple took her to his own home.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "Jesus met His Mother Mary along His journey. They loved each other so deeply.",
    prayer:
      "Jesus, through the sorrow and joy you had in meeting your Mother Mary, help me to be truly devoted to her. Mary, help me to remember in my heart the suffering your Son underwent for me. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[3],
  },
  {
    id: "5",
    title: "Simon Of Cyrene Helps Jesus Carry The Cross.",
    scripture: "Mark 15:21",
    reading:
      "And they compelled a passer-by, Simon of Cyre’ne, who was coming in from the country, the father of Alexander and Rufus, to carry his cross.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "When the Jews saw how weak Jesus was, they feared He might die on the way, before He was crucified, so they forced a man named Simon the Cyrenian to carry the Cross behind our Lord.",
    prayer:
      "Jesus, I accept the cross you give to me, and I accept how you want me to die. I offer all my sufferings and troubles to you. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[4],
  },
  {
    id: "6",
    title: "Veronica Wipes the Face of Jesus.",
    scripture: "Isaiah 53:2-3",
    reading:
      "He had no form or comeliness that we should look at him, and no beauty that we should desire him. He was despised and rejected by men; a man of sorrows, and acquainted with grief and as one from whom men hide their faces he was despised,and we esteemed him not.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "A woman named Veronica, seeing Jesus suffering so much, and sweat and blood dripping down His face, gave Him a towel to wipe His face. By a miracle, He left an image of His face on the towel.",
    prayer:
      "Jesus, your face was once clean and good to look upon, but blood and sweat disfigured it, and Veronica wiped Your face clean. My soul was once clean and beautiful when I was baptized, but sin disfigured it. Through your suffering, wipe my soul clean. I love you, Jesus. I repent of my sins. Help me to never sin again and to love You always and to do Your will.",
    image: stationImg[5],
  },
  {
    id: "7",
    title: "Jesus Falls a Second Time.",
    scripture: "Romans 8:31-39",
    reading:
      "If God is for us, who can be against us? God who did not spare his own Son but handed him over for us all, how will he not also give us everything else along with him? What will separate us from the love of Christ? Will anguish, or distress, or persecution, or famine, or nakedness, or peril, or the sword? No, in all these things we conquer overwhelmingly through him who has loved us. For I am convinced that neither death, nor life, nor angels, nor principalities, nor present things, nor future things, nor powers, nor height, nor depth, nor any other creature will be able to separate us from the love of God in Christ Jesus our Lord.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "Jesus fell the second time under the Cross. The fall renews all the pain in His body and makes His head throb.",
    prayer:
      "Jesus, so many times you have forgiven me, and so many times I have sinned again. Through the merits of your second fall, help me and preserve me in your grace until I die. Help me to call on you every time I am tempted. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[6],
  },
  {
    id: "8",
    title: "Jesus Meets the Women of Jerusalem.",
    scripture: "Luke 23:27-31",
    reading:
      "And there followed him a great multitude of the people, and of women who bewailed and lamented him. But Jesus turningto them said, “Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children. For behold, the days are coming when they will say, ‘Blessed are the barren, and the wombs that never bore, and the breasts that never gave suck!’ Then they will begin to say to the mountains, ‘Fall on us’; and to the hills, ‘Cover us.’ For if they do this when the wood is green, what will happen when it is dry?”",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "These women wept with compassion at seeing Jesus walking to His death. But Jesus said to them, “Weep not for me but for your children.”",
    prayer:
      "Jesus, I am sorry for all my sins, because of the pain and sadness they cause you, who loves me so much. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[7],
  },
  {
    id: "9",
    title: "Jesus Falls the Third Time.",
    scripture: "Psalm 38",
    reading:
      "I am overwhelmed by a burden beyond my strength. I am stooped and deeply bowed; all day I go about mourning. My heart shudders, my strength forsakes me; the very light of my eyes has failed. Friends and companions shun my pain; my neighbors stand far off. Those who seek my life lay snares for me; they seek my misfortune, they speak of ruin; they plot treachery all the day. I am very near to falling; my pain is with me always. Come quickly to help me, my Lord and my salvation.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "Jesus fell for the third time. He was so weak and the soldiers pushed Him to walk faster, but He could barely move.",
    prayer:
      "Jesus, by my weakness in temptation, you are going to Calvary. Give me strength to conquer temptation. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[8],
  },
  {
    id: "10",
    title: "Jesus Is Stripped of His Garments.",
    scripture: "John 19:23-24",
    reading:
      "When the soldiers had crucified Jesus they took his garments and made four parts, one for each soldier; also his tunic. But the tunic was without seam, woven from top to bottom; so they said to one another, “Let us not tear it, but cast lots for it to see whose it shall be.” This was to fulfill the scripture, “They parted my garments among them, and for my clothing they cast lots.”",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation: "The soldiers snatched Jesus' robe off Him.",
    prayer:
      "Jesus, help me to strip my soul of bad habits so I can give all my love to you, who are so worthy of all my love. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[9],
  },
  {
    id: "11",
    title: "Jesus Is Nailed to the Cross.",
    scripture: "Luke 23:33-34",
    reading:
      "And when they came to the place which is called The Skull, there they crucified him, and the criminals, one on the right and one on the left. And Jesus said, “Father, forgive them; for they know not what they do.” And they cast lots to divide his garments. ",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "Jesus was thrown down onto the Cross. He stretched out His arms and offered His life to the Father for our salvation. The soldiers nailed Him to the Cross and pushed the Cross to stand up.",
    prayer:
      "Jesus, keep my heart. Keep me always close to you. I love you, Jesus. I repent of my sins. Help me to never sin again and to love You always and to do Your will.",
    image: stationImg[10],
  },
  {
    id: "12",
    title: "Jesus Dies on the Cross.",
    scripture: "Luke 23:44-46",
    reading:
      "It was now about the sixth hour, and there was darkness over the whole land until the ninth hour, while the sun’s light failed; and the curtain of the temple was torn in two. Then Jesus, crying with a loud voice, said, “Father, into thy hands I commit my spirit!” And having said this he breathed his last.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "After suffering for three hours on the Cross, Jesus gave up His life to the Father and died.",
    prayer:
      "Jesus, through my sins, I deserve to be punished, but your death is my hope. Through the merits of your death, give me the grace that when I die, I will die as you want me to. I entrust my soul into your hands. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[11],
  },
  {
    id: "13",
    title: "Jesus Is Taken Down from the Cross.",
    scripture: "John 20:38-42",
    reading:
      "Now there was a virtuous and righteous man named Joseph who went to Pilate and asked for the body of Jesus. Pilate permitted it. So Joseph came and took his body. Nicodemus also came. They took the body of Jesus and bound it with burial cloths along with spices, according to the Jewish burial custom.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation:
      "Two of Jesus' disciples took Jesus down from the Cross and Mary His Mother held Him close to her heart.",
    prayer:
      "Mary, sorrowful Mother, pray to your Son for me. Jesus, you have died because you love me. Help me to love you always. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[12],
  },
  {
    id: "14",
    title: "Jesus Is Laid in the Tomb.",
    scripture: "Matthew 27:57-60",
    reading:
      "And Joseph took the body, and wrapped it in a clean linen shroud, and laid it in his own new tomb, which he had hewn in the rock; and he rolled a great stone to the door of the tomb, and departed.",
    v: "We adore you, Christ, and we praise you.",
    r: "Because by your holy Cross, you have redeemed the world.",
    meditation: "The two disciples and Mary laid Jesus in the tomb.",
    prayer:
      "Jesus, You rose on the third day. Through your Resurrection, make me rise glorious on the last day, to be always with you in Heaven, praising and loving you. I love you, Jesus. I repent of my sins. Help me to never sin again and to love you always and to do your will.",
    image: stationImg[13],
  },
];

export default stationOfCrossDataApi;
