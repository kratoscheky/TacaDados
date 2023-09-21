import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";

import * as galaxyPreviews from "../previews/galaxy";
import * as gemstonePreviews from "../previews/gemstone";
import * as glassPreviews from "../previews/glass";
import * as ironPreviews from "../previews/iron";
import * as nebulaPreviews from "../previews/nebula";
import * as sunrisePreviews from "../previews/sunrise";
import * as sunsetPreviews from "../previews/sunset";
import * as walnutPreviews from "../previews/walnut";

import allPreview from "../previews/all.png";

const standardPreviews: Record<DiceStyle, string> = {
  GALAXY: galaxyPreviews.D20,
  GEMSTONE: gemstonePreviews.D20,
  GLASS: glassPreviews.D20,
  IRON: ironPreviews.D20,
  NEBULA: nebulaPreviews.D20,
  SUNRISE: sunrisePreviews.D20,
  SUNSET: sunsetPreviews.D20,
  WALNUT: walnutPreviews.D20,
};

function createStandardSet(style: DiceStyle): DiceSet {
  const id = `${style}_STANDARD`;
  return {
    id,
    name: `${style.toLowerCase()} dice`,
    dice: [
      { id: `${id}_D6`, type: "D6", style },
    ],
    previewImage: standardPreviews[style],
  };
}

const standardSets = [
  createStandardSet("GALAXY"),
  createStandardSet("GEMSTONE"),
  createStandardSet("GLASS"),
  createStandardSet("IRON")
];

const allSet: DiceSet = {
  id: "all",
  name: "all",
  dice: standardSets.reduce(
    (prev, curr) => [...prev, ...curr.dice],
    [] as Die[]
  ),
  previewImage: allPreview,
};

export const diceSets: DiceSet[] = [allSet];
