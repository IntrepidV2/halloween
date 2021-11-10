const express = require ("express")
const app = express()

app.get("/",(req,res)=> {
  res.send("hello hell!")
})

app.listen(3000,() => {
  console.log("project is ready")
})

let Discord = require("discord.js")
let client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS,Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES]
})

client.on("messageCreate", message => {
  if (message.content === "ping"){
    message.channel.send("pong")
  }
if (message.content === ".history"){
  let history = new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/906024161867087902/220px-Jack-o27-Lantern_2003-10-31.png")
  .setTitle("The History of Halloween")
  .setDescription("Halloween originated from Ireland. The pagan holiday Samhain, which the All Saints holy day replaced, was also known as the Day of the Dead. Many wiccans and modern pagans celebrate the Day of the Dead. It is the day that some believed the souls of dead people come back to Earth.This is a happy holiday (even though it celebrates death) because some of the souls will visit the homes of their family. Pope Gregory III originally designated Halloween on November 1 as a time to honor all saints. Soon, All Saints Day incorporated some of the traditions of Samhain.Many Lutheran churches celebrate a holiday on November 2 called the Reformation. This holiday celebrates the day that Martin Luther put The Ninety-Five Theses on a church door.After mass Irish and Scottish immigration in the 19th century, Halloween became a major holiday in America.")
  .setColor("ORANGE")
  .setFooter("https://simple.wikipedia.org/wiki/Halloween")
  message.channel.send({ embeds : [history]})
}
if(message.content === ".date") {
  let date = new Discord.MessageEmbed()
  .setTitle("When is halloween?")
  .setDescription("Halloween was on Sunday,31'st of October")
  .setColor("ORANGE")
  .setFooter("Wait for next year now")
  message.channel.send({ embeds :[date]})
}

if(message.content ===".movies"){
  let movies = new Discord.MessageEmbed()
  .setTitle("Spooky Movies")
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907156449245921310/photo-1603751901720-b0a1fe00c9e7.png")
  .setDescription("Jaws,The Orphanage, The Ring, Don't Look Now, Cabin in the Woods, Saw, Conjuring 1 and 2, It, The Descent, Insidious,The Exorcist,Train to Busan,28 Days Later")
  .setColor("ORANGE")
  .setFooter("write .movies2 for the next page")
  message.channel.send({embeds :[movies]})
}

if(message.content === ".movies2"){
  let movies2 = new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907156243305594880/photo-1485236715568-ddc5ee6ca227.png")
  .setTitle("Page 2 of Spooky Movies")
  .setDescription("28 Days Later, Rec, Night of the Living Dead, Poltergeist, Sixth Sense, The Evil Dead, The Amityville Horror, Black Christmas, Hereditary, Suspria")
  .setColor("ORANGE")
  .setFooter("write the movie's name to find the IMDB of the movie!(for example:- .jaws)")
  message.channel.send({embeds :[movies2]})
}

if(message.content === ".jaws"){
  let jaws =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907159044437991454/2Q.png")
  .setTitle("Jaws")
  .setDescription("When a killer shark unleashes chaos on beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.")
  .setColor("ORANGE")
  .setFooter("Won 3 Oscars")
  message.channel.send({embeds :[jaws]})
}

if(message.content === ".theorphanage"){
  let orphanage =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907160783748747314/MV5BYjJiMjE1ODUtOWEwOS00N2YyLWE4YmQtOWNmZTA2Y2I4OWVkXkEyXkFqcGdeQXVyMTMxODk2OTU.png")
  .setTitle("The Orphanage")
  .setDescription("A woman brings her family back to her childhood home, which used to be an orphanage for handicapped children. Before long, her son starts to communicate with an invisible new friend")
  .setColor("ORANGE")
  .setFooter("Many awards")
  message.channel.send({embeds :[orphanage]})
}
if(message.content === ".thering"){
  let ring =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907526574654517258/220px-Theringpostere.png")
  .setTitle("The Ring")
  .setDescription("A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.")
  .setColor("ORANGE")
  .setFooter("14 wins and 12 nominations")
  message.channel.send({embeds :[ring]})
}
if(message.content === ".dontlooknow"){
  let dontlook =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907527229905453076/2Q.png")
  .setTitle("Don't Look Now")
  .setDescription("A married couple grieving the recent death of their young daughter are in Venice when they encounter two elderly sisters, one of whom is psychic and brings a warning from beyond.")
  .setColor("ORANGE")
  .setFooter("1 win, 9 nominations")
  message.channel.send({embeds :[dontlook]})
}
if(message.content === ".cabininthewoods"){
  let cabininthewoods =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907528811304865842/Z.png")
  .setTitle("Cabin in the Woods")
  .setDescription("Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.")
  .setColor("ORANGE")
  .setFooter("20 wins and 34 nominations")
  message.channel.send({embeds :[cabininthewoods]})
}
if(message.content === ".saw"){
  let saw =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907529614564413450/Z.png")
  .setTitle("Saw")
  .setDescription("Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer.")
  .setColor("ORANGE")
  .setFooter("8 wins and 10 nominations")
  message.channel.send({embeds :[saw]})
}
if(message.content === ".conjuring"){
  let conjuring =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907530372236058674/Z.png")
  .setTitle("Conjuring")
  .setDescription("Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.")
  .setColor("ORANGE")
  .setFooter("15 wins and 22 nominations")
  message.channel.send({embeds :[conjuring]})
}
if(message.content === ".it"){
  let it =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907530909815808010/2Q.png")
  .setTitle("It")
  .setDescription("In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.")
  .setColor("ORANGE")
  .setFooter("9 wins and 48 nominations")
  message.channel.send({embeds :[it]})
}
if(message.content === ".thedescent"){
  let descent =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907531487681855518/Z.png")
  .setTitle("The Descent")
  .setDescription("A caving expedition goes horribly wrong, as the explorers become trapped and ultimately pursued by a strange breed of predators")
  .setColor("ORANGE")
  .setFooter("8 wins and 22 nominations")
  message.channel.send({embeds :[descent]})
}
if(message.content === ".insidious"){
  let insidious =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907532199769808926/2Q.png")
  .setTitle("Insidious")
  .setDescription("A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.")
  .setColor("ORANGE")
  .setFooter("8 wins and 15 nominations")
  message.channel.send({embeds :[insidious]})
}
if(message.content === ".theexorcist"){
  let exorcist =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907532848641245194/2Q.png")
  .setTitle("The Exorcist")
  .setDescription("When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.")
  .setColor("ORANGE")
  .setFooter("16 wins and 17 nominations")
  message.channel.send({embeds :[exorcist]})
}
if(message.content === ".traintobusan"){
  let busan =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907533444026884096/2Q.png")
  .setTitle("Train to Busan")
  .setDescription("While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.")
  .setColor("ORANGE")
  .setFooter("35 wins and 19 nominations")
  message.channel.send({embeds :[busan]})
}
if(message.content === ".28dayslater"){
  let days =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907160783748747314/MV5BYjJiMjE1ODUtOWEwOS00N2YyLWE4YmQtOWNmZTA2Y2I4OWVkXkEyXkFqcGdeQXVyMTMxODk2OTU.png")
  .setTitle("28 Days Later")
  .setDescription("Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.")
  .setColor("ORANGE")
  .setFooter("10 wins and 32 nominations")
  message.channel.send({embeds :[days]})
}
if(message.content === ".rec"){
  let rec =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907889902446850108/2Q.png")
  .setTitle("Rec")
  .setDescription("A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked inside with something terrifying.")
  .setColor("ORANGE")
  .setFooter("16 wins, 12 nominations")
  message.channel.send({embeds :[rec]})
}
if(message.content === ".nightofthelivingdead"){
  let livingdead =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907891064860446740/2Q.png")
  .setTitle("Night of the Living Dead")
  .setDescription("A ragtag group of Pennsylvanians barricade themselves in an old farmhouse to remain safe from a horde of flesh-eating ghouls that are ravaging the East Coast of the United States.")
  .setColor("ORANGE")
  .setFooter("6 wins")
  message.channel.send({embeds :[livingdead]})
}
if(message.content === ".poltergeist"){
  let poltergeist =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907891921991630848/9k.png")
  .setTitle("Poltergeist")
  .setDescription("A family's home is haunted by a host of demonic ghosts.")
  .setColor("ORANGE")
  .setFooter("4 wins and 7 nominations")
  message.channel.send({embeds :[poltergeist]})
}
if(message.content === ".sixthsense"){
  let sixth =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907892534888521759/unknown.png")
  .setTitle("The Sixth Sense")
  .setDescription("Dr. Michael Rhodes is a college professor with an interest in the paranormal. He and his assistant Nancy spend much of their time investigating mysteries involving extra-sensory perception, spirits, possessions, and other such experiences.")
  .setColor("ORANGE")
  .setFooter("A Tv Show")
  message.channel.send({embeds :[sixth]})
}
if(message.content === ".theevildead"){
  let evildead =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907893495170215966/9k.png")
  .setTitle("The Evil Dead")
  .setDescription("Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.")
  .setColor("ORANGE")
  .setFooter("3 wins, 1 nomination")
  message.channel.send({embeds :[evildead]})
}
if(message.content === ".amityvillehorror"){
  let amityville =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907894167710076958/2Q.png")
  .setTitle("The Amityville Horror")
  .setDescription("Newlyweds and their three children move into a large house where a mass murder was committed. They start to experience strange, inexplicable manifestations which have strong effects on everyone living in or visiting the house.")
  .setColor("ORANGE")
  .setFooter("8 nominations")
  message.channel.send({embeds :[amityville]})
}
if(message.content === ".blackchristmas"){
  let black =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907894750517010432/9k.png")
  .setTitle("Black Christmas")
  .setDescription("During their Christmas break, a group of sorority girls are stalked by a stranger.")
  .setColor("ORANGE")
  .setFooter("3 wins and 2 nominations")
  message.channel.send({embeds :[black]})
}
if(message.content === ".hereditary"){
  let hereditary =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907895314650906644/9k.png")
  .setTitle("Hereditary")
  .setDescription("A grieving family is haunted by tragic and disturbing occurrences")
  .setColor("ORANGE")
  .setFooter("46 wins and 109 nominations")
  message.channel.send({embeds :[hereditary]})
}
if(message.content === ".suspria"){
  let sus =  new Discord.MessageEmbed()
  .setThumbnail("https://cdn.discordapp.com/attachments/898075526676221962/907896258847445022/9k.png")
  .setTitle("Suspria")
  .setDescription("A darkness swirls at the center of a world-renowned dance company, one that will engulf the artistic director, an ambitious young dancer, and a grieving psychotherapist. Some will succumb to the nightmare. Others will finally wake up.")
  .setColor("ORANGE")
  .setFooter("24 wins and 74 nominations")
  message.channel.send({embeds :[sus]})
}

if(message.content === ".help"){
  let help = new Discord.MessageEmbed()
  .setTitle("Halloween Bot Commands")
  .addFields(
		{ name: 'History', value: 'Tells about the history of halloween' },
		{ name: 'Date', value: 'The date of halloween'},
		{ name: '.movies and .movies2', value: 'Spooky movies list'},
    { name: '.imdb(movie name)', value: 'IMDb description of the movies listed in .movies and .movies2'},
	)
  .setColor("ORANGE")
  message.channel.send({embeds :[help]})
}
  
})

client.login(process.env.token)