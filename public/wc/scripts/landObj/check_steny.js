/* eslint-disable func-names */

/* eslint-disable no-undef */

LandObj.prototype.check_steny = function () {
  let left = 'n';
  let right = 'n';
  let up = 'n';
  let down = 'n';

  const vert = this.cell.vertikal;
  const hor = this.cell.horizont;

  if (
    gameFielg[vert - 1]
      && gameFielg[vert - 1][hor]
      && gameFielg[vert - 1][hor].stena
  ) {
    up = 'y';
  }
  if (
    gameFielg[vert + 1]
      && gameFielg[vert + 1][hor]
      && gameFielg[vert + 1][hor].stena
  ) {
    down = 'y';
  }

  if (
    gameFielg[vert]
      && gameFielg[vert][hor - 1]
      && gameFielg[vert][hor - 1].stena
  ) {
    left = 'y';
  }
  if (
    gameFielg[vert]
      && gameFielg[vert][hor + 1]
      && gameFielg[vert][hor + 1].stena
  ) {
    right = 'y';
  }

  let vc;
  let hc;

  if (vert % 2 === 0) {
    vc = 'chet';
  } else {
    vc = 'nechet';
  }
  if (hor % 2 === 0) {
    hc = 'chet/';
  } else {
    hc = 'nechet/';
  }

  this.imageToDraw = new Image();
  this.imageToDraw.src = `grunt/stena/${vc}${hc}${left}${right}${up}${down}.png`;
};
