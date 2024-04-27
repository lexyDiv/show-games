/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */
Fraction.prototype.strike_control = function () {
  // if(this.fraction==="redOrcs"){console.log(this.ii_warriors_on_strike.length);};

  for (let i = 0; i < this.ii_warriors_on_strike.length; i++) {
    const obj = this.ii_warriors_on_strike[i].unit;

    if (!obj || obj.hp <= 0) {
      this.ii_warriors_on_strike.splice(i, 1);
      i--;
    }
  }

  if (this.ii_warriors_on_strike.length) {
    const obj = this.ii_warriors_on_strike[0];

    if (
      obj.target
        && obj.target.hp > 0
        && obj.target.cell
        && (obj.target.type !== 'mag'
          || obj.target.fatherFraction.control === 'player')
    ) {
      obj.unit.clickSave = new ClickSave(obj.target, 0);
    } else {
      obj.unit.clickSave = new ClickSave(0, obj.cell);
    }

    if (!obj.unit.active) {
      this.activeUnits.push(obj.unit);
      obj.unit.active = true;
    }

    obj.unit.ii_strike = false;

    this.ii_warriors_on_strike.shift();

    // console.log(obj.unit.unitName);
  }
};
