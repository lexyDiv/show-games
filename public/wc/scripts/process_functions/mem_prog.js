/* eslint-disable no-constant-condition */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

const mem_prog = function (kc) {
  if (!player) {
    return;
  }

  if (kc >= 49 && kc <= 57) {
    const ind = Math.abs(49 - kc);

    if (mem_active && all_units && all_units.length) {
      for (let i = 0; i < mem[ind].length; i++) {
        mem[ind][i].ind = false;
      }

      mem[ind] = [];

      for (let i = 0; i < all_units.length; i++) {
        const u = all_units[i];

        if (u.ind !== ind) {
          if (u.ind || u.ind === 0) {
            mem[u.ind].splice(mem[u.ind].indexOf(u), 1);
          }
        }
      }

      for (let i = 0; i < all_units.length; i++) {
        const u = all_units[i];

        u.ind = ind;

        mem[u.ind].push(u);
      }
    } else {
      all_units = [];
      player.selectUnits = [];
      player.selectDragons = [];
      player.selectBuildings = [];
      player.selectIsSweem = [];

      mem_hz = { ind, timer: 1 };
      // console.log(mem[ind])
      /*
  for(let i=0;i<mem[ind].length;i++){

  let u=mem[ind][i];

  if(u.hp<=0){
      mem[ind].splice(i,1);
  }
  else{

  if(u.cell){
  if(u.gabarit===50){
      player.selectUnits.push(u);

  }
  else if(u.fly){
      player.selectDragons.push(u);
  }
  else if(u.sweeme){
      player.selectIsSweem.push(u);
  }
  else if(u.unitStatus!=="life"){
       player.selectBuildings.push(u);
  };

  //all_units.push(u);

  };

  };
  };
  */
    }
  }
};
