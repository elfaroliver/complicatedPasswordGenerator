const jedis = [
  "LukeSkywalker",
  "ObiWanKenobi",
  "Yoda",
  "AnakinSkywalker",
  "Rey",
  "QuiGonJinn",
  "MaceWindu"
];

const siths = [
  "DarthVader",
  "EmperorPalpatine",
  "DarthMaul",
  "CountDooku",
  "KyloRen",
  "DarthSidious",
  "DarthPlagueis"
];

const bountyHunters = [
  "BobaFett",
  "JangoFett",
  "CadBane",
  "Bossk",
  "Dengar",
  "AurraSing",
  "ZamWesell"
];

const bigSupportingCharacters = [
  "HanSolo",
  "PrincessLeia",
  "Chewbacca",
  "LandoCalrissian",
  "C3PO",
  "R2D2",
  "PadméAmidala"
];

const allStarWarsCharacters = [
  ...jedis,
  ...siths,
  ...bountyHunters,
  ...bigSupportingCharacters
];

export { jedis, siths, bountyHunters, bigSupportingCharacters, allStarWarsCharacters };