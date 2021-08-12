import units from "../data/units";
import items from "../data/items";

const compositions = [
  {
    id: 1001,
    teamName: "Coven Assasins",
    unitArray: [
      units.lissandra,
      { ...units.leblanc, carry: true },
      units.morgana,
      units.nocturne,
      units.diana,
      units.ivern,
      units.viego,
      units.volibear
    ],
    itemArray: [items.guardianangel, items.infinityedge, items.bluebuff]
  },
  {
    id: 1002,
    teamName: "Hellion Revenants",
    unitArray: [
      units.kled,
      units.poppy,
      { ...units.kennen, carry: true },
      units.lulu,
      units.ivern,
      units.heimerdinger,
      { ...units.teemo, carry: true },
      units.volibear
    ],
    itemArray: [
      items.frozenheart,
      items.guardianangel,
      items.morrelonomicon,
      items.guardianangel,
      items.jeweledgauntlet,
      items.statikkshiv
    ]
  },
  {
    id: 1003,
    teamName: "Redeemed Knights",
    unitArray: [
      units.nautilus,
      units.thresh,
      units.lux,
      units.rell,
      units.taric,
      { ...units.garen, carry: true },
      { ...units.kayle, carry: true },
      units.kindred
    ],
    itemArray: [
      items.dragonsclaw,
      items.ionicspark,
      items.sunfirecape,
      items.guinsoosrageblade,
      items.guardianangel,
      items.handofjustice
    ]
  },
  {
    id: 1003,
    teamName: "Revenant Assasins",
    unitArray: [
      units.khazix,
      units.leblanc,
      { ...units.katarina, carry: true },
      { ...units.nocturne, carry: true },
      units.diana,
      units.ivern,
      units.viego,
      units.volibear
    ],
    itemArray: [
      items.bluebuff,
      items.guardianangel,
      items.infinityedge,
      items.quicksilver,
      items.guinsoosrageblade,
      items.infinityedge
    ]
  },
  {
    id: 1003,
    teamName: "Revenant Invokers",
    unitArray: [
      units.syndra,
      units.ivern,
      units.karma,
      units.rell,
      units.garen,
      { ...units.heimerdinger, carry: true },
      { ...units.teemo, carry: true },
      units.volibear
    ],
    itemArray: [
      items.guinsoosrageblade,
      items.spearofshojin,
      items.jeweledgauntlet,
      items.guardianangel,
      items.jeweledgauntlet,
      items.statikkshiv
    ]
  }
];

export default compositions;
