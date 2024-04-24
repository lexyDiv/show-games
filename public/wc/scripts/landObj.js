LandObj.prototype.check_steny = function () {
  let left = "n";
  let right = "n";
  let up = "n";
  let down = "n";

  let vert = this.cell.vertikal;
  let hor = this.cell.horizont;

  if (
    gameFielg[vert - 1] &&
    gameFielg[vert - 1][hor] &&
    gameFielg[vert - 1][hor].stena
  ) {
    up = "y";
  }
  if (
    gameFielg[vert + 1] &&
    gameFielg[vert + 1][hor] &&
    gameFielg[vert + 1][hor].stena
  ) {
    down = "y";
  }

  if (
    gameFielg[vert] &&
    gameFielg[vert][hor - 1] &&
    gameFielg[vert][hor - 1].stena
  ) {
    left = "y";
  }
  if (
    gameFielg[vert] &&
    gameFielg[vert][hor + 1] &&
    gameFielg[vert][hor + 1].stena
  ) {
    right = "y";
  }

  let vc;
  let hc;

  if (vert % 2 === 0) {
    vc = "chet";
  } else {
    vc = "nechet";
  }
  if (hor % 2 === 0) {
    hc = "chet/";
  } else {
    hc = "nechet/";
  }

  this.imageToDraw = new Image();
  this.imageToDraw.src =
    "wc/grunt/stena/" + vc + hc + left + right + up + down + ".png";
};

LandObj.prototype.check_gory = function () {
  let left;
  let right;

  this.animX = Math.floor(Math.random() * 5) * 200;

  if (
    !gameFielg[this.vertikal][this.horizont - 1] ||
    gameFielg[this.vertikal][this.horizont - 1].gora
  ) {
    left = true;
  }

  if (
    !gameFielg[this.vertikal][this.horizont + 2] ||
    gameFielg[this.vertikal][this.horizont + 2].gora
  ) {
    right = true;
  }

  if (
    !gameFielg[this.vertikal - 1][this.horizont] ||
    gameFielg[this.vertikal - 1][this.horizont].gora
  ) {
    left = true;
  }

  if (
    !gameFielg[this.vertikal - 1][this.horizont + 1] ||
    gameFielg[this.vertikal - 1][this.horizont + 1].gora
  ) {
    right = true;
  }

  if (!left && !right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = "wc/grunt/" + season + "/gora_free.png";
  } else if (left && right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = "wc/grunt/" + season + "/gora_closed.png";
  } else if (!left && right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = "wc/grunt/" + season + "/gora_left_free.png";
  } else if (left && !right) {
    this.imageToDraw = new Image();
    this.imageToDraw.src = "wc/grunt/" + season + "/gora_right_free.png";
  }
};
