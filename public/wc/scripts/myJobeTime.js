/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */
/* eslint-disable no-undef */

const myJoube_time = function (arg) {
  if (arg === "mag") {
    return 1000;
  } else if (arg === "dragoon") {
    return 2000;
  } else if (arg === "turtle") {
    return 500;
  } else if (arg === "linkor") {
    return 1000;
  } else if (arg === "transport") {
    return 500;
  } else if (arg === "rizar") {
    return 500;
  } else if (arg === "ballista") {
    return 500;
  } else if (arg === "towerOnUpgrade") {
    return 500;
  } else if (arg === "luchnik") {
    return 250;
  } else if (arg === "mechnick") {
    return 250;
  } else if (arg === "distroer") {
    return 500;
  } else if (arg === "oil_tanker") {
    return 300;
  } else if (arg === "batrak") {
    return 100;
  } else if (arg === "dopFlyAttack_level") {
    return 1500;
  } else if (arg === "dopFlySee_level") {
    return 1500;
  } else if (arg === "levelUpgrade") {
    return 1500;
  } else if (
    arg === "dopNoFlyAttack_level"
    || arg === "dopNoFlyPanzer_level"
    || arg === "dopBallista"
    || arg === "dopAttack"
  ) {
    return 1500;
  }
  // dopNoFlyAttack_level
};
