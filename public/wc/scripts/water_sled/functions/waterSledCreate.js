/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

water_sled_create = function (father) {
  // let vertikal=father.y/50;
  // let horizont=(father.x+50)/50;

  let gabarit = 100;

  if (father.type === 'turtle') {
    gabarit = 1;
  }

  const { cell } = father; // gameFielg[vertikal][horizont];
  // type,cell,conor,x,y

  const obj = new Water_sled(
    1,
    cell,
    Math.atan2(father.vSp, father.gSp),
    father.x + 50,
    father.y,
    gabarit,
  );

  obj.father = father;

  water_sleds.push(obj);

  cell.water_sleds.push(obj);

  obj.alf = 1;
};
