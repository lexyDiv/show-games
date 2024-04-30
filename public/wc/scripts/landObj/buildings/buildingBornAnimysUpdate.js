/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const buildingBornAnimysUpdate = function (b, nation) {
  if (nation.fatherFraction.control === 'player') {
    // console.log(nation.clickSave);
    b = nation.clickSave.handTarget;
  }

  for (let ver = b.vertikal - 12; ver <= b.vertikal + 12; ver++) {
    for (let hor = b.horizont - 12; hor <= b.horizont + 12; hor++) {
      if (gameFielg[ver] && gameFielg[ver][hor]) {
        if (
          gameFielg[ver][hor].dragoon
            && gameFielg[ver][hor].dragoon.fatherFraction.union
              !== b.fatherFraction.union
            && (gameFielg[ver][hor].dragoon.fatherFraction.control === 'comp'
              || b.unitName === 'tower')
        ) {
          if (gameFielg[ver][hor].dragoon.animys.indexOf(b) === -1) {
            gameFielg[ver][hor].dragoon.animys.push(b);
          }

          if (
            gameFielg[ver][hor].dragoon.fatherFraction.activeUnits.indexOf(
              gameFielg[ver][hor].dragoon,
            ) === -1
          ) {
            gameFielg[ver][hor].dragoon.fatherFraction.activeUnits.push(
              gameFielg[ver][hor].dragoon,
            );
          }
        }

        if (
          gameFielg[ver][hor].unit
            && !gameFielg[ver][hor].unit.neitral
            && gameFielg[ver][hor].unit.unitStatus === 'life'
            && gameFielg[ver][hor].unit.warrior
            && b.fatherFraction
            && gameFielg[ver][hor].unit.fatherFraction.union
              !== b.fatherFraction.union
            && (b.unitName === 'tower'
              || gameFielg[ver][hor].unit.fatherFraction.control === 'comp')
            && (b.unitName !== 'oil_platform'
              || gameFielg[ver][hor].unit.iCanGetSweem)
        ) {
          if (gameFielg[ver][hor].unit.animys.indexOf(b) === -1) {
            gameFielg[ver][hor].unit.animys.push(b);
          }

          if (!gameFielg[ver][hor].unit.active) {
            gameFielg[ver][hor].unit.fatherFraction.activeUnits.push(
              gameFielg[ver][hor].unit,
            );
            gameFielg[ver][hor].unit.active = true;
          }
        }
      }
    }
  }
};
