/* eslint-disable func-names */
/* eslint-disable no-undef */
LandObj.prototype.check_gory = function () {
  let left;
  let right;

  this.animX = Math.floor(Math.random() * 5) * 200;

  if (
    !gameFielg[this.vertikal][this.horizont - 1]
      || gameFielg[this.vertikal][this.horizont - 1].gora
  ) {
    left = true;
  }

  if (
    !gameFielg[this.vertikal][this.horizont + 2]
      || gameFielg[this.vertikal][this.horizont + 2].gora
  ) {
    right = true;
  }

  if (
    !gameFielg[this.vertikal - 1][this.horizont]
      || gameFielg[this.vertikal - 1][this.horizont].gora
  ) {
    left = true;
  }

  if (
    !gameFielg[this.vertikal - 1][this.horizont + 1]
      || gameFielg[this.vertikal - 1][this.horizont + 1].gora
  ) {
    right = true;
  }

  if (!left && !right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_free.png`;
  } else if (left && right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_closed.png`;
  } else if (!left && right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_left_free.png`;
  } else if (left && !right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = `wc/grunt/${season}/gora_right_free.png`;
  }
};
