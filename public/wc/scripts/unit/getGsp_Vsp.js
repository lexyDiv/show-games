/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.getGsp_Vsp = function () {
  const cell = this.way[this.way.length - 1];

  if (cell.vertikal === this.vertikal && cell.horizont === this.horizont + 1) {
    this.gSp = this.rightGSP;
    this.vSp = this.rightVSP;

    this.moveVektor = 'right';
  } else if (
    cell.vertikal === this.vertikal + 1
    && cell.horizont === this.horizont + 1
  ) {
    this.gSp = this.right_DownGSP;
    this.vSp = this.right_DownVSP;

    this.moveVektor = 'right_Down';
  } else if (
    cell.vertikal === this.vertikal + 1
    && cell.horizont === this.horizont
  ) {
    this.gSp = this.downGSP;
    this.vSp = this.downVSP;

    this.moveVektor = 'down';
  } else if (
    cell.vertikal === this.vertikal + 1
    && cell.horizont === this.horizont - 1
  ) {
    this.gSp = this.down_LeftGSP;
    this.vSp = this.down_LeftVSP;

    this.moveVektor = 'down_Left';
  } else if (
    cell.vertikal === this.vertikal
    && cell.horizont === this.horizont - 1
  ) {
    this.gSp = this.leftGSP;
    this.vSp = this.leftVSP;

    this.moveVektor = 'left';
  } else if (
    cell.vertikal === this.vertikal - 1
    && cell.horizont === this.horizont - 1
  ) {
    this.gSp = this.left_UpGSP;
    this.vSp = this.left_UpVSP;

    this.moveVektor = 'left_Up';
  } else if (
    cell.vertikal === this.vertikal - 1
    && cell.horizont === this.horizont
  ) {
    this.gSp = this.upGSP;
    this.vSp = this.upVSP;

    this.moveVektor = 'up';
  } else if (
    cell.vertikal === this.vertikal - 1
    && cell.horizont === this.horizont + 1
  ) {
    this.gSp = this.up_RightGSP;
    this.vSp = this.up_RightVSP;

    this.moveVektor = 'up_Right';
  }
};
