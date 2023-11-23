"use client";

import React, { useState } from "react";
import {
  BUILDER_DETACHMENT_UNIT_UPGRADES,
  BUILDER_LIST,
  BUILDER_DETACHMENT_UNIT,
  SLOTSET,
  BUILDER_DETACHMENT_SLOT,
} from "@/app/types";
import { detachmentData } from "@/app/data/detachment_data";

const BuilderUnitUpgradeSelect = ({
  unitId,
  upgradeOption,
  setArmyList,
  slotSet,
  refId,
  slotRef,
}: {
  unitId: number;
  upgradeOption: BUILDER_DETACHMENT_UNIT_UPGRADES;
  setArmyList: React.Dispatch<React.SetStateAction<BUILDER_LIST>>;
  slotSet: SLOTSET;
  refId: string;
  slotRef: string;
}) => {
  const [selectState, setSelectState] = useState(upgradeOption);

  const detachmentUpgrades = detachmentData.find(
    (detachment) => detachment.id === unitId
  );

  if (!detachmentUpgrades) {
    return null;
  }

  const upgradeObject = detachmentUpgrades.upgrade_options?.find(
    (upgrade) => upgrade.name === upgradeOption.name
  );

  if (!upgradeObject) {
    return null;
  }

  const handleSelect = (id: number) => {};
  //   if (!id) {
  //     setSelectState((prev) => {
  //       return {
  //         ...prev,
  //         number: 0,
  //         cost: 0,
  //         size: 0,
  //       };
  //     });
  //     return;
  //   }

  // setSelectState((prev) => {
  //   return {
  //     ...prev,
  //     number: id,
  //     cost: upgradeObject.options.find((cost) => cost.number === id)!.cost,
  //     size: upgradeObject.options.find((size) => size.number === id)!.size,
  //   };
  // });
  // };

  // useEffect(() => {
  //   setSlotState((prev) => {
  //     const findUpgrade = prev.selected_unit!.upgrade_options.map((option) => {
  //       if (option.name === selectState.name) {
  //         return selectState;
  //       }
  //       return option;
  //     });
  //     return {
  //       ...prev,
  //       selected_unit: { ...prev.selected_unit!, upgrade_options: findUpgrade },
  //     };
  //   });
  // }, [selectState]);

  const newUpgradeObject = (
    upgradeId: number
  ): BUILDER_DETACHMENT_UNIT_UPGRADES => {
    if (upgradeId) {
      return {
        ...upgradeOption,
        number: upgradeId,
        cost: upgradeObject.options.find((cost) => cost.number === upgradeId)!
          .cost,
        size: upgradeObject.options.find((size) => size.number === upgradeId)!
          .size,
      };
    }
    return { ...upgradeOption, number: 0, cost: 0, size: 0 };
  };

  const updateSelectedUnit = (
    oldUnit: BUILDER_DETACHMENT_UNIT,
    newUpgrades: BUILDER_DETACHMENT_UNIT_UPGRADES
  ): BUILDER_DETACHMENT_UNIT => {
    const upgradeOptionsArray = oldUnit.upgrade_options.map((upgrade) => {
      if (upgrade.name === newUpgrades.name) {
        return newUpgrades;
      }
      return upgrade;
    });

    return { ...oldUnit, upgrade_options: upgradeOptionsArray };
  };

  const updateUpgradeSlotArray = (
    detachmentArray: BUILDER_DETACHMENT_SLOT[],
    newUpgrade: BUILDER_DETACHMENT_UNIT_UPGRADES
  ): BUILDER_DETACHMENT_SLOT[] => {
    const newArray = detachmentArray.map((detach) => {
      if (detach.slot_ref === slotRef) {
        return {
          ...detach,
          selected_unit: updateSelectedUnit(detach.selected_unit!, newUpgrade),
        };
      }
      return detach;
    });
    return newArray;
  };

  const updateUpgradeChoice = (upgradeId: number): void => {
    const newUpgrade = newUpgradeObject(upgradeId);

    setArmyList((prev) => {
      if (slotSet === SLOTSET.compulsory || slotSet === SLOTSET.optional) {
        const newArmyList = {
          ...prev,
          formations: prev.formations.map((form) => {
            if (form.ref_id === refId) {
              return {
                ...form,
                [slotSet]: form[slotSet]
                  ? updateUpgradeSlotArray(form[slotSet]!, newUpgrade)
                  : null,
              };
            }
            return form;
          }),
        };
        return newArmyList;
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-wrap">
      <select
        value={upgradeOption.number}
        onChange={(e) => {
          updateUpgradeChoice(Number(e.target.value));
        }}
        className="w-full text-center text-sm font-graduate p-1 rounded-full border border-green-950"
      >
        <option value="0">{upgradeOption.name}: none</option>
        {upgradeObject.options.map((upgrade, index) => (
          <option
            key={slotRef + "upgrade" + upgradeOption.name + index}
            value={upgrade.number}
          >
            {upgradeOption.name}: {upgrade.number}, {upgrade.cost}pts
          </option>
        ))}
      </select>
    </div>
  );
};

export default BuilderUnitUpgradeSelect;
