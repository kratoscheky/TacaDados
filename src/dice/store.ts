import create from "zustand";
import { immer } from "zustand/middleware/immer";
import { WritableDraft } from "immer/dist/types/types-external";

import { DiceRoll } from "../types/DiceRoll";
import { isDie } from "../types/Die";
import { isDice } from "../types/Dice";
import { getDieFromDice } from "../helpers/getDieFromDice";
import { DiceTransform } from "../types/DiceTransform";
import { getRandomDiceThrow } from "../helpers/getRandomDiceThrow";
import { generateDiceId } from "../helpers/generateDiceId";
import { DiceThrow } from "../types/DiceThrow";

interface DiceRollState {
  roll: DiceRoll | null;
  /**
   * A mapping from the die ID to its roll result.
   * A value of `null` means the die hasn't finished rolling yet.
   */
  rollValues: Record<string, number | null>;
  /**
   * A mapping from the die ID to its final roll transform.
   * A value of `null` means the die hasn't finished rolling yet.
   */
  rollTransforms: Record<string, DiceTransform | null>;
  /**
   * A mapping from the die ID to its initial roll throw state.
   */
  rollThrows: Record<string, DiceThrow>;
  startRoll: (roll: DiceRoll) => void;
  clearRoll: (ids?: string) => void;
  rerollAll: () => void;
  /** Reroll select ids of dice */
  reroll: (ids: string[]) => void;
  finishDieRoll: (id: string, number: number, transform: DiceTransform) => void;
}

export const useDiceRollStore = create<DiceRollState>()(
  immer((set, get) => ({
    roll: null,
    rollValues: {},
    rollTransforms: {},
    rollThrows: {},
    startRoll: (roll) =>
      set((state) => {
        state.roll = roll;
        state.rollValues = {};
        state.rollTransforms = {};
        state.rollThrows = {};
        // Set all values to null
        const dice = getDieFromDice(roll);
        for (const die of dice) {
          state.rollValues[die.id] = null;
          state.rollTransforms[die.id] = null;
          state.rollThrows[die.id] = getRandomDiceThrow();
        }
      }),
    clearRoll: () =>
      set((state) => {
        state.roll = null;
        state.rollValues = {};
        state.rollTransforms = {};
        state.rollThrows = {};
      }),
    rerollAll: () => {
      const roll = get().roll;
      if (roll) {
        set((state) => {
          state.roll = roll;
          state.rollValues = {};
          state.rollTransforms = {};
          state.rollThrows = {};
          const dice = getDieFromDice(roll);
          for (const die of dice) {
            state.rollValues[die.id] = null;
            state.rollTransforms[die.id] = null;
            state.rollThrows[die.id] = getRandomDiceThrow();
          }
        });
      }
    },
    reroll: (ids) => {
      set((state) => {
        if (state.roll) {
          rerollDraft(
            state.roll,
            ids,
            state.rollValues,
            state.rollTransforms,
            state.rollThrows
          );
        }
      });
    },
    finishDieRoll: (id, number, transform) => {
      set((state) => {
        state.rollValues[id] = number;
        state.rollTransforms[id] = transform;
      });
    },
  }))
);

/** Recursively update the ids of a draft to reroll dice */
function rerollDraft(
  diceRoll: WritableDraft<DiceRoll>,
  ids: string[],
  rollValues: WritableDraft<Record<string, number | null>>,
  rollTransforms: WritableDraft<Record<string, DiceTransform | null>>,
  rollThrows: WritableDraft<Record<string, DiceThrow>>
) {
  for (let dieOrDice of diceRoll.dice) {
    if (isDie(dieOrDice)) {
      if (ids.includes(dieOrDice.id)) {
        delete rollValues[dieOrDice.id];
        delete rollTransforms[dieOrDice.id];
        delete rollThrows[dieOrDice.id];
        const id = generateDiceId();
        dieOrDice.id = id;
        rollValues[id] = null;
        rollTransforms[id] = null;
        rollThrows[id] = getRandomDiceThrow();
      }
    } else if (isDice(dieOrDice)) {
      rerollDraft(dieOrDice, ids, rollValues, rollTransforms, rollThrows);
    }
  }
}
