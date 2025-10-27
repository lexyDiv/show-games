/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.checkGetTarget_sweeme = function () {
  const dis = get_distanse_on_lineyka(
    this.cell,
    100,
    this.target.cell,
    this.target.gabarit,
  );

  if (dis <= this.seeing && this.target.visible) {
    return true;
  }

  return false;
};
