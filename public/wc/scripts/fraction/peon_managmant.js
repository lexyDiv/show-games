/* eslint-disable no-lonely-if */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.peon_managmant = function (prioritetToDo) {
  let on_gold;
  let on_wood;

  let koof = 2;

  if (this.gold > 10000) {
    if (prioritetToDo === 'wood') {
      koof = 3;
    } else if (prioritetToDo === 'gold') {
      koof = 1.5;
    }
  } else {
    koof = 1.5;
  }

  if (this.batraks.length > 1) {
    if (
      allContinents[this.continent].shahts.length
        && allContinents[this.continent].woods.length
    ) {
      on_gold = Math.floor(this.batraks.length / koof);
      on_wood = this.batraks.length - on_gold;

      if (!this.woods_ok) {
        on_wood = 0;
        on_gold = this.batraks.length;
      }
    } else if (
      allContinents[this.continent].shahts.length
        && (!allContinents[this.continent].woods.length || !this.woods_ok)
    ) {
      on_gold = this.batraks.length;
      on_wood = 0;
    } else if (
      !allContinents[this.continent].shahts.length
        && allContinents[this.continent].woods.length
    ) {
      on_gold = 0;
      on_wood = this.batraks.length;

      if (!this.woods_ok) {
        on_wood = 0;
      }
    } else if (
      !allContinents[this.continent].shahts.length
        && (!allContinents[this.continent].woods.length || !this.woods_ok)
    ) {
      return;
    }
  } else if (prioritetToDo === 'gold') {
    on_gold = 1;
    on_wood = 0;
  } else if (prioritetToDo === 'wood') {
    on_gold = 0;
    on_wood = 1;
  }

  // console.log(on_gold)

  /*
    console.log("batraks : "+this.batraks.length);
    console.log("gold : "+on_gold);
    console.log("wood : "+on_wood);
    console.log("!!!!!!!!!!!!!!!!!!!!");
    */

  for (let i = 0; i < this.batraks.length; i++) {
    const obj = this.batraks[i];

    if (on_gold > this.batraksOnGolg.length && obj.ii_personalFree) {
      this.batraksOnGolg.push(obj);
      obj.ii_personalFree = false;
      // console.log("in");
    } else if (on_wood > this.batraksOnWood.length && obj.ii_personalFree) {
      this.batraksOnWood.push(obj);
      obj.ii_personalFree = false;
      // console.log("in 2");
    }
  }

  /*
    for(let i=0;i<this.freeBatraks.length;i++){

    let obj=this.freeBatraks[i];

    obj.active=false;

    };
    */

  for (let i = 0; i < this.batraksOnGolg.length; i++) {
    const obj = this.batraksOnGolg[i];

    if (
      !obj
        || obj.hp <= 0
        || obj.katastrofa
        || (this.batraksOnGolg.length > on_gold
          && !obj.gold
          // &&
          // obj.myJoube==="shahter"
          && !obj.iGoBuild
          && obj.workTimeSahta === 100
          && obj.waitTime === 30
          && obj.cell)
    ) {
      this.batraksOnGolg.splice(i, 1);
      i--;
      if (obj) {
        obj.ii_personalFree = true;
        obj.target = 0;
        obj.way = [];
        obj.iGetTarget = false;
      }
    } else if (
      obj.workTimeSahta === 100
          && obj.waitTime === 30
          && obj.cell
          && !obj.active
          && !obj.target
          && !this.nar
    ) {
      if (!obj.gold) {
        obj.target = getMinDistanse(
          obj,
          allContinents[this.continent].shahts,
        );
      } else {
        obj.target = getMinDistanse(obj, this.townHolls);
      }

      // console.log("here");

      obj.myJoube = 'shahter';

      this.activeUnits.push(obj);
      obj.active = true;
    }
  }

  for (let i = 0; i < this.batraksOnWood.length; i++) {
    const obj = this.batraksOnWood[i];

    if (
      !obj
        || obj.hp <= 0
        || obj.katastrofa
        || (this.batraksOnWood.length > on_wood
          && !obj.wood
          && !obj.iGetTarget
          // &&
          // obj.myJoube==="shahter"
          // &&
          //! obj.iGoBuild

          && !obj.iGoBuild
          && obj.workTimeSahta === 100
          && obj.waitTime === 30
          && obj.cell)
    ) {
      this.batraksOnWood.splice(i, 1);
      i--;
      if (obj) {
        obj.ii_personalFree = true;
        obj.target = 0;
        obj.way = [];
        obj.iGetTarget = false;
      }
      // console.log("out");
    } else {
      // console.log(obj.persolalNumber);

      if (
        obj.workTimeSahta === 100
          && obj.waitTime === 30
          && obj.cell
          && !obj.active
          && !obj.target
          && !this.nar
      ) {
        // go++;

        obj.target = getMinDistanse(obj, allContinents[this.continent].woods);

        obj.myJoube = 'lesorub';

        this.activeUnits.push(obj);
        obj.active = true;
      }
    }
  }
};
