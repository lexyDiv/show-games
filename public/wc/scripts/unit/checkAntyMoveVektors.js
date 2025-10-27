/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkAntyMoveVektors = function (unit) {
  if (this.persolalNumber === unit.persolalNumber) {
    return 'her';
  }

  const vektor = unit.moveVektor;

  if (vektor === 'up') {
    if (
      this.moveVektor === 'down'
      || this.moveVektor === 'right_Down'
      || this.moveVektor === 'down_Left'
    ) {
      return 'anty';
    }
  } else if (vektor === 'up_Right') {
    if (
      this.moveVektor === 'down_Left'
      || this.moveVektor === 'down'
      || this.moveVektor === 'left'
    ) {
      return 'anty';
    }
  } else if (vektor === 'right') {
    if (
      this.moveVektor === 'left'
      || this.moveVektor === 'down_Left'
      || this.moveVektor === 'left_Up'
    ) {
      return 'anty';
    }
  } else if (vektor === 'right_Down') {
    if (
      this.moveVektor === 'left_Up'
      || this.moveVektor === 'left'
      || this.moveVektor === 'up'
    ) {
      return 'anty';
    }
  } else if (vektor === 'down') {
    if (
      this.moveVektor === 'up'
      || this.moveVektor === 'left_Up'
      || this.moveVektor === 'up_Right'
    ) {
      return 'anty';
    }
  } else if (vektor === 'down_Left') {
    if (
      this.moveVektor === 'up_Right'
      || this.moveVektor === 'up'
      || this.moveVektor === 'right'
    ) {
      return 'anty';
    }
  } else if (vektor === 'left') {
    if (
      this.moveVektor === 'right'
      || this.moveVektor === 'up_Right'
      || this.moveVektor === 'right_Down'
    ) {
      return 'anty';
    }
  } else if (vektor === 'left_Up') {
    if (
      this.moveVektor === 'right_Down'
      || this.moveVektor === 'down'
      || this.moveVektor === 'right'
    ) {
      return 'anty';
    }
  }

  return 'her';
};
