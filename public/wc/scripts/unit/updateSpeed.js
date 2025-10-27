/* eslint-disable consistent-return */
/* eslint-disable no-tabs */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-undef */

Unit.prototype.updateSpeed = function () {
  this.rightVSP = Math.sin((0 * Math.PI) / 180) * this.speed;
  this.rightGSP = Math.cos((0 * Math.PI) / 180) * this.speed;

  this.right_DownVSP = Math.sin((45 * Math.PI) / 180) * this.speed;
  this.right_DownGSP = Math.cos((45 * Math.PI) / 180) * this.speed;

  this.downVSP = Math.sin((90 * Math.PI) / 180) * this.speed;
  this.downGSP = Math.cos((90 * Math.PI) / 180) * this.speed;

  this.down_LeftVSP = Math.sin((135 * Math.PI) / 180) * this.speed;
  this.down_LeftGSP = Math.cos((135 * Math.PI) / 180) * this.speed;

  this.leftVSP = Math.sin((180 * Math.PI) / 180) * this.speed;
  this.leftGSP = Math.cos((180 * Math.PI) / 180) * this.speed;

  this.left_UpVSP = Math.sin((225 * Math.PI) / 180) * this.speed;
  this.left_UpGSP = Math.cos((225 * Math.PI) / 180) * this.speed;

  this.upVSP = Math.sin((270 * Math.PI) / 180) * this.speed;
  this.upGSP = Math.cos((270 * Math.PI) / 180) * this.speed;

  this.up_RightVSP = Math.sin((315 * Math.PI) / 180) * this.speed;
  this.up_RightGSP = Math.cos((315 * Math.PI) / 180) * this.speed;
};
