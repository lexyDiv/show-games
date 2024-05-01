/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkValideTarget = function () {
  if (!this.target) {
    return;
  }

  if (
    this.target.unitName === 'barack'
    || this.target.unitName === 'kuznya'
    || this.target.unitName === 'ogreBase'
    || this.target.unitName === 'altar'
    || this.target.unitName === 'port'
    || this.target.unitName === 'oil_Ref'
    || this.target.unitName === 'foundry'
    || this.target.unitName === 'dragon_roost'
    || this.target.unitName === 'temple'
  ) {
    if (
      this.target.hp <= 0
      || (this.target.hp >= this.target.hpfull
        && this.target.buildready >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  } if (this.target.unitName === 'lesopilka') {
    if (
      this.target.hp <= 0
      || (this.iGoBuild
        && this.target.buildready >= this.target.hpfull
        && this.target.hp >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  } if (this.target.unitName === 'wood') {
    if (
      this.target.lesorub
      && (this.target.lesorub.hp <= 0
        || !this.target.lesorub.cell
        || !this.target.lesorub.target
        || (this.target.lesorub.target
          && this.target.lesorub.target.persolalNumber
            !== this.target.persolalNumber))
    ) {
      this.target.lesorub = 0;
    }

    if (
      this.target.hp <= 0
      || this.target.lesorub
      || this.target.isBlocked(this.cell.unit)
    ) {
      return false;
    }

    return true;
  } if (this.target.unitName === 'shahta') {
    if (this.target.hp <= 0 || this.target.gold <= 0) {
      return false;
    }

    return true;
  } if (this.target.unitName === 'townHoll') {
    if (
      this.target.hp <= 0
      || (this.iGoBuild
        && this.target.buildready >= this.target.hpfull
        && this.target.hp >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  } if (
    this.target.unitName === 'farm'
    || this.target.unitName === 'tower'
  ) {
    if (
      this.target.hp <= 0
      || (this.target.hp >= this.target.hpfull
        && this.target.buildready >= this.target.hpfull)
    ) {
      return false;
    }

    return true;
  }
};
